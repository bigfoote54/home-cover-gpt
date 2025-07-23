// pages/api/parse.ts
import { IncomingForm } from 'formidable';
import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = new IncomingForm({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parse error:', err);
      return res.status(500).json({ error: 'File upload failed' });
    }

    try {
      const file = Array.isArray(files.file) ? files.file[0] : files.file;

      if (!file || !file.filepath) {
        throw new Error('No file path found in upload');
      }

      const data = fs.readFileSync(file.filepath, { encoding: 'utf-8' });

      const parsedText = data.slice(0, 1000); // TODO: replace with real parser if needed
      res.status(200).json({ text: parsedText });
    } catch (e) {
      console.error('Parse error:', e);
      res.status(500).json({ error: 'Could not read uploaded file' });
    }
  });
}
