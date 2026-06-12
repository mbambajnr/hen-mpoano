'use client'

import { use, useActionState, useEffect, useState } from 'react'
import { updateEvent } from '../../actions'
import { useRouter } from 'next/navigation'
import ImageUpload from '@/components/ImageUpload'

export default function EditEventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [state, action, pending] = useActionState(updateEvent, null)
  const router = useRouter()
  const [event, setEvent] = useState<any>(null)
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (state?.success) router.push('/admin/events')
  }, [state, router])

  useEffect(() => {
    fetch(`/api/events/${id}`)
      .then(r => r.json())
      .then(data => { setEvent(data); setImage(data.image || ''); setLoading(false) })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) return <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>Loading...</div>
  if (!event) return <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>Event not found</div>

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>Edit Event</h2>
      <form action={action} style={{ background: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-100)' }}>
        <input type="hidden" name="id" value={id} />
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" defaultValue={event.title} required />
        </div>
        <div className="form-group">
          <label htmlFor="slug">Slug</label>
          <input id="slug" name="slug" defaultValue={event.slug} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows={5} defaultValue={event.description} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Event Date</label>
          <input id="eventDate" name="eventDate" type="date" defaultValue={new Date(event.eventDate).toISOString().split('T')[0]} required />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input id="location" name="location" defaultValue={event.location} required />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" defaultValue={event.category}>
            <option value="Public Event">Public Event</option>
            <option value="Workshop">Workshop</option>
            <option value="Training">Training</option>
            <option value="Meeting">Meeting</option>
            <option value="Field Visit">Field Visit</option>
          </select>
        </div>
        <ImageUpload onUpload={setImage} current={event.image} label="Event Image" />
        <input type="hidden" name="image" value={image} />
        <div className="form-group">
          <label htmlFor="link">External Link</label>
          <input id="link" name="link" type="url" defaultValue={event.link || ''} />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="isPast" defaultChecked={event.isPast} /> Mark as Past Event
          </label>
        </div>
        <button type="submit" className="btn btn-teal" disabled={pending}>
          {pending ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  )
}
