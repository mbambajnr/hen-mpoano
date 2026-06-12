import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { deleteTestimonial, toggleTestimonial } from './actions'
import ConfirmDeleteForm from '@/components/ConfirmDeleteForm'

export default async function TestimonialsPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  const testimonials = await prisma.testimonial.findMany({ orderBy: { authorName: 'asc' } })

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)' }}>Testimonials</h2>
        <Link href="/admin/testimonials/new" className="btn btn-teal btn-small">+ New Testimonial</Link>
      </div>

      {testimonials.length === 0 ? (
        <p style={{ color: 'var(--color-gray-400)', textAlign: 'center', padding: 'var(--spacing-2xl)' }}>No testimonials yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          {testimonials.map((t) => (
            <div key={t.id} style={{
              background: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              border: '1px solid var(--color-gray-100)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>&ldquo;{t.quote.substring(0, 120)}{t.quote.length > 120 ? '…' : ''}&rdquo;</p>
                <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>— {t.authorName}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', display: 'flex', gap: 'var(--spacing-md)' }}>
                  {t.authorRole && <span>{t.authorRole}</span>}
                  {t.location && <span>{t.location}</span>}
                  <span style={{ color: t.isActive ? 'var(--color-accent-green)' : 'var(--color-accent-orange)' }}>
                    {t.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
                <form action={toggleTestimonial}>
                  <input type="hidden" name="id" value={t.id} />
                  <button type="submit" className="btn btn-sand btn-small">
                    {t.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                </form>
                <Link href={`/admin/testimonials/${t.id}/edit`} className="btn btn-sand btn-small">Edit</Link>
                <ConfirmDeleteForm id={t.id} action={deleteTestimonial} label="Testimonial" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
