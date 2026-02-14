import NextLink from 'next/link'
import { ReactNode, ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const linkVariants = cva(
  'inline-flex items-center transition-fast',
  {
    variants: {
      variant: {
        default: 'text-text-tertiary hover:text-text-primary',
        inherit: 'hover:text-text-primary',
      },
      size: {
        default: 'gap-2 text-body',
        small: 'gap-1.5 text-ui',
      },
      underline: {
        true: '',
        false: 'no-underline',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      underline: true,
    },
  }
)

export interface LinkProps
  extends Omit<ComponentProps<typeof NextLink>, 'className'>,
    VariantProps<typeof linkVariants> {
  children: ReactNode
  className?: string
  external?: boolean
}

export function Link({
  children,
  variant,
  size,
  underline,
  className = '',
  external = false,
  href,
  ...props
}: LinkProps) {
  const combinedClassName = `${linkVariants({ variant, size, underline })} ${className}`.trim()

  if (external || (typeof href === 'string' && (href.startsWith('http') || href.startsWith('mailto:')))) {
    return (
      <a
        href={typeof href === 'string' ? href : String(href)}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={combinedClassName}
        {...(props as ComponentProps<'a'>)}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} className={combinedClassName} {...props}>
      {children}
    </NextLink>
  )
}
