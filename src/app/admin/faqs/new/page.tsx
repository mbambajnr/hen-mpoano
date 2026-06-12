'use client'

import { useActionState, useEffect } from 'react'
import { createFaq } from '../actions'
import { useRouter } from 'next/navigation'

export default function NewFaqPage() {
  const [state, action, pending] = useActionState(createFaq, null)
  const router = useRouter()

  useEffect(() => {
    if (state?.success) router.push('/admin/faqs')
  }, [state, router])

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>New FAQ</h2>
      <form action={action} style={{ background: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-100)' }}>
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input id="question" name="question" required />
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer</label>
          <textarea id="answer" name="answer" rows={5} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" required>
            <option value="General">General</option>
            <option value="Volunteering">Volunteering</option>
            <option value="Programs">Programs</option>
            <option value="Contact">Contact</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="order">Order</label>
          <input id="order" name="order" type="number" defaultValue="0" />
        </div>
        <button type="submit" className="btn btn-teal" disabled={pending}>
          {pending ? 'Creating...' : 'Create FAQ'}
        </button>
      </form>
    </div>
  )
}
