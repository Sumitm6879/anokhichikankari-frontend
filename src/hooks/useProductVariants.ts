import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import type { ProductVariant } from '../lib/types'

export const useProductVariants = (productId: string) => {
  const [variants, setVariants] = useState<ProductVariant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!productId) {
      setVariants([])
      setLoading(false)
      return
    }

    const fetchVariants = async () => {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('product_variants')
          .select('*, sizes(name), colors(name, hex_code)')
          .eq('product_id', productId)

        if (error) throw error
        setVariants(data || [])
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch product variants')
        setVariants([])
      } finally {
        setLoading(false)
      }
    }

    fetchVariants()
  }, [productId])

  return { variants, loading, error }
}
