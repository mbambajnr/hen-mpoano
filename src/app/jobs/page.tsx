import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jobs',
  description: 'View current job openings and career opportunities at Hɛn Mpoano.',
}

export const dynamic = 'force-dynamic'

async function getJobs() {
  const { prisma } = await import('@/lib/prisma')
  return prisma.jobPosting.findMany({
    where: { isActive: true },
    orderBy: { publishedAt: 'desc' },
  })
}

export default async function JobsPage() {
  const jobs = await getJobs()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-tagline">Careers</span>
          <h1>Job Openings</h1>
          <p>Explore career opportunities at Hɛn Mpoano.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          {jobs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: 'var(--spacing-4xl) 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>🔍</div>
              <h2 className="section-title">No Openings Right Now</h2>
              <p className="section-desc" style={{ margin: '0 auto var(--spacing-xl)' }}>
                We don&apos;t have any active job openings at the moment. Check back soon or follow us on social media for updates.
              </p>
              <Link href="/volunteer" className="btn btn-teal">Volunteer With Us</Link>
            </div>
          ) : (
            <div className="card-grid">
              {jobs.map((job) => {
                const isExpired = job.deadline && new Date(job.deadline) < new Date()
                return (
                  <Link key={job.id} href={`/jobs/${job.slug}`} className="card">
                    <img src="/images/fishing-sunset.jpg" alt={job.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                    <div className="card-body">
                      <div className="card-meta">{job.department} · {job.type} · {job.location}</div>
                      <h3>{job.title}</h3>
                      <p style={{ marginBottom: 'var(--spacing-sm)' }}>{job.description.length > 150 ? job.description.slice(0, 150) + '...' : job.description}</p>
                      {job.deadline && (
                        <div className="card-meta" style={{ color: isExpired ? 'var(--color-accent-orange)' : 'var(--color-gray-400)' }}>
                          {isExpired ? 'Expired' : `Deadline: ${new Date(job.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}`}
                        </div>
                      )}
                      <span className="card-link">View Details →</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
