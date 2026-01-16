import { useStoreSettings } from '../hooks/useStoreSettings'
import {
  Info,
  FileText,
  Truck,
  Mail,
  HelpCircle,
  RefreshCw,
  Package,
  ShieldCheck
} from 'lucide-react'

export const Footer: React.FC = () => {
  const { settings } = useStoreSettings()

  const footerLinks = [
    { label: 'About Us', href: '/about', icon: Info },
    { label: 'Care Instructions', href: '/care-instructions', icon: ShieldCheck },
    { label: 'Shipping Policy', href: '/shipping-policy', icon: Truck },
    { label: 'Contact', href: '/contact', icon: Mail },
  ]

  const customerServiceLinks = [
    { label: 'FAQ', href: '/faq', icon: HelpCircle },
    { label: 'Returns & Exchanges', href: '/returns-exchanges', icon: RefreshCw },
    { label: 'Track Order', href: '/track-order', icon: Package },
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
              Anokhi Chikankari
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
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center text-sm text-slate-400 hover:text-green-500 transition-colors duration-200"
                  >
                    <link.icon className="w-4 h-4 mr-2 text-slate-500 group-hover:text-green-500 transition-colors" />
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
            <ul className="space-y-3">
              {customerServiceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center text-sm text-slate-400 hover:text-green-500 transition-colors duration-200"
                  >
                    <link.icon className="w-4 h-4 mr-2 text-slate-500 group-hover:text-green-500 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Connect With Us
            </h4>
            <p className="text-sm text-slate-400 mb-4">
              Message us on WhatsApp.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${settings.support_phone}?text=Hi! I am interested in your Chikankari kurtis. Could you please guide me?`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-white hover:bg-green-700 transition-all duration-200"
                aria-label="Contact us on WhatsApp"
              >
                {/* Kept the SVG for WhatsApp as Lucide doesn't usually include brand logos */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M16.003 2.003c-7.732 0-14 6.268-14 14 0 2.73.77 5.287 2.104 7.468L2 30l6.71-2.07a13.93 13.93 0 0 0 7.293 2.04c7.732 0 14-6.268 14-14s-6.268-14-14-14zm0 25.5a11.45 11.45 0 0 1-5.847-1.6l-.42-.25-3.98 1.23 1.3-3.87-.27-.4a11.45 11.45 0 1 1 9.217 4.89zm6.61-8.71c-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.78-1.07-.95-1.8-2.13-2.01-2.49-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61h-.69c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3 0 1.77 1.29 3.48 1.47 3.72.18.24 2.54 3.88 6.16 5.44.86.37 1.53.59 2.05.76.86.27 1.65.23 2.27.14.69-.1 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42z" />
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
              © {currentYear} <span>Anokhi Chikankari</span>. All rights reserved. <span className='text-green-500'>Celebrating Lucknowi heritage</span>.
            </p>

            {/* Additional Links */}
            <div className="flex gap-6 text-xs md:text-sm">
              <a href="/privacy-policy" className="flex items-center text-slate-400 hover:text-white transition-colors">
                <FileText className="w-3 h-3 mr-1" />
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="flex items-center text-slate-400 hover:text-white transition-colors">
                <FileText className="w-3 h-3 mr-1" />
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}