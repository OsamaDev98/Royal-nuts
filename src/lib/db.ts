/* eslint-disable @typescript-eslint/no-explicit-any */
// db.ts — Prisma v7 compatible, fully resilient
// Uses dynamic require() so a missing/ungenerated @prisma/client
// never crashes the module at import time.

const globalForPrisma = globalThis as unknown as { prisma: unknown };

function createPrismaClient(): unknown | null {
  const url = process.env.DATABASE_URL;

  // Return null immediately for missing or placeholder URLs
  if (
    !url ||
    url.includes('johndoe') ||
    url.includes('localhost:5432/mydb')
  ) {
    return null;
  }

  try {
    // Dynamic require so a missing generated client doesn't crash the import
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { PrismaClient } = require('@prisma/client');
    return new PrismaClient();
  } catch (err) {
    console.warn('[db] PrismaClient unavailable:', (err as Error).message);
    return null;
  }
}

export const db: any =
  globalForPrisma.prisma !== undefined
    ? globalForPrisma.prisma
    : createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
}
