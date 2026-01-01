import type { Category } from '../lib/types'

interface CategoryTileProps {
  category: Category
  onClick?: () => void
}

export const CategoryTile: React.FC<CategoryTileProps> = ({ category, onClick }) => {
  // Generate placeholder image using category slug
  const placeholderImages: Record<string, string> = {
    'sarees_': 'src/assets/category img/sarees.png',
    'long_kurtie': 'src/assets/category img/long_kurtie.png',
    'anarkali': 'src/assets/category img/anarkali.png',
    'suits': 'https://images.unsplash.com/photo-1571115764595-644a1f17017e?w=500&h=500&fit=crop',
    'bottoms_': 'src/assets/category img/bottoms.png',
    'co_ord_set': 'src/assets/category img/coordset.png',
    'plazo-set-': 'src/assets/category img/plazoset.png',
    'short_kurtie': 'src/assets/category img/short_kurtie.png',
    'unstitched_suits': 'src/assets/category img/unstitched_suit.png',
    'set_kurtie': 'src/assets/category img/setkurtie.png',
    'whites_': 'src/assets/category img/whites.png',
    '3-piece-suits': 'src/assets/category img/3ps.png',
  }

  const imageUrl = placeholderImages[category.slug] || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop'

  return (
    <button
      onClick={onClick}
      className="relative w-full aspect-square overflow-hidden rounded-lg group cursor-pointer"
      aria-label={`Browse ${category.name} category`}
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30" />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white text-center px-4 drop-shadow-lg">
          {category.name}
        </h3>
      </div>
    </button>
  )
}
