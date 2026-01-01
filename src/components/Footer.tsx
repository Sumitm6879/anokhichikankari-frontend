import { useStoreSettings } from '../hooks/useStoreSettings'

export const Footer: React.FC = () => {
  const { settings } = useStoreSettings()

  const footerLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Care Instructions', href: '#care' },
    { label: 'Shipping Policy', href: '#shipping' },
    { label: 'Contact', href: '#contact' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-4">
              Anokhichikankari
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Authentic handcrafted Chikankari kurtas celebrating Lucknowi heritage and artisan craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Customer Service
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#faq"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#returns"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#tracking"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Connect With Us
            </h4>
            <p className="text-sm text-slate-400 mb-4">
              Follow our journey on Instagram or message us on WhatsApp.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200"
                aria-label="Visit our Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110.001 2.881 1.44 1.44 0 01-.001-2.881z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${settings.whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-700 transition-all duration-200"
                aria-label="Contact us on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.766 0-3.42.483-4.844 1.404-.588.358-1.129.816-1.566 1.364l-1.775 1.776-1.776 1.776-.022.022c-.44.435-.707 1.035-.707 1.691 0 1.381 1.12 2.502 2.502 2.502 1.381 0 2.502-1.121 2.502-2.502 0-.656-.267-1.256-.707-1.691l-.022-.022 1.776-1.776 1.776-1.775c.547-.437 1.005-.978 1.363-1.566 1.031-1.569 1.536-3.405 1.536-5.336 0-2.079-.649-4.083-1.853-5.785l1.19-1.189c1.527 1.835 2.45 4.20 2.45 6.974 0 1.766-.483 3.42-1.404 4.844z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-12">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs md:text-sm text-slate-400">
              © {currentYear} Anokhichikankari. All rights reserved. Celebrating Lucknowi heritage.
            </p>

            {/* Additional Links */}
            <div className="flex gap-6 text-xs md:text-sm">
              <a href="#privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
