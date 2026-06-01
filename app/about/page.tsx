import type { Metadata } from 'next'
import Image from 'next/image'
import { BiEnvelope, BiLinkExternal } from 'react-icons/bi'
import { Slide } from '@/animation/Slide'
import RefLink from '@/module/RefLink'
import Job from '@/components/Job'
import Skills from '@/components/Skills'
import { socialLinks } from '@/data/social'
import { getAge, getYearsOfExperience } from '@/utils/getAge-Experience'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Mahdi Mirshafiee — a full-stack web developer from Mashhad, Iran, specializing in TypeScript, Next.js, React, and Node.js.',
  alternates: {
    canonical: 'https://mahdimirshafiee.ir/about',
  },
  openGraph: {
    title: 'About | Mahdi Mirshafiee',
    description:
      'Full-stack web developer from Mashhad, Iran. Specializing in TypeScript, Next.js, React, and Node.js.',
    url: 'https://mahdimirshafiee.ir/about',
    images: [
      {
        url: '/photos/mirpoker.jpg',
        width: 400,
        height: 400,
        alt: 'Mahdi Mirshafiee',
      },
    ],
  },
}

export default function About() {
  const age = getAge(new Date(2004, 8, 27))
  const expYears = getYearsOfExperience(2024)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mahdi Mirshafiee',
    url: 'https://mahdimirshafiee.ir',
    image: 'https://mahdimirshafiee.ir/photos/mirpoker.jpg',
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
    sameAs: [
      'https://github.com/MahdiMirshafiee',
      'https://linkedin.com/in/mahdi-mirshafiee',
      'https://x.com/mirpoker',
    ],
    knowsAbout: [
      'TypeScript',
      'Next.js',
      'React',
      'Node.js',
      'Full-Stack Web Development',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative mx-auto mt-20 w-full max-w-6xl px-6 md:px-16">
        <div>
          <section className="relative grid grid-cols-1 justify-items-center gap-x-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="order-2 lg:order-0">
              <Slide>
                <h1 className="font-incognito mb-8 basis-1/2 text-3xl font-semibold tracking-tight sm:text-5xl lg:leading-tight">
                  I&apos;m Mahdi. I build things for the web.
                </h1>
              </Slide>
              <Slide delay={0.1}>
                <div className="space-y-4 text-justify leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <p>
                    I&apos;m a {age}-year-old software developer specializing in
                    full-stack web development, currently studying Computer
                    Engineering in Mashhad, Iran.
                  </p>
                  <p>
                    With {expYears}+ years of experience, My stack revolves
                    around the JavaScript ecosystem, using technologies such as
                    TypeScript, Next.js, React, and Node.js. I&apos;m passionate
                    about building performant, scalable applications and
                    continuously improving my skills through learning and
                    hands-on experience.
                  </p>
                </div>
              </Slide>

              <Slide delay={0.2}>
                <div className="mt-4 text-justify leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <p>
                    I enjoy open-source projects, knowledge sharing, and
                    collaborating with developers building meaningful things,
                    whether it&apos;s solving real problems or just having fun.
                  </p>
                </div>
              </Slide>

              <Slide delay={0.3}>
                <div className="mt-8 text-justify leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <p>
                    Outside of work, I&apos;m into cybersecurity, financial
                    markets, and emerging tech. I also enjoy reading and gaming.
                  </p>
                </div>
              </Slide>
            </div>

            <aside className="order-0 mb-12 flex flex-col gap-y-8 justify-self-start lg:order-1 lg:justify-self-center">
              <Slide delay={0.1}>
                <div>
                  <Image
                    className="mb-4 h-auto max-h-105 min-h-96 w-auto rounded-2xl bg-top object-cover"
                    src="/photos/mirpoker.jpg"
                    width={400}
                    height={400}
                    alt="Mahdi Mirshafiee"
                    priority
                  />

                  <div className="flex flex-col gap-y-4 text-center">
                    <div>
                      <RefLink
                        href="/CV/MahdiMirshafieeCV.pdf"
                        className="font-incognito flex basis-[90%] transform items-center justify-center rounded-md border border-transparent bg-slate-700 py-2 text-center text-lg font-semibold text-gray-200 duration-300 hover:scale-103"
                      >
                        View Résumé <BiLinkExternal />
                      </RefLink>
                    </div>

                    <a
                      href={`mailto:mirshafieemahdi001@gmail.com`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex transform items-center gap-x-2 duration-300 hover:scale-105 hover:text-slate-500"
                    >
                      <BiEnvelope />
                      mirshafieemahdi001@gmail.com
                    </a>
                    <div className="grid grid-cols-2 gap-2">
                      {socialLinks.map((social) => {
                        const Icon = social.icon
                        return (
                          <a
                            key={social.id}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex transform items-center gap-x-2 duration-300 hover:scale-105 hover:text-slate-500"
                          >
                            <Icon />
                            {social.name}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </Slide>
            </aside>
          </section>
        </div>
        <Job />
        <Skills />
      </main>
    </>
  )
}
