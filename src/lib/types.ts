export interface Color {
  id: string
  name: string
  hex_code?: string
}

export interface Size {
  id: string
  name: string
}

export interface Fabric {
  id: string
  name: string
}

export interface Design {
  id: string
  name: string
}

export interface ProductImage {
  id: string
  product_id: string
  image_url: string
  is_primary?: boolean
  color_id?: string
  created_at?: string
  color?: Color
}

export interface ProductVariant {
  id: string
  product_id: string
  size_id?: string
  color_id?: string
  sku?: string
  stock_quantity: number
  size?: Size
  color?: Color
}

export interface Product {
  id: string
  name: string
  description?: string
  price: number
  sale_price?: number
  is_on_sale?: boolean
  is_price_visible?: boolean
  is_active?: boolean
  category_id?: string
  fabric_id?: string
  design_id?: string
  meta_title?: string
  meta_description?: string
  keywords?: string[]
  created_at?: string
  product_images?: ProductImage[]
  product_variants?: ProductVariant[]
}

export interface ProductWithStock extends Product {
  total_stock: number
  is_out_of_stock: boolean
}

// Image extension
export interface ProductWithImages extends Product {
  image_url?: string
}

export type ProductUI = ProductWithImages & ProductWithStock

export interface Category {
  id: string
  name: string
  slug: string
  created_at?: string
}

export interface StoreSettings {
  id?: number
  store_name?: string
  support_phone?: string
  support_email?: string
  shipping_fee?: number
  free_shipping_threshold?: number
  banners?: unknown
  created_at?: string
  whatsapp_number?: string
}

export interface TrustPoint {
  icon: string
  title: string
  description: string
}
