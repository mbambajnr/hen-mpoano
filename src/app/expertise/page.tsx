import type { Metadata } from 'next'
import Link from 'next/link'
import { Sprout, Waves, HeartHandshake, Fish } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Expertise',
  description: 'Hɛn Mpoano works across four program areas: Sustainable Livelihoods, Coastal Landscapes, Gender & Inclusion, and Fisheries Governance.',
}

export default function ExpertisePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-tagline">Explore What We Love To Do</span>
          <h1>Our Expertise</h1>
          <p>Hɛn Mpoano welcomes individuals, organizations, and businesses to join us in our mission to safeguard Ghana&apos;s coastal and marine ecosystems.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Our Programs</span>
            <h2 className="section-title">What We Do</h2>
            <p className="section-desc">We work across four interconnected pillars to safeguard Ghana&apos;s coastal and marine ecosystems.</p>
          </div>
          <div className="pillars-grid" style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="pillar-card">
              <div className="pillar-icon pillar-icon-livelihoods"><Sprout size={22} color="white" /></div>
              <h3>Sustainable Livelihoods</h3>
              <p>We design and implement sustainable livelihood interventions geared towards reducing poverty and food insecurity in communities we work.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon pillar-icon-landscapes"><Waves size={22} color="white" /></div>
              <h3>Coastal Landscapes</h3>
              <p>We adopt integrated and participatory approaches to coastal landscape issues and work at multiple scales, deploying a wide range of tools.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon pillar-icon-gender"><HeartHandshake size={22} color="white" /></div>
              <h3>Gender</h3>
              <p>Our gender programme area addresses gender needs by conducting gender assessment and analyses; development of gender mainstreaming strategy.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon pillar-icon-fisheries"><Fish size={22} color="white" /></div>
              <h3>Fisheries Governance</h3>
              <p>Our approach to fisheries governance is through research, multi-stakeholder engagements and policy advocacy for sustainable fisheries management.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Get Involved</span>
            <h2 className="section-title">Support Our Cause</h2>
            <p className="section-desc">Read Our Publications to get more insights of the work done.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/publications" className="btn btn-sand">Browse Publications →</Link>
            <Link href="/volunteer" className="btn btn-teal" style={{ marginLeft: 'var(--spacing-sm)' }}>Become a Volunteer</Link>
          </div>
        </div>
      </section>
    </>
  )
}
