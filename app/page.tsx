import type { Metadata } from 'next'
import { Slide } from '@/animation/Slide'
import Social from '@/module/Social'
import Terminal from '@/components/Terminal'
import JsonLd from '@/components/JsonLd'
import {
  buildMetadata,
  BASE_URL,
  SOCIAL_PROFILE_URLS,
  PERSON_ALTERNATE_NAMES_FA,
} from '@/utils/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Mahdi Mirshafiee (مهدی میرشفیعی) — Full-Stack Web Developer',
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
      inLanguage: 'en',
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="mx-auto mt-20 h-full max-w-7xl px-6 md:px-16 lg:mt-32 lg:h-120">
        <section className="mb-16 flex flex-col items-start justify-between gap-x-12 xl:flex-row xl:items-center xl:justify-center">
          <div className="max-w-2xl lg:max-w-2xl">
            <Slide>
              <h1 className="mb-6 w-full text-3xl leading-tight font-semibold tracking-tight sm:text-5xl lg:leading-[3.7rem]">
                Software developer, <br />
                Web developer
              </h1>
              <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                I&apos;m Mahdi Mirshafiee, a software developer passionate about
                continuous learning,
                <br /> building web applications with the JavaScript ecosystem,
                and exploring new technologies.
              </p>
            </Slide>
            <Slide delay={0.1}>
              <Social />
            </Slide>
          </div>
          <Slide>
            <div className="flex justify-center">
              <Terminal
                name="Mahdi"
                title="Web Developer"
                location="Mashhad, Iran"
                status="Open to work"
                quote={`"In a time of destruction, create something" \n - Maxine Hong Kingston`}
              />
            </div>
          </Slide>
        </section>
      </main>
    </>
  )
}
