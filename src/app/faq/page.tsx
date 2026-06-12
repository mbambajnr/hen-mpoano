import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about Ghana\'s closed fishing season, Marine Protected Areas, sustainable livelihoods, and coastal conservation.',
}

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  category: string
  icon: string
  items: FAQItem[]
}

const faqData: FAQCategory[] = [
  {
    category: 'Fisheries & Closed Season',
    icon: '🎣',
    items: [
      {
        question: 'What is the closed season and why does it happen?',
        answer: 'The closed season is a period each year when fishing is restricted to allow fish stocks time to recover and reproduce. Think of it like a fallow period for the ocean — just as farmers let land rest between planting seasons, we let fish populations rebuild during their peak spawning periods. Ghana\'s fish stocks have been declining steadily over the past two decades due to overfishing, so the closed season has become a critical tool for sustaining the fisheries that coastal communities depend on. It was first introduced for industrial trawlers in 2016 and has since expanded to include semi-industrial (inshore) vessels as well.',
      },
      {
        question: 'How long does the closed season last?',
        answer: 'The duration depends on the type of fishing vessel. For the 2026 closed season: industrial trawlers observe a two-month closure from 1 July to 31 August; semi-industrial (inshore) vessels observe a one-month closure from 1 to 31 July. Artisanal canoe fishers are currently exempt from the full closed season but must still observe weekly fishing holidays (usually Tuesdays) and comply with all existing fisheries regulations. The exemption of artisanal fishers is a topic of ongoing discussion among fishing communities and policymakers.',
      },
      {
        question: 'What are the penalties for fishing during the closed season?',
        answer: 'Fishing during the closed season is illegal under Section 47 of Ghana\'s Fisheries and Aquaculture Act, 2025 (Act 1146). Penalties can include seizure of catch and fishing gear, fines, suspension or revocation of fishing licences, and in serious cases, prosecution. In 2026, the Ministry of Fisheries and Aquaculture announced significantly intensified enforcement to ensure full compliance. Hɛn Mpoano supports stronger enforcement because without it, the benefits of the closed season are quickly eroded — illegal fishing during the closure undoes the conservation gains and undermines the sacrifice made by law-abiding fishers.',
      },
      {
        question: 'How does Hɛn Mpoano support communities during the closed season?',
        answer: 'We engage directly with coastal communities and stakeholders to gather their views on how the closed season affects them, and we advocate for measures that make the closure work better for everyone — including alternative livelihood options. Through our sustainable livelihoods programmes, we help fishing communities develop income-generating activities such as Village Savings and Loans Associations (VSLAs), vocational skills training, and green enterprises. We also work with government and partners to ensure that enforcement is fair and that communities have access to information about their rights and responsibilities during the closure.',
      },
    ],
  },
  {
    category: 'Marine Protected Area (MPA)',
    icon: '🌊',
    items: [
      {
        question: 'What is a Marine Protected Area?',
        answer: 'A Marine Protected Area (MPA) is a section of the ocean where human activities are managed to protect the natural environment. Think of it like a national park, but in the sea. Within an MPA, certain activities like fishing, mining, and construction may be restricted or managed differently to allow marine life — fish, sea turtles, mangroves, and other species — to thrive. Well-managed MPAs don\'t just protect nature; they also help rebuild fish populations, which means more fish for fishers in the surrounding areas. Ghana\'s MPA is a "multiple-use" MPA, meaning different zones allow different levels of activity, with some areas fully protected and others open to carefully managed sustainable use.',
      },
      {
        question: 'Where is Ghana\'s first MPA located?',
        answer: 'Ghana\'s first Marine Protected Area is located in the Greater Cape Three Points area of the Western Region. This area was chosen because of its rich marine biodiversity, critical fish breeding and nursery habitats, and the presence of the continental shelf close to shore, which creates productive fishing grounds. The MPA covers both marine and coastal areas that are ecologically connected. The official declaration was made on 14 April 2026 at Busua Beach Resort, marking a historic milestone for marine conservation in Ghana.',
      },
      {
        question: 'How does the MPA affect local fishing communities?',
        answer: 'The MPA is designed to benefit fishing communities over the long term, not to exclude them. While some areas within the MPA have restrictions on certain fishing methods, the overall goal is to rebuild fish populations so that there are more fish for everyone in the surrounding waters. Communities in all 21 villages around the MPA were consulted extensively during the planning process, and their knowledge informed the boundaries and rules. The MPA is co-managed — meaning community representatives sit on the management committee alongside government and traditional authorities, ensuring local voices are heard in how the MPA is run.',
      },
      {
        question: 'How was the community involved in the MPA declaration?',
        answer: 'Community involvement was the backbone of the entire MPA process. Rather than imposing the MPA from above, Hɛn Mpoano used a "bottom-up" approach that put communities at the centre. This included: holding community durbars and listening sessions in all 21 communities; documenting local ecological knowledge about fish behaviour, breeding seasons, and critical habitats; training local champions as MPA ambassadors; supporting women\'s representatives to participate in decision-making structures; and involving youth and school children in ocean literacy programmes. This careful, inclusive process built trust and ownership — fishers who were initially skeptical became some of the MPA\'s strongest advocates.',
      },
    ],
  },
  {
    category: 'Sustainable Livelihoods',
    icon: '🌱',
    items: [
      {
        question: 'How can my community benefit from livelihood programmes?',
        answer: 'Hɛn Mpoano works with communities in Ghana\'s coastal regions to identify and develop livelihood opportunities that are both sustainable and income-generating. If you\'re part of a coastal community interested in our support, the first step is usually through one of our project implementation areas. You can contact us directly via our website or through local district assemblies and traditional authorities who work with us. We typically begin with a participatory needs assessment to understand what resources, skills, and needs exist in your community, then co-design interventions that make sense for your specific context. We particularly prioritise women, youth, and groups that have been historically marginalised.',
      },
      {
        question: 'What kinds of livelihood interventions does Hɛn Mpoano support?',
        answer: 'We support a diverse range of livelihood interventions tailored to the specific context of each community. These include: green enterprises such as mushroom cultivation, beekeeping, and eco-friendly crafts; clam depuration technology that improves food safety and market value for women clam processors; vocational skills training like soap making, food processing, and tailoring; Village Savings and Loans Associations (VSLAs) that provide access to small loans without formal banking; climate-smart agriculture techniques that adapt to coastal conditions; and nature-based tourism opportunities linked to conservation areas. We also provide training in financial literacy, business management, and marketing to help community members succeed.',
      },
      {
        question: 'How do Village Savings and Loans Associations (VSLAs) work?',
        answer: 'A Village Savings and Loans Association (VSLA) is a community-managed savings group. Here\'s how it works: a group of 15–25 people from the same community agree to meet regularly (usually weekly) to save small amounts of money together. The savings are pooled into a fund, and members can borrow from this fund at a low interest rate agreed by the group. Loans are used for things like starting or expanding a small business, paying school fees, covering medical expenses, or buying inputs for farming or fishing. At the end of a cycle (usually 9–12 months), the accumulated savings and profits are shared back to members. VSLAs are powerful because they don\'t require a bank account or credit history — they rely on trust, transparency, and community accountability. Hɛn Mpoano helps communities establish VSLAs by training members in record-keeping, governance, and conflict resolution. Over 5,000 people have benefited from VSLA programmes through our projects.',
      },
      {
        question: 'What is a green enterprise and how can I start one?',
        answer: 'A green enterprise is a small business that uses natural resources in a sustainable way — meaning it doesn\'t deplete or damage the environment while generating income. Examples we support include: growing mushrooms using agricultural waste (which reduces pressure on forests for firewood); beekeeping (which pollinates crops and provides honey without harming trees); producing eco-friendly crafts from sustainably harvested materials; and processing and selling value-added seafood products. To start a green enterprise, you typically need: an idea that fits your local resources and skills; some basic training (which Hɛn Mpoano can help facilitate through our programmes); access to startup capital (often through a VSLA or micro-loan); and a market for your product. We provide training in business planning, financial management, and marketing to give community entrepreneurs a strong start.',
      },
    ],
  },
  {
    category: 'Coastal Conservation',
    icon: '🌴',
    items: [
      {
        question: 'Why are mangroves important?',
        answer: 'Mangroves are often called the "guardians of the coast" — and for good reason. These remarkable trees grow along tropical coastlines and provide a huge range of benefits. Their dense root systems protect shorelines from erosion and storm surges, acting as a natural barrier against waves. They serve as critical nursery habitats for fish, crabs, shrimp, and other marine species — many of the fish that end up on Ghanaian dinner plates spend part of their lives in mangrove forests. Mangroves are also powerful carbon stores, absorbing and locking away carbon dioxide at rates far higher than most land-based forests. And for coastal communities, mangroves provide firewood, construction materials, and habitat for the shellfish and crabs that are important sources of food and income. Despite their importance, mangroves in Ghana have been lost to development, overharvesting, and pollution.',
      },
      {
        question: 'How can I participate in mangrove restoration?',
        answer: 'There are several ways to get involved in mangrove restoration. You can join community-led mangrove planting events organised by Hɛn Mpoano and our partner organisations along the coast. You can help raise mangrove seedlings in community nurseries — which is often needed before planting seasons begin. You can volunteer to become a community mangrove monitor, helping to protect young mangroves from livestock, fire, and illegal cutting. Even if you can\'t join planting directly, you can support conservation by spreading awareness about the importance of mangroves in your community and advocating against activities that destroy them, such as using mangrove wood for smoking fish or clearing mangroves for salt mining. Contact us to learn about upcoming restoration activities in your area.',
      },
      {
        question: 'What can I do to reduce plastic waste on the coast?',
        answer: 'Plastic waste is a major threat to Ghana\'s coastal and marine environment. It chokes sea life, litters beaches, and breaks down into microplastics that enter the food chain. Here are practical steps you can take: reduce your use of single-use plastics like sachet water bags, plastic straws, and disposable containers; properly dispose of waste by using designated bins or taking it to collection points rather than dumping it on the beach or in waterways; participate in beach clean-up events organised in your community; support local recycling initiatives where they exist; and encourage your neighbours, friends, and local businesses to do the same. On a larger scale, you can advocate for better waste management infrastructure in your district and support policies that hold plastic producers accountable for the full lifecycle of their products.',
      },
      {
        question: 'How does climate change affect Ghana\'s coast?',
        answer: 'Climate change is already having serious effects on Ghana\'s coastline. Sea levels are rising, which increases coastal erosion and flooding — some communities have already lost homes and farmland to the encroaching sea. Rising ocean temperatures are affecting fish distribution and breeding, which means some fish species that coastal communities have relied on for generations are becoming less abundant. Changing rainfall patterns affect the flow of rivers into the ocean, which in turn affects the salinity and productivity of coastal waters and estuaries — impacting both fish and the mangroves that depend on freshwater. Ocean acidification (caused by the ocean absorbing more carbon dioxide) makes it harder for shellfish like clams and oysters to build their shells. Hɛn Mpoano addresses these challenges through Climate-Smart Agriculture, mangrove restoration (which helps protect coastlines and store carbon), and by helping communities diversify their livelihoods so they are less dependent on any single resource that may be affected by climate change.',
      },
    ],
  },
]

