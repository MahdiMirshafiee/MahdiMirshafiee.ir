'use client'

import { Slide } from '@/animation/Slide'
import Social from '@/module/Social'
import Terminal from '@/components/Terminal'
import {
  useLanguage,
  usePageTitle,
} from '@/providers/LanguageProvider'

export default function HomeContent() {
  const { t } = useLanguage()
  usePageTitle('home')

  return (
    <main className="mx-auto mt-20 h-full max-w-7xl px-6 md:px-16 lg:mt-32 lg:h-120">
      <section className="mb-16 flex flex-col items-start justify-between gap-x-12 xl:flex-row xl:items-center xl:justify-center">
        <div className="max-w-2xl lg:max-w-2xl">
          <Slide>
            <h1 className="mb-6 w-full text-3xl leading-tight font-semibold tracking-tight sm:text-5xl lg:leading-[3.7rem]">
              {t.home.h1a} <br />
              {t.home.h1b}
            </h1>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t.home.p1}
              <br /> {t.home.p2}
            </p>
          </Slide>
          <Slide delay={0.1}>
            <Social />
          </Slide>
        </div>
        <Slide>
          <div className="flex justify-center">
            <Terminal
              name={t.home.terminal.name}
              title={t.home.terminal.title}
              location={t.home.terminal.location}
              status={t.home.terminal.status}
              quote={t.home.terminal.quote}
            />
          </div>
        </Slide>
      </section>
    </main>
  )
}
