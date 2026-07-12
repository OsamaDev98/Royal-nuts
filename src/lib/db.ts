import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | null };

function createPrismaClient(): PrismaClient | null {
  const url = process.env.DATABASE_URL;

  // Skip DB entirely when no URL or using the default placeholder
  if (
    !url ||
    url.includes('johndoe') ||
    url.includes('localhost:5432/mydb')
  ) {
    return null;
  }

  try {
    // Prisma v7: PrismaClient reads DATABASE_URL from env automatically.
    // No datasourceUrl option exists in v7 — Next.js loads .env for us.
    return new PrismaClient();
  } catch (err) {
    console.warn('[db] PrismaClient init failed:', err);
    return null;
  }
}

export const db: PrismaClient | null =
  globalForPrisma.prisma !== undefined
    ? globalForPrisma.prisma
    : createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
}
