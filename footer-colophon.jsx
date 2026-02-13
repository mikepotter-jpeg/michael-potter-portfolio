export default function FooterPreview() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Page content placeholder */}
        <div className="h-96 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center border-b border-gray-200">
          <p className="text-gray-400 text-lg">Your page content here</p>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white">
          {/* Main Footer Section */}
          <div className="px-8 py-8 border-b border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm text-gray-500">© Michael Potter · 2026</p>
              <div className="flex items-center gap-8 text-sm">
                <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Work</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
              </div>
              <p className="text-sm text-gray-500">Made in Sydney</p>
            </div>
          </div>

          {/* Colophon Section */}
          <div className="px-8 py-12 bg-amber-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Built with */}
              <div>
                <h3 className="text-xs font-semibold text-gray-900 mb-4 uppercase tracking-widest">
                  Built with
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="text-gray-500">Framework:</span>{' '}
                    <a href="#" className="text-gray-700 hover:text-gray-900">Next.js</a>
                  </li>
                  <li>
                    <span className="text-gray-500">Styling:</span>{' '}
                    <a href="#" className="text-gray-700 hover:text-gray-900">Tailwind CSS</a>
                  </li>
                  <li>
                    <span className="text-gray-500">UI:</span>{' '}
                    <a href="#" className="text-gray-700 hover:text-gray-900">Radix UI</a>
                  </li>
                  <li>
                    <span className="text-gray-500">Icons:</span>{' '}
                    <a href="#" className="text-gray-700 hover:text-gray-900">lucide-react</a>
                  </li>
                </ul>
              </div>

              {/* Design system */}
              <div>
                <h3 className="text-xs font-semibold text-gray-900 mb-4 uppercase tracking-widest">
                  Design system
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="text-gray-500">Font:</span>{' '}
                    <a href="#" className="text-gray-700 hover:text-gray-900">Geist Sans</a>
                  </li>
                  <li>
                    <span className="text-gray-500">Primary:</span>{' '}
                    <code className="text-xs font-mono">#F8F6F3</code>
                  </li>
                  <li>
                    <span className="text-gray-500">Text:</span>{' '}
                    <code className="text-xs font-mono">#2A3132</code>
                  </li>
                  <li>
                    <span className="text-gray-500">Accent:</span>{' '}
                    <code className="text-xs font-mono">#555B5C</code>
                  </li>
                </ul>
              </div>

              {/* Deployed on */}
              <div>
                <h3 className="text-xs font-semibold text-gray-900 mb-4 uppercase tracking-widest">
                  Deployed on
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 hover:text-gray-900">Vercel</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-gray-900">Source code on GitHub</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}