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

export async function createPost(prevState: any, formData: FormData) {
  await requireAuth()
  const title = formData.get('title') as string
  const slug = slugify(formData.get('slug') as string || title)
  const excerpt = formData.get('excerpt') as string
  const content = formData.get('content') as string
  const category = formData.get('category') as string
  const image = formData.get('image') as string || null

  await prisma.blogPost.create({ data: { title, slug, excerpt, content, category, image } })
  revalidatePath('/admin/posts')
  return { success: true }
}

export async function updatePost(prevState: any, formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  const title = formData.get('title') as string
  const slug = slugify(formData.get('slug') as string || title)
  const excerpt = formData.get('excerpt') as string
  const content = formData.get('content') as string
  const category = formData.get('category') as string
  const image = formData.get('image') as string || null
  const isPublished = formData.get('isPublished') === 'on'

  await prisma.blogPost.update({
    where: { id },
    data: { title, slug, excerpt, content, category, image, isPublished },
  })
  revalidatePath('/admin/posts')
  return { success: true }
}

export async function deletePost(formData: FormData) {
  await requireAuth()
  const id = formData.get('id') as string
  await prisma.blogPost.delete({ where: { id } })
  revalidatePath('/admin/posts')
}
