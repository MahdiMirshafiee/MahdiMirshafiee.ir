import type { Metadata } from 'next'
import ContactForm from '../../components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Mahdi Mirshafiee. Available for full-stack web development opportunities, collaborations, and freelance projects.',
  alternates: {
    canonical: 'https://mahdimirshafiee.com/contact',
  },
  openGraph: {
    title: 'Contact | Mahdi Mirshafiee',
    description:
      'Get in touch with Mahdi Mirshafiee for web development opportunities and collaborations.',
    url: 'https://mahdimirshafiee.com/contact',
  },
}

export default function ContactPage() {
  return <ContactForm />
}
