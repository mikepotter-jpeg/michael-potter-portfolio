import Link from 'next/link'
import { Linkedin, Mail } from 'lucide-react'

interface SocialIconProps {
  href: string
  icon: 'linkedin' | 'email'
  label: string
}

const icons = {
  linkedin: <Linkedin size={20} />,
  email: <Mail size={20} />,
}

export default function SocialIcon({ href, icon, label }: SocialIconProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto')
  
  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="no-underline p-2 text-text-primary hover:text-accent hover:bg-accent-lighter rounded-full transition-medium"
      aria-label={label}
    >
      {icons[icon]}
    </Link>
  )
}
