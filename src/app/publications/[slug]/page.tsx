import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FileText } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { prisma } = await import('@/lib/prisma')
  const { slug } = await params
  const pub = await prisma.publication.findUnique({ where: { slug } })
  if (!pub) return { title: 'Not Found' }
  return { title: pub.title, description: pub.description }
}

export default async function PublicationPage({ params }: Props) {
  const { prisma } = await import('@/lib/prisma')
  const { slug } = await params
  const pub = await prisma.publication.findUnique({ where: { slug } })
  if (!pub || !pub.isPublished) notFound()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link href="/publications" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: 'var(--spacing-md)', display: 'inline-block' }}>← Back to Publications</Link>
          <h1>{pub.title}</h1>
          <p>{pub.category} · {new Date(pub.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xl)' }}>{pub.description}</p>
          {pub.fileUrl && (
            <a href={pub.fileUrl} target="_blank" rel="noopener noreferrer" className="btn btn-teal" style={{ marginBottom: 'var(--spacing-lg)' }}>
              <FileText size={18} style={{ verticalAlign: 'middle', marginRight: 8 }} /> Download Publication
            </a>
          )}
        </div>
      </section>
    </>
  )
}
