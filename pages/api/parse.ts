// pages/api/parse.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import pdfParse from 'pdf-parse';

export const config = {
  api: {
<<<<<<< HEAD
    bodyParser: false,  // disable Next's built‑in parser so formidable can take over
=======
    bodyParser: false,  // disable Next’s built‑in parser so formidable can take over
>>>>>>> origin/main
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let uploadedFilePath: string | null = null;
  try {
    // wrap form.parse in a Promise so we can await it
    const { fields, files } = await new Promise<{
      fields: formidable.Fields;
      files: formidable.Files;
    }>((resolve, reject) => {
      const form = formidable({
        multiples: false,
        keepExtensions: true,
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

    uploadedFilePath = uploaded.filepath;
    // read it off disk and extract text
    const buffer = await fs.promises.readFile(uploaded.filepath);
    const { text } = await pdfParse(buffer);
    return res.status(200).json({ text });
  } catch (err) {
    console.error('❌ parse.ts error:', err);
    return res.status(500).json({ error: 'Failed to parse PDF.' });
  } finally {
    // Clean up the uploaded file to prevent disk space issues
    if (uploadedFilePath) {
      try {
        await fs.promises.unlink(uploadedFilePath);
      } catch (cleanupErr) {
        console.warn('⚠️ Failed to clean up uploaded file:', cleanupErr);
      }
    }
  }
}
