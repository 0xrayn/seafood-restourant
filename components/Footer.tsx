"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const WA_NUMBER = "6281234567890";

const WA_ICON_SM = (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const IG_ICON = (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
  </svg>
);

const FB_ICON = (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669z"/>
  </svg>
);

const TT_ICON = (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.87a8.18 8.18 0 004.79 1.54V7a4.85 4.85 0 01-1.02-.31z"/>
  </svg>
);

const SOCIAL = [
  { icon: IG_ICON, label: "Instagram", href: "#" },
  { icon: WA_ICON_SM, label: "WhatsApp", href: `https://wa.me/${WA_NUMBER}` },
  { icon: FB_ICON, label: "Facebook", href: "#" },
  { icon: TT_ICON, label: "TikTok", href: "#" },
];

const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="relative bg-base-300 border-t border-base-content/10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">

          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group w-fit">
              <span className="text-4xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 inline-block">🦞</span>
              <div>
                <div className="font-black text-2xl text-base-content leading-none">
                  <span className="text-primary">Pesisir</span> Seafood
                </div>
                <div className="text-base-content/40 text-xs mt-0.5">
                  Est. 2026 · Probolinggo
                </div>
              </div>
            </Link>

            <p className="text-base-content/50 text-sm leading-relaxed mb-5 max-w-xs">
              Restoran seafood segar dengan cita rasa Nusantara terbaik,
              langsung dari nelayan Mayangan setiap hari.
            </p>

            <div className="flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-base-content/15 flex items-center justify-center hover:border-primary hover:bg-primary/10 hover:text-primary transition-all text-base-content/60"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-base-content text-sm tracking-widest uppercase mb-5">
              Navigasi
            </h4>
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-medium transition-all hover:translate-x-1.5 transform duration-200 inline-block ${
                    pathname === l.href
                      ? "text-primary font-bold"
                      : "text-base-content/50 hover:text-primary"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-base-content text-sm tracking-widest uppercase mb-5">
              Informasi
            </h4>

            <div className="flex flex-col gap-3 text-sm text-base-content/50">
              <div className="flex items-start gap-2">
                <span>📍</span>
                <span>Jl. Mayangan No.45, Probolinggo</span>
              </div>

              <div className="flex items-center gap-2">
                <span>🕐</span>
                <span>10.00 – 22.00 WIB</span>
              </div>

              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>+62 812-3456-7890</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-base-content/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-base-content/35">
          <p>© {new Date().getFullYear()} Pesisir Seafood. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <Link href="/admin" className="hover:text-primary transition-colors font-medium">
              Admin
            </Link>
            <span className="text-base-content/20">·</span>
            <span>Probolinggo, Jawa Timur</span>
          </div>
        </div>

        {/* BUILT BY - paling bawah kiri */}
        <div className="pb-4 text-xs text-base-content/40">
          <a
            href="https://rayn.web.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition-colors w-fit"
          >
            Built by Rayn
            <span>→</span>
            rayn.web.id
          </a>
        </div>

      </div>
    </footer>
  );
}
