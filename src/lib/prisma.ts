import 'dotenv/config'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import { PrismaClient } from '@/generated/prisma/client'

const url = process.env.DATABASE_URL ?? 'file:./prisma/dev.db'
const config: { url: string; authToken?: string } = { url }
if (process.env.TURSO_AUTH_TOKEN) config.authToken = process.env.TURSO_AUTH_TOKEN
const adapter = new PrismaLibSql(config)

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined }

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
