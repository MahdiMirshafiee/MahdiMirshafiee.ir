// components/MagneticHeader.tsx
'use client'

import React, { useState } from 'react'
import Magnetic from '@/animation/Magnetic'
import Link from 'next/link'
import Theme from '../module/Theme'
import { data } from '@/data/navLink'
import Image from 'next/image'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

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
                className="shadow-[0_0_8px_rgba(202,213,226,0.25)] transition-shadow duration-300 hover:shadow-[0_0_14px_rgba(202,213,226,0.4)]"
              />
            </Link>
          </Magnetic>
        </div>

        <ul className="hidden items-center space-x-8 md:flex">
          {data.map((link, id) => (
            <li className="relative" key={id}>
              <Link
                href={link.href}
                className="font-[gitlabmono] text-lg font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-slate-500 after:transition-all after:duration-500 after:content-[''] hover:text-slate-500 hover:after:w-full"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Theme />
          <button
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
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

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden dark:border-zinc-700 dark:bg-stone-900">
          <ul className="flex flex-col gap-4 px-4 py-4">
            {data.map((link, id) => (
              <li key={id}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-[gitlabmono] text-lg font-medium transition-colors duration-300 hover:text-slate-500"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
