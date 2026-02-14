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
  const [isVisible, setIsVisible] = useState(true)
  const isHomepage = pathname === '/'
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/#work-section', label: 'Work' },
    { href: '/about', label: 'About' },
  ]

  useEffect(() => {
    // Only apply scroll-based visibility on homepage
    if (!isHomepage) {
      setIsVisible(true)
      return
    }

    // Start hidden on homepage
    setIsVisible(false)

    const handleScroll = () => {
      // Find the work section and check if we've scrolled to it
      const workSection = document.getElementById('work-section')
      if (workSection) {
        const rect = workSection.getBoundingClientRect()
        // Show navbar when work section is near the top of viewport
        setIsVisible(rect.top <= 100)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial position

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
          "sticky top-0 z-50 w-full border-b border-border/40 bg-background-primary/95 backdrop-blur supports-[backdrop-filter]:bg-background-primary/60 transition-medium ease-in-out focus-within:translate-y-0 focus-within:opacity-100",
          isVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        )}
      >
      <nav className="mx-auto flex h-auto max-w-container items-center px-6 py-3">
        <div className="mr-6 flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center space-x-2 no-underline py-3 rounded-button hover:bg-background-primary/50 transition-medium"
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
                          "transition-medium rounded-button",
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
        <div className="ml-auto flex items-center gap-1">
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
