import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6">
      <div className="text-center space-y-8">
        <div className="space-y-3">
          <p className="text-8xl md:text-9xl font-bold text-text-tertiary/20 select-none">404</p>
          <h1 className="text-heading-3 md:text-heading-2">Page not found</h1>
        </div>
        <p className="text-body text-text-secondary max-w-prose mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div>
          <Button asChild iconLeft={<ArrowLeft />}>
            <Link href="/" className="no-underline">Back to home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
