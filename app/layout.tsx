import type { Metadata, Viewport } from 'next'
import { Figtree } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'
import LenisProvider from '@/components/lenis-provider'

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Michael Potter — Product Designer, Sydney',
  description: 'Sydney-based product designer building enterprise platforms across government and retail. Focused on design systems, accessibility, and complex workflows.',
  metadataBase: new URL('https://michaelpotter.design'),
  openGraph: {
    title: 'Michael Potter — Product Designer',
    description: 'Sydney-based product designer building enterprise platforms across government and retail.',
    type: 'website',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michael Potter — Product Designer',
    description: 'Sydney-based product designer building enterprise platforms across government and retail.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${figtree.className} ${figtree.variable}`}>
      <body className="font-sans bg-background-primary text-text-primary min-h-screen flex flex-col">
        <LenisProvider>
          <ScrollToTop />
          <Navigation />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
