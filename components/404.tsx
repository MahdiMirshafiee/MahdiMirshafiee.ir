'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Slide } from '@/animation/Slide'
import { useLanguage, usePageTitle } from '@/providers/LanguageProvider'

export default function NotFoundClient() {
  const { t } = useLanguage()
  usePageTitle('notFound')
  const pathname = usePathname()
  const COMMAND = `cd ~${pathname}`

  const LINES = useMemo(
    () => [
      { label: t.notFound.errorLabel, value: t.notFound.errorValue },
      { label: t.notFound.statusLabel, value: t.notFound.statusValue },
      {
        label: t.notFound.suggestionLabel,
        value: t.notFound.suggestionValue,
      },
    ],
    [t]
  )

  const [typedCommand, setTypedCommand] = useState('')
  const [visibleLines, setVisibleLines] = useState(0)
  const [showActions, setShowActions] = useState(false)

  useEffect(() => {
    const revealLines = () => {
      let lineIndex = 0
      const lineInterval = setInterval(() => {
        lineIndex++
        setVisibleLines(lineIndex)
        if (lineIndex >= LINES.length) {
          clearInterval(lineInterval)
          setTimeout(() => setShowActions(true), 300)
        }
      }, 250)
    }

    let i = 0
    const commandInterval = setInterval(() => {
      if (i < COMMAND.length) {
        setTypedCommand(COMMAND.slice(0, i + 1))
        i++
      } else {
        clearInterval(commandInterval)
        revealLines()
      }
    }, 60)

    return () => clearInterval(commandInterval)
  }, [COMMAND, LINES])

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 md:px-16">
      <Slide>
        <div className="w-80 max-w-xl">
          <div className="rounded-lg bg-gray-300 font-mono text-sm shadow-[5px_5px_rgba(100,116,139,0.4),10px_10px_rgba(100,116,139,0.3),15px_15px_rgba(100,116,139,0.2),20px_20px_rgba(100,116,139,0.1)] dark:bg-stone-800">
            <div
              className="flex items-center gap-2 rounded-t-lg border-b border-gray-400/30 px-4 py-3 dark:border-zinc-700"
              dir="ltr"
            >
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="space-y-3 p-6">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 dark:text-slate-400">
                  MIR~$
                </span>
                <span className="text-gray-800 dark:text-neutral-200">
                  {typedCommand}
                  {typedCommand.length < COMMAND.length && (
                    <span className="animate-pulse">▌</span>
                  )}
                </span>
              </div>

              <div className="mt-2 space-y-1.5 border-s-2 border-red-400/50 ps-4">
                {LINES.slice(0, visibleLines).map((line) => (
                  <div key={line.label} dir="auto">
                    <span className="text-slate-500 dark:text-slate-400">
                      {line.label}:{' '}
                    </span>
                    <span
                      className={
                        line.label === t.notFound.errorLabel
                          ? 'text-red-500 dark:text-red-400'
                          : 'text-gray-800 dark:text-neutral-200'
                      }
                    >
                      {line.value}
                    </span>
                  </div>
                ))}
                {visibleLines >= 1 && (
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">
                      {t.notFound.pathLabel}:{' '}
                    </span>
                    <span className="text-amber-500 dark:text-amber-400">
                      {pathname}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {showActions && (
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="font-incognito w-full transform rounded-md border border-transparent bg-slate-700 px-6 py-2.5 text-center text-base font-semibold text-gray-200 duration-300 hover:scale-105 hover:bg-slate-600 sm:w-auto"
              >
                cd ~/home
              </Link>
              <Link
                href="/projects"
                className="w-full transform rounded-md border border-zinc-300 px-6 py-2.5 text-center text-base font-semibold text-zinc-600 duration-300 hover:scale-105 hover:border-zinc-400 hover:text-zinc-800 sm:w-auto dark:border-zinc-600 dark:text-zinc-400 dark:hover:border-zinc-400 dark:hover:text-zinc-200"
              >
                ls ~/projects
              </Link>
            </div>
          )}
        </div>
      </Slide>
    </main>
  )
}
