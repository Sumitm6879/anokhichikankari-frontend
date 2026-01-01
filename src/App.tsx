import { useStoreSettings } from './hooks/useStoreSettings'
import { Hero } from './components/Hero'
import { TrendingProductsSection } from './components/TrendingProductsSection'
import { CategoryShowcase } from './components/CategoryShowcase'
import { TrustSection } from './components/TrustSection'
import { CraftStory } from './components/CraftStory'
import { TrustStrip } from './components/TrustStrip'
import { Footer } from './components/Footer'
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton'

function App() {
  const { settings } = useStoreSettings()
  const whatsappNumber = settings.whatsapp_number

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero whatsappNumber={whatsappNumber} />

      {/* Trending Products Section */}
      <div id="trending-section">
        <TrendingProductsSection />
      </div>

      {/* Category Showcase */}
      <CategoryShowcase />

      {/* Trust Section */}
      <TrustSection />

      {/* Craft Story Section */}
      <CraftStory />

      {/* Trust Strip */}
      <TrustStrip />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsAppButton whatsappNumber={whatsappNumber} />
    </div>
  )
}

export default App
