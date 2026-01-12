"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "../types/product";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

const FAVORITES_KEY = "favorites";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const removeFavorite = (id: number) => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  };

  if (favorites.length === 0) {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center">
        <HeartSolid className="h-14 w-14 text-gray-300" />
        <p className="mt-2 text-gray-500">No favorites added</p>
        <Link href="/" className="mt-4 text-blue-600">
          Go to products
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {favorites.map((item) => (
        <div key={item.id} className="relative border p-3 rounded">
          <button
            onClick={() => removeFavorite(item.id)}
            className="absolute top-2 right-2"
          >
            <HeartSolid className="h-6 w-6 text-red-500" />
          </button>

          <Link href={`/products/${item.id}`}>
            <img
              src={item.image}
              alt={item.title}
              className="h-36 w-full object-contain"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
