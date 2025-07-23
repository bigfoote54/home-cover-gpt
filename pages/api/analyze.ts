import type { NextApiRequest, NextApiResponse } from 'next';
import openai from '../../lib/openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'No text provided for analysis.' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You are a homeowners insurance policy expert. Your job is to review and explain policies in clear and concise language for consumers.',
        },
        {
          role: 'user',
          content: `Please analyze the following policy text:\n\n${text}`,
        },
      ],
    });

    const analysis = completion.choices[0]?.message?.content;

    if (!analysis) {
      throw new Error('No response from OpenAI.');
    }

    res.status(200).json({ analysis });
  } catch (err: any) {
    console.error('Analysis error:', err);
    res.status(500).json({ error: 'Analysis failed. Check server logs for details.' });
  }
}
