'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

async function requireAuth() {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')
}

export async function deleteMessage(formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  await prisma.contactMessage.delete({ where: { id } })
  revalidatePath('/admin/messages')
}

export async function markAsRead(formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  await prisma.contactMessage.update({ where: { id }, data: { isRead: true } })
  revalidatePath('/admin/messages')
}

export async function markAsUnread(formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  await prisma.contactMessage.update({ where: { id }, data: { isRead: false } })
  revalidatePath('/admin/messages')
}
