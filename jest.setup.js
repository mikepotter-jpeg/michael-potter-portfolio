import '@testing-library/jest-dom'
import { toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

// Mock motion/react so components using Framer Motion render in tests
jest.mock('motion/react', () => {
  const React = require('react')
  return {
    motion: new Proxy(
      {},
      {
        get: (_, prop) => {
          const El = typeof prop === 'string' ? prop : 'div'
          return (props) => React.createElement(El, props)
        },
      }
    ),
  }
})
