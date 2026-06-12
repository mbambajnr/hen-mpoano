'use client'

import { use, useActionState, useEffect, useState } from 'react'
import { updatePublication } from '../../actions'
import { useRouter } from 'next/navigation'

export default function EditPublicationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [state, action, pending] = useActionState(updatePublication, null)
  const router = useRouter()
  const [pub, setPub] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (state?.success) router.push('/admin/publications')
  }, [state, router])

  useEffect(() => {
    fetch(`/api/publications/${id}`)
      .then(r => r.json())
      .then(data => { setPub(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) return <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>Loading...</div>
  if (!pub) return <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>Publication not found</div>

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>Edit Publication</h2>
      <form action={action} style={{ background: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-100)' }}>
        <input type="hidden" name="id" value={id} />
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" defaultValue={pub.title} required />
        </div>
        <div className="form-group">
          <label htmlFor="slug">Slug</label>
          <input id="slug" name="slug" defaultValue={pub.slug} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" defaultValue={pub.description} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="fileUrl">File URL</label>
          <input id="fileUrl" name="fileUrl" type="url" defaultValue={pub.fileUrl || ''} />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" defaultValue={pub.category}>
            <option value="Climate Change">Climate Change</option>
            <option value="Fisheries Resources">Fisheries Resources</option>
            <option value="Gender">Gender</option>
            <option value="Sustainable Livelihood">Sustainable Livelihood</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="isPublished" defaultChecked={pub.isPublished} /> Published
          </label>
        </div>
        <button type="submit" className="btn btn-teal" disabled={pending}>
          {pending ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  )
}
