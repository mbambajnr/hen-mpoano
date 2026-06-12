'use client'

import { use, useActionState, useEffect, useState } from 'react'
import { updateJob } from '../../actions'
import { useRouter } from 'next/navigation'

export default function EditJobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [state, action, pending] = useActionState(updateJob, null)
  const router = useRouter()
  const [job, setJob] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (state?.success) router.push('/admin/jobs')
  }, [state, router])

  useEffect(() => {
    fetch(`/api/jobs/${id}`)
      .then(r => r.json())
      .then(data => { setJob(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) return <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>Loading...</div>
  if (!job) return <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>Job not found</div>

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>Edit Job Posting</h2>
      <form action={action} style={{ background: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-100)' }}>
        <input type="hidden" name="id" value={id} />
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" defaultValue={job.title} required />
        </div>
        <div className="form-group">
          <label htmlFor="slug">Slug</label>
          <input id="slug" name="slug" defaultValue={job.slug} />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <select id="department" name="department" defaultValue={job.department}>
            <option value="Programs">Programs</option>
            <option value="Finance">Finance</option>
            <option value="Communications">Communications</option>
            <option value="Technical">Technical</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input id="location" name="location" defaultValue={job.location} />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select id="type" name="type" defaultValue={job.type}>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows={8} defaultValue={job.description} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="requirements">Requirements</label>
          <textarea id="requirements" name="requirements" rows={5} defaultValue={job.requirements || ''}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="howToApply">How to Apply</label>
          <input id="howToApply" name="howToApply" defaultValue={job.howToApply || ''} />
        </div>
        <div className="form-group">
          <label htmlFor="deadline">Deadline</label>
          <input id="deadline" name="deadline" type="date" defaultValue={job.deadline ? new Date(job.deadline).toISOString().split('T')[0] : ''} />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="isActive" defaultChecked={job.isActive} /> Active
          </label>
        </div>
        <button type="submit" className="btn btn-teal" disabled={pending}>
          {pending ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  )
}
