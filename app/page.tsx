import type { Metadata } from 'next'
import HomeContent from '@/components/HomeContent'
import JsonLd from '@/components/JsonLd'
import {
  buildMetadata,
  BASE_URL,
  SOCIAL_PROFILE_URLS,
  PERSON_ALTERNATE_NAMES_FA,
} from '@/utils/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Mahdi Mirshafiee — Full-Stack Web Developer',
  description:
    "Welcome to my portfolio. I'm Mahdi Mirshafiee (مهدی میرشفیعی), a full-stack web developer building modern web applications with TypeScript, Next.js, and React.",
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#person`,
      name: 'Mahdi Mirshafiee',
      alternateName: PERSON_ALTERNATE_NAMES_FA,
      url: BASE_URL,
      image: `${BASE_URL}/photos/mirpoker.jpg`,
      jobTitle: 'Full-Stack Web Developer',
      description:
        'Full-stack web developer from Mashhad, Iran, specializing in TypeScript, Next.js, React, and Node.js.',
      email: 'mailto:mirshafieemahdi001@gmail.com',
      worksFor: {
        '@type': 'Organization',
        name: 'Self-Employed',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mashhad',
        addressCountry: 'IR',
      },
      knowsAbout: [
        'TypeScript',
        'Next.js',
        'React',
        'Node.js',
        'Express',
        'PostgreSQL',
        'MongoDB',
        'Full-Stack Web Development',
      ],
      sameAs: SOCIAL_PROFILE_URLS,
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      name: 'Mahdi Mirshafiee',
      alternateName: PERSON_ALTERNATE_NAMES_FA,
      url: BASE_URL,
      description:
        'Portfolio of Mahdi Mirshafiee, a full-stack web developer specializing in TypeScript, Next.js, React, and Node.js.',
      publisher: { '@id': `${BASE_URL}/#person` },
      inLanguage: ['en', 'fa'],
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <HomeContent />
    </>
  )
}
