"use client";

import { useState } from "react";
import { menuItems, categories, MenuItem } from "../data/menu";

const BADGE_STYLE: Record<string, string> = {
  "Best Seller": "bg-amber-500 text-white",
  "Populer":     "bg-sky-500 text-white",
  "Favorit":     "bg-emerald-500 text-white",
  "Premium":     "bg-violet-500 text-white",
  "Signature":   "bg-rose-500 text-white",
};

const waNumber = "6281234567890";

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const [ordered, setOrdered] = useState(false);

  const handleOrder = () => {
    const msg = encodeURIComponent(`Halo! Saya ingin memesan *${item.name}* (Rp ${item.price.toLocaleString("id-ID")}) 🦞`);
    window.open(`https://wa.me/${waNumber}?text=${msg}`, "_blank");
    setOrdered(true);
    setTimeout(() => setOrdered(false), 2000);
  };

  return (
    <div
      className="card-hover anim-fade-up bg-base-100 rounded-2xl overflow-hidden
        border border-base-200 group flex flex-col"
      style={{ animationDelay: `${index * 0.055}s` }}>

      {/* Emoji area */}
      <div className="relative h-40 flex items-center justify-center
        bg-gradient-to-br from-base-200 via-base-200 to-base-300 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{background:"radial-gradient(circle at 50% 120%, hsl(40 70% 55% / 0.5), transparent 70%)"}} />
        <span className="text-[72px] group-hover:scale-110 group-hover:rotate-6
          transition-transform duration-500 select-none filter drop-shadow-xl">
          {item.emoji}
        </span>
        <svg className="absolute bottom-0 left-0 w-full text-base-100" viewBox="0 0 400 24" fill="currentColor">
          <path d="M0,16 Q100,0 200,12 Q300,24 400,8 L400,24 L0,24 Z"/>
        </svg>
        {item.badge && (
          <span className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full
            shadow-lg ${BADGE_STYLE[item.badge] || "bg-primary text-primary-content"}`}>
            {item.badge}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-base-content leading-snug text-[15px]">{item.name}</h3>
          <span className="text-primary font-black text-sm whitespace-nowrap shrink-0">
            Rp {item.price.toLocaleString("id-ID")}
          </span>
        </div>
        <p className="text-base-content/55 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
          {item.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-base-content/40 bg-base-200 px-2.5 py-1 rounded-full font-medium">
            {item.category}
          </span>
          <button
            onClick={handleOrder}
            className={`btn btn-sm rounded-xl font-bold transition-all duration-300 gap-1.5
              ${ordered
                ? "btn-success scale-95"
                : "btn-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/25"}`}>
            {ordered ? (
              <>✓ Dipesan!</>
            ) : (
              <>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Pesan WA
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MenuSection() {
  const [cat, setCat] = useState("Semua");
  const [q, setQ] = useState("");

  const filtered = menuItems.filter(item => {
    const matchCat = cat === "Semua" || item.category === cat;
    const matchQ = item.name.toLowerCase().includes(q.toLowerCase()) ||
                   item.description.toLowerCase().includes(q.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <section id="menu" className="py-24 bg-base-200 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

        {/* Header */}
        <div className="text-center mb-14 anim-fade-up">
          <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs sm:text-sm
            mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Menu Kami
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-base-content mb-4 leading-tight">
            Pilihan <em className="not-italic text-primary">Hidangan Laut</em>
          </h2>
          <p className="text-base-content/55 max-w-md mx-auto leading-relaxed text-sm sm:text-base">
            Semua hidangan dimasak dengan bahan segar dari nelayan lokal dan bumbu rempah khas Nusantara
          </p>
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mb-6 max-w-lg">
          <div className="relative flex-1">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/40"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              placeholder="Cari menu..."
              value={q}
              onChange={e => setQ(e.target.value)}
              className="input input-bordered w-full rounded-xl pl-10 text-sm bg-base-100 focus:border-primary transition-colors" />
          </div>
          {q && (
            <button onClick={() => setQ("")}
              className="btn btn-ghost btn-sm rounded-xl text-base-content/50 shrink-0">
              ✕ Hapus
            </button>
          )}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
                ${cat === c
                  ? "bg-primary text-primary-content shadow-lg shadow-primary/25 scale-105"
                  : "bg-base-100 border border-base-300 text-base-content/60 hover:border-primary hover:text-primary"}`}>
              {c}
            </button>
          ))}
        </div>

        {/* Count */}
        {q && (
          <p className="text-sm text-base-content/40 mb-6">
            {filtered.length} menu ditemukan untuk &ldquo;{q}&rdquo;
          </p>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-7xl mb-4 opacity-40">🔍</div>
            <p className="text-xl font-semibold text-base-content/40">Menu tidak ditemukan</p>
            <button onClick={() => { setQ(""); setCat("Semua"); }}
              className="btn btn-ghost btn-sm mt-4 rounded-xl text-primary">
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
