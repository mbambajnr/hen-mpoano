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

export async function createJob(prevState: any, formData: FormData) {
  await requireAuth()
  const title = formData.get('title') as string
  const slug = slugify(formData.get('slug') as string || title)
  const department = formData.get('department') as string
  const location = formData.get('location') as string || 'Takoradi, Ghana'
  const type = formData.get('type') as string
  const description = formData.get('description') as string
  const requirements = formData.get('requirements') as string
  const howToApply = formData.get('howToApply') as string
  const deadlineStr = formData.get('deadline') as string

  await prisma.jobPosting.create({
    data: {
      title, slug, department, location, type, description,
      requirements: requirements || null,
      howToApply: howToApply || null,
      deadline: deadlineStr ? new Date(deadlineStr) : null,
    },
  })
  revalidatePath('/admin/jobs')
  return { success: true }
}

export async function updateJob(prevState: any, formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  const title = formData.get('title') as string
  const slug = slugify(formData.get('slug') as string || title)
  const department = formData.get('department') as string
  const location = formData.get('location') as string
  const type = formData.get('type') as string
  const description = formData.get('description') as string
  const requirements = formData.get('requirements') as string
  const howToApply = formData.get('howToApply') as string
  const deadlineStr = formData.get('deadline') as string
  const isActive = formData.get('isActive') === 'on'

  await prisma.jobPosting.update({
    where: { id },
    data: {
      title, slug, department, location, type, description,
      requirements: requirements || null,
      howToApply: howToApply || null,
      deadline: deadlineStr ? new Date(deadlineStr) : null,
      isActive,
    },
  })
  revalidatePath('/admin/jobs')
  return { success: true }
}

export async function deleteJob(formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  await prisma.jobPosting.delete({ where: { id } })
  revalidatePath('/admin/jobs')
}

export async function toggleJob(formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  const job = await prisma.jobPosting.findUnique({ where: { id } })
  if (job) {
    await prisma.jobPosting.update({
      where: { id },
      data: { isActive: !job.isActive },
    })
  }
  revalidatePath('/admin/jobs')
}
