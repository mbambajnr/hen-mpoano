'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

async function requireAuth() {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')
}

export async function createPartner(prevState: any, formData: FormData) {
  await requireAuth()
  const name = formData.get('name') as string
  const description = formData.get('description') as string || null
  const logoUrl = formData.get('logoUrl') as string || null
  const websiteUrl = formData.get('websiteUrl') as string || null
  const order = parseInt(formData.get('order') as string) || 0

  await prisma.partner.create({ data: { name, description, logoUrl, websiteUrl, order } })
  revalidatePath('/admin/partners')
  return { success: true }
}

export async function updatePartner(prevState: any, formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  const name = formData.get('name') as string
  const description = formData.get('description') as string || null
  const logoUrl = formData.get('logoUrl') as string || null
  const websiteUrl = formData.get('websiteUrl') as string || null
  const order = parseInt(formData.get('order') as string) || 0
  const isActive = formData.get('isActive') === 'on'

  await prisma.partner.update({
    where: { id },
    data: { name, description, logoUrl, websiteUrl, order, isActive },
  })
  revalidatePath('/admin/partners')
  return { success: true }
}

export async function deletePartner(formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  await prisma.partner.delete({ where: { id } })
  revalidatePath('/admin/partners')
}

export async function togglePartner(formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  const partner = await prisma.partner.findUnique({ where: { id } })
  if (partner) {
    await prisma.partner.update({ where: { id }, data: { isActive: !partner.isActive } })
  }
  revalidatePath('/admin/partners')
}
