'use client'

import { useActionState, useEffect } from 'react'
import { createPublication } from '../actions'
import { useRouter } from 'next/navigation'

export default function NewPublicationPage() {
  const [state, action, pending] = useActionState(createPublication, null)
  const router = useRouter()

  useEffect(() => {
    if (state?.success) router.push('/admin/publications')
  }, [state, router])

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>New Publication</h2>
      <form action={action} style={{ background: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-100)' }}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" required />
        </div>
        <div className="form-group">
          <label htmlFor="slug">Slug (leave blank to auto-generate)</label>
          <input id="slug" name="slug" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="fileUrl">File URL (PDF link)</label>
          <input id="fileUrl" name="fileUrl" type="url" />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" required>
            <option value="Climate Change">Climate Change</option>
            <option value="Fisheries Resources">Fisheries Resources</option>
            <option value="Gender">Gender</option>
            <option value="Sustainable Livelihood">Sustainable Livelihood</option>
          </select>
        </div>
        <button type="submit" className="btn btn-teal" disabled={pending}>
          {pending ? 'Creating...' : 'Create Publication'}
        </button>
      </form>
    </div>
  )
}
