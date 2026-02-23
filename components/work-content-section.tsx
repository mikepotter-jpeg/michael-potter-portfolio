'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ChevronUp } from 'lucide-react'
import { scrollFadeInUp } from '@/lib/animations'

interface WorkContentSectionProps {
  id: string
  title: string
  content: string
  index: number
}

export default function WorkContentSection({ id, title, content, index }: WorkContentSectionProps) {
  return (
    <motion.article
      id={id}
      className="scroll-mt-24"
      {...scrollFadeInUp}
      transition={{
        ...scrollFadeInUp.transition,
        delay: index * 0.1,
      }}
    >
      <h2 className="text-heading-3 md:text-heading-2 mb-8">
        {title}
      </h2>
      <div
        className="prose-custom"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Button asChild variant="link" size="sm" className="xl:hidden mt-10">
        <a href="#top" className="no-underline">
          Top
          <ChevronUp size={14} className="group-hover:scale-110" />
        </a>
      </Button>
    </motion.article>
  )
}
