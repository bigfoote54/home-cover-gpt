import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { prisma } from '../../lib/prisma'
import { createClient } from '../../lib/supabase-server'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Try NextAuth session first
    let session = await getSession({ req })
    let userId = session?.user?.id

    // If no NextAuth session, try Supabase
    if (!userId) {
      const supabase = createClient()
      const { data: { user }, error } = await supabase.auth.getUser()
      
      if (user && !error) {
        // Check if user exists in our database
        let dbUser = await prisma.user.findUnique({
          where: { email: user.email },
        })

        // Create user if doesn't exist
        if (!dbUser) {
          dbUser = await prisma.user.create({
            data: {
              email: user.email!,
              id: user.id,
            },
          })
        }

        userId = dbUser.id
      }
    }

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const analyses = await prisma.analysis.findMany({
      where: {
        userId,
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