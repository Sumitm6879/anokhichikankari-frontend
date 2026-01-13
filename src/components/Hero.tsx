import { useState, useEffect, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStoreSettings } from '../hooks/useStoreSettings'

interface HeroProps {
  whatsappNumber?: string
}

const ROTATION_INTERVAL = 6000

export const Hero: React.FC<HeroProps> = ({ whatsappNumber }) => {
  const { settings } = useStoreSettings()
  const navigate = useNavigate()

  const banners = useMemo(() => settings?.banners ?? [], [settings?.banners])
  const hasMultipleBanners = banners.length > 1

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!hasMultipleBanners) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length)
    }, ROTATION_INTERVAL)

    return () => clearInterval(timer)
  }, [hasMultipleBanners, banners.length])

  const handleViewCollection = useCallback(() => {
    navigate('/products')
  }, [navigate])

  const handleWhatsAppOrder = useCallback(() => {
    const number = whatsappNumber ?? '9876543210'
    const message = encodeURIComponent(
      'Hi! I am interested in your Chikankari kurtis.'
    )

    window.open(`https://wa.me/${number}?text=${message}`, '_blank')
  }, [whatsappNumber])

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Images */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${banner.url})` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center px-6">
        <div className="max-w-2xl md:ml-12">
          <p className="text-slate-200 text-sm tracking-widest uppercase mb-6">
            Pure Hand Embroidery • Lucknowi Artisans
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Authentic Chikankari,
            <br className="hidden md:inline" /> Hand-Crafted with Pride
          </h1>

          <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-xl">
            Breathable fabrics, intricate embroidery, and generations of artisan skill.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={handleViewCollection} className="btn-primary">
              View Collection
            </button>
            <button
              onClick={handleWhatsAppOrder}
              className="btn-secondary bg-white/10 text-white"
            >
              Order on WhatsApp
            </button>
          </div>

          {/* Banner Indicators */}
          {hasMultipleBanners && (
            <div className="mt-8 flex gap-2">
              {banners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)} // Added click interactivity
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-2'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}