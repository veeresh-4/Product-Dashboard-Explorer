"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "./types/product";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import Header from "./components/Header";

const FAVORITES_KEY = "favorites";

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [showFavorites, setShowFavorites] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (product: Product) => {
    setFavorites((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "all" || p.category === category;
    const matchFavorites = showFavorites
      ? favorites.some((f) => f.id === p.id)
      : true;
    return matchSearch && matchCategory && matchFavorites;
  });

  if (loading) {
    return <p className="text-center mt-10 text-black">Loading...</p>;
  }

  return (
    <>
      <Header
        favorites={favorites}
        search={search}
        setSearch={setSearch}
        setCategory={setCategory}
        setShowFavorites={setShowFavorites}
      />

      <div
        className={`p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-gray-100 min-h-screen ${
          filteredProducts.length === 1 ? "justify-items-center" : ""
        }`}
      >
        {filteredProducts.map((pro) => (
          <div
            key={pro.id}
            className={`relative border p-4 rounded shadow bg-white text-black 
  flex flex-col h-80 ${filteredProducts.length === 1 ? "max-w-[400px]" : ""}`}
          >
            <button
              onClick={() => toggleFavorite(pro)}
              className="absolute top-2 right-2"
            >
              {favorites.some((f) => f.id === pro.id) ? (
                <HeartSolid className="h-6 w-6 text-red-500" />
              ) : (
                <HeartOutline className="h-6 w-6 text-gray-400" />
              )}
            </button>

            <Link href={`/products/${pro.id}`}>
              <div className="h-40 flex items-center justify-center mb-3">
                <img
                  src={pro.image}
                  alt={pro.title}
                  className="max-h-full object-contain"
                />
              </div>
            </Link>

            <div className="flex flex-col gap-1 flex-grow">
              <h3 className="text-sm font-semibold line-clamp-2">
                {pro.title}
              </h3>

              <p className="text-green-600 font-bold">${pro.price}</p>

              <p className="text-xs text-gray-600 mt-auto">{pro.category}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
