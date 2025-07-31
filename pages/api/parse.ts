// pages/api/parse.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import pdfParse from 'pdf-parse';
import { z } from 'zod';
import { AnalysisResult } from '../../shared/types';
import { analyzePolicy } from '../../lib/openai';

export const config = {
  api: {
    bodyParser: false,  // disable Next's built‑in parser so formidable can take over
  },
};

// Zod schema for file validation
const fileValidationSchema = z.object({
  filepath: z.string(),
  mimetype: z.string().refine(
    (mime) => mime === 'application/pdf',
    { message: 'Only PDF files are allowed' }
  ),
  size: z.number().max(5 * 1024 * 1024, 'File size must be less than 5MB'),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // wrap form.parse in a Promise so we can await it
    const { fields, files } = await new Promise<{
      fields: formidable.Fields;
      files: formidable.Files;
    }>((resolve, reject) => {
      const form = formidable({
        multiples: false,
        keepExtensions: true,
        maxFileSize: 5 * 1024 * 1024, // 5MB limit
      });
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    // grab the uploaded file (your <input name="file" />)
    const uploaded = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!uploaded) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    // Validate the uploaded file using Zod
    try {
      fileValidationSchema.parse({
        filepath: uploaded.filepath,
        mimetype: uploaded.mimetype || '',
        size: uploaded.size || 0,
      });
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        return res.status(400).json({ 
          error: `File validation failed: ${validationError.errors.map(e => e.message).join(', ')}` 
        });
      }
      return res.status(400).json({ error: 'File validation failed' });
    }

    // read it off disk and extract text
    const buffer = await fs.promises.readFile(uploaded.filepath);
    const { text } = await pdfParse(buffer);

    // Clean up the temporary file
    try {
      await fs.promises.unlink(uploaded.filepath);
    } catch (cleanupErr) {
      console.warn('Failed to cleanup temporary file:', cleanupErr);
    }

    // Analyze the policy text and return structured result
    const analysisResult = await analyzePolicy(text);
    
    return res.status(200).json({ data: analysisResult });
  } catch (err) {
    console.error('❌ parse.ts error:', err);
    return res.status(500).json({ error: 'Failed to parse PDF.' });
  }
}
