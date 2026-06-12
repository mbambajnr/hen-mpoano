import { Target, Eye } from 'lucide-react'

export default function HeroIntro() {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="hero-intro-grid">
          <div>
            <span className="section-label">Hɛn Mpoano</span>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2.8rem", lineHeight: 1.15, marginBottom: "var(--spacing-lg)", color: "var(--color-gray-800)" }}>
              <em style={{ color: "var(--color-teal-700)", fontStyle: "normal" }}>Our Coast,</em> Our Future
            </h1>
            <p style={{ color: "var(--color-gray-600)", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "var(--spacing-xl)" }}>
              Hɛn Mpoano is a Ghanaian non-governmental organization (NGO) established to provide technical, policy and extension support to coastal communities, emerging civil society groups, traditional authorities, government institutions and the private sector to ensure inclusive and integrated management of Ghana&apos;s coastal and marine ecosystems.
            </p>
            <a href="/expertise" className="btn btn-sand">See More Of What We Do →</a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-lg)" }}>
            <div className="pillar-card" style={{ margin: 0 }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "var(--spacing-sm)" }}><Target size={24} /></div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", marginBottom: "var(--spacing-sm)" }}>Our Mission</h3>
              <p style={{ color: "var(--color-gray-600)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "var(--spacing-md)" }}>
                Provide technical, policy and extension support to actors in government, private sector and civil society through capacity building, research, networking...
              </p>
              <a href="/about" className="pillar-link">Read More →</a>
            </div>

            <div className="pillar-card" style={{ margin: 0 }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "var(--spacing-sm)" }}><Eye size={24} /></div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", marginBottom: "var(--spacing-sm)" }}>Our Vision</h3>
              <p style={{ color: "var(--color-gray-600)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "var(--spacing-md)" }}>
                We envision a world where inclusive and integrated management of coastal and marine ecosystems generate long-term benefits to nature and people.
              </p>
              <a href="/about" className="pillar-link">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
