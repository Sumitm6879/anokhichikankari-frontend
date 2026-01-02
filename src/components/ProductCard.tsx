import type { ProductUI } from '../lib/types'

interface ProductCardProps {
  product: ProductUI
  variant?: 'grid' | 'carousel'
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,variant = 'grid',}) => {const isGrid = variant === 'grid'
  const isOutOfStock = product.is_out_of_stock

  const imageUrl =
    product.image_url ||
    'https://images.unsplash.com/photo-1610627033099-b3813d31910b?w=600&h=800&fit=crop'

  const displayPrice =
    product.is_on_sale === true && product.sale_price != null
      ? product.sale_price
      : product.price

  return (
    <div
      className={`
        ${isGrid && !isOutOfStock ? 'group cursor-pointer' : ''}
        ${isOutOfStock ? 'cursor-not-allowed opacity-90' : ''}
      `}
    >
      {/* Image */}
      <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-[#EFE9DE]">
        <img
          src={imageUrl}
          alt={product.name}
          className={`
            h-full w-full object-cover transition-transform duration-700 ease-out
            ${isGrid && !isOutOfStock ? 'group-hover:scale-105' : ''}
            ${isOutOfStock ? 'grayscale' : ''}
          `}
        />

        {/* OUT OF STOCK overlay */}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/45">
            <span className="
              rounded-full
              bg-white
              px-4 py-1.5
              text-sm
              font-medium
              tracking-wide
              text-[#2C2A28]
            ">
              Out of Stock
            </span>
          </div>
        )}

        {/* WhatsApp CTA — grid + in-stock only */}
        {isGrid && !isOutOfStock && (
          <div className="
            pointer-events-none
            absolute inset-x-0 bottom-0
            flex justify-center pb-4
            opacity-0 translate-y-2
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300
          ">
            <span className="
              rounded-full
              bg-white/90
              px-4 py-1.5
              text-xs
              font-medium
              text-[#6B4E2E]
              shadow-sm
            ">
              Enquire on WhatsApp
            </span>
          </div>
        )}

        {/* Trending badge — carousel only */}
        {variant === 'carousel' && !isOutOfStock && (
          <div className="absolute top-3 left-3">
            <span className="
              rounded-full
              bg-white/90
              px-3 py-1
              text-[11px]
              font-medium
              tracking-wide
              text-[#6B4E2E]
              shadow-sm
            ">
              Trending
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <h3 className="text-[15px] font-serif font-medium text-[#2C2A28] leading-snug line-clamp-2">
          {product.name}
        </h3>

        {/* Trust cue */}
        {/* {!isOutOfStock && (
          <p className="text-xs text-[#8B8176]">
            Hand embroidered • Lucknow
          </p>
        )} */}

        {/* Price / status */}
        <div className="flex items-center gap-2 pt-1">
          {!isOutOfStock ? (
            <>
              <span
                className={`text-[15px] font-medium transition-colors ${
                  product.is_on_sale && product.sale_price
                    ? 'text-emerald-700'
                    : 'text-[#6B4E2E]'
                }`}
              >
                ₹{displayPrice.toLocaleString('en-IN')}
              </span>

              {product.is_on_sale && product.sale_price && (
                <>
                  <span className="text-xs text-[#9C958C] line-through">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] uppercase tracking-wide text-emerald-700">
                    Sale
                  </span>
                </>
              )}
            </>
          ) : (
            <span className="text-sm text-[#9C958C]">
              Currently unavailable
            </span>
          )}
        </div>

        {/* Low stock hint (optional but powerful) */}
        {!isOutOfStock && product.total_stock <= 3 && (
          <p className="text-[11px] text-[#9B2C2C]">
            Only {product.total_stock} left
          </p>
        )}
      </div>
    </div>
  )
}
