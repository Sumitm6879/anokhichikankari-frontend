import { useCategories } from '../hooks/useCategories'
import { CategoryTile } from './CategoryTile'

export const CategoryShowcase: React.FC = () => {
  const { categories, loading } = useCategories()

  if (loading) {
    return (
      <section className="section-container bg-white">
        <div className="section-inner">
          <h2 className="section-title">Loading Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-slate-200 rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (categories.length === 0) {
    return (
      <section className="section-container bg-white">
        <div className="section-inner">
          <h2 className="section-title">No Categories Available</h2>
        </div>
      </section>
    )
  }

  return (
    <section className="section-container bg-white">
      <div className="section-inner">
        <h2 className="section-title">Explore Our Collection</h2>
        <p className="section-subtitle">
          Find the perfect Chikankari piece for every occasion
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <CategoryTile
              key={category.id}
              category={category}
              onClick={() => {
                // TODO: Implement navigation to category page
                console.log(`Navigate to ${category.slug}`)
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
