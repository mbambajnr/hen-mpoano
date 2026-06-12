import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { deleteVolunteer, markVolunteerRead, markVolunteerUnread } from './actions'
import { UserCheck, UserX, Trash2 } from 'lucide-react'

export default async function VolunteersPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  const volunteers = await prisma.volunteer.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>Volunteer Submissions</h2>

      {volunteers.length === 0 ? (
        <p style={{ color: 'var(--color-gray-400)', textAlign: 'center', padding: 'var(--spacing-2xl)' }}>No volunteer submissions yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          {volunteers.map((v) => (
            <div key={v.id} style={{
              background: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              border: `1px solid ${v.read ? 'var(--color-gray-100)' : 'var(--color-teal-300)'}`,
              opacity: v.read ? 0.7 : 1,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-sm)' }}>
                <div>
                  <strong>{v.name}</strong>
                  <span style={{ color: 'var(--color-gray-400)', marginLeft: 'var(--spacing-sm)', fontSize: '0.85rem' }}>{v.email}</span>
                  {v.phone && <span style={{ color: 'var(--color-gray-400)', marginLeft: 'var(--spacing-sm)', fontSize: '0.85rem' }}>{v.phone}</span>}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', whiteSpace: 'nowrap' }}>
                  {new Date(v.createdAt).toLocaleString()}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-sm)', fontSize: '0.9rem' }}>
                <span><strong>Skills:</strong> {v.skills}</span>
                <span><strong>Availability:</strong> {v.availability}</span>
              </div>
              {v.message && <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-md)', fontStyle: 'italic' }}>{v.message}</p>}
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                <form action={v.read ? markVolunteerUnread : markVolunteerRead}>
                  <input type="hidden" name="id" value={v.id} />
                  <button type="submit" className="btn btn-sand btn-small" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    {v.read ? <UserX size={14} /> : <UserCheck size={14} />}
                    {v.read ? 'Mark New' : 'Mark Reviewed'}
                  </button>
                </form>
                <form action={deleteVolunteer} onSubmit={(e) => { if (!confirm('Delete this submission?')) e.preventDefault() }}>
                  <input type="hidden" name="id" value={v.id} />
                  <button type="submit" className="btn btn-small" style={{ background: 'var(--color-accent-orange)', color: 'white', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Trash2 size={14} /> Delete
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
