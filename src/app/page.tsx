'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import HeroIntro from '@/components/HeroIntro'
import Counter from '@/components/Counter'
import { Sprout, Waves, HeartHandshake, Fish } from 'lucide-react'

const slides = [
  {
    tagline: "Ghana's Coastal Stewards Since 2013",
    title: <>Protecting <em>Our Coast</em> for Today and Future Generations</>,
    desc: "Hɛn Mpoano works with coastal communities, government institutions, and international partners to ensure inclusive and integrated management of Ghana's coastal and marine ecosystems.",
    actionPrimary: { text: 'Explore Our Work →', href: '/expertise' },
    actionSecondary: { text: 'Meet Our Team', href: '/team' },
    stats: [
      { num: 13, label: 'Years in Operation', suffix: '' },
      { num: 200, label: 'Mangrove Seedlings (K+)', suffix: '' },
      { num: 150, label: 'Communities Reached', suffix: '' },
      { num: 30, label: 'Projects Implemented', suffix: '' },
    ],
  },
  {
    tagline: 'Innovation in Action',
    title: <>West Africa&apos;s First <em>Clam Purification</em> System</>,
    desc: "Our novel depuration technology gained national attention during a visit by the Fisheries Minister to Kponkpo in Ada East District — improving clam safety, quality, and market value.",
    actionPrimary: { text: 'Read the Full Story →', href: 'https://henmpoano.org/hen-mpoanos-novel-clam-depuration-technology-gains-ministerial-attention-in-ada/' },
    actionSecondary: { text: 'View Our Projects', href: '/projects' },
    extraImage: true,
  },
  {
    tagline: 'Historic Achievement',
    title: <>Ghana&apos;s First <em>Marine Protected Area</em></>,
    desc: "The Vice President of Ghana declared the country's first MPA — supported by Hɛn Mpoano's community engagement efforts. A historic step for Ghana's coastal conservation.",
    actionPrimary: { text: 'Read the Story →', href: 'https://henmpoano.org/vice-president-of-ghana-declares-first-marine-protected-area-supported-by-hen-mpoanos-community-engagement-efforts/' },
    actionSecondary: { text: 'More News', href: '/news' },
    extraImage: true,
  },
]

const impactStats = [
  { num: 13, label: 'Years of Service', suffix: '' },
  { num: 200, label: 'Mangrove Seedlings (K+)', suffix: '' },
  { num: 150, label: 'Communities Reached', suffix: '' },
  { num: 30, label: 'Projects Implemented', suffix: '' },
  { num: 10000, label: 'Livelihood Beneficiaries', suffix: '' },
  { num: 5000, label: 'Individuals Engaged', suffix: '' },
  { num: 7000, label: 'Reproductive Health Access', suffix: '' },
  { num: 8, label: 'Partner Organizations', suffix: '' },
]

const newsItems = [
  { img: '/images/mangrove-swamp.jpg', title: "Clam Depuration Technology Gains Ministerial Attention in Ada", meta: 'June 2026', href: 'https://henmpoano.org/hen-mpoanos-novel-clam-depuration-technology-gains-ministerial-attention-in-ada/' },
  { img: '/images/dark-waves.jpg', title: '2026 Closed Season — Stronger Enforcement and Community Voices', meta: '2026', href: 'https://henmpoano.org/2026-closed-season-in-ghana-stronger-enforcement-and-community-voices-at-the-center/' },
  { img: '/images/ocean-boat.jpg', title: 'Fisheries Minister Inaugurates MPA Management Committee', meta: '2026', href: 'https://henmpoano.org/fisheries-minister-inaugurates-mpa-management-executive-committee-as-ghana-enters-implementation-phase-with-hen-mpoano-support/' },
]

const teamPreview = [
  { initials: 'KA', name: 'Kofi Agbogah', role: 'Director', bio: '30 years in fisheries and coastal management.' },
  { initials: 'SK', name: 'Stephen Kankam', role: 'Deputy Director', bio: 'Coastal resource management and policy.' },
  { initials: 'AA', name: 'Adiza Ama Owusu', role: 'Program Manager, GESI Lead', bio: 'Gender equity and social inclusion.' },
  { initials: 'JE', name: 'Jemimah F. Eminsang', role: 'Project Officer', bio: 'Community empowerment and advocacy.' },
]

