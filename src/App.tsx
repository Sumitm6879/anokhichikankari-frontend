import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default App