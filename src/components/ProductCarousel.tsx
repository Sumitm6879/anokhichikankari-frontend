import { useRef } from 'react'
import type { ProductUI } from '../lib/types'
import { ProductCard } from './ProductCard'

interface ProductCarouselProps {
  products: ProductUI[]
  isLoading?: boolean
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  isLoading = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 'left' | 'right') => {
    if (!containerRef.current) return

    const card = containerRef.current.querySelector('[data-card]')
    if (!card) return

    const cardWidth = (card as HTMLElement).offsetWidth
    const gap = 32 // must match gap-x
    const scrollAmount = cardWidth + gap

    containerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  if (isLoading) {
    return (
      <div className="flex gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-[320px] animate-pulse">
            <div className="aspect-[3/4] bg-[#EDE7DD] rounded-xl mb-4" />
            <div className="h-4 bg-[#EDE7DD] rounded w-3/4 mb-2" />
            <div className="h-3 bg-[#EDE7DD] rounded w-1/3" />
          </div>
        ))}
      </div>
    )
  }

  if (products.length === 0) return null

  return (
    <div className="relative">
      {/* Scroll Track */}
      <div
        ref={containerRef}
        className="
          flex gap-8
          overflow-x-auto
          scroll-smooth
          pb-4
          -mx-4 px-4
          md:mx-0 md:px-0
          no-scrollbar
        "
      >
        {products.map(product => (
          <div
            key={product.id}
            data-card
            className="
              w-[240px]
              sm:w-[260px]
              lg:w-[280px]
              shrink-0
            "
          >
            <ProductCard product={product} variant="carousel" />
          </div>
        ))}
      </div>

      {/* Desktop arrows only */}
      <button
        onClick={() => scrollByCard('left')}
        className="
          hidden md:flex
          absolute -left-14 top-1/2 -translate-y-1/2
          h-12 w-12
          items-center justify-center
          rounded-full
          bg-white
          shadow-md
          text-2xl
          text-[#6B4E2E]
          hover:bg-[#FAF7F2]
        "
        aria-label="Previous products"
      >
        ‹
      </button>

      <button
        onClick={() => scrollByCard('right')}
        className="
          hidden md:flex
          absolute -right-14 top-1/2 -translate-y-1/2
          h-12 w-12
          items-center justify-center
          rounded-full
          bg-white
          shadow-md
          text-2xl
          text-[#6B4E2E]
          hover:bg-[#FAF7F2]
        "
        aria-label="Next products"
      >
        ›
      </button>
    </div>
  )
}
