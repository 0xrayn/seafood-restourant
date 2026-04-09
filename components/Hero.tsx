"use client";

import { useEffect, useRef } from "react";

const FLOATERS = [
  { emoji:"🦞", x:"7%",  y:"22%", delay:"0s",   dur:"4.5s" },
  { emoji:"🦀", x:"86%", y:"18%", delay:"0.8s",  dur:"5.2s" },
  { emoji:"🦑", x:"78%", y:"64%", delay:"1.5s",  dur:"4.8s" },
  { emoji:"🐟", x:"10%", y:"68%", delay:"0.3s",  dur:"3.9s" },
  { emoji:"🍤", x:"48%", y:"82%", delay:"1.2s",  dur:"5.5s" },
  { emoji:"🦪", x:"38%", y:"8%",  delay:"2s",    dur:"4.2s" },
];

const STATS = [
  { val:"50+",  label:"Menu Pilihan",   emoji:"🍽️" },
  { val:"10K+", label:"Pelanggan",      emoji:"👥" },
  { val:"5.0",  label:"Rating",         emoji:"⭐" },
  { val:"8Thn", label:"Pengalaman",     emoji:"🏆" },
];

const waNumber = "6281234567890";
const waMsg = encodeURIComponent("Halo Pesisir Seafood! Saya ingin memesan 🦞");

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    const bg = bgRef.current;
    if (!el || !bg) return;
    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height } = el.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 18;
      const y = (clientY / height - 0.5) * 18;
      bg.style.transform = `translate(${x}px, ${y}px) scale(1.08)`;
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    /* pt-[calc(28px+64px)] = top bar 28px + navbar 64px */
    <section id="hero" ref={heroRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "92px" }}>

      {/* Background */}
      <div ref={bgRef}
        className="absolute inset-0 transition-transform duration-700 ease-out scale-105"
        style={{
          backgroundImage:`url('https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1800&q=80')`,
          backgroundSize:"cover",
          backgroundPosition:"center",
        }} />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/15 rounded-full blur-[80px] animate-pulse" style={{animationDuration:"4s"}} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[80px] animate-pulse" style={{animationDuration:"6s",animationDelay:"2s"}} />

      {/* Floating emojis */}
      {FLOATERS.map((f, i) => (
        <span key={i}
          className="absolute text-3xl sm:text-4xl select-none pointer-events-none float-emoji opacity-20"
          style={{ left:f.x, top:f.y, animationDelay:f.delay, animationDuration:f.dur }}>
          {f.emoji}
        </span>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full py-12">

        {/* Headline */}
        <h1 className="anim-fade-up delay-100 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] mb-5 tracking-tight">
          Pesisir
          <br />
          <span className="shimmer-text text-primary italic">Seafood</span>
        </h1>

        {/* Subtext */}
        <p className="anim-fade-up delay-200 text-base sm:text-lg md:text-xl text-white/70
          max-w-lg mx-auto leading-relaxed mb-10 font-light">
          Cita rasa laut terbaik langsung dari nelayan Probolinggo.
          <br className="hidden sm:block" />
          Segar setiap hari, bumbu rempah Nusantara yang tak terlupakan.
        </p>

        {/* CTA Buttons */}
        <div className="anim-fade-up delay-300 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-16">
          <a href="#menu"
            className="btn btn-primary btn-lg rounded-2xl font-bold shadow-2xl shadow-primary/40
              hover:scale-105 hover:shadow-primary/50 transition-all duration-300">
            🍽️ Lihat Menu Lengkap
          </a>
          <a
            href={`https://wa.me/${waNumber}?text=${waMsg}`}
            target="_blank" rel="noopener noreferrer"
            className="btn btn-lg rounded-2xl font-bold text-white border-white/20
              bg-[#25D366]/80 hover:bg-[#25D366] hover:scale-105
              transition-all duration-300 gap-2">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pesan via WhatsApp
          </a>
        </div>

        {/* Stats — proper spacing, bigger, clear layout */}
        <div className="anim-scale-in delay-400 max-w-2xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STATS.map((s, i) => (
              <div key={i}
                className="flex flex-col items-center py-5 px-4 rounded-2xl
                  bg-white/10 backdrop-blur-md border border-white/15
                  hover:bg-white/15 transition-colors duration-300">
                <span className="text-2xl mb-2">{s.emoji}</span>
                <span className="text-2xl sm:text-3xl font-black text-white leading-none">{s.val}</span>
                <span className="text-white/55 text-xs mt-1.5 font-medium text-center">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs tracking-[0.2em] uppercase font-medium">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
