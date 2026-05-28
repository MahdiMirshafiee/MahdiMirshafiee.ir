'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import SunIcon from '@/public/icons/SunIcon'
import MoonIcon from '@/public/icons/MoonIcon'

export default function Theme() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 0)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return (
      <span className="min-h-7 min-w-7 animate-pulse rounded-full border border-zinc-300 bg-zinc-200 p-2 dark:border-zinc-700 dark:bg-zinc-800" />
    )
  }

  const isLight = resolvedTheme === 'light'

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      className={`rounded-full border border-zinc-200 bg-zinc-100 p-2 text-amber-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-cyan-300`}
      aria-label="Toggle Theme"
    >
      {isLight ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
