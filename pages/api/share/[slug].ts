import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { slug } = req.query

    if (!slug || typeof slug !== 'string') {
      return res.status(400).json({ message: 'Invalid slug' })
    }

    const analysis = await prisma.analysis.findUnique({
      where: {
        shareSlug: slug,
      },
    })

    if (!analysis) {
      return res.status(404).json({ message: 'Analysis not found' })
    }

    return res.status(200).json({
      analysis: {
        id: analysis.id,
        createdAt: analysis.createdAt.toISOString(),
        resultJson: analysis.resultJson,
        shareSlug: analysis.shareSlug,
      },
    })
  } catch (error) {
    console.error('Error fetching shared analysis:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}