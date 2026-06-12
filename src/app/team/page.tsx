import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the dedicated team behind Hɛn Mpoano — board, directors, managers, and technical staff.',
}

function TeamCard({ initials, name, role, bio }: { initials: string; name: string; role: string; bio?: string }) {
  return (
    <div className="team-card">
      <div className="team-avatar">{initials}</div>
      <h3>{name}</h3>
      <div className="role">{role}</div>
      {bio && <div className="bio">{bio}</div>}
    </div>
  )
}

function TeamSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="team-section">
      <h2 className="team-category">{title}</h2>
      <div className="team-grid">
        {children}
      </div>
    </div>
  )
}

export default function TeamPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-tagline">Meet the Team</span>
          <h1>Our Team</h1>
          <p>Dedicated professionals working to safeguard Ghana&apos;s coastal and marine ecosystems.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <TeamSection title="Our Board of Directors">
            <TeamCard initials="KK" name="Dr K.A. Koranteng" role="Board Chair" />
            <TeamCard initials="GY" name="Prof. Georgina Yaa Oduro" role="Board Member" />
            <TeamCard initials="KA" name="Keziah Amponsah-Jackson Esq." role="Board Member" />
            <TeamCard initials="NA" name="Nana Kwesi Agyeman" role="Board Member" />
            <TeamCard initials="HK" name="Dr. Holy Kportogbi" role="Board Member" />
          </TeamSection>

          <TeamSection title="Our Directors">
            <TeamCard initials="KA" name="Kofi Agbogah" role="Director" bio="30 years in fisheries, environmental and coastal management." />
            <TeamCard initials="SK" name="Stephen Kankam" role="Deputy Director" />
          </TeamSection>

          <TeamSection title="Our Finance Staff">
            <TeamCard initials="RA" name="Robert Allou" role="Finance & Admin Manager" />
            <TeamCard initials="AM" name="Alex Mensah" role="Accounts Officer" />
          </TeamSection>

          <TeamSection title="Our Program Managers">
            <TeamCard initials="DG" name="Delali Gamor" role="Marine & Coastal Projects Manager" />
            <TeamCard initials="PK" name="Peter Canicius Kuusaana" role="Fisheries Manager" />
            <TeamCard initials="DN" name="Daniel Nii Doku Nortey" role="Programme Manager" />
            <TeamCard initials="JM" name="Justice Camillus Mensah" role="Programme Manager" />
            <TeamCard initials="AA" name="Adiza Ama Owusu" role="Programme Manager, GESI Lead" bio="Gender equity and social inclusion in fisheries." />
          </TeamSection>

          <TeamSection title="Our Coordinators">
            <TeamCard initials="DB" name="Doe Bona-Mensah" role="Communications Coordinator" />
            <TeamCard initials="SR" name="Samuel-Richard Bogobley" role="Project Officer / Communications Coordinator" />
          </TeamSection>

          <TeamSection title="Our Technical Staff">
            <TeamCard initials="ED" name="Emmanuel Obeng Dekyi" role="Project Officer" />
            <TeamCard initials="JS" name="John Swanzy-Baffoe" role="GIS & Remote Sensing Assistant" />
            <TeamCard initials="JA" name="Jemima Amoh" role="Fisheries Co-Management Officer" />
            <TeamCard initials="DO" name="David Osei" role="Project Officer" />
            <TeamCard initials="AK" name="Akpakli Edudzi Korku" role="Land Use Officer" />
            <TeamCard initials="PD" name="Peter Hostin Dadzie" role="M&E Assistant" />
            <TeamCard initials="JE" name="Jennifer Eshilley" role="Programmes Officer" />
            <TeamCard initials="GO" name="Georgeart Enyonam Opare" role="Gender & Inclusion Officer" />
            <TeamCard initials="SO" name="Emmanuel Sandy Ofosu" role="Fisheries Officer" />
            <TeamCard initials="AU" name="Augustine Abotsi" role="Fisheries Officer" />
            <TeamCard initials="AI" name="Ali Issah" role="Logistics Officer / Driver" />
            <TeamCard initials="AA" name="Augustine Adamtey" role="Field Officer" />
            <TeamCard initials="YM" name="Yussif Mohammed Al-Amin" role="Driver" />
            <TeamCard initials="CH" name="Caroline Hammond" role="Gender & Social Inclusion Officer" />
            <TeamCard initials="JF" name="Jemimah Fredericka Eminsang" role="Project Officer" bio="Coastal community empowerment and advocacy." />
          </TeamSection>
        </div>
      </section>

      <section className="section-sand" style={{ padding: 'var(--spacing-2xl) 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: 'var(--spacing-md)' }}>Join Our Team</h2>
          <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-lg)' }}>Interested in working with us? We&apos;re always looking for talented individuals.</p>
          <Link href="/volunteer" className="btn btn-sand">Apply as a Volunteer</Link>
          <Link href="/contact" className="btn btn-teal" style={{ marginLeft: 'var(--spacing-sm)' }}>Contact Us</Link>
        </div>
      </section>
    </>
  )
}
