import type { Metadata } from 'next'
import { Slide } from '@/animation/Slide'
import { projects } from '@/data/projects'
import { BiLogoGithub } from 'react-icons/bi'
import { RiLinkM } from 'react-icons/ri'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A collection of projects built by Mahdi Mirshafiee: from side experiments to production-ready web applications using React, Next.js, and TypeScript.',
  alternates: {
    canonical: 'https://mahdimirshafiee.ir/projects',
  },
  openGraph: {
    title: 'Projects | Mahdi Mirshafiee',
    description:
      'Explore projects built by Mahdi Mirshafiee using React, Next.js, TypeScript, and more.',
    url: 'https://mahdimirshafiee.ir/projects',
  },
}

function ProjectsPage() {
  return (
    <div className="mx-auto mt-20 max-w-5xl">
      <Slide className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl dark:text-neutral-100">
          Made by Me
        </h1>
        <p className="font-incognito mx-auto max-w-xl text-lg dark:text-neutral-400">
          A collection of projects I&apos;ve built — from side experiments to
          production-ready apps.
        </p>
      </Slide>
      <Slide delay={0.1}>
        <div className="m-5 grid min-h-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:m-0">
          {projects.map((project) => {
            const DBIcon = project.techstack.db?.icon as React.ComponentType<{
              color: string
              size: number
            }>
            const BIcon = project.techstack.backend
              ?.icon as React.ComponentType<{
              color: string
              size: number
            }>
            const FIcon = project.techstack.frontend
              ?.icon as React.ComponentType<{
              color: string
              size: number
            }>
            const LIcon = project.techstack.lang?.icon as React.ComponentType<{
              color: string
              size: number
            }>
            return (
              <div
                key={project.id}
                className="h-60 w-full rounded-2xl p-3 pt-2 inset-shadow-sm inset-shadow-mauve-600/50 dark:inset-shadow-mauve-500/50"
              >
                <div className="flex flex-row-reverse pt-3">
                  <div className="flex gap-2">
                    <a
                      className="h-7 w-7 transform content-center rounded-full duration-200 hover:scale-110"
                      href={project.ghlink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BiLogoGithub size={28} color="#6e2163" />
                    </a>
                    {project.demolink ? (
                      <a
                        className="h-7 w-7 transform content-center items-center rounded-full duration-200 hover:scale-110"
                        href={project.demolink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <RiLinkM size={28} color="#0bbbf5" />
                      </a>
                    ) : (
                      ''
                    )}
                  </div>
                </div>

                <div className="mt-0.5 flex flex-col">
                  <h4 className="mb-2 font-semibold">{project.title}</h4>
                  <p className="font-[gitlabmono] text-sm text-gray-500">
                    {project.description}
                  </p>
                  <div className="mt-auto flex content-center items-center pt-4 font-mono">
                    <span className="mr-2 text-xs">Tech Stack:</span>
                    <div className="flex gap-1">
                      {LIcon ? (
                        <LIcon
                          color={project.techstack.lang?.color ?? ''}
                          size={24}
                        />
                      ) : null}
                      {FIcon ? (
                        <FIcon
                          color={project.techstack.frontend?.color ?? ''}
                          size={24}
                        />
                      ) : null}
                      {DBIcon ? (
                        <DBIcon
                          color={project.techstack.db?.color ?? ''}
                          size={24}
                        />
                      ) : null}
                      {BIcon ? (
                        <BIcon
                          color={project.techstack.backend?.color ?? ''}
                          size={24}
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Slide>
    </div>
  )
}

export default ProjectsPage
