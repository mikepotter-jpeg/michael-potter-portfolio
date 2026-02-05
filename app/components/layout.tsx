import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Component Library | Michael Potter',
  description: 'Internal component library and style guide',
  robots: 'noindex, nofollow',
}

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
