import type { Product } from '../lib/types'

interface ProductCardProps {
  product: Product & { image_url?: string }
  badge?: 'trending' | 'bestseller'
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, badge }) => {
  const placeholderImage = 'https://images.unsplash.com/photo-1610627033099-b3813d31910b?w=400&h=400&fit=crop'
  const imageUrl = product.image_url || placeholderImage

  return (
    <div className="flex-shrink-0 w-80 md:w-96 group">
      <div className="relative mb-4 overflow-hidden rounded-lg bg-slate-100">
        {/* Image Container */}
        <div className="aspect-square md:aspect-auto md:h-96 overflow-hidden">
          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Badge Overlay */}
        {badge && (
          <div className="absolute top-4 right-4">
            <span className={`badge ${badge === 'trending' ? 'badge-amber' : 'badge-emerald'}`}>
              {badge === 'trending' ? 'Trending' : 'Bestseller'}
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="px-2">
        <h3 className="text-lg font-serif font-semibold text-slate-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          {product.is_on_sale && product.sale_price ? (
            <>
              <p className="text-xl font-semibold text-indigo-600">
                ₹{product.sale_price.toLocaleString('en-IN')}
              </p>
              <p className="text-sm text-slate-500 line-through">
                ₹{product.price.toLocaleString('en-IN')}
              </p>
            </>
          ) : (
            <p className="text-xl font-semibold text-indigo-600">
              ₹{product.price.toLocaleString('en-IN')}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
