import type { Metadata } from 'next'
import VolunteerForm from './VolunteerForm'
import { Globe, Wrench, Handshake, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Volunteer',
  description: 'Volunteer with Hɛn Mpoano — Make a difference protecting Ghana\'s coastal and marine ecosystems.',
}

export default function VolunteerPage() {
  return (
    <>
      <section className="page-hero page-hero-green">
        <div className="container">
          <span className="hero-tagline">Give Your Time</span>
          <h1>Become a Volunteer</h1>
          <p>Join a passionate community working to safeguard Ghana&apos;s coast. Your skills can make a real difference.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Why Volunteer?</span>
            <h2 className="section-title">Your Time Matters</h2>
          </div>
          <div className="pillars-grid" style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="pillar-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}><Globe size={32} /></div>
              <h3>Make a Difference</h3>
              <p>Your efforts directly support initiatives that conserve and manage Ghana&apos;s coastal and marine resources for future generations.</p>
            </div>
            <div className="pillar-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}><Wrench size={32} /></div>
              <h3>Gain Experience</h3>
              <p>Hands-on experience in environmental conservation, community engagement, project management, and more.</p>
            </div>
            <div className="pillar-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}><Handshake size={32} /></div>
              <h3>Be Part of a Community</h3>
              <p>Join a diverse and passionate team dedicated to making a positive impact on coastal and marine ecosystems.</p>
            </div>
            <div className="pillar-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}><TrendingUp size={32} /></div>
              <h3>Professional Development</h3>
              <p>Enhance your skills, network with professionals, and gain insights into coastal and marine governance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Get Started</span>
            <h2 className="section-title">How to Volunteer</h2>
          </div>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            {[
              { step: '1', title: 'Fill Out the Form', desc: 'Complete our volunteer application form below. Indicate your areas of interest, skills, and availability.' },
              { step: '2', title: "We'll Reach Out", desc: "Our volunteer coordinator will get in touch to discuss opportunities that align with your interests and expertise." },
              { step: '3', title: 'Start Making an Impact', desc: "Once matched, you'll join our team and begin contributing to meaningful coastal conservation work." },
            ].map((item, i) => (
              <div key={i} className="apply-step" style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--color-teal-700)', color: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{item.step}</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-gray-600)', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Apply Now</span>
            <h2 className="section-title">Volunteer Application</h2>
          </div>
          <VolunteerForm />
        </div>
      </section>
    </>
  )
}
