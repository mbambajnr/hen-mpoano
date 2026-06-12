import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const publication = await prisma.publication.findUnique({ where: { id } })
  if (!publication) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(publication)
}
