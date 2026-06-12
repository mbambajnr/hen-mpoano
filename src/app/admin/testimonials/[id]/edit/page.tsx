'use client'

import { use, useActionState, useEffect, useState } from 'react'
import { updateTestimonial } from '../../actions'
import { useRouter } from 'next/navigation'

export default function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [state, action, pending] = useActionState(updateTestimonial, null)
  const router = useRouter()
  const [testimonial, setTestimonial] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (state?.success) router.push('/admin/testimonials')
  }, [state, router])

  useEffect(() => {
    fetch(`/api/testimonials/${id}`)
      .then(r => r.json())
      .then(data => { setTestimonial(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) return <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>Loading...</div>
  if (!testimonial) return <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>Testimonial not found</div>

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>Edit Testimonial</h2>
      <form action={action} style={{ background: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-100)' }}>
        <input type="hidden" name="id" value={id} />
        <div className="form-group">
          <label htmlFor="quote">Quote</label>
          <textarea id="quote" name="quote" rows={4} defaultValue={testimonial.quote} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="authorName">Author Name</label>
          <input id="authorName" name="authorName" defaultValue={testimonial.authorName} required />
        </div>
        <div className="form-group">
          <label htmlFor="authorRole">Role</label>
          <input id="authorRole" name="authorRole" defaultValue={testimonial.authorRole || ''} />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input id="location" name="location" defaultValue={testimonial.location || ''} />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="isActive" defaultChecked={testimonial.isActive} /> Active
          </label>
        </div>
        <button type="submit" className="btn btn-teal" disabled={pending}>
          {pending ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  )
}
