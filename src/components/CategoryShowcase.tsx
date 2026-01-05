import { useCategories } from '../hooks/useCategories'
import { CategoryTile } from './CategoryTile'
import { useNavigate } from 'react-router-dom'
import { categoryPlaceholderImages } from '../utils/categoryImages'

export const CategoryShowcase: React.FC = () => {
  const { categories, loading } = useCategories()
  const navigate = useNavigate()

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="aspect-4/3 rounded-xl bg-[#EDE7DD] animate-pulse"
          />
        ))}
      </div>
    )
  }

  return (
    <section className="section-container bg-[#FAF7F2]">
      <div className="section-inner">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif font-semibold text-[#2C2A28]">
            Shop by Category
          </h2>
          <p className="mt-2 text-sm text-[#6B645C]">
            Explore our handcrafted collections
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map(category => {
            const imageUrl =
              categoryPlaceholderImages[category.slug] ??
              categoryPlaceholderImages[
                category.name.toLowerCase().replace(/\s+/g, '_')
              ]

            return (
              <CategoryTile
                key={category.id}
                name={category.name}
                imageUrl={imageUrl}
                onClick={() =>
                  navigate(`/products?category=${category.id}`)
                }
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
