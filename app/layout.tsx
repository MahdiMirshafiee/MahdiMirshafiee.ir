// app/layout.tsx
import Header from '@/layout/Header'
import './globals.css'
import { gitlabmono, incognito } from '@/public/font/font'
import Footer from '@/layout/Footer'
import { ThemeProvider } from '@/providers/ThemeProvider'

export const metadata = {
  title: 'Mahdi Mirshafiee',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={` ${incognito.variable} ${gitlabmono.variable} bg-white text-gray-600 dark:bg-stone-900 dark:text-slate-300`}
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
