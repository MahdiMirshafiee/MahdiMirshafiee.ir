import Image from 'next/image'
import React from 'react'
import nextjslogo from '@/public/icons/next.svg'

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-44 min-h-full border-t border-gray-200 lg:min-h-30 dark:border-zinc-700">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-y-4 px-6 py-16 md:px-16 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center">
          <div className="flex">
            <h3 className="font-incognito mr-1">Built with:</h3>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="flex items-center hover:underline"
            >
              <Image
                src={nextjslogo}
                width={20}
                height={20}
                alt="nextjs logo"
                className="mr-1"
              />
              Next.js
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center text-center lg:items-end lg:text-start">
          <small className="text-zinc-500">
            Copyright &copy; MIR {new Date().getFullYear()} All rights Reserved
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
