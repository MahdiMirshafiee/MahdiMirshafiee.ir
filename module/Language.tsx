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
      <span className="h-[38px] w-[52px] animate-pulse rounded-full border border-zinc-300 bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800" />
    )
  }

  return (
    <button
      type="button"
      onClick={toggleLang}
      className="flex h-[40px] items-center justify-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-100 px-2.5 text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
      aria-label={t.aria.changeLanguage}
      title={t.aria.changeLanguage}
    >
      <BsTranslate className="text-sm" />
      <span className="text-xs font-bold leading-none">
        {lang.toUpperCase()}
      </span>
    </button>
  )
}
