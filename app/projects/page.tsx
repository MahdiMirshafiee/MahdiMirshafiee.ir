'use client'
import { Slide } from '@/animation/Slide'
import { projects } from '@/data/projects'
import { BiLogoGithub } from 'react-icons/bi'
import { RiLinkM } from 'react-icons/ri'

function ProjectsPage() {
  return (
    <div className="mx-auto mt-20 max-w-5xl">
      <Slide className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold dark:text-neutral-100 md:text-5xl lg:text-6xl">
          Made by Me
        </h1>
        <p className="mx-auto max-w-xl font-[incognito] text-lg dark:text-neutral-400">
          Looking for a Web Developer? Let&apos;s connect and discuss how I can
          contribute to your team.
        </p>
      </Slide>
      <Slide delay={0.1}>
        <div className="grid min-h-auto grid-cols-1 gap-4 m-5 xl:m-0 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const DBIcon = project.techstack.db?.icon
            const BIcon = project.techstack.backend?.icon
            const FIcon = project.techstack.frontend?.icon
            const LIcon = project.techstack.lang?.icon
            return (
              <div
                key={project.id}
                className=" w-full rounded-2xl p-2.5 pt-2 inset-shadow-sm inset-shadow-mauve-600/50 dark:inset-shadow-mauve-500/50"
                // className="h-60 w-80 rounded-2xl p-2.5 pt-2 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-solid border-[rgba(255,255,255,0.1)]"
              >
                <div className="flex flex-row-reverse pt-3">
                  <div className="flex gap-2">
                    <a
                      className="h-7 w-7 transform content-center rounded-full duration-200 hover:scale-110"
                      href={project.ghlink}
                    >
                      <BiLogoGithub size={28} color="#6e2163" />
                    </a>
                    <a
                      className="h-7 w-7 transform content-center items-center rounded-full duration-200 hover:scale-110"
                      href={project.demolink}
                    >
                      <RiLinkM size={28} color="#0bbbf5" />
                    </a>
                  </div>
                </div>

                <div className="mt-0.5 flex flex-col">
                  <h4 className="mb-2 font-semibold">{project.title}</h4>
                  <p className="font-[gitlabmono] text-sm text-gray-500">
                    {project.description}
                  </p>
                  <p className="mt-16 flex content-center items-center pt-4 font-mono">
                    <span className="mr-2 text-xs">Thech stack:</span>
                    <div className="flex gap-1">
                      {LIcon ? (
                        <LIcon
                          color={project.techstack.lang?.color}
                          size={24}
                        />
                      ) : null}
                      {FIcon ? (
                        <FIcon
                          color={project.techstack.frontend?.color}
                          size={24}
                        />
                      ) : null}
                      {DBIcon ? (
                        <DBIcon color={project.techstack.db?.color} size={24} />
                      ) : null}
                      {BIcon ? (
                        <BIcon
                          color={project.techstack.backend?.color}
                          size={24}
                        />
                      ) : null}
                    </div>
                  </p>
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
