import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-tagline">404</span>
          <h1>Page Not Found</h1>
          <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container" style={{ textAlign: 'center', padding: 'var(--spacing-4xl) 0' }}>
          <div className="section-header center">
            <span className="section-label">Lost?</span>
            <h2 className="section-title">Let&apos;s Get You Back on Track</h2>
            <p className="section-desc">Here are some popular pages to explore.</p>
          </div>
          <div className="cta-actions" style={{ justifyContent: 'center', marginTop: 'var(--spacing-xl)' }}>
            <Link href="/" className="btn btn-teal">Homepage</Link>
            <Link href="/expertise" className="btn btn-sand">Our Work</Link>
            <Link href="/about" className="btn btn-outline" style={{ borderColor: 'var(--color-teal-700)', color: 'var(--color-teal-700)' }}>About Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
