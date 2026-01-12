"use client";

import { useState } from "react";
import { Product } from "../types/product";

import { Disclosure, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

type HeaderProps = {
  favorites: Product[];
  search: string;
  setSearch: (value: string) => void;
  setCategory: (value: string) => void;
  setShowFavorites: (value: boolean) => void; 
};

export default function Header({
  favorites,
  search,
  setSearch,
  setCategory,
  setShowFavorites,
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left */}
          <div className="flex items-center">
            <span className="text-white font-bold">Dashboard</span>
          </div>

         
          <div className="flex items-center gap-4">
          
            <div
              className="relative cursor-pointer text-white"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              onClick={() => setShowFavorites(true)}
            >
              Favorite List ({favorites.length})

              {open && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded shadow p-2 z-50">
                  {favorites.length === 0 ? (
                    <p className="text-sm text-gray-500">No favorites yet</p>
                  ) : (
                    favorites.map((item) => (
                      <div key={item.id} className="flex gap-2 mb-2">
                        <img src={item.image} className="h-8 w-8 object-contain" />
                        <p className="text-black line-clamp-1">{item.title}</p>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

          
            <Menu as="div" className="relative">
              <MenuButton className="text-white">Category</MenuButton>
              <MenuItems className="absolute right-0 mt-2 w-48 bg-white shadow rounded z-50">
                {[
                  { label: "All", value: "all" },
                  { label: "Electronics", value: "electronics" },
                  { label: "Men's Clothing", value: "men's clothing" },
                  { label: "Women's Clothing", value: "women's clothing" },
                  { label: "Jewellery", value: "jewelery" },
                ].map((cat) => (
                  <MenuItem key={cat.value}>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          setCategory(cat.value);
                          setShowFavorites(false); 
                        }}
                        className={`${
                          active ? "bg-gray-100" : ""
                        } w-full px-4 py-2 text-left text-sm`}
                      >
                        {cat.label}
                      </button>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>

           
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowFavorites(false); 
              }}
              placeholder="Search products..."
              className="px-3 py-1 text-white rounded bg-gray-700"
            />
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
