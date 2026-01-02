import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import type { ProductVariant } from '../lib/types'

/**
 * Extended variant type with safety defaults
 */
export interface ProductVariantWithStock extends ProductVariant {
  stock_quantity: number
}

/**
 * Hook to fetch variants for a product
 * Also computes total stock & out-of-stock status
 */
export const useProductVariants = (productId?: string) => {
  const [variants, setVariants] = useState<ProductVariantWithStock[]>([])
  const [totalStock, setTotalStock] = useState(0)
  const [isOutOfStock, setIsOutOfStock] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!productId) {
      setVariants([])
      setTotalStock(0)
      setIsOutOfStock(true)
      return
    }

    const fetchVariants = async () => {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase
        .from('product_variants')
        .select(`
          id,
          product_id,
          size_id,
          color_id,
          sku,
          stock_quantity
        `)
        .eq('product_id', productId)

      if (error) {
        setError(error.message)
        setVariants([])
        setTotalStock(0)
        setIsOutOfStock(true)
        setLoading(false)
        return
      }

      const safeVariants: ProductVariantWithStock[] = (data ?? []).map(v => ({
        ...v,
        stock_quantity: v.stock_quantity ?? 0,
      }))

      const computedTotalStock = safeVariants.reduce(
        (sum, v) => sum + v.stock_quantity,
        0
      )

      setVariants(safeVariants)
      setTotalStock(computedTotalStock)
      setIsOutOfStock(computedTotalStock === 0)
      setLoading(false)
    }

    fetchVariants()
  }, [productId])

  return {
    variants,
    totalStock,
    isOutOfStock,
    loading,
    error,
  }
}
