import { useState, useMemo, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import { useProductVariants } from '../hooks/useProductVariants'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { FloatingWhatsAppButton } from '../components/FloatingWhatsAppButton'
import { useStoreSettings } from '../hooks/useStoreSettings'
import { TrendingProductsSection } from '../components/TrendingProductsSection'
import { ImageZoomModal } from '../components/ImageZoomModal'

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>()

  // --- Hooks & Data ---
  const { products, loading: productsLoading } = useProducts()
  const { variants, loading: variantsLoading } = useProductVariants(id || '')
  const { settings } = useStoreSettings()

  // --- Local State ---
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null)
  const [selectedSizeId, setSelectedSizeId] = useState<string | null>(null)

  // Modal State
  const [isZoomOpen, setIsZoomOpen] = useState(false)
  const [zoomStartIndex, setZoomStartIndex] = useState(0)

  const product = useMemo(() => products.find(p => p.id === id), [products, id])

  // --- Derived Logic ---

  // 1. Available Colors
  const availableColors = useMemo(() => {
    const map = new Map()
    variants.forEach(v => {
      if (v.color && !map.has(v.color.id)) map.set(v.color.id, v.color)
    })
    return Array.from(map.values())
  }, [variants])

  // 2. Available Sizes for Selected Color
  const availableSizes = useMemo(() => {
    if (!selectedColorId) return []
    return variants
      .filter(v => v.color_id === selectedColorId && v.stock_quantity > 0 && v.size)
      .map(v => v.size!)
      .sort((a, b) => {
        const order = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', 'Free Size']
        return order.indexOf(a.name) - order.indexOf(b.name)
      })
  }, [variants, selectedColorId])

  // 3. Selected Variant (for stock check)
  const selectedVariant = useMemo(() => {
    if (!selectedColorId || !selectedSizeId) return null
    return variants.find(v => v.color_id === selectedColorId && v.size_id === selectedSizeId)
  }, [variants, selectedColorId, selectedSizeId])

  // 4. Filtered Images
  const productImages = useMemo(() => {
    if (!product) return []
    const placeholder = 'https://images.unsplash.com/photo-1610627033099-b3813d31910b?w=800&h=1000&fit=crop'

    let images = product.product_images?.filter(img => img.color_id === selectedColorId) || []

    if (images.length === 0) images = product.product_images || []
    if (images.length === 0 && product.image_url) return [{ image_url: product.image_url }]
    if (images.length === 0) return [{ image_url: placeholder }]

    return images
  }, [product, selectedColorId])

  // --- Effects ---

  // Auto-select first color
  useEffect(() => {
    if (availableColors.length > 0 && !selectedColorId) {
      setSelectedColorId(availableColors[0].id)
    }
  }, [availableColors, selectedColorId])

  // Reset size when color changes
  useEffect(() => {
    setSelectedSizeId(null)
  }, [selectedColorId])

  // --- Handlers ---

  const handleOpenZoom = (index: number) => {
    setZoomStartIndex(index)
    setIsZoomOpen(true)
  }

  const handleWhatsAppOrder = () => {
    if (!product) return
    const colorName = availableColors.find(c => c.id === selectedColorId)?.name || 'Not Selected'
    const sizeName = availableSizes.find(s => s.id === selectedSizeId)?.name || 'Not Selected'
    const finalPrice = product.is_on_sale && product.sale_price ? product.sale_price : product.price

    const text = `Hi, I would like to order:

Product: ${product.name}
Price: ₹${finalPrice}
Color: ${colorName}
Size: ${sizeName}

Link: ${window.location.href}`

    const number = settings.support_phone || '910000000000'
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, '_blank')
  }

  // --- Render Loading ---
  if (productsLoading || variantsLoading || !product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar whatsappNumber={settings.support_phone} />
        <div className="h-96 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-4 w-32 bg-gray-200 rounded mb-4"></div>
            <div className="h-2 w-48 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  const displayPrice = product.is_on_sale && product.sale_price ? product.sale_price : product.price
  const discountPercent = product.is_on_sale && product.sale_price
    ? Math.round(((product.price - product.sale_price) / product.price) * 100)
    : 0

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar whatsappNumber={settings.whatsapp_number} />

      {/* Breadcrumb */}
      <div className="pt-4 pb-2 px-4 max-w-400 mx-auto">
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <Link to="/" className="hover:text-black transition-colors">Home</Link> /
          <Link to="/products" className="hover:text-black transition-colors">Collection</Link> /
          <span className="font-semibold text-gray-800 truncate">{product.name}</span>
        </div>
      </div>

      <div className="max-w-400 mx-auto px-0 md:px-4 lg:px-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-4">

          {/* LEFT: Image Gallery */}
          <div className="w-full lg:w-[58%]">

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-2 gap-2">
              {productImages.map((img: any, idx: number) => (
                <div
                  key={idx}
                  onClick={() => handleOpenZoom(idx)}
                  className="aspect-3/4 overflow-hidden bg-gray-50 cursor-zoom-in hover:opacity-95 transition-opacity"
                >
                  <img src={img.image_url} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden relative w-full aspect-3/4 bg-gray-100 overflow-hidden flex snap-x snap-mandatory overflow-x-scroll no-scrollbar">
              {productImages.map((img: any, idx: number) => (
                <div
                  key={idx}
                  onClick={() => handleOpenZoom(idx)}
                  className="w-full shrink-0 snap-center"
                >
                  <img src={img.image_url} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
              {productImages.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
                  {productImages.map((_: any, i: number) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/80 shadow-sm" />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="w-full lg:w-[42%] px-4 md:px-0">
            <div className="lg:sticky lg:top-24 h-auto">

              {/* Product Header */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-2 leading-tight">
                  {product.name}
                </h1>

                <div className="flex items-center gap-3 mt-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{displayPrice.toLocaleString('en-IN')}
                  </span>
                  {product.is_on_sale && (
                    <>
                      <span className="text-lg text-gray-400 line-through font-normal">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-lg text-emerald-600 font-bold">
                        ({discountPercent}% OFF)
                      </span>
                    </>
                  )}
                </div>
                <p className="text-emerald-700 text-xs font-bold mt-2 uppercase tracking-wide">
                  inclusive of all taxes
                </p>
              </div>

              {/* Color Selector */}
              {availableColors.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase text-gray-900 mb-3 tracking-wide">
                    More Colors
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {availableColors.map(color => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColorId(color.id)}
                        className={`
                               group relative w-16 h-20 rounded-md overflow-hidden border transition-all
                               ${selectedColorId === color.id
                            ? 'ring-2 ring-emerald-600 ring-offset-1 border-emerald-600'
                            : 'border-gray-200 hover:border-gray-400'}
                            `}
                      >
                        <div
                          className="w-full h-full bg-gray-50 flex items-center justify-center"
                          style={color.hex_code ? { backgroundColor: color.hex_code } : {}}
                        >
                          {!color.hex_code && <span className="text-xs font-medium text-gray-500">{color.name.substring(0, 2)}</span>}
                        </div>
                        {selectedColorId === color.id && (
                          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-sm font-bold uppercase text-gray-900 tracking-wide">
                    Select Size
                  </h4>
                  <button className="text-xs font-bold text-emerald-600 uppercase tracking-wide hover:underline">
                    Size Chart
                  </button>
                </div>

                {availableSizes.length > 0 ? (
                  <>
                    <div className="flex flex-wrap gap-3">
                      {availableSizes.map(size => (
                        <button
                          key={size.id}
                          onClick={() => setSelectedSizeId(size.id)}
                          className={`
                                  w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border transition-all
                                  ${selectedSizeId === size.id
                              ? 'border-emerald-600 text-emerald-600 ring-1 ring-emerald-600 bg-emerald-50'
                              : 'border-gray-300 text-gray-800 hover:border-emerald-600 bg-white'}
                               `}
                        >
                          {size.name}
                        </button>
                      ))}
                    </div>

                    {selectedVariant && selectedVariant.stock_quantity < 3 && selectedVariant.stock_quantity > 0 && (
                      <div className="mt-3 text-red-600 text-xs font-bold flex items-center gap-1 animate-pulse">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Hurry! Only {selectedVariant.stock_quantity} unit{selectedVariant.stock_quantity > 1 ? 's' : ''} left
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-sm text-amber-600 font-medium bg-amber-50 p-3 rounded-md border border-amber-100">
                    Please select a color to view available sizes
                  </div>
                )}
              </div>

              {/* Main Action Button */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={handleWhatsAppOrder}
                  disabled={!selectedSizeId}
                  className={`
                        w-full py-4 rounded-sm font-bold text-base uppercase tracking-wider flex items-center justify-center gap-3 shadow-sm transition-all
                        ${!selectedSizeId
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-[#25D366] text-white hover:bg-[#1fb855] hover:shadow-lg'}
                     `}
                >
                  <svg
                    className="relative z-10 w-8 h-8"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.003 2.003c-7.732 0-14 6.268-14 14 0 2.73.77 5.287 2.104 7.468L2 30l6.71-2.07a13.93 13.93 0 0 0 7.293 2.04c7.732 0 14-6.268 14-14s-6.268-14-14-14zm0 25.5a11.45 11.45 0 0 1-5.847-1.6l-.42-.25-3.98 1.23 1.3-3.87-.27-.4a11.45 11.45 0 1 1 9.217 4.89zm6.61-8.71c-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.78-1.07-.95-1.8-2.13-2.01-2.49-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61h-.69c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3 0 1.77 1.29 3.48 1.47 3.72.18.24 2.54 3.88 6.16 5.44.86.37 1.53.59 2.05.76.86.27 1.65.23 2.27.14.69-.1 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42z" />
                  </svg>
                  {selectedSizeId ? 'Order on WhatsApp' : 'Select Size to Order'}
                </button>
              </div>

              {/* Product Text Details */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase text-gray-900 mb-4 tracking-wide">
                  Product Details
                </h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                  <p>{product.description || "Experience the timeless elegance of Lucknowi Chikankari. Handcrafted with precision, this piece brings together tradition and modern style."}</p>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 mt-4">
                    <div>
                      <span className="block text-xs text-gray-500 mb-1 uppercase">Fabric</span>
                      <span className="font-medium text-gray-900">Premium Cotton</span>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 mb-1 uppercase">Craft</span>
                      <span className="font-medium text-gray-900">Hand Chikankari</span>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 mb-1 uppercase">Fit</span>
                      <span className="font-medium text-gray-900">Regular Fit</span>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 mb-1 uppercase">Wash Care</span>
                      <span className="font-medium text-gray-900">Hand Wash</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-20 pt-10 border-t border-gray-200">
          <h3 className="text-lg font-bold uppercase text-gray-900 mb-8 tracking-wide">
            Similar Products
          </h3>
          <TrendingProductsSection />
        </div>
      </div>

      <Footer />
      <FloatingWhatsAppButton whatsappNumber={settings.whatsapp_number} />

      {/* Zoom Modal - Now separated! */}
      <ImageZoomModal
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
        images={productImages}
        startIndex={zoomStartIndex}
      />
    </div>
  )
}