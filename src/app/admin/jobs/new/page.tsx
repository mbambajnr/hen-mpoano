'use client'

import { useActionState, useEffect } from 'react'
import { createJob } from '../actions'
import { useRouter } from 'next/navigation'

export default function NewJobPage() {
  const [state, action, pending] = useActionState(createJob, null)
  const router = useRouter()

  useEffect(() => {
    if (state?.success) router.push('/admin/jobs')
  }, [state, router])

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>New Job Posting</h2>
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
          <label htmlFor="department">Department</label>
          <select id="department" name="department" required>
            <option value="Programs">Programs</option>
            <option value="Finance">Finance</option>
            <option value="Communications">Communications</option>
            <option value="Technical">Technical</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input id="location" name="location" defaultValue="Takoradi, Ghana" />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select id="type" name="type" required>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows={8} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="requirements">Requirements</label>
          <textarea id="requirements" name="requirements" rows={5}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="howToApply">How to Apply (email)</label>
          <input id="howToApply" name="howToApply" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="deadline">Application Deadline</label>
          <input id="deadline" name="deadline" type="date" />
        </div>
        <button type="submit" className="btn btn-teal" disabled={pending}>
          {pending ? 'Creating...' : 'Create Job'}
        </button>
      </form>
    </div>
  )
}
