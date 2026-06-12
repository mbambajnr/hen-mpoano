import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { deleteFaq } from './actions'
import ConfirmDeleteForm from '@/components/ConfirmDeleteForm'
import { GripVertical } from 'lucide-react'

export default async function FaqsPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  const faqs = await prisma.fAQ.findMany({ orderBy: [{ category: 'asc' }, { order: 'asc' }] })

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)' }}>FAQs</h2>
        <Link href="/admin/faqs/new" className="btn btn-teal btn-small">+ New FAQ</Link>
      </div>

      {faqs.length === 0 ? (
        <p style={{ color: 'var(--color-gray-400)', textAlign: 'center', padding: 'var(--spacing-2xl)' }}>No FAQs yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          {faqs.map((faq) => (
            <div key={faq.id} style={{
              background: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              border: '1px solid var(--color-gray-100)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <GripVertical size={16} style={{ color: 'var(--color-gray-300)', cursor: 'grab' }} />
                <div>
                  <h3 style={{ fontSize: '0.95rem', marginBottom: 2 }}>{faq.question}</h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', display: 'flex', gap: 'var(--spacing-md)' }}>
                    <span>{faq.category}</span>
                    <span>Order: {faq.order}</span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
                <Link href={`/admin/faqs/${faq.id}/edit`} className="btn btn-sand btn-small">Edit</Link>
                <ConfirmDeleteForm id={faq.id} action={deleteFaq} label="FAQ" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
