import { useTrendingProducts } from '../hooks/useTrendingProducts'
import { ProductCarousel } from './ProductCarousel'
import type { ProductUI } from '../lib/types'

export const TrendingProductsSection: React.FC = () => {
  const { products, loading } = useTrendingProducts()

  // products is now ProductUI[]
  const trendingProducts: ProductUI[] = products

  if (!trendingProducts.length && !loading) return null

  return (
    <section className="section-container bg-[#FAF7F2]">
      <div className="section-inner">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#2C2A28]">
            Trending Now
          </h2>
          <p className="mt-2 text-sm text-[#6B645C]">
            Pieces our customers love
          </p>
        </div>

        <ProductCarousel
          products={trendingProducts}
          isLoading={loading}
        />
      </div>
    </section>
  )
}
