import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { deletePublication } from './actions'
import ConfirmDeleteForm from '@/components/ConfirmDeleteForm'

export default async function AdminPublicationsPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  const publications = await prisma.publication.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)' }}>Publications</h2>
        <Link href="/admin/publications/new" className="btn btn-teal btn-small">+ New Publication</Link>
      </div>

      {publications.length === 0 ? (
        <p style={{ color: 'var(--color-gray-400)', textAlign: 'center', padding: 'var(--spacing-2xl)' }}>No publications yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          {publications.map((pub) => (
            <div key={pub.id} style={{
              background: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              border: '1px solid var(--color-gray-100)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: 'var(--spacing-xs)' }}>{pub.title}</h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', display: 'flex', gap: 'var(--spacing-md)' }}>
                  <span>{pub.category}</span>
                  <span style={{ color: pub.isPublished ? 'var(--color-accent-green)' : 'var(--color-accent-orange)' }}>
                    {pub.isPublished ? 'Published' : 'Draft'}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                <Link href={`/admin/publications/${pub.id}/edit`} className="btn btn-sand btn-small">Edit</Link>
                <ConfirmDeleteForm id={pub.id} action={deletePublication} label="Delete" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
