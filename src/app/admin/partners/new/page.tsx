'use client'

import { useActionState, useEffect, useState } from 'react'
import { createPartner } from '../actions'
import { useRouter } from 'next/navigation'
import ImageUpload from '@/components/ImageUpload'

export default function NewPartnerPage() {
  const [state, action, pending] = useActionState(createPartner, null)
  const router = useRouter()
  const [logoUrl, setLogoUrl] = useState('')

  useEffect(() => {
    if (state?.success) router.push('/admin/partners')
  }, [state, router])

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>New Partner</h2>
      <form action={action} style={{ background: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-100)' }}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description (optional)</label>
          <textarea id="description" name="description" rows={3}></textarea>
        </div>
        <ImageUpload onUpload={setLogoUrl} label="Logo" />
        <input type="hidden" name="logoUrl" value={logoUrl} />
        <div className="form-group">
          <label htmlFor="websiteUrl">Website URL (optional)</label>
          <input id="websiteUrl" name="websiteUrl" type="url" />
        </div>
        <div className="form-group">
          <label htmlFor="order">Order</label>
          <input id="order" name="order" type="number" defaultValue="0" />
        </div>
        <button type="submit" className="btn btn-teal" disabled={pending}>
          {pending ? 'Creating...' : 'Create Partner'}
        </button>
      </form>
    </div>
  )
}
