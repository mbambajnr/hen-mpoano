'use client'

import { use, useActionState, useEffect, useState } from 'react'
import { updateGalleryItem } from '../../actions'
import { useRouter } from 'next/navigation'
import ImageUpload from '@/components/ImageUpload'

export default function EditGalleryItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [state, action, pending] = useActionState(updateGalleryItem, null)
  const router = useRouter()
  const [item, setItem] = useState<any>(null)
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (state?.success) router.push('/admin/gallery')
  }, [state, router])

  useEffect(() => {
    fetch(`/api/gallery-items/${id}`)
      .then(r => r.json())
      .then(data => { setItem(data); setImageUrl(data.imageUrl || ''); setLoading(false) })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) return <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>Loading...</div>
  if (!item) return <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>Gallery item not found</div>

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>Edit Gallery Image</h2>
      <form action={action} style={{ background: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-100)' }}>
        <input type="hidden" name="id" value={id} />
        <ImageUpload onUpload={setImageUrl} current={item.imageUrl} label="Image" />
        <input type="hidden" name="imageUrl" value={imageUrl} />
        <div className="form-group">
          <label htmlFor="caption">Caption</label>
          <input id="caption" name="caption" defaultValue={item.caption} required />
        </div>
        <div className="form-group">
          <label htmlFor="altText">Alt Text</label>
          <input id="altText" name="altText" defaultValue={item.altText} required />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" defaultValue={item.category}>
            <option value="Mangrove Restoration">Mangrove Restoration</option>
            <option value="Community Engagement">Community Engagement</option>
            <option value="Training">Training</option>
            <option value="Events">Events</option>
            <option value="Field Work">Field Work</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="order">Order</label>
          <input id="order" name="order" type="number" defaultValue={item.order} />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="isPublished" defaultChecked={item.isPublished} /> Published
          </label>
        </div>
        <button type="submit" className="btn btn-teal" disabled={pending}>
          {pending ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  )
}
