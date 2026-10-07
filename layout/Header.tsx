'use client'

import React, { useState } from 'react'
import Magnetic from '@/animation/Magnetic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Theme from '../module/Theme'
import Language from '../module/Language'
import { useLanguage } from '@/providers/LanguageProvider'
import { data } from '@/data/navLink'
import Image from 'next/image'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  return (
    <header className="relative border-b border-gray-200 lg:min-h-15 dark:border-zinc-700">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex text-2xl font-extrabold">
          <Magnetic strength={0.3} maxMove={25} scale={1.1}>
            <Link className="font-[incognito] font-semibold" href="/">
              <Image
                src="/icons/mirpoker.PNG"
                alt="Mirpoker"
                width={40}
                height={40}
                priority
                loading="eager"
                className="shadow-[0_0_8px_rgba(202,213,226,0.25)] transition-shadow duration-300 hover:shadow-[0_0_14px_rgba(202,213,226,0.32)]"
              />
            </Link>
          </Magnetic>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {data.map((link, id) => {
            const isActive = pathname === link.href
            return (
              <li className="relative" key={id}>
                <Link
                  href={link.href}
                  className={`font-[gitlabmono] text-lg font-medium transition-colors duration-300 after:absolute after:bottom-0 after:start-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] ${
                    isActive
                      ? 'text-slate-500 after:w-full after:bg-slate-500'
                      : 'after:w-0 after:bg-slate-500'
                  }`}
                >
                  {t.nav[link.href as keyof typeof t.nav]}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Language />
          <Theme />
          <button
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.aria.toggleMenu}
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-gray-200 bg-white md:hidden dark:border-zinc-700 dark:bg-stone-900"
          >
            <ul className="flex flex-col gap-4 px-4 py-4">
              {data.map((link, id) => {
                const isActive = pathname === link.href
                return (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: id * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                    className={`block font-[gitlabmono] text-lg font-medium transition-colors duration-300 hover:text-slate-500 ${
                      isActive ? 'text-slate-500' : ''
                    }`}
                  >
                    {t.nav[link.href as keyof typeof t.nav]}
                  </Link>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
