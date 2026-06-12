'use client'

export default function ConfirmDeleteForm({ id, action, label = 'Delete' }: { id: string; action: (formData: FormData) => void; label?: string }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!confirm(`Delete this ${label.toLowerCase()}?`)) e.preventDefault()
  }

  return (
    <form action={action} onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="btn btn-small" style={{ background: 'var(--color-accent-orange)', color: 'white' }}>
        {label}
      </button>
    </form>
  )
}
