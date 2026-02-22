'use client'

import { Link } from '@/components/ui/link'
import MPLogo from '@/components/logo'
import { usePathname, useRouter } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const router = useRouter()

  function handleWorkClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === '/') {
      e.preventDefault()
      const el = document.getElementById('work-section')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      e.preventDefault()
      router.push('/#work-section')
    }
  }

  return (
    <footer className="border-t border-border bg-background-secondary pb-[var(--safe-area-bottom)]">
      <div className="max-w-site mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-10">
          {/* Logo & tagline */}
          <div className="col-span-2 md:col-span-1">
            <MPLogo size={48} />
            <p className="mt-3 text-body-sm text-text-tertiary">
              Product design, Sydney.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-[0.875rem] leading-none font-normal tracking-wide uppercase text-text-primary mb-4 [font-feature-settings:'kern'_1]">Pages</h3>
            <ul className="space-y-2">
              <li><Link href="/" variant="inherit" size="small">Home</Link></li>
              <li><Link href="/#work-section" variant="inherit" size="small" onClick={handleWorkClick}>Work</Link></li>
              <li><Link href="/about" variant="inherit" size="small">About</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[0.875rem] leading-none font-normal tracking-wide uppercase text-text-primary mb-4 [font-feature-settings:'kern'_1]">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="mailto:michaelsavagepotter@gmail.com" variant="inherit" size="small" external>Email</Link></li>
              <li><Link href="https://www.linkedin.com/in/michael-potter/" variant="inherit" size="small" external>LinkedIn</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-light pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-body-sm text-text-tertiary">
            &copy; Michael Potter 2026 &middot; Made in Sydney
          </p>
          <p className="text-body-sm text-text-tertiary">
            Crafted with{' '}
            <Link href="https://nextjs.org" variant="inherit" size="small" external>Next.js</Link>
            {' & '}
            <Link href="https://tailwindcss.com" variant="inherit" size="small" external>Tailwind CSS</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
