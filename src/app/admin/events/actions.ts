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

export async function createEvent(prevState: any, formData: FormData) {
  await requireAuth()
  const title = formData.get('title') as string
  const slug = slugify(formData.get('slug') as string || title)
  const description = formData.get('description') as string
  const eventDate = new Date(formData.get('eventDate') as string)
  const location = formData.get('location') as string
  const category = formData.get('category') as string
  const image = formData.get('image') as string || null
  const link = formData.get('link') as string || null
  const isPast = formData.get('isPast') === 'on'

  await prisma.event.create({
    data: { title, slug, description, eventDate, location, category, image, link, isPast },
  })
  revalidatePath('/admin/events')
  return { success: true }
}

export async function updateEvent(prevState: any, formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  const title = formData.get('title') as string
  const slug = slugify(formData.get('slug') as string || title)
  const description = formData.get('description') as string
  const eventDate = new Date(formData.get('eventDate') as string)
  const location = formData.get('location') as string
  const category = formData.get('category') as string
  const image = formData.get('image') as string || null
  const link = formData.get('link') as string || null
  const isPast = formData.get('isPast') === 'on'

  await prisma.event.update({
    where: { id },
    data: { title, slug, description, eventDate, location, category, image, link, isPast },
  })
  revalidatePath('/admin/events')
  return { success: true }
}

export async function deleteEvent(formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  await prisma.event.delete({ where: { id } })
  revalidatePath('/admin/events')
}
