'use client'

import { useActionState } from 'react'
import { submitContact } from './actions'

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, null)

  return (
    <div className="contact-form">
      <h3>Send Us a Message</h3>
      <form action={action}>
        <div className="form-group">
          <label htmlFor="name">Your Name *</label>
          <input id="name" name="name" required placeholder="Full name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <select id="subject" name="subject" required>
            <option value="">Select a topic…</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Careers / Job Application">Careers / Job Application</option>
            <option value="Volunteering">Volunteering</option>
            <option value="Partnership / Collaboration">Partnership / Collaboration</option>
            <option value="Media / Press">Media / Press</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message *</label>
          <textarea id="message" name="message" required placeholder="Tell us about your inquiry…"></textarea>
        </div>
        <button type="submit" className="btn btn-sand" style={{ width: '100%', justifyContent: 'center' }} disabled={pending}>
          {pending ? 'Sending...' : 'Send Message →'}
        </button>
        {state?.success && (
          <p style={{ color: 'var(--color-accent-green)', marginTop: 'var(--spacing-md)', fontWeight: 600, textAlign: 'center' }}>
            ✓ Message sent successfully!
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
