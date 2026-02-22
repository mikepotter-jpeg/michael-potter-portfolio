/**
 * Reusable animation presets for Motion library
 * Centralized animation definitions for consistency across components
 */

/**
 * Fade in + slide up — for page-load animations (uses `animate`)
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
}

/**
 * Scroll-triggered fade in + slide up (uses `whileInView`)
 */
export const scrollFadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
  viewport: { once: true, amount: 0.2 },
}

/**
 * Container for staggered children animations
 */
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

/**
 * Child item animation (for use with staggerContainer)
 */
export const staggerItem = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut' as const },
}

/**
 * Timing constants for consistency
 */
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
} as const

export const STAGGER_DELAY = {
  tight: 0.1,
  normal: 0.15,
  loose: 0.2,
} as const
