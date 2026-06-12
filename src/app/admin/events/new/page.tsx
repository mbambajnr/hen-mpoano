'use client'

import { useActionState, useEffect, useState } from 'react'
import { createEvent } from '../actions'
import { useRouter } from 'next/navigation'
import ImageUpload from '@/components/ImageUpload'

export default function NewEventPage() {
  const [state, action, pending] = useActionState(createEvent, null)
  const router = useRouter()
  const [image, setImage] = useState('')

  useEffect(() => {
    if (state?.success) router.push('/admin/events')
  }, [state, router])

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>New Event</h2>
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
          <textarea id="description" name="description" rows={5} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Event Date</label>
          <input id="eventDate" name="eventDate" type="date" required />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input id="location" name="location" required />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" required>
            <option value="Public Event">Public Event</option>
            <option value="Workshop">Workshop</option>
            <option value="Training">Training</option>
            <option value="Meeting">Meeting</option>
            <option value="Field Visit">Field Visit</option>
          </select>
        </div>
        <ImageUpload onUpload={setImage} label="Event Image" />
        <input type="hidden" name="image" value={image} />
        <div className="form-group">
          <label htmlFor="link">External Link (optional)</label>
          <input id="link" name="link" type="url" />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="isPast" /> Mark as Past Event
          </label>
        </div>
        <button type="submit" className="btn btn-teal" disabled={pending}>
          {pending ? 'Creating...' : 'Create Event'}
        </button>
      </form>
    </div>
  )
}
