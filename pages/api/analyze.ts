// pages/api/analyze.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { callOpenAI } from '../../lib/openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { text } = req.body;
  if (typeof text !== 'string' || text.trim().length === 0) {
    return res.status(400).json({ error: 'No text provided for analysis.' });
  }

  // Validate text length to prevent issues with OpenAI API
  if (text.length > 100000) {
    return res.status(400).json({ error: 'Text is too long for analysis. Please upload a smaller document.' });
  }

  try {
    // craft your system + user prompt however you like
    const prompt = `
You are a homeowners insurance policy expert.
Please review and explain the following policy text in clear,
consumer-friendly language:

${text}
    `.trim();

    const analysis = await callOpenAI(prompt);
    return res.status(200).json({ analysis });
  } catch (err) {
    console.error('❌ analyze.ts error:', err);
    return res.status(500).json({ error: 'Analysis failed.' });
  }
}
