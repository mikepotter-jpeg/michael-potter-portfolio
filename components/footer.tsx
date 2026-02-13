export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-sm text-text-secondary text-center">
          Crafted with{' '}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
            Next.js
          </a>
          {' & '}
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
            Tailwind CSS
          </a>
          {' | Designed with '}
          <a href="https://vercel.com/font/geist" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
            Geist Sans
          </a>
          {' | Icons from '}
          <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
            lucide-react
          </a>
          {' | Deployed to '}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
            Vercel
          </a>
          {' | © Michael Potter 2026 · Made in Sydney'}
        </p>
      </div>
    </footer>
  )
}
