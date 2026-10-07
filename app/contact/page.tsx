import type { Metadata } from 'next'
import ContactForm from '../../components/ContactForm'
import { buildMetadata } from '@/utils/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Get in touch with Mahdi Mirshafiee. Available for full-stack web development opportunities, collaborations, and freelance projects.',
  path: '/contact',
})

export default function ContactPage() {
  return <ContactForm />
}
