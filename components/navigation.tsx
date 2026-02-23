'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Mail } from 'lucide-react'
import LinkedinLogo from '@/components/icons/linkedin-logo'
import MPLogo from './logo'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const isHomepage = pathname === '/'
  // For non-homepage routes, always visible. For homepage, controlled by scroll.
  const [homepageVisible, setHomepageVisible] = useState(false)

  const isVisible = !isHomepage || homepageVisible

  const links = [
    { href: '/', label: 'Home' },
    { href: '/#work-section', label: 'Work' },
    { href: '/about', label: 'About' },
  ]

  useEffect(() => {
    if (!isHomepage) return

    queueMicrotask(() => setHomepageVisible(false))

    const handleScroll = () => {
      const workSection = document.getElementById('work-section')
      if (workSection) {
        const rect = workSection.getBoundingClientRect()
        setHomepageVisible(rect.top <= 100)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomepage])

  // Scroll to hash after navigation lands on the homepage
  useEffect(() => {
    if (!isHomepage) return
    const hash = window.location.hash
    if (!hash) return
    // Use rAF to wait for the page to render before scrolling
    const raf = requestAnimationFrame(() => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    })
    return () => cancelAnimationFrame(raf)
  }, [isHomepage])

  function handleWorkClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (isHomepage) {
      e.preventDefault()
      const el = document.getElementById('work-section')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      e.preventDefault()
      router.push('/#work-section')
    }
  }

  return (
    <>
      {/* Skip to content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-text-primary focus:text-background-primary focus:rounded-md focus:outline-2 focus:outline-offset-2 focus:outline-purple-600"
      >
        Skip to main content
      </a>

      <header
        {...(!isVisible && { inert: true })}
        className={cn(
          "sticky top-0 z-50 w-full overflow-x-hidden border-b border-border/40 bg-background-primary/95 backdrop-blur supports-[backdrop-filter]:bg-background-primary/60 focus-within:translate-y-0 focus-within:opacity-100 pt-[var(--safe-area-top)]",
          // Only animate on homepage scroll reveal, not on page navigation
          isHomepage && 'transition-medium ease-in-out',
          isVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        )}
      >
      <nav className="mx-auto flex h-auto max-w-site items-center px-4 py-3 sm:px-6">
        <div className="mr-4 flex min-w-0 flex-1 items-center gap-4 sm:mr-6 sm:gap-8">
          <Link
            href="/"
            className="flex shrink-0 items-center space-x-2 no-underline py-3 rounded-button hover:bg-background-primary/50 transition-medium [&>svg]:origin-left [&>svg]:scale-[0.75] sm:[&>svg]:scale-100"
            aria-label="Home"
          >
            <MPLogo size={48} />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link) => {
                // For hash links, don't show as active (they scroll to a section, not a separate page)
                const isActive = !link.href.includes('#') && pathname === link.href
                const isWorkLink = link.href === '/#work-section'
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        onClick={isWorkLink ? handleWorkClick : undefined}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "px-2 sm:px-4 transition-medium rounded-button",
                          isActive && "bg-text-primary text-background-primary font-medium"
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Button
            size="icon"
            variant="link"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/michael-potter/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinLogo />
            </a>
          </Button>
          <Button
            size="icon"
            variant="link"
            asChild
          >
            <a
              href="mailto:michaelsavagepotter@gmail.com"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </Button>
        </div>
      </nav>
      </header>
    </>
  )
}
