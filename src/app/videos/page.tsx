import type { Metadata } from 'next'
import Link from 'next/link'
import { Film } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Videos',
  description: 'Watch videos about our work and impact.',
}

export default function VideosPage() {
  return (
    <>
      <section className="page-hero page-hero-green">
        <div className="container">
          <h1>Videos</h1>
          <p>Watch our work in action.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container" style={{ textAlign: 'center', padding: 'var(--spacing-4xl) 0' }}>
          <div style={{ marginBottom: 'var(--spacing-lg)' }}><Film size={64} /></div>
          <h2 className="section-title" style={{ marginBottom: 'var(--spacing-md)' }}>Coming Soon</h2>
          <p className="section-desc" style={{ margin: '0 auto var(--spacing-xl)' }}>
            We&apos;re compiling video stories from the field. In the meantime, visit our YouTube channel.
          </p>
          <div className="cta-actions" style={{ justifyContent: 'center' }}>
            <a href="https://henmpoano.org/videos" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Watch on YouTube</a>
            <Link href="/about" className="btn btn-outline" style={{ borderColor: 'var(--color-teal-700)', color: 'var(--color-teal-700)' }}>About Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
