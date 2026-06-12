import type { Metadata } from 'next'
import Link from 'next/link'
import { Sprout, Waves, HeartHandshake, Fish, Target, Quote, BookOpen, Users, TreePine, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Expertise',
  description: 'Hɛn Mpoano works across four interconnected program pillars: Sustainable Livelihoods, Coastal Landscapes, Gender & Inclusion, and Fisheries Governance — with real projects, case studies, and outcomes.',
}

export default function ExpertisePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-tagline">Explore What We Love To Do</span>
          <h1>Our Expertise</h1>
          <p>Hɛn Mpoano welcomes individuals, organizations, and businesses to join us in our mission to safeguard Ghana&apos;s coastal and marine ecosystems — through four interconnected program pillars built on research, community partnership, and on-the-ground action.</p>
        </div>
      </section>

      {/* ── Section: Program Overview ── */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Our Programs</span>
            <h2 className="section-title">Four Pillars, One Mission</h2>
            <p className="section-desc">Each pillar is grounded in years of research, community-led implementation, and measurable impact. Together they form an integrated approach to coastal and marine stewardship.</p>
          </div>

          {/* Quick-nav to sections */}
          <div className="expertise-nav" style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-sm)', flexWrap: 'wrap', marginBottom: 'var(--spacing-3xl)' }}>
            <a href="#sustainable-livelihoods" className="btn btn-small" style={{ border: '1px solid var(--color-accent-green)', color: 'var(--color-accent-green)', background: 'white' }}>Sustainable Livelihoods</a>
            <a href="#coastal-landscapes" className="btn btn-small" style={{ border: '1px solid var(--color-teal-700)', color: 'var(--color-teal-700)', background: 'white' }}>Coastal Landscapes</a>
            <a href="#gender" className="btn btn-small" style={{ border: '1px solid var(--color-accent-orange)', color: 'var(--color-accent-orange)', background: 'white' }}>Gender & Inclusion</a>
            <a href="#fisheries-governance" className="btn btn-small" style={{ border: '1px solid var(--color-accent-yellow)', color: '#8B7A3A', background: 'white' }}>Fisheries Governance</a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PILLAR 1: Sustainable Livelihoods
         ════════════════════════════════════════ */}
      <section id="sustainable-livelihoods" className="section section-sand">
        <div className="container">
          <div className="expertise-pillar">
            <div className="expertise-pillar-header">
              <span className="pillar-icon pillar-icon-livelihoods" style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)' }}><Sprout size={26} /></span>
              <div>
                <span className="section-label">Pillar One</span>
                <h2 className="section-title">Sustainable Livelihoods</h2>
              </div>
            </div>

            <div className="expertise-content">
              <p className="expertise-intro">Local communities along Ghana&apos;s coast depend on natural resources for their livelihoods — fishing, clam harvesting, small-scale farming, and trading. But over-exploitation of these resources threatens both the environment and the people who rely on it. Hɛn Mpoano designs and implements sustainable livelihood interventions that reduce poverty and food insecurity while protecting the natural resource base.</p>

              <h3 className="expertise-subhead">Our Approach</h3>
              <p>Rather than offering handouts, we work <strong>with</strong> communities to identify income-generating activities that are both profitable and environmentally sustainable. Our methodology centres on participatory needs assessments, skills mapping, and co-design of interventions that communities themselves can own and sustain.</p>

              <h3 className="expertise-subhead">Key Interventions</h3>
              <ul className="expertise-list">
                <li><strong>Village Savings and Loans Associations (VSLAs):</strong> Helping community members form savings groups that provide access to small loans for business start-ups, education, and household needs — without the barriers of formal banking.</li>
                <li><strong>Green Enterprises:</strong> Supporting small businesses built on sustainable resource use — from mushroom cultivation using agricultural waste to eco-friendly crafts and beekeeping.</li>
                <li><strong>Vocational Skills Training:</strong> Offering practical skills such as soap making, food processing, and tailoring — particularly for women and youth who face the greatest barriers to economic participation.</li>
                <li><strong>Clam Depuration Technology:</strong> A first-of-its-kind purification system in West Africa that removes sand and contaminants from clams before they reach market, increasing food safety, shelf life, and market value for women clam processors.</li>
              </ul>

              <div className="expertise-case-study">
                <h4><Quote size={18} style={{ verticalAlign: 'middle', marginRight: 'var(--spacing-xs)' }} /> Case Study: Clam Depuration in Ada</h4>
                <p>In the Ada East District, women clam harvesters and processors faced a persistent challenge: the clams they harvested from the Volta River estuary were often gritty with sand, reducing their market value and limiting sales to local markets. Working with technical support from the West Africa Shellfish Knowledge and Outreach Hub (Shellfish Hub) at the University of Cape Coast, Hɛn Mpoano piloted a novel clam depuration system under the Sustainable Oceans Project (SOP).</p>
                <p>The system uses filtered seawater to flush sand and impurities from clams in a controlled environment, producing cleaner, safer, and more marketable products. When the Minister of Fisheries and Aquaculture, Hon. Emelia Arthur, visited the Kponkpo facility in 2026, she described it as &ldquo;a positive step toward building a stronger inland fisheries sector.&rdquo; The Member of Parliament for Ada pledged support for scaling the initiative, and Hɛn Mpoano is now exploring replication in another clam fishing community in the Volta Region under the EMPoWER Project.</p>
                <p className="expertise-outcome"><strong>Outcome:</strong> Improved food safety and market access for clam processors; national recognition of the technology; plans for community-led management and expansion to additional communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PILLAR 2: Coastal Landscapes
         ════════════════════════════════════════ */}
      <section id="coastal-landscapes" className="section section-light">
        <div className="container">
          <div className="expertise-pillar">
            <div className="expertise-pillar-header">
              <span className="pillar-icon pillar-icon-landscapes" style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)' }}><Waves size={26} /></span>
              <div>
                <span className="section-label">Pillar Two</span>
                <h2 className="section-title">Coastal Landscapes</h2>
              </div>
            </div>

            <div className="expertise-content">
              <p className="expertise-intro">Hɛn Mpoano views coastal landscapes as living, breathing socio-ecological systems — places where people and nature are deeply connected. In the face of population growth, biodiversity loss, rapid urbanization, and climate change, we take an integrated, multi-scale approach to building resilient coastal landscapes that work for both ecosystems and communities.</p>

              <h3 className="expertise-subhead">Our Approach</h3>
              <p>We use a combination of scientific tools — including Geographic Information Systems (GIS), remote sensing, and ecological monitoring — alongside traditional knowledge from local communities. By working across levels from individual households to district assemblies and national government, we ensure that local actions are backed by supportive policies.</p>

              <h3 className="expertise-subhead">Key Interventions</h3>
              <ul className="expertise-list">
                <li><strong>Mangrove Restoration &amp; Conservation:</strong> Community-led mangrove nurseries and planting programmes that protect coastlines, support biodiversity, and sequester carbon. Over 200,000 mangrove seedlings have been raised and planted across multiple sites.</li>
                <li><strong>Climate-Smart Agriculture:</strong> Training farmers in techniques that adapt to changing rainfall patterns, saltwater intrusion, and coastal erosion — including improved crop varieties and water management.</li>
                <li><strong>Land Use and Spatial Planning:</strong> Supporting local and municipal planning authorities to develop land-use plans that balance development, conservation, and community needs. This includes participatory mapping to document how communities use coastal space.</li>
                <li><strong>Greater Amanzule Wetlands Conservation:</strong> Protecting critical wetland habitats and biodiversity in the Greater Amanzule area, one of Ghana&apos;s most important coastal ecosystems.</li>
                <li><strong>Family Planning and Reproductive Health:</strong> Integrating reproductive health services into coastal conservation programmes, recognizing that population pressure drives resource over-exploitation.</li>
              </ul>

              <div className="expertise-case-study">
                <h4><Quote size={18} style={{ verticalAlign: 'middle', marginRight: 'var(--spacing-xs)' }} /> Case Study: Greater Amanzule Wetlands</h4>
                <p>The Greater Amanzule Wetlands, located in the Western Region, is a wetland of international importance — home to endangered species, critical fish nursery habitats, and communities whose livelihoods depend on its resources. Facing threats from illegal mining, mangrove destruction, and unsustainable farming practices, the area needed coordinated action.</p>
                <p>Hɛn Mpoano worked with local communities, traditional authorities, and the Wildlife Division of the Forestry Commission to develop a conservation strategy that combined law enforcement, alternative livelihoods, and habitat restoration. Community members were trained as wetland monitors, mangrove nurseries were established, and awareness campaigns reached thousands of residents.</p>
                <p>The project also explored the potential for creating protected areas within the wetland to preserve critical habitats of endangered species, including sea turtles and migratory birds.</p>
                <p className="expertise-outcome"><strong>Outcome:</strong> Strengthened local capacity for wetland monitoring; restored mangrove areas; improved awareness of wetland values; and a framework for long-term co-management between communities and state agencies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PILLAR 3: Gender & Inclusion
         ════════════════════════════════════════ */}
      <section id="gender" className="section section-sand">
        <div className="container">
          <div className="expertise-pillar">
            <div className="expertise-pillar-header">
              <span className="pillar-icon pillar-icon-gender" style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)' }}><HeartHandshake size={26} /></span>
              <div>
                <span className="section-label">Pillar Three</span>
                <h2 className="section-title">Gender &amp; Social Inclusion</h2>
              </div>
            </div>

            <div className="expertise-content">
              <p className="expertise-intro">Though Ghana has made progress towards gender equality under the Sustainable Development Goals, women and children — especially in coastal communities — remain disadvantaged in participation and decision-making in natural resource management. Hɛn Mpoano&rsquo;s gender programme works to mainstream the concerns and needs of women, men, and children into every aspect of coastal governance.</p>

              <h3 className="expertise-subhead">Our Approach</h3>
              <p>We begin with rigorous gender assessments and analyses that reveal who benefits from, and who is left out of, coastal resource management. This evidence then informs a gender mainstreaming strategy that is woven through all our programmes, supported by tailored training modules for both men and women.</p>

              <h3 className="expertise-subhead">Key Interventions</h3>
              <ul className="expertise-list">
                <li><strong>Gender Assessments &amp; Analysis:</strong> Systematic studies that map gendered roles in fisheries, access to resources, decision-making power, and the specific vulnerabilities women and girls face in coastal communities.</li>
                <li><strong>Gender Mainstreaming Strategy:</strong> A framework that ensures every Hɛn Mpoano programme — from mangrove restoration to fisheries governance — actively considers and addresses gender dimensions.</li>
                <li><strong>Women&rsquo;s Empowerment Programmes:</strong> Leadership training, financial literacy, and skills development specifically designed for women in fishing and fish-processing communities.</li>
                <li><strong>Addressing Gender-Based Violence:</strong> Recognizing that economic stress in fishing communities fuels gender-based violence, we work to integrate GBV awareness and referral pathways into our community programmes.</li>
                <li><strong>Youth and Children&rsquo;s Engagement:</strong> Ocean literacy programmes in schools, youth leadership opportunities, and activities that catch children young and involve them in coastal conservation.</li>
              </ul>

              <div className="expertise-case-study">
                <h4><Quote size={18} style={{ verticalAlign: 'middle', marginRight: 'var(--spacing-xs)' }} /> Case Study: Women&rsquo;s Leadership in MPA Governance</h4>
                <p>From the earliest stages of Ghana&rsquo;s first Marine Protected Area (MPA) process, Hɛn Mpoano made a deliberate choice: women&rsquo;s voices would not be an afterthought. Across the 21 communities in the Greater Cape Three Points area, we conducted targeted engagements with women fish processors, traders, and clam harvesters — groups often excluded from formal fisheries discussions.</p>
                <p>We supported women&rsquo;s representatives to participate in the MPA Technical Advisory Committee, ensuring that livelihood concerns — access to processing sites, credit for women&rsquo;s enterprises, and protection of mangrove areas where women collect fuelwood — were reflected in the MPA management framework. We also trained female community champions to serve as liaisons between their communities and MPA governance structures.</p>
                <p>As noted by Hɛn Mpoano Director Kofi Agbogah at the MPA declaration event: &ldquo;A sustainable ocean must also be a just and inclusive ocean.&rdquo;</p>
                <p className="expertise-outcome"><strong>Outcome:</strong> Women&rsquo;s representatives seated on MPA governance structures; gender-sensitive provisions in the MPA management plan; increased awareness of women&rsquo;s rights in coastal communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PILLAR 4: Fisheries Governance
         ════════════════════════════════════════ */}
      <section id="fisheries-governance" className="section section-light">
        <div className="container">
          <div className="expertise-pillar">
            <div className="expertise-pillar-header">
              <span className="pillar-icon pillar-icon-fisheries" style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)' }}><Fish size={26} /></span>
              <div>
                <span className="section-label">Pillar Four</span>
                <h2 className="section-title">Fisheries Governance</h2>
              </div>
            </div>

            <div className="expertise-content">
              <p className="expertise-intro">The decline in Ghana&rsquo;s fisheries resources has driven increased poverty, food insecurity, and loss of livelihoods in coastal communities. Overfishing, illegal practices, and weak enforcement have pushed fish stocks to critical levels. Hɛn Mpoano addresses this crisis through research, multi-stakeholder engagement, and policy advocacy — always grounded in the realities of fishing communities.</p>

              <h3 className="expertise-subhead">Our Approach</h3>
              <p>We take a three-pronged approach: generating evidence through rigorous research, bringing diverse actors together in multi-stakeholder platforms, and advocating for policies that are both effective and equitable. Crucially, we pilot community-based fisheries management initiatives on the ground, so that national policies are informed by real-world experience.</p>

              <h3 className="expertise-subhead">Key Interventions</h3>
              <ul className="expertise-list">
                <li><strong>Marine Protected Area (MPA) Support:</strong> Serving as the lead technical partner for Ghana&rsquo;s first MPA in the Greater Cape Three Points area — from community engagement and scientific studies to governance design and the development of the MPA Management Plan Framework.</li>
                <li><strong>Closed Season Advocacy &amp; Monitoring:</strong> Engaging communities to gather views on the annual closed fishing season, including perspectives on the exemption of artisanal canoe fishers, and advocating for stronger enforcement to prevent illegal fishing during closure periods.</li>
                <li><strong>Addressing Illegal, Unreported and Unregulated (IUU) Fishing:</strong> Education and sensitization campaigns that help fishing communities understand the long-term impacts of illegal fishing practices on their own livelihoods.</li>
                <li><strong>Fisheries Data Collection &amp; Research:</strong> Improving data on elasmobranchs (sharks and rays) and billfishes to inform conservation and management decisions in Ghana&rsquo;s waters.</li>
                <li><strong>Co-Management &amp; Community Governance:</strong> Supporting the formation and strengthening of fisheries co-management committees that give fishing communities a formal voice in how their local fisheries are managed.</li>
              </ul>

              <div className="expertise-case-study">
                <h4><Quote size={18} style={{ verticalAlign: 'middle', marginRight: 'var(--spacing-xs)' }} /> Case Study: Ghana&rsquo;s First Marine Protected Area</h4>
                <p>On 14 April 2026, Ghana declared its first-ever Marine Protected Area in the Greater Cape Three Points area of the Western Region — a milestone decades in the making. Hɛn Mpoano served as the technical partner from the very beginning, facilitating participatory processes in 21 coastal communities over several years.</p>
                <p>The journey was not easy. Many fishers were initially sceptical, fearing the MPA would lock them out of their fishing grounds. Hɛn Mpoano worked tirelessly — holding community durbars, one-on-one meetings with fishing chiefs, and &ldquo;listening sessions&rdquo; where local ecological knowledge was documented alongside scientific data. We showed communities that the MPA would protect fish breeding grounds, not punish fishers — and that they would be at the centre of its management.</p>
                <p>Following the declaration, the Fisheries Minister inaugurated the MPA Management Executive Committee (MEC), bringing together government institutions, traditional authorities, community representatives, and partners to guide implementation. Hɛn Mpoano continues to support the process through stakeholder engagement, capacity building in marine biodiversity management and conflict resolution, and the provision of monitoring equipment — including a dedicated boat for MPA patrols.</p>
                <p className="expertise-outcome"><strong>Outcome:</strong> Ghana&rsquo;s first MPA officially declared; multi-stakeholder governance structures in place; community ownership established; national blueprint for future MPAs developed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Get Involved</span>
            <h2 className="section-title">Support Our Work</h2>
            <p className="section-desc">Explore our publications to learn more, or get in touch to partner with us.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/publications" className="btn btn-sand">Browse Publications →</Link>
            <Link href="/contact" className="btn btn-primary" style={{ marginLeft: 'var(--spacing-sm)' }}>Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}