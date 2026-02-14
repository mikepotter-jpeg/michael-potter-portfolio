import { Link } from '@/components/ui/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="max-w-container mx-auto px-6 py-12">
        <p className="text-ui text-text-secondary text-center">
          Crafted with{' '}
          <Link href="https://nextjs.org" variant="inherit" size="small" external>
            Next.js
          </Link>
          {' & '}
          <Link href="https://tailwindcss.com" variant="inherit" size="small" external>
            Tailwind CSS
          </Link>
          {' | Designed with '}
          <Link href="https://vercel.com/font/geist" variant="inherit" size="small" external>
            Geist Sans
          </Link>
          {' | Icons from '}
          <Link href="https://lucide.dev" variant="inherit" size="small" external>
            lucide-react
          </Link>
          {' | Deployed to '}
          <Link href="https://vercel.com" variant="inherit" size="small" external>
            Vercel
          </Link>
          {' | © Michael Potter 2026 · Made in Sydney'}
        </p>
      </div>
    </footer>
  )
}
