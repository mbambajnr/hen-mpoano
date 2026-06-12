'use client'

import { useActionState, useRef, useEffect, useState } from 'react'
import { createPost } from '../actions'
import { useRouter } from 'next/navigation'
import ImageUpload from '@/components/ImageUpload'

export default function NewPostPage() {
  const [state, action, pending] = useActionState(createPost, null)
  const router = useRouter()
  const imageRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState('')

  useEffect(() => {
    if (state?.success) router.push('/admin/posts')
  }, [state, router])

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)', marginBottom: 'var(--spacing-lg)' }}>New Blog Post</h2>
      <form action={action} style={{ background: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-100)' }}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" required />
        </div>
        <div className="form-group">
          <label htmlFor="slug">Slug (leave blank to auto-generate)</label>
          <input id="slug" name="slug" />
        </div>
        <div className="form-group">
          <label htmlFor="excerpt">Excerpt</label>
          <textarea id="excerpt" name="excerpt" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content (Markdown or plain text)</label>
          <textarea id="content" name="content" rows={10} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" required>
            <option value="News">News</option>
            <option value="Updates">Updates</option>
            <option value="Press Release">Press Release</option>
          </select>
        </div>
        <ImageUpload onUpload={setImage} />
        <input type="hidden" name="image" value={image} />
        <button type="submit" className="btn btn-teal" disabled={pending}>
          {pending ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  )
}
