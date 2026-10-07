import localFont from 'next/font/local'
import { Vazirmatn } from 'next/font/google'

export const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
})

export const incognito = localFont({
  src: [
    {
      path: 'incognito_bold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: 'incognito_condensed.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: 'incognito_medium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: 'incognito_regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--incognito',
  display: 'swap',
})

export const gitlabmono = localFont({
  src: [
    {
      path: 'gitlab-mono.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: 'gitlab-mono.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'gitlab-mono.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: 'gitlab-mono.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--gitlabmono',
  display: 'swap',
})
