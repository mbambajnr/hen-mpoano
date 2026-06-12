'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

async function requireAuth() {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')
}

export async function createGalleryItem(prevState: any, formData: FormData) {
  await requireAuth()
  const imageUrl = formData.get('imageUrl') as string
  const caption = formData.get('caption') as string
  const altText = formData.get('altText') as string
  const category = formData.get('category') as string
  const order = parseInt(formData.get('order') as string) || 0

  await prisma.galleryItem.create({ data: { imageUrl, caption, altText, category, order } })
  revalidatePath('/admin/gallery')
  return { success: true }
}

export async function updateGalleryItem(prevState: any, formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  const imageUrl = formData.get('imageUrl') as string
  const caption = formData.get('caption') as string
  const altText = formData.get('altText') as string
  const category = formData.get('category') as string
  const order = parseInt(formData.get('order') as string) || 0
  const isPublished = formData.get('isPublished') === 'on'

  await prisma.galleryItem.update({
    where: { id },
    data: { imageUrl, caption, altText, category, order, isPublished },
  })
  revalidatePath('/admin/gallery')
  return { success: true }
}

export async function deleteGalleryItem(formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  await prisma.galleryItem.delete({ where: { id } })
  revalidatePath('/admin/gallery')
}
