import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import { useCategories } from '../hooks/useCategories'
import { ProductCard } from '../components/ProductCard'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { FloatingWhatsAppButton } from '../components/FloatingWhatsAppButton'
import { useStoreSettings } from '../hooks/useStoreSettings'

export const AllProducts: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category') || ''

  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high'>('newest')

  const { products, loading: productsLoading } = useProducts(undefined, selectedCategory || undefined)
  const { categories, loading: categoriesLoading } = useCategories()
  const { settings } = useStoreSettings()

  const handleCategoryChange = (categoryId: string) => {
    setSearchParams(prev => {
      if (categoryId) {
        prev.set('category', categoryId)
      } else {
        prev.delete('category')
      }
      return prev
    })
  }

  const sortedProducts = useMemo(() => {
    if (!products) return []

    const items = [...products]

    switch (sortBy) {
      case 'price-low':
        return items.sort((a, b) => (a.price || 0) - (b.price || 0))
      case 'price-high':
        return items.sort((a, b) => (b.price || 0) - (a.price || 0))
      default:
        return items
    }
  }, [products, sortBy])

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navbar whatsappNumber={settings.support_phone} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[#2C2A28] tracking-tight">
              Our Collection
            </h1>
            <p className="mt-3 text-[15px] text-[#6B645C] leading-relaxed">
              Handcrafted Chikankari pieces created by skilled artisans of Lucknow,
              celebrating tradition and timeless elegance.
            </p>
          </div>

          {/* Filters */}
          <div className="flex gap-3 w-full md:w-auto">

            {/* Category */}
            <div className="relative w-full md:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                disabled={categoriesLoading}
                className="appearance-none w-full rounded-xl border border-[#E6E1D8] bg-white/80 px-4 py-2.5 text-sm text-[#2C2A28] focus:border-[#8B6F47] focus:ring-0"
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>

              {/* Chevron */}
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8B8176]">
                ▾
              </span>
            </div>

            {/* Sort */}
            <div className="relative w-full md:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none w-full rounded-xl border border-[#E6E1D8] bg-white/80 px-4 py-2.5 text-sm text-[#2C2A28] focus:border-[#8B6F47] focus:ring-0"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>

              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8B8176]">
                ▾
              </span>
            </div>

          </div>
        </div>

        {/* Content */}
        {productsLoading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-[#EDE7DD] aspect-3/4 rounded-xl mb-4"></div>
                <div className="h-4 bg-[#EDE7DD] rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-[#EDE7DD] rounded w-1/3"></div>
              </div>
            ))}
          </div>
        ) : sortedProducts.length === 0 ? (
          <div className="text-center py-24">
            <h3 className="text-lg font-medium text-[#2C2A28]">No pieces found</h3>
            <p className="mt-1 text-[#6B645C]">Try another category or explore again soon.</p>
            <button
              onClick={() => handleCategoryChange('')}
              className="mt-6 text-sm font-medium text-[#8B6F47] hover:underline cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <Footer />
      <FloatingWhatsAppButton whatsappNumber={settings.support_phone} />
    </div>
  )
}