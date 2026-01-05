import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

type Color = {
  id: string;
  name: string;
  hex_code: string | null;
};

type Size = {
  id: string;
  name: string;
};

type Variant = {
  id: string;
  product_id: string;
  sku: string | null;
  stock_quantity: number;
  color_id: string | null;
  size_id: string | null;
  color?: Color;
  size?: Size;
};

export function useProductVariants(productId: string) {
  const [variants, setVariants] = useState<Variant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) {
      setVariants([]);
      setLoading(false);
      return;
    }

    const fetchVariants = async () => {
      setLoading(true);
      setError(null);

      // 1️⃣ Fetch variants
      const { data: variantRows, error: variantError } =
        await supabase
          .from("product_variants")
          .select(`
            id,
            product_id,
            sku,
            stock_quantity,
            color_id,
            size_id
          `)
          .eq("product_id", productId);

      if (variantError || !variantRows) {
        setError(variantError?.message || "Failed to load variants");
        setVariants([]);
        setLoading(false);
        return;
      }

      // 2️⃣ Collect unique color & size IDs
      const colorIds = Array.from(
        new Set(variantRows.map(v => v.color_id).filter(Boolean))
      ) as string[];

      const sizeIds = Array.from(
        new Set(variantRows.map(v => v.size_id).filter(Boolean))
      ) as string[];

      // 3️⃣ Fetch colors
      const { data: colors } = await supabase
        .from("colors")
        .select("id, name, hex_code")
        .in("id", colorIds);

      // 4️⃣ Fetch sizes
      const { data: sizes } = await supabase
        .from("sizes")
        .select("id, name")
        .in("id", sizeIds);

      // 5️⃣ Map lookups
      const colorMap = new Map<string, Color>(
        (colors || []).map(c => [c.id, c])
      );
      const sizeMap = new Map<string, Size>(
        (sizes || []).map(s => [s.id, s])
      );

      // 6️⃣ Attach color & size to variants
      const normalized: Variant[] = variantRows.map(v => ({
        ...v,
        color: v.color_id ? colorMap.get(v.color_id) : undefined,
        size: v.size_id ? sizeMap.get(v.size_id) : undefined,
      }));

      setVariants(normalized);
      setLoading(false);
    };

    fetchVariants();
  }, [productId]);

  const totalStock = variants.reduce(
    (sum, v) => sum + (v.stock_quantity || 0),
    0
  );

  return {
    variants,
    totalStock,
    isOutOfStock: totalStock === 0,
    loading,
    error,
  };
}
