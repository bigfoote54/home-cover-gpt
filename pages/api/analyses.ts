import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { prisma } from '../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const session = await getSession({ req })

    if (!session?.user?.id) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const analyses = await prisma.analysis.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    res.status(200).json({ analyses })
  } catch (error) {
    console.error('Error fetching analyses:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}