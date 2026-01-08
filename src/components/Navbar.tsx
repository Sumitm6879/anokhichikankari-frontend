import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo.svg'
interface NavbarProps {
  whatsappNumber?: string
}

export const Navbar: React.FC<NavbarProps> = ({ whatsappNumber }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Custom Glass Effect Styles
  // Removed border-radius and margins to make it full-width
  const glassStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)', // Very subtle shadow
  }

  return (
    <nav
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={glassStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
              {/* Logo Image */}
              <img
                src={logo}
                alt="Anokhi Chikankari Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />

              {/* Brand Name */}
              <span className="text-2xl font-serif font-bold text-slate-900 tracking-tight">
                Anokhi Chikankari
              </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-slate-800 hover:text-emerald-700 transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium text-slate-800 hover:text-emerald-700 transition-colors">
              Collection
            </Link>
            <a href="/about" className="text-sm font-medium text-slate-800 hover:text-emerald-700 transition-colors">
              Our Story
            </a>
            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi! I am interested in your Chikankari kurtis. Could you please guide me?`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-700/90 text-white px-5 py-2 rounded-full hover:bg-emerald-800 transition-all text-sm font-medium shadow-sm hover:shadow-md"
              >
                Chat on WhatsApp
              </a>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-800 hover:text-slate-900 p-2 rounded-md hover:bg-black/5 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Glassy dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full border-t border-white/20" style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
        }}>
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              className="block px-3 py-3 text-base font-medium text-slate-800 hover:text-emerald-700 hover:bg-emerald-50/50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-3 py-3 text-base font-medium text-slate-800 hover:text-emerald-700 hover:bg-emerald-50/50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Collection
            </Link>
            <a
              href="#about"
              className="block px-3 py-3 text-base font-medium text-slate-800 hover:text-emerald-700 hover:bg-emerald-50/50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}