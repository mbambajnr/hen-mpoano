'use client'

import { useActionState, useEffect, useState } from 'react'
import { createGalleryItem } from '../actions'
import { useRouter } from 'next/navigation'
import ImageUpload from '@/components/ImageUpload'

export default function NewGalleryItemPage() {
  const [state, action, pending] = useActionState(createGalleryItem, null)
  const router = useRouter()
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (state?.success) router.push('/admin/gallery')
  }, [state, router])

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>New Gallery Image</h2>
      <form action={action} style={{ background: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-100)' }}>
        <ImageUpload onUpload={setImageUrl} label="Image" />
        <input type="hidden" name="imageUrl" value={imageUrl} />
        <div className="form-group">
          <label htmlFor="caption">Caption</label>
          <input id="caption" name="caption" required />
        </div>
        <div className="form-group">
          <label htmlFor="altText">Alt Text</label>
          <input id="altText" name="altText" required />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" required>
            <option value="Mangrove Restoration">Mangrove Restoration</option>
            <option value="Community Engagement">Community Engagement</option>
            <option value="Training">Training</option>
            <option value="Events">Events</option>
            <option value="Field Work">Field Work</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="order">Order</label>
          <input id="order" name="order" type="number" defaultValue="0" />
        </div>
        <button type="submit" className="btn btn-teal" disabled={pending}>
          {pending ? 'Creating...' : 'Create Image'}
        </button>
      </form>
    </div>
  )
}
