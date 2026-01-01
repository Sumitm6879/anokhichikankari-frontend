import { useRef } from 'react'
import type { Product } from '../lib/types'
import { ProductCard } from './ProductCard'

interface ProductCarouselProps {
  products: Product[]
  isLoading?: boolean
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, isLoading = false }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollPosition =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      })
    }
  }

  if (isLoading) {
    return (
      <div className="flex gap-4 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="shrink-0 w-80 md:w-96 animate-pulse">
            <div className="aspect-square md:aspect-auto md:h-96 bg-slate-200 rounded-lg mb-4" />
            <div className="h-6 bg-slate-200 rounded mb-2" />
            <div className="h-6 w-24 bg-slate-200 rounded" />
          </div>
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600">No products available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="relative group">
      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {products.map((product) => (
          <div key={product.id} className="snap-start">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Left Scroll Button */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-12 md:-translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
        aria-label="Scroll left"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-12 md:translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
        aria-label="Scroll right"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
