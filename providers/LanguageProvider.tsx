'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  dictionaries,
  toFaDigits,
  type Dictionary,
  type Locale,
  type PageTitleKey,
} from '@/utils/i18n'

const STORAGE_KEY = 'lang'

type Direction = 'ltr' | 'rtl'

interface LanguageContextValue {
  lang: Locale
  dir: Direction
  t: Dictionary
  setLang: (lang: Locale) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>('en')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored !== 'fa' && stored !== 'en') {
      return
    }
    // deferred like Theme.tsx: post-hydration restore from localStorage
    const timer = setTimeout(() => setLangState(stored), 0)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = lang === 'fa' ? 'rtl' : 'ltr'
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = useCallback((next: Locale) => {
    setLangState(next)
  }, [])

  const toggleLang = useCallback(() => {
    setLangState((current) => (current === 'en' ? 'fa' : 'en'))
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir: lang === 'fa' ? 'rtl' : 'ltr',
      t: dictionaries[lang],
      setLang,
      toggleLang,
    }),
    [lang, setLang, toggleLang]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export function useLocalizedNumber(value: string | number): string {
  const { lang } = useLanguage()
  return lang === 'fa' ? toFaDigits(value) : String(value)
}

export function usePageTitle(key: PageTitleKey) {
  const { lang } = useLanguage()
  const expectedTitle = dictionaries[lang].titles[key]
  useEffect(() => {
    const apply = () => {
      if (document.title !== expectedTitle) {
        document.title = expectedTitle
      }
    }
    apply()
    // Next.js re-applies server metadata right after hydration, which
    // resets the title once — watch the head and re-assert whenever the
    // framework writes something else (guarded, so no feedback loop)
    const observer = new MutationObserver(apply)
    observer.observe(document.head, {
      childList: true,
      subtree: true,
      characterData: true,
    })
    return () => observer.disconnect()
  }, [lang, expectedTitle])
}
