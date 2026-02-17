/**
 * Reusable animation variants for Motion library
 * Centralized animation definitions for consistency across components
 */

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

/**
 * Variants for scroll-triggered animations
 * Use with whileInView prop
 */
export const scrollFadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 },
}

export const scrollFadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 },
}

/**
 * Container for staggered children animations
 * Use on parent element with staggerChildren
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
  transition: { duration: 0.4, ease: 'easeOut' },
}

/**
 * Stagger variants for work cards
 */
export const cardStaggerContainer = {
  initial: 'hidden',
  animate: 'visible',
  variants: {
    hidden: { transition: { staggerChildren: 0.15, delayChildren: 0 } },
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0 } },
  },
}

export const cardStaggerItem = {
  variants: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  },
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
