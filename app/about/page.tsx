import type { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'
import JsonLd from '@/components/JsonLd'
import {
  buildMetadata,
  BASE_URL,
  SOCIAL_PROFILE_URLS,
  PERSON_ALTERNATE_NAMES_FA,
} from '@/utils/seo'

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description:
    'Learn more about Mahdi Mirshafiee (مهدی میرشفیعی) — a full-stack web developer from Mashhad, Iran, specializing in TypeScript, Next.js, React, and Node.js.',
  path: '/about',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mahdi Mirshafiee',
  alternateName: PERSON_ALTERNATE_NAMES_FA,
  url: BASE_URL,
  image: `${BASE_URL}/photos/mirpoker.jpg`,
  jobTitle: 'Full-Stack Web Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Self-Employed',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mashhad',
    addressCountry: 'IR',
  },
  sameAs: SOCIAL_PROFILE_URLS,
  knowsAbout: [
    'TypeScript',
    'Next.js',
    'React',
    'Node.js',
    'Full-Stack Web Development',
  ],
}

export default function About() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <AboutContent />
    </>
  )
}
