import 'dotenv/config'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import { PrismaClient } from '../src/generated/prisma/client'
import bcrypt from 'bcryptjs'

const connectionString = process.env.DATABASE_URL ?? 'file:./prisma/dev.db'
const adapter = new PrismaBetterSqlite3({ url: connectionString })
const prisma = new PrismaClient({ adapter })

async function main() {
  const existingAdmin = await prisma.admin.findUnique({ where: { email: 'admin@henmpoano.org' } })
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('admin123', 10)
    await prisma.admin.create({
      data: { email: 'admin@henmpoano.org', name: 'Admin', password: hashedPassword },
    })
    console.log('Seeded admin user: admin@henmpoano.org / admin123')
  }

  const existingPost = await prisma.blogPost.findUnique({ where: { slug: 'welcome-to-hen-mpoano' } })
  if (!existingPost) {
    await prisma.blogPost.create({
      data: {
        title: 'Welcome to Hɛn Mpoano',
        slug: 'welcome-to-hen-mpoano',
        excerpt: 'Welcome to our new website! We are excited to share our work with you.',
        content: 'Welcome to Hɛn Mpoano! For over a decade, we have been working with coastal communities in Ghana to protect and restore our marine and coastal ecosystems.\n\nOur new website features a modern design and an improved content management system. We will be posting regular updates about our projects, publications, and news here.\n\nStay tuned for more updates!',
        category: 'News',
      },
    })
    console.log('Seeded sample blog post')
  }

  const existingPub = await prisma.publication.findUnique({ where: { slug: 'coastal-resources-governance-ghana' } })
  if (!existingPub) {
    await prisma.publication.create({
      data: {
        title: 'Coastal Resources Governance in Ghana',
        slug: 'coastal-resources-governance-ghana',
        description: 'A comprehensive analysis of coastal resources governance frameworks in Ghana, with recommendations for community-based management approaches.',
        fileUrl: '#',
        category: 'Climate Change',
      },
    })
    console.log('Seeded sample publication')
  }

  const existingJob = await prisma.jobPosting.findUnique({ where: { slug: 'programs-manager-coastal-landscapes' } })
  if (!existingJob) {
    await prisma.jobPosting.create({
      data: {
        title: 'Programs Manager — Coastal Landscapes',
        slug: 'programs-manager-coastal-landscapes',
        department: 'Programs',
        location: 'Takoradi, Ghana',
        type: 'Full-time',
        description: 'We are seeking an experienced Programs Manager to lead our Coastal Landscapes program. The ideal candidate will have a strong background in ecosystem management, community engagement, and project management.\n\nKey responsibilities include:\n- Design and implement coastal restoration projects\n- Supervise field teams and coordinate with partners\n- Monitor and report on project outcomes\n- Contribute to fundraising and proposal development',
        requirements: '• MSc in Environmental Science, Natural Resource Management, or related field\n• 5+ years of experience in coastal/marine conservation\n• Proven track record in project management\n• Strong community engagement skills\n• Experience in mangrove restoration preferred',
        howToApply: 'careers@henmpoano.org',
        deadline: new Date('2026-12-31'),
      },
    })
    console.log('Seeded sample job posting')
  }

  const existingEvent = await prisma.event.findUnique({ where: { slug: 'coastal-cleanup-2026' } })
  if (!existingEvent) {
    await prisma.event.create({
      data: { title: 'Coastal Cleanup 2026', slug: 'coastal-cleanup-2026', description: 'Community-led coastal cleanup along the Takoradi shoreline.', eventDate: new Date('2026-09-15'), location: 'Takoradi, Ghana', category: 'Public Event' },
    })
    console.log('Seeded sample event')
  }

  const existingFaq = await prisma.fAQ.findFirst()
  if (!existingFaq) {
    await prisma.fAQ.create({ data: { question: 'How can I volunteer with Hɛn Mpoano?', answer: 'Fill out our volunteer form on the volunteer page and our team will reach out.', category: 'Volunteer', order: 1 } })
    console.log('Seeded sample FAQ')
  }

  const existingPartner = await prisma.partner.findFirst()
  if (!existingPartner) {
    await prisma.partner.create({ data: { name: 'USAID', description: 'United States Agency for International Development', order: 1 } })
    console.log('Seeded sample partner')
  }

  const existingTestimonial = await prisma.testimonial.findFirst()
  if (!existingTestimonial) {
    await prisma.testimonial.create({ data: { quote: 'Hɛn Mpoano has transformed our fishing community with sustainable practices.', authorName: 'Grace Mensah', authorRole: 'Community Leader', location: 'Ada, Ghana' } })
    console.log('Seeded sample testimonial')
  }

  const existingGallery = await prisma.galleryItem.findFirst()
  if (!existingGallery) {
    await prisma.galleryItem.create({ data: { imageUrl: '/images/mangrove-sunrise.jpg', caption: 'Mangrove restoration in the Western Region', altText: 'Mangrove seedlings planted along the coast', category: 'Field Work', order: 1 } })
    console.log('Seeded sample gallery item')
  }
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
