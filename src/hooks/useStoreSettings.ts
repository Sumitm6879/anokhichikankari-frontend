import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import type { StoreSettings } from '../lib/types'

export const useStoreSettings = () => {
  const [settings, setSettings] = useState<StoreSettings>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('store_settings')
          .select('*')
          .single()

        if (error) throw error

        // Data is a single object, not an array
        setSettings(data || {})
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch store settings')
        setSettings({})
      } finally {
        setLoading(false)
      }
    }

    fetchSettings()
  }, [])

  return { settings, loading, error }
}
