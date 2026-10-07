'use client'

import { useState, useEffect } from 'react'
import { BsTranslate } from 'react-icons/bs'
import { useLanguage } from '@/providers/LanguageProvider'

export default function Language() {
  const { lang, toggleLang, t } = useLanguage()
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

  return (
    <button
      type="button"
      onClick={toggleLang}
      className="rounded-full border border-zinc-200 bg-zinc-100 p-2 text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
      aria-label={t.aria.changeLanguage}
      title={t.aria.changeLanguage}
    >
      <span className="flex items-center gap-1 text-xs font-bold leading-none">
        <BsTranslate className="text-sm" />
        {lang.toUpperCase()}
      </span>
    </button>
  )
}
