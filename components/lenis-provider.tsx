'use client'

import { ReactLenis } from 'lenis/react'

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        duration: 0.6,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
