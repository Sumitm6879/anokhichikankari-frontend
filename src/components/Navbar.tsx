import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../assets/logo.svg'

interface NavbarProps {
  whatsappNumber?: string
}

export const Navbar: React.FC<NavbarProps> = ({ whatsappNumber }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [textColor, setTextColor] = useState('text-slate-200')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        // Scrolled down: Dark text for white/glass background
        setTextColor('text-slate-900')
        setIsScrolled(true)
      } else {
        // At top: Light text for dark background
        setTextColor('text-slate-200')
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navbarStyle: React.CSSProperties = {
    background: isScrolled
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgb(15, 23, 43)',
    backdropFilter: isScrolled ? 'blur(5px)' : 'none',
    WebkitBackdropFilter: isScrolled ? 'blur(5px)' : 'none',
    // borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
    boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
        style={navbarStyle}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="Anokhi Chikankari Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className={`text-2xl font-serif font-bold tracking-tight ${textColor} transition-colors duration-300`}>
                Anokhi Chikankari
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`text-sm font-medium ${textColor} hover:text-emerald-400 transition-colors duration-300`}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`text-sm font-medium ${textColor} hover:text-emerald-400 transition-colors duration-300`}
              >
                Collection
              </Link>
              <a
                href="/about"
                className={`text-sm font-medium ${textColor} hover:text-emerald-400 transition-colors duration-300`}
              >
                Our Story
              </a>

              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi! I am interested in your Chikankari kurtis.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-700/90 text-white px-5 py-2 rounded-full hover:bg-emerald-600 transition-all text-sm font-medium shadow-sm hover:shadow-md"
                >
                  Chat on WhatsApp
                </a>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${textColor} hover:text-emerald-500 p-2 rounded-md hover:bg-white/10 transition-colors`}
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
          <div className="md:hidden absolute top-full left-0 w-full"
            style={{
              background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgb(15, 23, 43)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              // borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
            <div className="px-4 pt-2 pb-4 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-3 text-base font-medium ${textColor} hover:text-emerald-400 hover:bg-white/5 rounded-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`block px-3 py-3 text-base font-medium ${textColor} hover:text-emerald-400 hover:bg-white/5 rounded-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                Collection
              </Link>
              <a
                href="/about"
                className={`block px-3 py-3 text-base font-medium ${textColor} hover:text-emerald-400 hover:bg-white/5 rounded-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* SPACER DIV:
        This empty div sits in the document flow and pushes your content down
        by 4rem (h-16), which is the exact height of your fixed navbar.
      */}
      <div className="h-16"></div>
    </>
  )
}