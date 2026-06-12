import type { Metadata } from 'next'
import Link from 'next/link'
import Counter from '@/components/Counter'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Hɛn Mpoano — A Ghanaian NGO dedicated to coastal and marine ecosystem management since 2013.',
}

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-tagline">Get to Know Us</span>
          <h1>About Hɛn Mpoano</h1>
          <p>From a USAID-funded initiative to a registered Ghanaian NGO — our journey to safeguard Ghana&apos;s coastal and marine ecosystems.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="about-story">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">How We Started</h2>
            <p>Hɛn Mpoano is a not-for-profit organization legally registered in Ghana since 2013 and based in Takoradi in the Western Region. Between 2009 to 2013, the organization existed and operated as Coastal Resources Center — Ghana, with affiliation to the Coastal Resources Center of the University of Rhode Island, USA.</p>
            <p>During this period, Hɛn Mpoano led the implementation of the USAID-funded Integrated Coastal and Fisheries Governance (ICFG) Initiative for the Western Region of Ghana. Upon closure of the ICFG project, Hɛn Mpoano became a registered organization with a mission towards continuing many of the initiatives related to coastal and marine governance begun under the project.</p>
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <div className="about-story">
            <span className="section-label">Our Vision</span>
            <h2 className="section-title">What We Aspire To</h2>
            <p>We envision a world where inclusive and integrated management of coastal and marine ecosystems generate long-term benefits to nature and people.</p>
            <span className="section-label" style={{ marginTop: 'var(--spacing-2xl)' }}>Our Mission</span>
            <h2 className="section-title">What We Do</h2>
            <p>Our Mission is to provide technical, policy and extension support to actors in government, private sector and civil society through capacity building, research, networking and project development in fisheries and coastal ecosystem governance.</p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Our Impact</span>
            <h2 className="section-title">Making Our Coast a Better Place</h2>
          </div>
          <div className="impact-grid">
            {[
              { num: 13, label: 'Years of Service', suffix: '' },
              { num: 200, label: 'Mangrove Seedlings (K+)', suffix: '' },
              { num: 150, label: 'Communities Reached', suffix: '' },
              { num: 30, label: 'Projects', suffix: '' },
              { num: 10000, label: 'Livelihood Beneficiaries', suffix: '' },
              { num: 5000, label: 'VSLA Beneficiaries', suffix: '' },
              { num: 7000, label: 'Reproductive Health Access', suffix: '' },
              { num: 8, label: 'Partners', suffix: '' },
            ].map((stat, i) => (
              <div key={i} className="impact-stat">
                <div className="impact-stat-num"><Counter value={stat.num} suffix={stat.suffix} /></div>
                <div className="impact-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Our Partners</span>
            <h2 className="section-title">With Our Partners, We Are Making Our Coast a Better Place</h2>
            <p className="section-desc">In collaboration with our local and international partners we are helping address food insecurity, climate change, over-fishing, gender inequality, urbanization and poverty.</p>
          </div>
          <div className="partner-grid" style={{ marginTop: 'var(--spacing-xl)' }}>
            {['USAID', 'University of Rhode Island', 'European Union', 'Fisheries Commission', 'West Africa Shellfish Initiative', 'Coastal Resources Center'].map((name, i) => (
              <div key={i} className="partner-item">{name}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Want to Make a Difference?</h2>
          <p>Join us in protecting Ghana&apos;s coast. Explore volunteer opportunities or get in touch.</p>
          <div className="cta-actions">
            <Link href="/volunteer" className="btn btn-primary">Become a Volunteer</Link>
            <Link href="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
