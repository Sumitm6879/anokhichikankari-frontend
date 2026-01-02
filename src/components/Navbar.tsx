import { Link } from 'react-router-dom'
import { useState } from 'react'

interface NavbarProps {
  whatsappNumber?: string
}

export const Navbar: React.FC<NavbarProps> = ({ whatsappNumber }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-slate-900">
              Anokhi Chikankari
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-emerald-600 transition-colors">Home</Link>
            <Link to="/products" className="text-slate-600 hover:text-emerald-600 transition-colors">Collection</Link>
            <a href="#about" className="text-slate-600 hover:text-emerald-600 transition-colors">Our Story</a>
            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors text-sm font-medium"
              >
                Chat on WhatsApp
              </a>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Collection
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}