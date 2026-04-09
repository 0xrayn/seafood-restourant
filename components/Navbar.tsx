"use client";

import { useState, useEffect } from "react";
import { useTheme, seafoodThemes } from "./ThemeContext";

export default function Navbar() {
  const { current, set } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = seafoodThemes.find(t => t.name === current);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (scrolled && menuOpen) setMenuOpen(false);
  }, [scrolled]);

  const links = [
    { href: "#hero",    label: "Beranda" },
    { href: "#menu",    label: "Menu" },
    { href: "#about",   label: "Tentang" },
    { href: "#contact", label: "Kontak" },
  ];

  const waNumber = "6281234567890";
  const waMsg = encodeURIComponent("Halo Pesisir Seafood! Saya ingin memesan/reservasi meja 🦞");

  return (
    <>
      {/* Top info bar — fixed, always at very top, only visible when NOT scrolled */}
      <div
        className="fixed top-0 left-0 right-0 z-50 overflow-hidden transition-all duration-400"
        style={{ height: scrolled ? "0px" : "28px", opacity: scrolled ? 0 : 1 }}
      >
        <div className="bg-primary text-primary-content text-xs h-7 flex items-center justify-center gap-2 font-medium tracking-wide px-4">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse shrink-0" />
          <span className="truncate">Buka Sekarang · 10.00 – 22.00 WIB · Jl. Mayangan No.45, Probolinggo</span>
        </div>
      </div>

      {/* Main navbar — sits below the top bar when expanded */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-400 nav-glass
          ${scrolled
            ? "top-0 bg-base-100/90 shadow-lg shadow-black/10"
            : "top-7 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
            <span className="text-2xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 inline-block">🦞</span>
            <span className="font-black text-lg tracking-tight leading-none">
              <span className="text-primary">Pesisir</span>
              <span className={scrolled ? "text-base-content" : "text-white"}> Seafood</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-0.5">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200
                    hover:bg-white/15 hover:text-primary
                    ${scrolled ? "text-base-content/75" : "text-white/85"}`}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-2 shrink-0">

            {/* Theme switcher */}
            <div className="dropdown dropdown-end">
              <button tabIndex={0}
                className={`btn btn-ghost btn-sm gap-1.5 rounded-xl border transition-colors px-2.5
                  ${scrolled ? "border-base-300 hover:border-primary" : "border-white/30 hover:border-white/60"}`}>
                <span className="text-base leading-none">{active?.emoji}</span>
                <span className="hidden lg:inline text-xs font-semibold">{active?.label}</span>
                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <ul tabIndex={0}
                className="dropdown-content z-[999] mt-2 p-1.5 bg-base-100 border border-base-200
                  rounded-2xl shadow-2xl shadow-black/20 w-44 flex flex-col gap-0.5">
                {seafoodThemes.map(t => (
                  <li key={t.name}>
                    <button
                      onClick={() => set(t.name)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm
                        font-semibold transition-all duration-150 cursor-pointer
                        ${current === t.name
                          ? "bg-primary text-primary-content shadow-md"
                          : "hover:bg-base-200 text-base-content"}`}>
                      <span className="text-base">{t.emoji}</span>
                      <span>{t.label}</span>
                      {current === t.name && (
                        <svg className="ml-auto w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                        </svg>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* WA button */}
            <a
              href={`https://wa.me/${waNumber}?text=${waMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex btn btn-primary btn-sm rounded-xl font-bold shadow-md
                hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all duration-200 gap-1.5">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Pesan
            </a>

            {/* Mobile burger */}
            <button
              className="md:hidden btn btn-ghost btn-sm rounded-xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={scrolled ? "currentColor" : "white"}>
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 nav-glass
          ${menuOpen ? "max-h-96 border-t border-base-200" : "max-h-0"}`}>
          <div className="px-4 py-4 flex flex-col gap-1 bg-base-100/95">
            {links.map(l => (
              <a key={l.href} href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-4 rounded-xl font-semibold text-base-content/80
                  hover:text-primary hover:bg-primary/10 transition-all text-sm">
                {l.label}
              </a>
            ))}
            <a href={`https://wa.me/${waNumber}?text=${waMsg}`}
              target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 btn btn-primary rounded-xl font-bold gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
