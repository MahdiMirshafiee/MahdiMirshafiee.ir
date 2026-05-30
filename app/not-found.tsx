import type { Metadata } from 'next'
import NotFoundClient from '../components/404'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return <NotFoundClient />
}
