import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { prisma } = await import('@/lib/prisma')
    const { slug } = await params
    const job = await prisma.jobPosting.findUnique({ where: { slug } })
    if (!job) return { title: 'Not Found' }
    return { title: `${job.title} — Jobs`, description: job.description }
  } catch {
    return { title: 'Job Details' }
  }
}

export default async function JobDetailPage({ params }: Props) {
  let job
  try {
    const { prisma } = await import('@/lib/prisma')
    const { slug } = await params
    job = await prisma.jobPosting.findUnique({ where: { slug } })
  } catch {
    job = null
  }

  if (!job || !job.isActive) notFound()

  const isExpired = job.deadline && new Date(job.deadline) < new Date()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link href="/jobs" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: 'var(--spacing-md)', display: 'inline-block' }}>← Back to Jobs</Link>
          <div className="hero-tagline">{job.department}</div>
          <h1>{job.title}</h1>
          <p>{job.type} · {job.location}</p>
          {job.deadline && (
            <p style={{ opacity: 0.8, fontSize: '0.9rem', marginTop: 'var(--spacing-sm)' }}>
              {isExpired ? '⤑ Applications closed' : `📅 Apply by ${new Date(job.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}
            </p>
          )}
        </div>
      </section>

      <section className="section section-light">
        <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Job Description</h2>
          <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-600)' }}>
            {job.description.split('\n').map((line, i) => <p key={i} style={{ marginBottom: 'var(--spacing-md)' }}>{line}</p>)}
          </div>

          {job.requirements && (
            <>
              <h2 className="section-title" style={{ fontSize: '1.5rem', marginTop: 'var(--spacing-2xl)' }}>Requirements</h2>
              <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-600)' }}>
                {job.requirements.split('\n').map((line, i) => <p key={i} style={{ marginBottom: 'var(--spacing-md)' }}>{line}</p>)}
              </div>
            </>
          )}

          {!isExpired && (
            <div style={{ marginTop: 'var(--spacing-2xl)', padding: 'var(--spacing-xl)', background: 'var(--color-teal-50)', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: 'var(--spacing-sm)' }}>How to Apply</h3>
              {job.howToApply ? (
                <p style={{ color: 'var(--color-gray-600)' }}>Send your application to <a href={`mailto:${job.howToApply}`} style={{ fontWeight: 600 }}>{job.howToApply}</a></p>
              ) : (
                <p style={{ color: 'var(--color-gray-600)' }}>Send your CV and cover letter to <a href="mailto:info@henmpoano.org" style={{ fontWeight: 600 }}>info@henmpoano.org</a></p>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
