import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { deleteEvent } from './actions'
import ConfirmDeleteForm from '@/components/ConfirmDeleteForm'
import { CalendarCheck, CalendarX } from 'lucide-react'

export default async function EventsPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  const events = await prisma.event.findMany({ orderBy: { eventDate: 'desc' } })

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)' }}>Events</h2>
        <Link href="/admin/events/new" className="btn btn-teal btn-small">+ New Event</Link>
      </div>

      {events.length === 0 ? (
        <p style={{ color: 'var(--color-gray-400)', textAlign: 'center', padding: 'var(--spacing-2xl)' }}>No events yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          {events.map((event) => (
            <div key={event.id} style={{
              background: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              border: '1px solid var(--color-gray-100)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: 'var(--spacing-xs)' }}>{event.title}</h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', display: 'flex', gap: 'var(--spacing-md)' }}>
                  <span>{new Date(event.eventDate).toLocaleDateString()}</span>
                  <span>{event.location}</span>
                  <span>{event.category}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: event.isPast ? 'var(--color-accent-orange)' : 'var(--color-accent-green)' }}>
                    {event.isPast ? <CalendarX size={14} /> : <CalendarCheck size={14} />}
                    {event.isPast ? 'Past' : 'Upcoming'}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
                <Link href={`/admin/events/${event.id}/edit`} className="btn btn-sand btn-small">Edit</Link>
                <ConfirmDeleteForm id={event.id} action={deleteEvent} label="Event" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
