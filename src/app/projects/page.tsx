import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Past and ongoing projects implemented by Hɛn Mpoano in collaboration with our partners.',
}

const projects = [
  { title: 'Greater Amanzule Wetlands Conservation (GAW) Project', category: 'Past Project', img: '/images/mangrove-swamp.jpg', description: 'Wetlands conservation and biodiversity protection in the Greater Amanzule area.', href: 'https://henmpoano.org/ova_por/greater-amanzule-wetlands-conservation-gaw-project/' },
  { title: 'Protected Areas for Endangered Species in Greater Amanzule Wetland', category: 'Past Project', img: '/images/ghana-fishing-boats.jpg', description: 'Exploring potential for protected areas to preserve critical habitats of endangered species.', href: 'https://henmpoano.org/ova_por/exploring-the-potential-for-the-creation-of-protected-areas-to-preserve-critical-habitats-of-endangered-species-in-ghanas-greater-amanzule-wetland/' },
  { title: 'Addressing Illegal Fishing Through Education and Sensitization', category: 'Past Project', img: '/images/ghana-fishing-nets.jpg', description: 'Education and stakeholder sensitization for sustainable fisheries management in Ghana.', href: 'https://henmpoano.org/ova_por/addressing-illegal-fishing-through-education-and-sensitization-of-stakeholders-for-sustainable-fisheries-management-in-ghana/' },
  { title: 'Lower Ankobra River Basin Livelihoods Improvement (LABLIBiC)', category: 'Past Project', img: '/images/waves-rocks.jpg', description: 'Livelihoods improvement and biodiversity conservation in the Lower Ankobra River Basin.', href: 'https://henmpoano.org/ova_por/lower-ankobra-river-basin-livelihoods-improvement-and-biodiversity-conservation-lablibic-project/' },
  { title: 'Sustainable Fisheries Management Project (SFMP)', category: 'Past Project', img: '/images/ocean-boat.jpg', description: 'USAID-funded project promoting sustainable fisheries management in Ghana.', href: 'https://henmpoano.org/ova_por/sustainable-fisheries-management-project-sfmp/' },
  { title: 'Elasmobranchs and Billfishes Conservation', category: 'Past Project', img: '/images/dark-waves.jpg', description: 'Enhancing management and conservation through improved fisheries data collection.', href: 'https://henmpoano.org/ova_por/enhancing-the-management-and-conservation-of-elasmobranchs-and-billfishes-through-improved-fisheries-data-collection-and-characterization-of-knowledge-on-harvest-and-trade-in-ghana/' },
]

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-tagline">Our Work</span>
          <h1>Projects</h1>
          <p>Past and ongoing projects implemented by Hɛn Mpoano in collaboration with our partners.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Past Projects</h2>
          </div>
          <div className="card-grid">
            {projects.map((project, i) => (
              <a key={i} href={project.href} target="_blank" rel="noopener noreferrer" className="card">
                <img src={project.img} alt={project.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                <div className="card-body">
                  <div className="card-meta">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="card-link">View Project →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Want to Support Our Work?</h2>
          <p>Your contribution helps us protect Ghana&apos;s coast for future generations.</p>
          <div className="cta-actions">
            <Link href="/volunteer" className="btn btn-primary">Volunteer</Link>
            <Link href="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
