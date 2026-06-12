'use client'

import { useActionState, useEffect } from 'react'
import { createTestimonial } from '../actions'
import { useRouter } from 'next/navigation'

export default function NewTestimonialPage() {
  const [state, action, pending] = useActionState(createTestimonial, null)
  const router = useRouter()

  useEffect(() => {
    if (state?.success) router.push('/admin/testimonials')
  }, [state, router])

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>New Testimonial</h2>
      <form action={action} style={{ background: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-100)' }}>
        <div className="form-group">
          <label htmlFor="quote">Quote</label>
          <textarea id="quote" name="quote" rows={4} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="authorName">Author Name</label>
          <input id="authorName" name="authorName" required />
        </div>
        <div className="form-group">
          <label htmlFor="authorRole">Role (optional)</label>
          <input id="authorRole" name="authorRole" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location (optional)</label>
          <input id="location" name="location" />
        </div>
        <button type="submit" className="btn btn-teal" disabled={pending}>
          {pending ? 'Creating...' : 'Create Testimonial'}
        </button>
      </form>
    </div>
  )
}
