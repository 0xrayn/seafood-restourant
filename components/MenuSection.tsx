"use client";

import { useState } from "react";
import { menuItems, categories, MenuItem } from "../data/menu";

function MenuCard({ item }: { item: MenuItem }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-base-200">
      <div className="card-body p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="text-5xl">{item.emoji}</div>
          <div className="flex flex-col items-end gap-1">
            {item.badge && (
              <div className="badge badge-secondary badge-sm font-semibold">{item.badge}</div>
            )}
            <div className="text-xl font-black text-primary">
              Rp {item.price.toLocaleString("id-ID")}
            </div>
          </div>
        </div>

        <div className="mt-2">
          <h3 className="card-title text-base-content text-lg font-bold leading-tight">{item.name}</h3>
          <p className="text-base-content/60 text-sm mt-1 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="card-actions justify-between items-center mt-3">
          <div className="badge badge-outline badge-sm">{item.category}</div>
          <button
            onClick={handleAdd}
            className={`btn btn-sm ${added ? "btn-success" : "btn-primary"} transition-all`}
          >
            {added ? "✓ Ditambah!" : "+ Pesan"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [search, setSearch] = useState("");

  const filtered = menuItems.filter((item) => {
    const matchCat = activeCategory === "Semua" || item.category === activeCategory;
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="menu" className="py-20 bg-base-200">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge badge-primary mb-3">🦞 Menu Kami</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-base-content">
            Pilihan <span className="text-primary">Hidangan Laut</span>
          </h2>
          <p className="text-base-content/60 mt-3 max-w-xl mx-auto">
            Semua hidangan dimasak dengan bahan segar pilihan dan bumbu rempah khas Nusantara
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-6">
          <label className="input input-bordered flex items-center gap-2 w-full max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Cari menu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="grow"
            />
          </label>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn btn-sm rounded-full ${
                activeCategory === cat
                  ? "btn-primary"
                  : "btn-ghost border border-base-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-base-content/40">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl">Menu tidak ditemukan</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
