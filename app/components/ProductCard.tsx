"use client";

import Link from "next/link";
import { Product } from "../types/product";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

type Props = {
  product: Product;
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
};

const ProductCard = ({ product, favorites, toggleFavorite }: Props) => {
  const isFavorite = favorites.some((fav) => fav.id === product.id);

  return (
    <div className="relative border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white">
     
      <button
        onClick={() => toggleFavorite(product)}
        className="absolute top-3 right-3 z-10"
      >
        {isFavorite ? (
          <HeartSolid className="h-6 w-6 text-red-500" />
        ) : (
          <HeartOutline className="h-6 w-6 text-gray-400" />
        )}
      </button>

      
      <Link href={`/products/${product.id}`}>
        <div className="cursor-pointer">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 w-full object-contain mb-3"
          />

          <h3 className="text-sm font-semibold line-clamp-2">
            {product.title}
          </h3>

          <p className="mt-1 font-bold text-lg">${product.price}</p>

          <p className="text-xs text-gray-500 capitalize">{product.category}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
