"use client";

import { useTheme } from "./ThemeContext";
import { seafoodThemes } from "@/data/menu";

export default function Navbar() {
  const { currentTheme, setTheme } = useTheme();

  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li><a href="#hero">Beranda</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">Tentang Kami</a></li>
            <li><a href="#contact">Kontak</a></li>
          </ul>
        </div>
        <a href="#hero" className="btn btn-ghost text-xl font-bold">
          🦞 <span className="text-primary">Pesisir</span> Seafood
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#hero" className="font-medium hover:text-primary">Beranda</a></li>
          <li><a href="#menu" className="font-medium hover:text-primary">Menu</a></li>
          <li><a href="#about" className="font-medium hover:text-primary">Tentang Kami</a></li>
          <li><a href="#contact" className="font-medium hover:text-primary">Kontak</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {/* Theme Switcher */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm gap-1">
            <span className="text-base">{seafoodThemes.find(t => t.name === currentTheme)?.label || "🎨 Tema"}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[100] p-2 shadow-2xl bg-base-300 rounded-box w-52 mt-2">
            {seafoodThemes.map((theme) => (
              <li key={theme.name}>
                <button
                  onClick={() => setTheme(theme.name)}
                  className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-base-100 transition-colors ${
                    currentTheme === theme.name ? "bg-primary text-primary-content" : ""
                  }`}
                >
                  <span>{theme.label}</span>
                  {currentTheme === theme.name && <span className="ml-auto">✓</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <a href="#contact" className="btn btn-primary btn-sm hidden sm:flex">
          Pesan Sekarang
        </a>
      </div>
    </div>
  );
}
