import type { Metadata } from 'next'
import Link from 'next/link'
import { Map } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Story Maps',
  description: 'Explore our interactive story maps.',
}

export default function StoryMapsPage() {
  return (
    <>
      <section className="page-hero page-hero-green">
        <div className="container">
          <h1>Story Maps</h1>
          <p>Explore our work through interactive maps.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container" style={{ textAlign: 'center', padding: 'var(--spacing-4xl) 0' }}>
          <div style={{ marginBottom: 'var(--spacing-lg)' }}><Map size={64} /></div>
          <h2 className="section-title" style={{ marginBottom: 'var(--spacing-md)' }}>Coming Soon</h2>
          <p className="section-desc" style={{ margin: '0 auto var(--spacing-xl)' }}>
            We&apos;re developing interactive story maps that will showcase our projects, field sites, and impact across Ghana&apos;s coastal landscape.
          </p>
          <div className="cta-actions" style={{ justifyContent: 'center' }}>
            <Link href="/publications" className="btn btn-teal">View Publications</Link>
            <Link href="/projects" className="btn btn-outline" style={{ borderColor: 'var(--color-teal-700)', color: 'var(--color-teal-700)' }}>Explore Projects</Link>
          </div>
        </div>
      </section>
    </>
  )
}
