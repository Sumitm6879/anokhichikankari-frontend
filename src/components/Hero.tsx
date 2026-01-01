interface HeroProps {
  whatsappNumber?: string
}

export const Hero: React.FC<HeroProps> = ({ whatsappNumber }) => {
  // Placeholder hero image - will be replaced with real brand image
  const heroImageUrl = 'src/assets/banner_ac2.png'

  const handleViewCollection = () => {
    // TODO: Implement navigation to shop/collection
    document.querySelector('#trending-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleWhatsAppOrder = () => {
    if (whatsappNumber) {
      const message = encodeURIComponent(
        'Hi! I am interested in your Chikankari kurtas. Could you please guide me?'
      )
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
    }
  }

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImageUrl})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-2xl text-center md:text-left md:ml-12">
          {/* Trust Signal */}
          <p className="text-slate-200 text-sm tracking-widest uppercase mb-6">
            Pure Hand Embroidery • Lucknowi Artisans
          </p>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Authentic Chikankari,
            <br className="hidden md:inline" /> Hand-Crafted with Pride
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-100 mb-8 leading-relaxed max-w-xl drop-shadow">
            Breathable fabrics, intricate embroidery, and generations of artisan skill. Every kurta is a masterpiece of heritage and comfort.
          </p>

          {/* Additional Trust Signals */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm text-slate-200 mb-12">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Pan-India Shipping
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Quality Assured
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <button
              onClick={handleViewCollection}
              className="btn-primary text-base md:text-lg shadow-lg hover:shadow-xl"
            >
              View Collection
            </button>
            <button
              onClick={handleWhatsAppOrder}
              disabled={!whatsappNumber}
              className="btn-secondary text-base md:text-lg bg-white/10 border-white text-white hover:bg-white/20"
            >
              Order on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
