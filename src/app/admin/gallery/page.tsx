import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { deleteGalleryItem } from './actions'
import ConfirmDeleteForm from '@/components/ConfirmDeleteForm'

export default async function GalleryPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  const items = await prisma.galleryItem.findMany({ orderBy: [{ category: 'asc' }, { order: 'asc' }] })

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)' }}>Gallery</h2>
        <Link href="/admin/gallery/new" className="btn btn-teal btn-small">+ New Image</Link>
      </div>

      {items.length === 0 ? (
        <p style={{ color: 'var(--color-gray-400)', textAlign: 'center', padding: 'var(--spacing-2xl)' }}>No gallery items yet.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--spacing-md)' }}>
          {items.map((item) => (
            <div key={item.id} style={{
              background: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-gray-100)',
              overflow: 'hidden',
            }}>
              <img src={item.imageUrl} alt={item.altText} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
              <div style={{ padding: 'var(--spacing-md)' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: 2 }}>{item.caption}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', display: 'flex', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                  <span>{item.category}</span>
                  <span style={{ color: item.isPublished ? 'var(--color-accent-green)' : 'var(--color-accent-orange)' }}>
                    {item.isPublished ? 'Published' : 'Hidden'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                  <Link href={`/admin/gallery/${item.id}/edit`} className="btn btn-sand btn-small">Edit</Link>
                  <ConfirmDeleteForm id={item.id} action={deleteGalleryItem} label="Image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
