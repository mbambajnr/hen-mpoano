'use client'

import { use, useActionState, useEffect, useState } from 'react'
import { updateFaq } from '../../actions'
import { useRouter } from 'next/navigation'

export default function EditFaqPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [state, action, pending] = useActionState(updateFaq, null)
  const router = useRouter()
  const [faq, setFaq] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (state?.success) router.push('/admin/faqs')
  }, [state, router])

  useEffect(() => {
    fetch(`/api/faqs/${id}`)
      .then(r => r.json())
      .then(data => { setFaq(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) return <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>Loading...</div>
  if (!faq) return <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>FAQ not found</div>

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>Edit FAQ</h2>
      <form action={action} style={{ background: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-100)' }}>
        <input type="hidden" name="id" value={id} />
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input id="question" name="question" defaultValue={faq.question} required />
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer</label>
          <textarea id="answer" name="answer" rows={5} defaultValue={faq.answer} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" defaultValue={faq.category}>
            <option value="General">General</option>
            <option value="Volunteering">Volunteering</option>
            <option value="Programs">Programs</option>
            <option value="Contact">Contact</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="order">Order</label>
          <input id="order" name="order" type="number" defaultValue={faq.order} />
        </div>
        <button type="submit" className="btn btn-teal" disabled={pending}>
          {pending ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  )
}
