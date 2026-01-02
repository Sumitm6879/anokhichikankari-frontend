import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import type { ProductUI } from '../lib/types'

export const useTrendingProducts = () => {
  const [products, setProducts] = useState<ProductUI[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('trending_products')
          .select('*, products(*, product_images(*))')
          .order('position', { ascending: true })

        if (error) throw error

        // Extract products from trending_products and map images
        const trendingProducts = (data || [])
          .filter((item) => item.products)
          .map((item) => {
            const product = item.products
            return {
              ...product,
              image_url:
                product.product_images && product.product_images.length > 0
                  ? product.product_images[0].image_url
                  : undefined,
            }
          })

        setProducts(trendingProducts)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch trending products')
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchTrendingProducts()
  }, [])

  return { products, loading, error }
}
