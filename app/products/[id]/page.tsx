"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(res.data);
      } catch {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="p-8 text-center text-black">Loading...</div>;
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  if (!product) {
    return <div className="p-8 text-center text-black">Product not found</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white text-black">
      <div className="grid md:grid-cols-2 gap-8 items-start">
       
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

       
        <div>
          <h1 className="text-2xl font-bold mb-3 text-black">
            {product.title}
          </h1>

          <p className="text-xl font-semibold text-green-600 mb-3">
            ${product.price}
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            {product.description}
          </p>

          <p className="text-sm text-gray-700 mb-2">
            <b>Category:</b> {product.category}
          </p>

          <p className="text-sm text-gray-700">
            <b>Rating:</b> {product.rating.rate}  (
            {product.rating.count} reviews)
          </p>
        </div>
      </div>
    </div>
  );
}
