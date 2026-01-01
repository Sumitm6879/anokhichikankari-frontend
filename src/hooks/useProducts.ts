import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import type { Product } from '../lib/types'

interface ProductWithImages extends Product {
  image_url?: string
}

export const useProducts = (filter?: 'bestseller', categoryId?: string) => {
  const [products, setProducts] = useState<ProductWithImages[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        let query = supabase
          .from('products')
          .select('*, product_images(*)')

        if (filter === 'bestseller') {
          query = query.eq('is_active', true)
        }

        if (categoryId) {
          query = query.eq('category_id', categoryId)
        }

        const { data, error } = await query.order('created_at', { ascending: false })

        if (error) throw error

        // Map first product image to image_url for backward compatibility
        const productsWithImages = (data || []).map((product) => ({
          ...product,
          image_url:
            product.product_images && product.product_images.length > 0
              ? product.product_images[0].image_url
              : undefined,
        }))

        setProducts(productsWithImages)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products')
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [filter, categoryId])

  return { products, loading, error }
}
