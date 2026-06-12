'use client'

import { use, useActionState, useEffect, useState } from 'react'
import { updatePost } from '../../actions'
import { useRouter } from 'next/navigation'
import ImageUpload from '@/components/ImageUpload'

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [state, action, pending] = useActionState(updatePost, null)
  const router = useRouter()
  const [post, setPost] = useState<any>(null)
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (state?.success) router.push('/admin/posts')
  }, [state, router])

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then(r => r.json())
      .then(data => { setPost(data); setImage(data.image || ''); setLoading(false) })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) return <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>Loading...</div>
  if (!post) return <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>Post not found</div>

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>Edit Blog Post</h2>
      <form action={action} style={{ background: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-100)' }}>
        <input type="hidden" name="id" value={id} />
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" defaultValue={post.title} required />
        </div>
        <div className="form-group">
          <label htmlFor="slug">Slug</label>
          <input id="slug" name="slug" defaultValue={post.slug} />
        </div>
        <div className="form-group">
          <label htmlFor="excerpt">Excerpt</label>
          <textarea id="excerpt" name="excerpt" defaultValue={post.excerpt} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows={10} defaultValue={post.content} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" defaultValue={post.category}>
            <option value="News">News</option>
            <option value="Updates">Updates</option>
            <option value="Press Release">Press Release</option>
          </select>
        </div>
        <ImageUpload onUpload={setImage} current={post.image} />
        <input type="hidden" name="image" value={image} />
        <div className="form-group">
          <label>
            <input type="checkbox" name="isPublished" defaultChecked={post.isPublished} /> Published
          </label>
        </div>
        <button type="submit" className="btn btn-teal" disabled={pending}>
          {pending ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  )
}
