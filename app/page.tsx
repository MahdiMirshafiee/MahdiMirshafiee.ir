// app/page.tsx
import { Slide } from '@/animation/Slide'
import Social from '@/module/Social'
import Terminal from '@/components/Terminal'

export default function HomePage() {
  return (
    <main className="mx-auto mt-20 h-full lg:h-120 max-w-7xl px-6 md:px-16 lg:mt-32">
      <section className="mb-16 flex flex-col items-start justify-between gap-x-12 xl:flex-row xl:items-center xl:justify-center">
        <div className="max-w-2xl lg:max-w-2xl">
          <Slide>
            <h1 className="mb-6 w-full text-3xl leading-tight font-semibold tracking-tight sm:text-5xl lg:leading-[3.7rem]">
              Software developer, <br />
              Web developer
            </h1>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              I'm Mahdi Mirshafiee, a software developer passionate about
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
  )
}
