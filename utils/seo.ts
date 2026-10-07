import type { Metadata } from 'next'

// www is the canonical host: the apex 308-redirects to it on Vercel
export const BASE_URL = 'https://www.mahdimirshafiee.ir'

export const SITE_NAME = 'Mahdi Mirshafiee'

export const PERSON_ALTERNATE_NAMES_FA = [
  'مهدی میرشفیعی',
  'سید مهدی میرشفیعی',
]

export const SOCIAL_PROFILE_URLS = [
  'https://github.com/MahdiMirshafiee',
  'https://linkedin.com/in/mahdi-mirshafiee',
  'https://x.com/mirpoker',
  'https://instagram.com/mirpoker',
  'https://t.me/mirpokerr',
  'https://linktr.ee/mirpoker',
]

interface PageSeoOptions {
  title: string
  description: string
  path?: string
}

export function buildMetadata({
  title,
  description,
  path = '',
}: PageSeoOptions): Metadata {
  const url = `${BASE_URL}${path}`
  // subpage titles are short ("About"); brand them for og/twitter like the
  // document title template does — the homepage already carries the brand
  const socialTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
    },
  }
}
