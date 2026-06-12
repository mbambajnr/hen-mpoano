import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { deletePartner, togglePartner } from './actions'
import ConfirmDeleteForm from '@/components/ConfirmDeleteForm'

export default async function PartnersPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  const partners = await prisma.partner.findMany({ orderBy: { order: 'asc' } })

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)' }}>Partners</h2>
        <Link href="/admin/partners/new" className="btn btn-teal btn-small">+ New Partner</Link>
      </div>

      {partners.length === 0 ? (
        <p style={{ color: 'var(--color-gray-400)', textAlign: 'center', padding: 'var(--spacing-2xl)' }}>No partners yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          {partners.map((p) => (
            <div key={p.id} style={{
              background: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              border: '1px solid var(--color-gray-100)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                {p.logoUrl && (
                  <img src={p.logoUrl} alt={p.name} style={{ width: 48, height: 48, objectFit: 'contain', borderRadius: 'var(--radius-sm)' }} />
                )}
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: 2 }}>{p.name}</h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', display: 'flex', gap: 'var(--spacing-md)' }}>
                    <span>Order: {p.order}</span>
                    <span style={{ color: p.isActive ? 'var(--color-accent-green)' : 'var(--color-accent-orange)' }}>
                      {p.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
                <form action={togglePartner}>
                  <input type="hidden" name="id" value={p.id} />
                  <button type="submit" className="btn btn-sand btn-small">
                    {p.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                </form>
                <Link href={`/admin/partners/${p.id}/edit`} className="btn btn-sand btn-small">Edit</Link>
                <ConfirmDeleteForm id={p.id} action={deletePartner} label="Partner" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
