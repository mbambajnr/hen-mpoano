'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

async function requireAuth() {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')
}

export async function createTestimonial(prevState: any, formData: FormData) {
  await requireAuth()
  const quote = formData.get('quote') as string
  const authorName = formData.get('authorName') as string
  const authorRole = formData.get('authorRole') as string || null
  const location = formData.get('location') as string || null

  await prisma.testimonial.create({ data: { quote, authorName, authorRole, location } })
  revalidatePath('/admin/testimonials')
  return { success: true }
}

export async function updateTestimonial(prevState: any, formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  const quote = formData.get('quote') as string
  const authorName = formData.get('authorName') as string
  const authorRole = formData.get('authorRole') as string || null
  const location = formData.get('location') as string || null
  const isActive = formData.get('isActive') === 'on'

  await prisma.testimonial.update({
    where: { id },
    data: { quote, authorName, authorRole, location, isActive },
  })
  revalidatePath('/admin/testimonials')
  return { success: true }
}

export async function deleteTestimonial(formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  await prisma.testimonial.delete({ where: { id } })
  revalidatePath('/admin/testimonials')
}

export async function toggleTestimonial(formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  const t = await prisma.testimonial.findUnique({ where: { id } })
  if (t) {
    await prisma.testimonial.update({ where: { id }, data: { isActive: !t.isActive } })
  }
  revalidatePath('/admin/testimonials')
}
