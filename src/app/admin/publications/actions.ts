'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

async function requireAuth() {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')
}

export async function createPublication(prevState: any, formData: FormData) {
  await requireAuth()
  const title = formData.get('title') as string
  const slug = slugify(formData.get('slug') as string || title)
  const description = formData.get('description') as string
  const fileUrl = formData.get('fileUrl') as string
  const category = formData.get('category') as string

  await prisma.publication.create({ data: { title, slug, description, fileUrl: fileUrl || null, category } })
  revalidatePath('/admin/publications')
  return { success: true }
}

export async function updatePublication(prevState: any, formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  const title = formData.get('title') as string
  const slug = slugify(formData.get('slug') as string || title)
  const description = formData.get('description') as string
  const fileUrl = formData.get('fileUrl') as string
  const category = formData.get('category') as string
  const isPublished = formData.get('isPublished') === 'on'

  await prisma.publication.update({
    where: { id },
    data: { title, slug, description, fileUrl: fileUrl || null, category, isPublished },
  })
  revalidatePath('/admin/publications')
  return { success: true }
}

export async function deletePublication(formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  await prisma.publication.delete({ where: { id } })
  revalidatePath('/admin/publications')
}
