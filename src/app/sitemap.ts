import type { MetadataRoute } from 'next'

const staticPages = [
  { url: '', priority: 1.0 },
  { url: '/about', priority: 0.8 },
  { url: '/expertise', priority: 0.8 },
  { url: '/projects', priority: 0.7 },
  { url: '/publications', priority: 0.7 },
  { url: '/news', priority: 0.7 },
  { url: '/jobs', priority: 0.6 },
  { url: '/team', priority: 0.6 },
  { url: '/contact', priority: 0.5 },
  { url: '/volunteer', priority: 0.5 },
  { url: '/story-maps', priority: 0.4 },
  { url: '/videos', priority: 0.4 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { prisma } = await import('@/lib/prisma')

  const posts = await prisma.blogPost.findMany({ where: { isPublished: true }, select: { slug: true, updatedAt: true } })
  const publications = await prisma.publication.findMany({ where: { isPublished: true }, select: { slug: true, updatedAt: true } })
  const jobs = await prisma.jobPosting.findMany({ where: { isActive: true }, select: { slug: true, updatedAt: true } })

  const entries: MetadataRoute.Sitemap = [
    ...staticPages.map(p => ({
      url: `https://henmpoano.org${p.url}`,
      lastModified: new Date(),
      changeFrequency: p.url === '' ? 'weekly' as const : 'monthly' as const,
      priority: p.priority,
    })),
    ...posts.map(p => ({
      url: `https://henmpoano.org/news/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...publications.map(p => ({
      url: `https://henmpoano.org/publications/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...jobs.map(p => ({
      url: `https://henmpoano.org/jobs/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })),
  ]

  return entries
}
