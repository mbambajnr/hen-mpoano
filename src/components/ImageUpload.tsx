'use client'

import { useRef, useState } from 'react'

interface ImageUploadProps {
  onUpload: (url: string) => void
  current?: string | null
  label?: string
}

export default function ImageUpload({ onUpload, current, label = 'Image' }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(current || null)

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setPreview(URL.createObjectURL(file))
    setUploading(true)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData })
      const data = await res.json()
      if (data.url) {
        onUpload(data.url)
        setPreview(data.url)
      }
    } catch {
      // fallback — keep local preview
    }
    setUploading(false)
  }

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        style={{ display: 'none' }}
      />
      <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
        <button type="button" className="btn btn-sand btn-small" onClick={() => inputRef.current?.click()} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Choose Image'}
        </button>
        {preview && (
          <img src={preview} alt="" style={{ height: 48, width: 48, objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
        )}
      </div>
    </div>
  )
}
