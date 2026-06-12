'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

async function requireAuth() {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')
}

export async function createFaq(prevState: any, formData: FormData) {
  await requireAuth()
  const question = formData.get('question') as string
  const answer = formData.get('answer') as string
  const category = formData.get('category') as string
  const order = parseInt(formData.get('order') as string) || 0

  await prisma.fAQ.create({ data: { question, answer, category, order } })
  revalidatePath('/admin/faqs')
  return { success: true }
}

export async function updateFaq(prevState: any, formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  const question = formData.get('question') as string
  const answer = formData.get('answer') as string
  const category = formData.get('category') as string
  const order = parseInt(formData.get('order') as string) || 0

  await prisma.fAQ.update({
    where: { id },
    data: { question, answer, category, order },
  })
  revalidatePath('/admin/faqs')
  return { success: true }
}

export async function deleteFaq(formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  await prisma.fAQ.delete({ where: { id } })
  revalidatePath('/admin/faqs')
}
