import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { deleteMessage, markAsRead, markAsUnread } from './actions'
import { Mail, MailOpen, Trash2 } from 'lucide-react'

export default async function MessagesPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  const messages = await prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>Contact Messages</h2>

      {messages.length === 0 ? (
        <p style={{ color: 'var(--color-gray-400)', textAlign: 'center', padding: 'var(--spacing-2xl)' }}>No messages yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          {messages.map((msg) => (
            <div key={msg.id} style={{
              background: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              border: `1px solid ${msg.isRead ? 'var(--color-gray-100)' : 'var(--color-teal-300)'}`,
              opacity: msg.isRead ? 0.7 : 1,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-sm)' }}>
                <div>
                  <strong>{msg.name}</strong>
                  <span style={{ color: 'var(--color-gray-400)', marginLeft: 'var(--spacing-sm)', fontSize: '0.85rem' }}>{msg.email}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', whiteSpace: 'nowrap' }}>
                  {new Date(msg.createdAt).toLocaleString()}
                </div>
              </div>
              <div style={{ fontWeight: 500, marginBottom: 'var(--spacing-xs)' }}>{msg.subject}</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-md)', whiteSpace: 'pre-wrap' }}>{msg.message}</p>
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                <form action={msg.isRead ? markAsUnread : markAsRead}>
                  <input type="hidden" name="id" value={msg.id} />
                  <button type="submit" className="btn btn-sand btn-small" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    {msg.isRead ? <MailOpen size={14} /> : <Mail size={14} />}
                    {msg.isRead ? 'Mark Unread' : 'Mark Read'}
                  </button>
                </form>
                <form action={deleteMessage} onSubmit={(e) => { if (!confirm('Delete this message?')) e.preventDefault() }}>
                  <input type="hidden" name="id" value={msg.id} />
                  <button type="submit" className="btn btn-small" style={{ background: 'var(--color-accent-orange)', color: 'white', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Trash2 size={14} /> Delete
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