function FAQCategorySection({ category, icon, items }: FAQCategory) {
  return (
    <div className="faq-category-section">
      <div className="faq-category-header">
        <span className="faq-category-icon">{icon}</span>
        <h3 className="faq-category-title">{category}</h3>
      </div>
      <dl className="faq-list">
        {items.map((item, idx) => (
          <details key={idx} className="faq-item">
            <summary className="faq-question">{item.question}</summary>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </dl>
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-tagline">Questions? We Have Answers</span>
          <h1>Frequently Asked Questions</h1>
          <p>Common questions about Ghana&rsquo;s coastal environment, fisheries management, conservation, and how Hɛn Mpoano works with communities.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="section-header center">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Everything You Need to Know</h2>
            <p className="section-desc">Plain-language answers to the questions we hear most from fishing communities, students, and the general public about our work and the issues facing Ghana&rsquo;s coast.</p>
          </div>

          <div className="faq-category-nav" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)', justifyContent: 'center', marginBottom: 'var(--spacing-3xl)' }}>
            {faqData.map((cat) => (
              <a key={cat.category} href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}`} className="btn btn-small" style={{ border: '1px solid var(--color-gray-200)', color: 'var(--color-gray-600)', background: 'white' }}>
                {cat.icon} {cat.category}
              </a>
            ))}
          </div>

          {faqData.map((cat, i) => (
            <FAQCategorySection key={i} category={cat.category} icon={cat.icon} items={cat.items} />
          ))}
        </div>
      </section>

      <section className="section section-sand">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-header center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span className="section-label">Still Have Questions?</span>
            <h2 className="section-title">We&rsquo;re Here to Help</h2>
            <p className="section-desc">If you couldn&rsquo;t find the answer you were looking for, reach out to us directly.</p>
          </div>
          <Link href="/contact" className="btn btn-sand">Contact Us</Link>
          <Link href="/resources" className="btn btn-teal" style={{ marginLeft: 'var(--spacing-sm)' }}>Browse Resources →</Link>
        </div>
      </section>
    </>
  )
}