const partners = ['USAID', 'University of Rhode Island', 'European Union', 'Fisheries Commission', 'West Africa Shellfish Initiative', 'Coastal Resources Center']

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAutoAdvance = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
  }, [])

  useEffect(() => {
    startAutoAdvance()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [startAutoAdvance])

  const goToSlide = (n: number) => {
    setCurrentSlide(n)
    startAutoAdvance()
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    startAutoAdvance()
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    startAutoAdvance()
  }

  return (
    <>
      <section className="hero-slider" id="heroSlider">
        <div className="hero-bg-image" style={{ backgroundImage: 'linear-gradient(135deg, #073D47 0%, #0D5E6E 40%, #158096 100%)' }}></div>
        <button className="slider-arrow prev" onClick={prevSlide} aria-label="Previous slide">‹</button>
        <button className="slider-arrow next" onClick={nextSlide} aria-label="Next slide">›</button>
        <div className="container hero-slider-inner">
          {slides.map((slide, i) => (
            <div key={i} className={`slide${i === currentSlide ? ' active' : ''}`}>
              <div className="slide-grid">
                <div>
                  <span className="hero-tagline">{slide.tagline}</span>
                  <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', lineHeight: 1.15, marginBottom: 'var(--spacing-lg)' }}>{slide.title}</h1>
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 'var(--spacing-xl)', opacity: 0.9 }}>{slide.desc}</p>
                  <div className="hero-actions">
                    {slide.actionPrimary.href.startsWith('http') ? (
                      <a href={slide.actionPrimary.href} className="btn btn-primary" target="_blank" rel="noopener">{slide.actionPrimary.text}</a>
                    ) : (
                      <Link href={slide.actionPrimary.href} className="btn btn-primary">{slide.actionPrimary.text}</Link>
                    )}
                    <Link href={slide.actionSecondary.href} className="btn btn-outline">{slide.actionSecondary.text}</Link>
                  </div>
                </div>
                <div>
                  {slide.extraImage ? (
                    <img
                      src={i === 1 ? '/images/ghana-fishermen.jpg' : '/images/beach-coast.jpg'}
                      alt={i === 1 ? 'Clam Depuration Facility, Ada' : 'MPA Declaration Ceremony'}
                      style={{ borderRadius: 'var(--radius-lg)', width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="hero-stats-overlay">
                      {slide.stats!.map((stat, j) => (
                        <div key={j} className="hero-stat">
                          <div className="hero-stat-num"><Counter value={stat.num} suffix={stat.suffix} /></div>
                          <div className="hero-stat-label">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-controls">
          {slides.map((_, i) => (
            <button key={i} className={`slider-dot${i === currentSlide ? ' active' : ''}`} onClick={() => goToSlide(i)} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>
      </section>

      <HeroIntro />

      <section className="section section-sand">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Core Program Areas</h2>
            <p className="section-desc">We work across four interconnected pillars to safeguard Ghana&apos;s coastal and marine ecosystems.</p>
          </div>
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon pillar-icon-livelihoods"><Sprout size={22} color="white" /></div>
              <h3>Sustainable Livelihoods</h3>
              <p>Designing and implementing livelihood interventions to reduce poverty and food insecurity in coastal communities.</p>
              <Link href="/expertise" className="pillar-link">Learn More →</Link>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon pillar-icon-landscapes"><Waves size={22} color="white" /></div>
              <h3>Coastal Landscapes</h3>
              <p>Integrated and participatory approaches to coastal landscape issues, deploying a wide range of tools at multiple scales.</p>
              <Link href="/expertise" className="pillar-link">Learn More →</Link>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon pillar-icon-gender"><HeartHandshake size={22} color="white" /></div>
              <h3>Gender &amp; Inclusion</h3>
              <p>Gender assessments, mainstreaming strategies, and targeted interventions to address gender-based violence in fishing communities.</p>
              <Link href="/expertise" className="pillar-link">Learn More →</Link>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon pillar-icon-fisheries"><Fish size={22} color="white" /></div>
              <h3>Fisheries Governance</h3>
              <p>Research, multi-stakeholder engagements, and policy advocacy for sustainable fisheries management in Ghana.</p>
              <Link href="/expertise" className="pillar-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Latest Stories</span>
            <h2 className="section-title">News &amp; Publications</h2>
          </div>
          <div className="card-grid">
            {newsItems.map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="card">
                <img src={item.img} alt={item.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                <div className="card-body">
                  <div className="card-meta">{item.meta}</div>
                  <h3>{item.title}</h3>
                  <span className="card-link">Read More →</span>
                </div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
            <Link href="/news" className="btn btn-sand">View All News →</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Our Impact</span>
            <h2 className="section-title">Making Our Coast a Better Place</h2>
            <p className="section-desc">In collaboration with local and international partners, we address food security, climate change, over-fishing, gender inequality, urbanization, and poverty.</p>
          </div>
          <div className="impact-grid">
            {impactStats.map((stat, i) => (
              <div key={i} className="impact-stat">
                <div className="impact-stat-num">
                  <Counter value={stat.num} suffix={stat.suffix} />
                </div>
                <div className="impact-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header center" style={{ marginBottom: '32px' }}>
            <span className="section-label">Watch Our Story</span>
            <h2 className="section-title">Hɛn Mpoano in Action</h2>
          </div>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 'var(--radius-lg)', maxWidth: 900, margin: '0 auto' }}>
            <iframe
              src="https://www.youtube.com/embed/KyT9MTNlDFU"
              title="Hɛn Mpoano Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Our Team</span>
            <h2 className="section-title">Meet the People Behind the Work</h2>
            <p className="section-desc">From board members to field officers — a dedicated team working across Ghana&apos;s coast.</p>
          </div>
          <div className="team-grid" style={{ maxWidth: 800, margin: '0 auto' }}>
            {teamPreview.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-avatar">{member.initials}</div>
                <h3>{member.name}</h3>
                <div className="role">{member.role}</div>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
            <Link href="/team" className="btn btn-sand">View Full Team →</Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Join Us in Protecting Our Coast</h2>
          <p>Whether you&apos;re looking to work with us, volunteer your time, or support our mission — there&apos;s a place for you at Hɛn Mpoano.</p>
          <div className="cta-actions">
            <Link href="/volunteer" className="btn btn-primary">Become a Volunteer</Link>
            <Link href="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Our Partners</span>
            <h2 className="section-title">Collaborating for Impact</h2>
          </div>
          <div className="partner-grid">
            {partners.map((name, i) => (
              <div key={i} className="partner-item">{name}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}