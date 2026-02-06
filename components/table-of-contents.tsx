'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

interface TOCItem {
  id: string
  title: string
}

interface TableOfContentsProps {
  items: TOCItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first section that is intersecting
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        
        if (visibleEntries.length > 0) {
          // Get the topmost visible section
          const topEntry = visibleEntries.reduce((prev, current) => {
            return prev.boundingClientRect.top < current.boundingClientRect.top
              ? prev
              : current
          })
          setActiveId(topEntry.target.id)
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    )

    // Observe all sections
    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <nav aria-label="Page contents" className="sticky top-32">
      {/* Section links */}
      <ul className="space-y-1 text-sm">
        {/* Back to top */}
        <li>
          <a
            href="#top"
            className="no-underline inline-flex items-center gap-1.5 py-1.5 transition-all duration-200 leading-snug text-text-tertiary hover:text-text-primary"
          >
            <span>Top</span>
            <ChevronUp size={14} aria-hidden="true" />
          </a>
        </li>
        {items.map((item) => {
          const isActive = activeId === item.id

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`no-underline block py-1.5 transition-all duration-200 leading-snug ${
                  isActive
                    ? 'text-text-primary font-medium'
                    : 'text-text-tertiary hover:text-text-primary'
                }`}
              >
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
