'use client'

import { useActionState } from 'react'
import { submitVolunteer } from './actions'

export default function VolunteerForm() {
  const [state, action, pending] = useActionState(submitVolunteer, null)

  return (
    <div className="contact-form" style={{ maxWidth: 640, margin: '0 auto' }}>
      <form action={action}>
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills &amp; Areas of Interest *</label>
          <textarea id="skills" name="skills" required placeholder="E.g., Environmental science, community engagement, data entry, communications, photography, GIS…"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="availability">Availability *</label>
          <select id="availability" name="availability" required>
            <option value="">Select…</option>
            <option value="A few hours per week">A few hours per week</option>
            <option value="A few days per month">A few days per month</option>
            <option value="Project-based / short-term">Project-based / short-term</option>
            <option value="Full-time / internship">Full-time / internship</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Why do you want to volunteer with Hɛn Mpoano?</label>
          <textarea id="message" name="message" rows={4}></textarea>
        </div>
        <button type="submit" className="btn btn-sand" style={{ width: '100%', justifyContent: 'center' }} disabled={pending}>
          {pending ? 'Submitting...' : 'Submit Application →'}
        </button>
        {state?.success && (
          <p style={{ color: 'var(--color-accent-green)', marginTop: 'var(--spacing-md)', fontWeight: 600, textAlign: 'center' }}>
            ✓ Application submitted successfully! We&apos;ll be in touch.
          </p>
        )}
        {state?.error && (
          <p style={{ color: 'var(--color-accent-orange)', marginTop: 'var(--spacing-md)', fontWeight: 600, textAlign: 'center' }}>
            {state.error}
          </p>
        )}
      </form>
    </div>
  )
}
