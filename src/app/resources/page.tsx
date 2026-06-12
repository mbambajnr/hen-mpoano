import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, BookText, Lightbulb, FileText, Leaf, Fish, Waves, Droplets, HelpingHand } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Community guides, educational content, and plain-language explainers about coastal conservation, fisheries management, clam depuration, and sustainable livelihoods from Hɛn Mpoano.',
}

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-tagline">Learn & Understand</span>
          <h1>Resources</h1>
          <p>Practical guides, educational content, and plain-language explainers to help coastal communities, students, and the public understand the issues affecting Ghana&rsquo;s coast.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">For Communities</span>
            <h2 className="section-title">Community Guides</h2>
            <p className="section-desc">Easy-to-understand handbooks covering key topics that affect everyday life in coastal communities.</p>
          </div>

          <div className="resources-grid">
            <div className="resource-card">
              <span className="resource-icon"><BookOpen size={28} /></span>
              <h3>Understanding the Closed Season</h3>
              <p className="resource-desc">A practical guide for fishing communities explaining what the closed season means, why it happens, how it affects different types of fishers, and what your rights are during the closure period.</p>
              <ul className="resource-topics">
                <li>Purpose and legal basis of the closed season</li>
                <li>Timelines for industrial, inshore, and artisanal fishers</li>
                <li>Penalties for non-compliance</li>
                <li>Support available during the closure</li>
              </ul>
            </div>

            <div className="resource-card">
              <span className="resource-icon resource-icon-green"><HelpingHand size={28} /></span>
              <h3>Starting a Village Savings and Loans Association</h3>
              <p className="resource-desc">A step-by-step guide for communities that want to form their own VSLA, from finding initial members to setting rules, keeping records, and managing the shared fund.</p>
              <ul className="resource-topics">
                <li>How to form a VSLA group (15–25 members)</li>
                <li>Setting savings amounts and loan terms</li>
                <li>Record-keeping and transparency</li>
                <li>Share-out process at end of cycle</li>
              </ul>
            </div>

            <div className="resource-card">
              <span className="resource-icon resource-icon-teal"><Leaf size={28} /></span>
              <h3>Mangrove Planting Handbook</h3>
              <p className="resource-desc">Everything you need to know to start a community mangrove nursery and planting programme, including species identification, site selection, nursery management, and monitoring.</p>
              <ul className="resource-topics">
                <li>Identifying suitable planting sites</li>
                <li>Setting up a community nursery</li>
                <li>Best seasons and techniques for planting</li>
                <li>Protecting young mangroves from threats</li>
              </ul>
            </div>

            <div className="resource-card">
              <span className="resource-icon resource-icon-orange"><Droplets size={28} /></span>
              <h3>A Guide to Clam Depuration</h3>
              <p className="resource-desc">An introduction to the clam purification process developed by Hɛn Mpoano, explaining how depuration works, why it matters for food safety, and how communities can manage the technology.</p>
              <ul className="resource-topics">
                <li>What depuration is and why it matters</li>
                <li>How the Hɛn Mpoano system works</li>
                <li>Benefits for women clam processors</li>
                <li>Pathways for community ownership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Learn</span>
            <h2 className="section-title">Educational Content</h2>
            <p className="section-desc">Accessible explanations of the key environmental and social issues affecting Ghana&rsquo;s coast.</p>
          </div>

          <div className="resource-content-block">
            <h3 className="resource-content-title"><Leaf size={22} style={{ verticalAlign: 'middle', marginRight: 'var(--spacing-sm)' }} /> Why Mangroves Matter</h3>
            <p>Mangroves are one of nature&rsquo;s most remarkable ecosystems. These salt-tolerant trees grow along tropical shorelines like Ghana&rsquo;s, where freshwater from rivers meets the saltwater of the sea. They form dense, green forests at the water&rsquo;s edge — and they do far more than just look beautiful.</p>
            <p><strong>They protect the coastline.</strong> Mangrove roots form a natural barrier that absorbs wave energy and prevents erosion. During storms, they slow down water and reduce flooding inland. Communities behind healthy mangrove forests are safer from the impacts of rising seas.</p>
            <p><strong>They are fish nurseries.</strong> The tangled roots of mangroves provide shelter for young fish, crabs, shrimp, and shellfish. Many of the fish that Ghanaian families depend on for food and income spend their early days hidden among mangrove roots. Without mangroves, fish populations decline.</p>
            <p><strong>They fight climate change.</strong> Mangroves are incredible at capturing and storing carbon — up to four times more per hectare than tropical rainforests. They lock this carbon away in their roots and in the muddy soil beneath them, keeping it out of the atmosphere for centuries.</p>
            <p><strong>They support livelihoods.</strong> Mangroves provide firewood, timber for construction, and habitat for crabs and shellfish that communities harvest for food and sale. When well-managed, mangrove forests sustain these benefits generation after generation.</p>
            <p>Despite all this, Ghana has lost large areas of mangrove forest to urban development, salt mining, and overharvesting for firewood. Restoring them is one of the most effective things we can do for both people and the planet.</p>
          </div>

          <div className="resource-content-block">
            <h3 className="resource-content-title"><Fish size={22} style={{ verticalAlign: 'middle', marginRight: 'var(--spacing-sm)' }} /> What Happens During the Closed Season</h3>
            <p>Every year, Ghana sets aside time when fishing is restricted to give fish stocks a chance to recover. Here&rsquo;s what that looks like in practice — step by step.</p>
            <p><strong>Step 1 — Announcement.</strong> The Ministry of Fisheries and Aquaculture announces the closed season dates, usually several weeks in advance. This gives fishers, fish processors, and traders time to prepare. The dates are published in the media and communicated through fisheries offices and community leaders.</p>
            <p><strong>Step 2 — Active enforcement begins.</strong> During the closure, fisheries enforcement officers patrol the waters. Industrial trawlers must remain in port. Semi-industrial (inshore) vessels are not allowed to fish. The navy and marine police may also be involved in monitoring compliance. In recent years, enforcement has been significantly strengthened to address persistent illegal fishing.</p>
            <p><strong>Step 3 — Fish get a break.</strong> Without fishing pressure during peak spawning periods, adult fish can reproduce successfully. More juvenile fish survive to adulthood. Over time, this helps rebuild fish populations — but only if the closure is respected year after year.</p>
            <p><strong>Step 4 — Community support.</strong> Hɛn Mpoano and other organizations help fishing communities cope during the closure through livelihood support programmes, training, and alternative income opportunities. VSLAs, skills training, and awareness campaigns all play a role in making the closed season work for communities.</p>
            <p><strong>Step 5 — The season reopens.</strong> When the closure ends, fishers return to the water. The hope is that the fish they catch are now more abundant and more valuable. Scientists and fisheries managers monitor the results to see if fish stocks are recovering.</p>
            <p>The closed season is not a perfect solution on its own, but paired with strong enforcement and community participation, it is one of the most important tools Ghana has for protecting its fishing future.</p>
          </div>

          <div className="resource-content-block">
            <h3 className="resource-content-title"><Waves size={22} style={{ verticalAlign: 'middle', marginRight: 'var(--spacing-sm)' }} /> Understanding Marine Protected Areas</h3>
            <p>A Marine Protected Area is a section of the ocean where special rules help protect marine life and habitats. Think of it like a national park on land — but under the water. Here&rsquo;s what you need to know in simple terms.</p>
            <p><strong>Why create an MPA?</strong> The ocean is under enormous pressure. Too many fish are being caught, habitats are being destroyed by bottom-trawling and pollution, and climate change is warming the water. An MPA gives marine life a safe space where these pressures are reduced. Fish inside the MPA grow bigger and produce more young — and those young swim out into surrounding waters, benefiting fishers outside the MPA as well.</p>
            <p><strong>Who runs the MPA?</strong> In Ghana, the MPA is managed through a partnership between government agencies (the Fisheries Commission), traditional authorities, local communities, and civil society organizations like Hɛn Mpoano. A Management Executive Committee (MEC) brings these groups together to make decisions about how the MPA is run — ensuring no single group has sole control.</p>
            <p><strong>Are all fishing banned in an MPA?</strong> Not necessarily. Ghana&rsquo;s first MPA is a multiple-use MPA — which means different zones have different rules. Some areas may be fully protected (no fishing allowed), while others allow carefully managed fishing using sustainable methods. The goal is to balance conservation with the needs of fishing communities.</p>
            <p><strong>Does the MPA affect local communities?</strong> Yes — but in mostly positive ways. In the short term, fishers may need to change where and how they fish. But over the long term, the MPA helps rebuild fish populations, protect critical habitats, and sustain the livelihoods that depend on them. Communities were actively involved in planning the MPA from the start, and their knowledge and concerns shaped its design.</p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Explainers</span>
            <h2 className="section-title">Plain-Language Explainers</h2>
            <p className="section-desc">Technical concepts, explained simply. No jargon, just clear information you can use.</p>
          </div>

          <div className="resources-grid resources-explainer-grid">
            <div className="resource-card resource-card-feature">
              <span className="resource-icon resource-icon-teal"><Droplets size={28} /></span>
              <h3>How Clam Depuration Works</h3>
              <p className="resource-desc">Clam depuration is a simple but brilliant idea. Clams are filter-feeders — they pump water through their bodies to capture tiny food particles. But when the water they live in contains sand, bacteria, or other contaminants, those end up inside the clam too. When someone eats an unprocessed clam, they get a mouthful of grit — and potentially harmful bacteria.</p>
              <p className="resource-desc">The Hɛn Mpoano depuration system works like this: freshly harvested clams are placed in tanks filled with clean, filtered seawater. The water is circulated continuously, and the clams continue filter-feeding as they naturally would. But because the water is clean, the sand and contaminants they had inside their systems are flushed out and replaced with clean water. After 24–48 hours, the clams are significantly cleaner, safer, and have a longer shelf life.</p>
              <p className="resource-desc">The technology developed by Hɛn Mpoano — with support from the Shellfish Hub at the University of Cape Coast — is designed to be simple, low-cost, and operable by community members themselves. Women clam processors, who have traditionally sold gritty clams at low prices, can now supply cleaner, higher-value products to hotels, restaurants, and urban markets. The system has attracted national attention from the Ministry of Fisheries and is being prepared for expansion to additional communities.</p>
            </div>

            <div className="resource-card resource-card-feature">
              <span className="resource-icon resource-icon-green"><FileText size={28} /></span>
              <h3>What We Mean by &ldquo;Integrated Coastal Management&rdquo;</h3>
              <p className="resource-desc">&ldquo;Integrated Coastal Management&rdquo; (ICM) sounds like a lot of big words, but the idea is simple: the coast is a place where many different things happen at once — fishing, farming, tourism, housing, shipping, conservation, and more. All of these activities affect each other and the environment. Integrated Coastal Management means planning for all of these together, not in isolation.</p>
              <p className="resource-desc">Think of it this way: if a factory dumps waste into a river, it doesn&rsquo;t just affect the factory — it affects the fishers downstream, the mangroves along the bank, the shellfish in the estuary, and the people who eat that fish. And if the mangroves are cut down for firewood, the coast erodes faster, homes flood more easily, and the fish nursery habitat disappears. Everything is connected.</p>
              <p className="resource-desc">ICM brings together government agencies, traditional authorities, communities, businesses, and civil society to make decisions about the coast as a whole system. It considers economic development, social wellbeing, and environmental health together — not one at the expense of the others. Hɛn Mpoano uses this approach in all its work, from helping district assemblies develop land-use plans to working with communities on mangrove restoration and sustainable fisheries management.</p>
            </div>

            <div className="resource-card resource-card-feature">
              <span className="resource-icon resource-icon-orange"><BookText size={28} /></span>
              <h3>Fisheries Governance Explained</h3>
              <p className="resource-desc">Fisheries governance is a fancy term for a simple idea: who gets to make decisions about fish, and how are those decisions made? In Ghana, the answer involves many different people and institutions — and getting it right is essential for the future of coastal communities.</p>
              <p className="resource-desc">Good fisheries governance has three key ingredients: good information (knowing how many fish there are, who is catching them, and how), effective rules (laws and regulations that are clear, fair, and enforceable), and inclusive participation (meaning the people who depend on fish — fishers, processors, traders — have a real say in how fisheries are managed).</p>
              <p className="resource-desc">Ghana&rsquo;s fisheries are governed by a framework of laws, the most recent being the Fisheries and Aquaculture Act, 2025 (Act 1146). The Fisheries Commission is the main government body responsible for management. But governance is not just about government. Co-management committees, which include fishers and community representatives, play an increasingly important role in making decisions at the local level. Hɛn Mpoano works to strengthen these structures — through research that provides evidence for better decisions, multi-stakeholder platforms that bring different voices together, and advocacy that pushes for policies that work for both people and fish.</p>
              <p className="resource-desc">The goal is a system where fishing communities are not just told what to do, but are genuine partners in the decisions that affect their lives and livelihoods.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Want to Learn More?</h2>
          <p>Explore our publications, news, and story maps for deeper insights into our work.</p>
          <div className="cta-actions">
            <Link href="/publications" className="btn btn-primary">Browse Publications</Link>
            <Link href="/news" className="btn btn-outline">Read Our News</Link>
          </div>
        </div>
      </section>
    </>
  )
}