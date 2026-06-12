import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { prisma } = await import('@/lib/prisma')
  const { slug } = await params
  const post = await prisma.blogPost.findUnique({ where: { slug } })
  if (!post) return { title: 'Not Found' }
  return { title: post.title, description: post.excerpt }
}

export default async function NewsPostPage({ params }: Props) {
  const { prisma } = await import('@/lib/prisma')
  const { slug } = await params
  const post = await prisma.blogPost.findUnique({ where: { slug } })
  if (!post || !post.isPublished) notFound()

  const articleUrl = `https://henmpoano.org/news/${post.slug}`
  const authorName = 'Hɛn Mpoano'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            author: { '@type': 'Organization', name: authorName },
            publisher: { '@type': 'Organization', name: 'Hɛn Mpoano' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
          }),
        }}
      />
      <section className="page-hero">
        <div className="container">
          <Link href="/news" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: 'var(--spacing-md)', display: 'inline-block' }}>← Back to News</Link>
          <div className="hero-tagline">{post.category}</div>
          <h1>{post.title}</h1>
          <p>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--spacing-xl)' }}
            />
          )}
          <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-600)' }}>
            {post.content.split('\n').map((line, i) => <p key={i} style={{ marginBottom: 'var(--spacing-md)' }}>{line}</p>)}
          </div>
        </div>
      </section>
    </>
  )
}
