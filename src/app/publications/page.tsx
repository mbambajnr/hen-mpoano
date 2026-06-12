import type { Metadata } from 'next'
import PublicationFilter from './PublicationFilter'

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Explore our research, reports, and technical publications on coastal and marine governance.',
}

const pubs = [
  { title: "Ghana's Mangroves: Spatio-Temporal Analysis of Mangrove Ecosystem, Carbon Stocks and Fisheries", category: 'Climate Change Publications', date: 'Feb 2025', description: 'Comprehensive analysis of mangrove ecosystems, carbon stocks, and fisheries in Ghana.', href: 'https://henmpoano.org/ova_doc/ghanas-mangroves-spatio-temporal-analysis-of-mangrove-ecosystem-carbon-stocks-and-fisheries/' },
  { title: 'Progress Report: LABLIBiC Project Phase II', category: 'Climate Change Publications', date: 'Feb 2024', description: 'Progress report on the Lower Ankobra River Basin Livelihoods Improvement and Biodiversity Conservation Project.', href: 'https://henmpoano.org/ova_doc/progress-report-lower-ankobra-river-basin-livelihoods-improvement-and-biodiversity-conservation-lablibic-project-phase-ii/' },
  { title: 'Community-Based Mangrove Forest Management: Implications for Local Livelihoods', category: 'Sustainable Livelihood Publication', date: 'Feb 2024', description: 'Study along the Volta estuary catchment area examining mangrove management impacts.', href: 'https://henmpoano.org/ova_doc/community-based-mangrove-forest-management-implications-for-local-livelihoods-and-coastal-resource-conservation-along-the-volta-estuary-catchment-area-of-ghana/' },
  { title: 'Green-Green: A Threat to Livelihoods in Coastal Communities in the Western Region', category: 'Sustainable Livelihood Publication', date: 'Feb 2024', description: 'Analysis of environmental threats to coastal community livelihoods.', href: 'https://henmpoano.org/ova_doc/green-green-a-threat-to-livelihoods-in-coastal-communities-in-the-western-region/' },
  { title: 'Improving Livelihoods Through Plastic Waste Management in Coastal Communities', category: 'Sustainable Livelihood Publication', date: 'Feb 2024', description: 'Plastic waste management as a livelihood strategy in coastal communities of the Western Region.', href: 'https://henmpoano.org/ova_doc/improving-livelihoods-through-plastic-waste-management-in-coastal-communities-of-the-western-region-of-ghana/' },
  { title: 'More Fisheries Publications', category: 'Fisheries Resources Publications', date: '', description: 'View our full collection of fisheries resources publications.', href: 'https://henmpoano.org/cat_doc/fisheries-resources-publications/' },
]

export default function PublicationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-tagline">Research &amp; Publications</span>
          <h1>Publications</h1>
          <p>Explore our research, reports, and technical publications on coastal and marine governance.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Document Library</span>
            <h2 className="section-title">Filter by Category</h2>
          </div>
          <PublicationFilter pubs={pubs} />
        </div>
      </section>
    </>
  )
}
