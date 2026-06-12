import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const faq = await prisma.fAQ.findUnique({ where: { id } })
  if (!faq) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(faq)
}
