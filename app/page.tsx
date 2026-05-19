// app/page.tsx
import { Slide } from "@/animation/Slide";
import Social from "@/module/Social";
import Terminal from "@/module/Terminal";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20 h-full">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
        <div className="lg:max-w-2xl max-w-2xl">
          <Slide>
            <h1 className="font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight w-full">
              Software developer / Web developer
            </h1>
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ut tenetur excepturi eos eligendi in at repellendus
              molestiae perferendis architecto saepe fugiat, dolores nesciunt
              libero animi illum aperiam? Officiis, soluta.
            </p>
          </Slide>
          <Slide delay={0.1}>
            <Social />
          </Slide>
        </div>
        <Slide>
          <div className=" flex justify-center">
            <Terminal
              name="Mahdi"
              title="Web Developer"
              location="Mashhad, Iran"
              status="Open to work"
              quote={`"The only way to do great work is to love what you do. - Steve Jobs"`}
            />
          </div>
        </Slide>
      </section>
    </main>
  );
}
