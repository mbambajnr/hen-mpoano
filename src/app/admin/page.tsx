import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { FileText, Briefcase, MessageSquare, Users, Calendar, HelpCircle, Handshake, MessageCircle, Image } from 'lucide-react'

async function getStats() {
  const { prisma } = await import('@/lib/prisma')
  const [posts, publications, jobs, messages, volunteers, events, faqs, partners, testimonials, gallery] = await Promise.all([
    prisma.blogPost.count(),
    prisma.publication.count(),
    prisma.jobPosting.count({ where: { isActive: true } }),
    prisma.contactMessage.count({ where: { isRead: false } }),
    prisma.volunteer.count({ where: { read: false } }),
    prisma.event.count({ where: { isPast: false } }),
    prisma.fAQ.count(),
    prisma.partner.count({ where: { isActive: true } }),
    prisma.testimonial.count({ where: { isActive: true } }),
    prisma.galleryItem.count({ where: { isPublished: true } }),
  ])
  return { posts, publications, jobs, messages, volunteers, events, faqs, partners, testimonials, gallery }
}

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  const stats = await getStats()

  const statCards = [
    { label: 'Blog Posts', value: stats.posts, href: '/admin/posts', color: 'var(--color-teal-500)' },
    { label: 'Publications', value: stats.publications, href: '/admin/publications', color: 'var(--color-accent-green)' },
    { label: 'Active Jobs', value: stats.jobs, href: '/admin/jobs', color: 'var(--color-accent-orange)' },
    { label: 'Unread Messages', value: stats.messages, href: '/admin/messages', color: 'var(--color-accent-yellow)' },
    { label: 'New Volunteers', value: stats.volunteers, href: '/admin/volunteers', color: 'var(--color-accent-green)' },
    { label: 'Upcoming Events', value: stats.events, href: '/admin/events', color: 'var(--color-teal-500)' },
    { label: 'FAQs', value: stats.faqs, href: '/admin/faqs', color: 'var(--color-gray-600)' },
    { label: 'Active Partners', value: stats.partners, href: '/admin/partners', color: 'var(--color-accent-green)' },
    { label: 'Testimonials', value: stats.testimonials, href: '/admin/testimonials', color: 'var(--color-accent-orange)' },
    { label: 'Gallery Items', value: stats.gallery, href: '/admin/gallery', color: 'var(--color-teal-500)' },
  ]

  const quickActions = [
    { label: 'Blog Posts', desc: 'Manage news and blog content.', href: '/admin/posts', newHref: '/admin/posts/new', icon: FileText },
    { label: 'Publications', desc: 'Manage research and reports.', href: '/admin/publications', newHref: '/admin/publications/new', icon: FileText },
    { label: 'Job Postings', desc: 'Manage career opportunities.', href: '/admin/jobs', newHref: '/admin/jobs/new', icon: Briefcase },
    { label: 'Messages', desc: 'View contact form submissions.', href: '/admin/messages', icon: MessageSquare },
    { label: 'Volunteers', desc: 'View volunteer applications.', href: '/admin/volunteers', icon: Users },
    { label: 'Events', desc: 'Manage upcoming and past events.', href: '/admin/events', newHref: '/admin/events/new', icon: Calendar },
    { label: 'FAQs', desc: 'Manage frequently asked questions.', href: '/admin/faqs', newHref: '/admin/faqs/new', icon: HelpCircle },
    { label: 'Partners', desc: 'Manage partner organizations.', href: '/admin/partners', newHref: '/admin/partners/new', icon: Handshake },
    { label: 'Testimonials', desc: 'Manage quotes and reviews.', href: '/admin/testimonials', newHref: '/admin/testimonials/new', icon: MessageCircle },
    { label: 'Gallery', desc: 'Manage photo gallery images.', href: '/admin/gallery', newHref: '/admin/gallery/new', icon: Image },
  ]

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-2xl)' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-teal-900)' }}>Dashboard</h1>
          <p style={{ color: 'var(--color-gray-400)', fontSize: '0.9rem' }}>Welcome, {session.user?.name}</p>
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
          <Link href="/" className="btn btn-outline" style={{ borderColor: 'var(--color-teal-700)', color: 'var(--color-teal-700)' }}>View Site</Link>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-2xl)' }}>
        {statCards.map((stat, i) => (
          <Link key={i} href={stat.href} style={{
            padding: 'var(--spacing-md)',
            background: 'var(--color-white)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-gray-100)',
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: stat.color, fontFamily: 'var(--font-heading)' }}>{stat.value}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-600)', marginTop: 'var(--spacing-xs)' }}>{stat.label}</div>
          </Link>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--spacing-lg)' }}>
        {quickActions.map((qa, i) => (
          <div key={i} className="pillar-card" style={{ padding: 'var(--spacing-lg)' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <qa.icon size={18} /> {qa.label}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-md)' }}>{qa.desc}</p>
            <Link href={qa.href} className="btn btn-teal btn-small">Manage</Link>
            {qa.newHref && (
              <Link href={qa.newHref} className="btn btn-sand btn-small" style={{ marginLeft: 'var(--spacing-sm)' }}>New</Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
