declare module 'jest-axe' {
  export function axe(container: Element | Document): Promise<unknown>
  export function toHaveNoViolations(
    results: unknown
  ): { message: () => string; pass: boolean }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveNoViolations(): R
    }
  }
}

export {}
