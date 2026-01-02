import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import type { ProductUI } from '../lib/types'

interface UseProductsResult {
  products: ProductUI[]
  loading: boolean
  error: string | null
}

export const useProducts = (
  limit?: number,
  categoryId?: string
): UseProductsResult => {
  const [products, setProducts] = useState<ProductUI[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError(null)

      let query = supabase
        .from('products')
        .select(`
          id,
          name,
          description,
          price,
          sale_price,
          is_on_sale,
          is_active,
          created_at,
          category_id,
          product_images (
            image_url,
            is_primary
          ),
          product_variants (
            stock_quantity
          )
        `)
        .eq('is_active', true)
        .order('created_at', { ascending: false })

      if (categoryId) {
        query = query.eq('category_id', categoryId)
      }

      if (limit) {
        query = query.limit(limit)
      }

      const { data, error } = await query

      if (error) {
        setError(error.message)
        setProducts([])
        setLoading(false)
        return
      }

      const mapped: ProductUI[] = (data ?? []).map((product: any) => {
        // 1️⃣ Resolve primary image
        const primaryImage =
          product.product_images?.find((img: any) => img.is_primary)
            ?.image_url ||
          product.product_images?.[0]?.image_url ||
          undefined

        // 2️⃣ Compute total stock
        const totalStock =
          product.product_variants?.reduce(
            (sum: number, v: any) => sum + (v.stock_quantity ?? 0),
            0
          ) ?? 0

        return {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          sale_price: product.sale_price,
          is_on_sale: product.is_on_sale,
          is_active: product.is_active,
          created_at: product.created_at,
          category_id: product.category_id,

          // UI-specific fields
          image_url: primaryImage,
          total_stock: totalStock,
          is_out_of_stock: totalStock === 0,
        }
      })

      setProducts(mapped)
      setLoading(false)
    }

    fetchProducts()
  }, [limit, categoryId])

  return {
    products,
    loading,
    error,
  }
}
