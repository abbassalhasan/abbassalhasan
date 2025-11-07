import { useState } from "react";
import type { Product, Variant } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    product.variants?.[0] ?? null
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      <img
        src={product.imageUrl || "/images/placeholder.png"}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500">${product.price.toFixed(2)}</p>

      {product.variants && product.variants.length > 0 && (
        <select
          value={selectedVariant?.name ?? ""}
          onChange={(e) =>
            setSelectedVariant(
              product.variants?.find((v) => v.name === e.target.value) || null
            )
          }
          className="mt-2 p-1 border rounded"
        >
          {product.variants.map((v) => (
            <option key={v.id} value={v.name}>
              {v.name}
            </option>
          ))}
        </select>
      )}

      <button
        className={`mt-4 w-full py-2 rounded text-white ${
          product.inStock
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!product.inStock}
      >
        {product.inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
};
