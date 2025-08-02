// pages/api/analyze.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { analyzePolicy } from '../../lib/openai';
import { prisma } from '../../lib/prisma';
import crypto from 'crypto';

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
    // Get user session
    const session = await getSession({ req });
    const userId = session?.user?.id;

    // Create input hash for deduplication
    const inputHash = crypto.createHash('sha256').update(text).digest('hex');

    // Check if this analysis already exists
    const existingAnalysis = await prisma.analysis.findUnique({
      where: { inputHash },
    });

    if (existingAnalysis) {
      return res.status(200).json({ 
        data: JSON.parse(existingAnalysis.resultJson),
        analysisId: existingAnalysis.id,
        shareSlug: existingAnalysis.shareSlug,
      });
    }

    // Perform analysis
    const analysisResult = await analyzePolicy(text);

    // Save to database if user is authenticated
    let analysisId = null;
    let shareSlug = null;

    if (userId) {
      const analysis = await prisma.analysis.create({
        data: {
          userId,
          inputHash,
          resultJson: JSON.stringify(analysisResult),
        },
      });
      analysisId = analysis.id;
      shareSlug = analysis.shareSlug;
    }

    return res.status(200).json({ 
      data: analysisResult,
      analysisId,
      shareSlug,
    });
  } catch (err) {
    console.error('❌ analyze.ts error:', err);
    return res.status(500).json({ error: 'Analysis failed.' });
  }
}
