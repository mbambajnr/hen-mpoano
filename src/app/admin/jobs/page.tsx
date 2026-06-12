import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { deleteJob, toggleJob } from './actions'
import ConfirmDeleteForm from '@/components/ConfirmDeleteForm'

export default async function AdminJobsPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  const jobs = await prisma.jobPosting.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)' }}>Job Postings</h2>
        <Link href="/admin/jobs/new" className="btn btn-teal btn-small">+ New Job</Link>
      </div>

      {jobs.length === 0 ? (
        <p style={{ color: 'var(--color-gray-400)', textAlign: 'center', padding: 'var(--spacing-2xl)' }}>No job postings yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          {jobs.map((job) => (
            <div key={job.id} style={{
              background: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              border: '1px solid var(--color-gray-100)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: 'var(--spacing-xs)' }}>{job.title}</h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', display: 'flex', gap: 'var(--spacing-md)' }}>
                  <span>{job.department}</span>
                  <span>{job.type}</span>
                  <span style={{ color: job.isActive ? 'var(--color-accent-green)' : 'var(--color-accent-orange)' }}>
                    {job.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
                <form action={toggleJob}>
                  <input type="hidden" name="id" value={job.id} />
                  <button type="submit" className="btn btn-small" style={{ background: job.isActive ? 'var(--color-accent-orange)' : 'var(--color-accent-green)', color: 'white' }}>
                    {job.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                </form>
                <Link href={`/admin/jobs/${job.id}/edit`} className="btn btn-sand btn-small">Edit</Link>
                <ConfirmDeleteForm id={job.id} action={deleteJob} label="Delete" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
