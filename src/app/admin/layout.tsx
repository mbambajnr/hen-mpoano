import Link from 'next/link'
import { FileText, Briefcase, MessageSquare, Users, Calendar, HelpCircle, Handshake, MessageCircle, Image } from 'lucide-react'

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: null },
  { label: 'Posts', href: '/admin/posts', icon: FileText },
  { label: 'Publications', href: '/admin/publications', icon: FileText },
  { label: 'Jobs', href: '/admin/jobs', icon: Briefcase },
  { label: 'Messages', href: '/admin/messages', icon: MessageSquare },
  { label: 'Volunteers', href: '/admin/volunteers', icon: Users },
  { label: 'Events', href: '/admin/events', icon: Calendar },
  { label: 'FAQs', href: '/admin/faqs', icon: HelpCircle },
  { label: 'Partners', href: '/admin/partners', icon: Handshake },
  { label: 'Testimonials', href: '/admin/testimonials', icon: MessageCircle },
  { label: 'Gallery', href: '/admin/gallery', icon: Image },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: 'var(--color-sand-50)', minHeight: 'calc(100vh - 72px)' }}>
      <div style={{
        background: 'var(--color-white)',
        borderBottom: '1px solid var(--color-gray-100)',
        padding: 'var(--spacing-md) var(--spacing-xl)',
        display: 'flex',
        gap: 'var(--spacing-md)',
        alignItems: 'center',
        overflowX: 'auto',
        flexWrap: 'nowrap',
      }}>
        <Link href="/admin" style={{ fontWeight: 600, color: 'var(--color-teal-900)', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>← Dashboard</Link>
        {navItems.slice(1).map(({ label, href, icon: Icon }) => (
          <Link key={href} href={href} style={{ fontSize: '0.85rem', color: 'var(--color-gray-600)', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 4 }}>
            {Icon && <Icon size={14} />} {label}
          </Link>
        ))}
      </div>
      {children}
    </div>
  )
}
