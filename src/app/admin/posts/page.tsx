import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { deletePost } from './actions'
import ConfirmDeleteForm from '@/components/ConfirmDeleteForm'

async function getPosts() {
  return prisma.blogPost.findMany({ orderBy: { createdAt: 'desc' } })
}

export default async function AdminPostsPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  const posts = await getPosts()

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)' }}>Blog Posts</h2>
        <Link href="/admin/posts/new" className="btn btn-teal btn-small">+ New Post</Link>
      </div>

      {posts.length === 0 ? (
        <p style={{ color: 'var(--color-gray-400)', textAlign: 'center', padding: 'var(--spacing-2xl)' }}>No posts yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          {posts.map((post) => (
            <div key={post.id} style={{
              background: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              border: '1px solid var(--color-gray-100)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: 'var(--spacing-xs)' }}>{post.title}</h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', display: 'flex', gap: 'var(--spacing-md)' }}>
                  <span>{post.category}</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  <span style={{ color: post.isPublished ? 'var(--color-accent-green)' : 'var(--color-accent-orange)' }}>
                    {post.isPublished ? 'Published' : 'Draft'}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
                <Link href={`/admin/posts/${post.id}/edit`} className="btn btn-sand btn-small">Edit</Link>
                <ConfirmDeleteForm id={post.id} action={deletePost} label="Post" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
