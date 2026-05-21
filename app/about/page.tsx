import Image from 'next/image'
import { BiEnvelope, BiLinkExternal } from 'react-icons/bi'
import { Slide } from '@/animation/Slide'
import RefLink from '@/module/RefLink'
import Job from '@/module/Job'
import Skills from '@/module/Skills'
import { socialLinks } from '@/data/social'
import { getAge, getYearsOfExperience } from '@/utils/getAge-Experience'

export default async function About() {
  const age = getAge(new Date(2004, 8, 27))
  const expYears = getYearsOfExperience(2024)

  return (
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
              <div className="space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  I&apos;m a {age}-year-old self-driven, career-oriented
                  software developer specializing in full-stack web development,
                  currently pursuing a Bachelor&apos;s degree in Computer
                  Engineering in Mashhad, Iran.
                </p>
                <p>
                  With {expYears}+ years of experience, my expertise lies in
                  building interactive web applications, primarily working with
                  JavaScript, TypeScript, Next.js, and Nodejs. I strongly
                  believe in continuous learning and try my best to grow in any
                  situation.
                </p>
              </div>
            </Slide>

            <Slide delay={0.2}>
              <div className="mt-8 leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  Beyond coding, I&apos;m into cybersecurity, financial markets,
                  and following tech news. When I&apos;m not building,
                  you&apos;ll find me reading or gaming.
                </p>
              </div>
            </Slide>
          </div>

          <aside className="order-0 mb-12 flex flex-col gap-y-8 justify-self-start lg:order-1 lg:justify-self-center">
            <Slide delay={0.1}>
              <div>
                <Image
                  className="mb-4 max-h-105 min-h-96 rounded-2xl bg-top object-cover"
                  src="/photos/mirpoker.jpg"
                  width={400}
                  height={400}
                  alt="photo"
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
  )
}
