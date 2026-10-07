'use client'

import { Slide } from '@/animation/Slide'
import { backendSkills, frontendSkills } from '@/data/skills'
import { SiFrontendmentor } from 'react-icons/si'
import { CiServer } from 'react-icons/ci'
import { JSX } from 'react'
import { useLanguage } from '@/providers/LanguageProvider'

function Skills(): JSX.Element {
  const { t } = useLanguage()

  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito mb-4 text-4xl font-bold tracking-tight">
            {t.skills.title}
          </h2>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-300 backdrop-blur-sm dark:border-neutral-600">
            <div className="flex items-center gap-1 px-6 py-8 font-semibold">
              <SiFrontendmentor size={20} />
              <h3>{t.skills.frontend}</h3>
            </div>

            <div className="m-5 mt-0 flex flex-wrap gap-3">
              {frontendSkills.map((skill) => {
                const Icon = skill.icon as React.ComponentType<{
                  className?: string
                }>
                return (
                  <a
                    key={skill.id}
                    href={skill.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center justify-center gap-2 rounded-xl border border-neutral-700/50 bg-neutral-400/40 px-4 py-3 text-neutral-700 transition-all duration-300 hover:border-gray-500/30 hover:bg-neutral-800/70 hover:text-gray-200 dark:bg-neutral-400/40 dark:text-neutral-400"
                  >
                    <Icon className="text-xl" />
                    <span className="text-sm font-light">{skill.label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-300 dark:border-neutral-600">
            <div className="flex items-center gap-1 px-6 py-8 font-semibold">
              <CiServer size={20} />
              <h3>{t.skills.backend}</h3>
            </div>

            <div className="m-5 mt-0 flex flex-wrap gap-3 md:grid-cols-4">
              {backendSkills.map((skill) => {
                const Icon = skill.icon as React.ComponentType<{
                  className?: string
                }>
                return (
                  <a
                    key={skill.id}
                    href={skill.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center justify-center gap-2 rounded-xl border border-neutral-700/50 bg-neutral-400/40 px-4 py-3 text-neutral-700 transition-all duration-300 hover:border-gray-500/30 hover:bg-neutral-800/70 hover:text-gray-200 dark:bg-neutral-400/40 dark:text-neutral-400"
                  >
                    <Icon className="text-xl" />
                    <span className="text-sm font-light">{skill.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </Slide>
    </section>
  )
}

export default Skills
