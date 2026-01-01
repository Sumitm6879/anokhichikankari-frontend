import { useTrendingProducts } from '../hooks/useTrendingProducts'
import { ProductCarousel } from './ProductCarousel'

export const TrendingProductsSection: React.FC = () => {
  const { products, loading } = useTrendingProducts()

  return (
    <section className="section-container bg-slate-50">
      <div className="section-inner">
        <h2 className="section-title">Discover Our Bestsellers</h2>
        <p className="section-subtitle">
          Pieces loved by customers just like you
        </p>

        <ProductCarousel products={products} isLoading={loading} />
      </div>
    </section>
  )
}
