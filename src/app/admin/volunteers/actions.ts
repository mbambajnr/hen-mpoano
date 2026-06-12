'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

async function requireAuth() {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')
}

export async function deleteVolunteer(formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  await prisma.volunteer.delete({ where: { id } })
  revalidatePath('/admin/volunteers')
}

export async function markVolunteerRead(formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  await prisma.volunteer.update({ where: { id }, data: { read: true } })
  revalidatePath('/admin/volunteers')
}

export async function markVolunteerUnread(formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  await prisma.volunteer.update({ where: { id }, data: { read: false } })
  revalidatePath('/admin/volunteers')
}
