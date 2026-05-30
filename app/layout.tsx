// app/layout.tsx
import Header from '@/layout/Header'
import './globals.css'
import { gitlabmono, incognito } from '@/public/font/font'
import Footer from '@/layout/Footer'
import { ThemeProvider } from '@/providers/ThemeProvider'
import type { Metadata } from 'next'

const BASE_URL = 'https://mahdimirshafiee.ir'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Mahdi Mirshafiee — Full-Stack Web Developer',
    template: '%s | Mahdi Mirshafiee',
  },
  description:
    'Mahdi Mirshafiee is a full-stack web developer specializing in TypeScript, Next.js, React, and Node.js. Based in Mashhad, Iran.',
  keywords: [
    'Mahdi Mirshafiee',
    'full-stack developer',
    'web developer',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Mashhad',
    'Iran',
    'software engineer',
  ],
  authors: [{ name: 'Mahdi Mirshafiee', url: BASE_URL }],
  creator: 'Mahdi Mirshafiee',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Mahdi Mirshafiee',
    title: 'Mahdi Mirshafiee — Full-Stack Web Developer',
    description:
      'Full-stack web developer specializing in TypeScript, Next.js, React, and Node.js.',
    images: [
      {
        url: '/photos/mirpoker.jpg',
        width: 400,
        height: 400,
        alt: 'Mahdi Mirshafiee',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahdi Mirshafiee — Full-Stack Web Developer',
    description:
      'Full-stack web developer specializing in TypeScript, Next.js, React, and Node.js.',
    creator: '@mirpoker',
    images: ['/photos/mirpoker.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className={`${incognito.variable} ${gitlabmono.variable} bg-white text-gray-600 dark:bg-stone-900 dark:text-slate-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
