import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'News & Blog',
  description: 'Stay informed about our recent activities, events, and achievements.',
}

const newsItems = [
  { img: '/images/mangrove-swamp.jpg', title: "Hen Mpoano's Novel Clam Depuration Technology Gains Ministerial Attention in Ada", meta: 'June 2026', description: "West Africa's first clam purification system visited by Fisheries Minister Emelia Arthur at Kponkpo in Ada East District.", href: 'https://henmpoano.org/hen-mpoanos-novel-clam-depuration-technology-gains-ministerial-attention-in-ada/' },
  { img: '/images/dark-waves.jpg', title: '2026 Closed Season in Ghana: Stronger Enforcement and Community Voices at the Center', meta: '2026', description: "Ghana's fishing closed season features community-led enforcement and monitoring mechanisms.", href: 'https://henmpoano.org/2026-closed-season-in-ghana-stronger-enforcement-and-community-voices-at-the-center/' },
  { img: '/images/beach-coast.jpg', title: "From Journey to Declaration — Full Speech by Director Kofi Agbogah at Ghana's First MPA Declaration Event", meta: '2026', description: "The journey to Ghana's first Marine Protected Area declaration.", href: 'https://henmpoano.org/from-journey-to-declaration-full-speech-by-hen-mpoano-director-kofi-agbogah/' },
  { img: '/images/ocean-boat.jpg', title: 'Fisheries Minister Inaugurates MPA Management Executive Committee', meta: '2026', description: 'Ghana enters MPA implementation phase with Hɛn Mpoano support.', href: 'https://henmpoano.org/fisheries-minister-inaugurates-mpa-management-executive-committee-as-ghana-enters-implementation-phase-with-hen-mpoano-support/' },
  { img: '/images/ghana-fishermen.jpg', title: 'Vice President of Ghana Declares First Marine Protected Area', meta: '2026', description: "Ghana's first MPA declared with Hɛn Mpoano community engagement support.", href: 'https://henmpoano.org/vice-president-of-ghana-declares-first-marine-protected-area-supported-by-hen-mpoanos-community-engagement-efforts/' },
  { img: '/images/ghana-fishing-boats.jpg', title: 'Hɛn Mpoano Board Affirms Strategic Direction at 4th Meeting', meta: '2026', description: 'Board of Directors reaffirms organizational strategy.', href: 'https://henmpoano.org/hen-mpoano-board-affirms-strategic-direction-at-4th-meeting/' },
]

export default function NewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-tagline">Latest Updates</span>
          <h1>News &amp; Blog</h1>
          <p>Stay informed about our recent activities, events, and achievements.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="card-grid">
            {newsItems.map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="card">
                <img src={item.img} alt={item.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                <div className="card-body">
                  <span className="card-meta">{item.meta}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="card-link">Continue Reading →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
