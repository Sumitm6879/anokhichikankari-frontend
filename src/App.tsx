import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { useStoreSettings } from './hooks/useStoreSettings'
import { Hero } from './components/Hero'
import { TrendingProductsSection } from './components/TrendingProductsSection'
import { CategoryShowcase } from './components/CategoryShowcase'
import { TrustSection } from './components/TrustSection'
import { CraftStory } from './components/CraftStory'
import { TrustStrip } from './components/TrustStrip'
import { Footer } from './components/Footer'
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton'
import { AllProducts } from './pages/AllProducts'
import { Navbar } from './components/Navbar'
import ProductDetails from "./pages/ProductDetails";
import About from './pages/static/About'
import CareInstructions from './pages/static/CareInstructions'
import ShippingPolicy from './pages/static/ShippingPolicy'
import Contact from './pages/static/Contact'
import FAQ from './pages/static/FAQ'
import ReturnsExchanges from './pages/static/ReturnsExchanges'
import TrackOrder from './pages/static/TrackOrder'
import PrivacyPolicy from './pages/static/PrivacyPolicy'
import TermsOfService from './pages/static/TermsOfService'

// Refactored Home Page Component
const Home = () => {
  const { settings } = useStoreSettings()
  const whatsappNumber = settings.support_phone

  return (
    <>
      <Navbar whatsappNumber={whatsappNumber} />
      <Hero whatsappNumber={whatsappNumber} />
      <div id="trending-section">
        <TrendingProductsSection />
      </div>
      <CategoryShowcase />
      <TrustSection />
      <CraftStory />
      <TrustStrip />
      <Footer />
      <FloatingWhatsAppButton whatsappNumber={whatsappNumber} />
    </>
  )
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/care-instructions" element={<CareInstructions />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/returns-exchanges" element={<ReturnsExchanges />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  )
}

export default App