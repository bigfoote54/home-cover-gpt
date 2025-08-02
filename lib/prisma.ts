import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

let prisma: PrismaClient

try {
  prisma = globalForPrisma.prisma ?? new PrismaClient()
} catch (error) {
  console.warn('Prisma client initialization failed:', error)
  // Create a mock client for build-time safety
  prisma = {
    analysis: {
      findUnique: async () => null,
      findMany: async () => [],
      create: async () => ({ id: '', shareSlug: '' }),
    },
    user: {
      findUnique: async () => null,
      findMany: async () => [],
      create: async () => ({ id: '', email: '' }),
    },
  } as any
}

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export { prisma }