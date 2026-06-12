'use client'

import { use, useActionState, useEffect, useState } from 'react'
import { updatePartner } from '../../actions'
import { useRouter } from 'next/navigation'
import ImageUpload from '@/components/ImageUpload'

export default function EditPartnerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [state, action, pending] = useActionState(updatePartner, null)
  const router = useRouter()
  const [partner, setPartner] = useState<any>(null)
  const [logoUrl, setLogoUrl] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (state?.success) router.push('/admin/partners')
  }, [state, router])

  useEffect(() => {
    fetch(`/api/partners/${id}`)
      .then(r => r.json())
      .then(data => { setPartner(data); setLogoUrl(data.logoUrl || ''); setLoading(false) })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) return <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>Loading...</div>
  if (!partner) return <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>Partner not found</div>

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>Edit Partner</h2>
      <form action={action} style={{ background: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-100)' }}>
        <input type="hidden" name="id" value={id} />
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" defaultValue={partner.name} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows={3} defaultValue={partner.description || ''}></textarea>
        </div>
        <ImageUpload onUpload={setLogoUrl} current={partner.logoUrl} label="Logo" />
        <input type="hidden" name="logoUrl" value={logoUrl} />
        <div className="form-group">
          <label htmlFor="websiteUrl">Website URL</label>
          <input id="websiteUrl" name="websiteUrl" type="url" defaultValue={partner.websiteUrl || ''} />
        </div>
        <div className="form-group">
          <label htmlFor="order">Order</label>
          <input id="order" name="order" type="number" defaultValue={partner.order} />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="isActive" defaultChecked={partner.isActive} /> Active
          </label>
        </div>
        <button type="submit" className="btn btn-teal" disabled={pending}>
          {pending ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  )
}
