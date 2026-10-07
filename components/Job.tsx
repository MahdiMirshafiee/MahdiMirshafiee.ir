'use client'

import Image from 'next/image'
import { formatDate } from '@/utils/date'
import { Slide } from '@/animation/Slide'
import RefLink from '../module/RefLink'
import { jobs } from '@/data/jobs'
import { useLanguage } from '@/providers/LanguageProvider'

export default function Job() {
  const { t, lang } = useLanguage()

  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito mb-4 text-4xl font-bold tracking-tight">
            {t.jobs.title}
          </h2>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="relative flex max-w-2xl items-start gap-x-4 before:absolute before:top-20 before:bottom-0 before:start-9 before:h-[calc(100%-70px)] before:w-px before:bg-zinc-200 lg:gap-x-6 dark:before:bg-zinc-600"
            >
              <RefLink
                href={job.url}
                className="relative grid min-h-20 min-w-20 place-items-center overflow-clip rounded-md border border-zinc-200 bg-zinc-400 p-2 dark:border-zinc-600 dark:bg-zinc-800"
              >
                <Image
                  src={job.logo}
                  className="object-cover duration-300"
                  alt={`${job.name} logo`}
                  width={50}
                  height={50}
                />
              </RefLink>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">{t.jobs.name}</h3>
                <p>{t.jobs.jobTitle}</p>
                <time className="mt-2 text-sm tracking-widest text-zinc-500 uppercase">
                  {formatDate(job.startDate, lang)} - {''}
                  {job?.endDate ? (
                    formatDate(job?.endDate, lang)
                  ) : (
                    <span className="text-mauve-800 dark:text-mauve-300">
                      {t.jobs.present}
                    </span>
                  )}
                </time>
                <p className="my-4 tracking-tight text-zinc-600 dark:text-zinc-400">
                  {t.jobs.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  )
}
