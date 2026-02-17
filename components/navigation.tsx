'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import MPLogo from './logo'
import SocialIcon from './social-icon'
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

    setHomepageVisible(false)

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
        className={cn(
          "sticky top-0 z-50 w-full overflow-x-hidden border-b border-border/40 bg-background-primary/95 backdrop-blur supports-[backdrop-filter]:bg-background-primary/60 focus-within:translate-y-0 focus-within:opacity-100 pt-[var(--safe-area-top)]",
          // Only animate on homepage scroll reveal, not on page navigation
          isHomepage && 'transition-medium ease-in-out',
          isVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        )}
      >
      <nav className="mx-auto flex h-auto max-w-container items-center px-4 py-3 sm:px-6">
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
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
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
        <div className="ml-auto flex shrink-0 items-center gap-1">
          <SocialIcon 
            href="https://www.linkedin.com/in/michael-potter/" 
            icon="linkedin"
            label="LinkedIn"
          />
          <SocialIcon 
            href="mailto:michaelsavagepotter@gmail.com" 
            icon="email"
            label="Email"
          />
        </div>
      </nav>
      </header>
    </>
  )
}
