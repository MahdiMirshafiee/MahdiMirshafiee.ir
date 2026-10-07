import type { Metadata } from 'next'
import ProjectsContent from '@/components/ProjectsContent'
import { buildMetadata } from '@/utils/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Projects',
  description:
    'A collection of projects built by Mahdi Mirshafiee: from side experiments to production-ready web applications using React, Next.js, and TypeScript.',
  path: '/projects',
})

export default function ProjectsPage() {
  return <ProjectsContent />
}
