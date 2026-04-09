"use client";

import { useState } from "react";

const INFO = [
  { emoji:"📍", title:"Alamat",             detail:"Jl. Mayangan No. 45, Probolinggo, Jawa Timur 67212" },
  { emoji:"📞", title:"Telepon / WhatsApp", detail:"+62 812-3456-7890" },
  { emoji:"🕐", title:"Jam Buka",           detail:"Setiap hari: 10.00 – 22.00 WIB" },
  { emoji:"📧", title:"Email",              detail:"halo@pesisirseafood.id" },
];

const waNumber = "6281234567890";

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// ── Testimonials data with Unsplash avatars ──
const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pelanggan Setia · 3 Tahun",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    highlight: "Kepiting Saus Padang",
    text: "Kepiting saus padangnya juara! Sudah 3 tahun jadi langganan. Segar dan bumbunya meresap sempurna. Tidak ada tempat lain di Probolinggo yang bisa menandingi.",
    source: "Google Maps",
    sourceIcon: "G",
    verified: true,
  },
  {
    name: "Siti Rahayu",
    role: "Food Blogger",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    highlight: "Worth Every Rupiah!",
    text: "Seafood terenak di Probolinggo. Tempatnya bersih, pelayanan ramah, harga sangat worth it! Sudah saya review di blog dan semua followers saya setuju.",
    source: "TripAdvisor",
    sourceIcon: "T",
    verified: true,
  },
  {
    name: "Ahmad Fauzi",
    role: "Pelanggan",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    highlight: "Lobster Bakar",
    text: "Lobster bakarnya luar biasa! Cocok untuk momen spesial keluarga. Dagingnya segar, butter garlic-nya pas, penyajiannya juga cantik. Pasti akan kembali lagi.",
    source: "Instagram",
    sourceIcon: "I",
    verified: false,
  },
  {
    name: "Dewi Kartika",
    role: "Pelanggan Reguler",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    highlight: "Udang Bakar Butter",
    text: "Udang bakar butternya selalu bikin kangen. Porsinya besar, bumbu meresap, dan udangnya selalu fresh. Tempat favorit keluarga saya setiap akhir pekan.",
    source: "Google Maps",
    sourceIcon: "G",
    verified: true,
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [service, setService] = useState("Reservasi Meja");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const msg = encodeURIComponent(
      `Halo Pesisir Seafood! 🦞\n\nNama: ${name || "(tidak diisi)"}\nLayanan: ${service}\nPesan: ${message || "(tidak ada)"}`
    );
    window.open(`https://wa.me/${waNumber}?text=${msg}`, "_blank");
  };

  return (
    <>
      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-24 bg-base-100 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          {/* Header */}
          <div className="text-center mb-16 anim-fade-up">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs sm:text-sm
              mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Testimoni
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-base-content mb-4">
              Kata <span className="text-primary italic">Mereka</span>
            </h2>
            <p className="text-base-content/50 text-sm sm:text-base max-w-md mx-auto">
              Ribuan pelanggan sudah membuktikan — rasanya berbicara sendiri
            </p>
            {/* Stats row */}
            <div className="flex items-center justify-center gap-8 mt-8">
              {[
                { num: "4.9", label: "Rating Google" },
                { num: "2.400+", label: "Review" },
                { num: "98%", label: "Kepuasan" },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="font-black text-2xl sm:text-3xl text-primary">{s.num}</div>
                  <div className="text-xs text-base-content/40 font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <div key={t.name}
                className={`anim-fade-up bg-base-200 rounded-2xl border border-base-300 p-5 flex flex-col gap-4
                  hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300
                  delay-${(i + 1) * 100}`}>
                {/* Source badge + rating */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, k) => (
                      <svg key={k} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full
                    ${t.sourceIcon === "G" ? "bg-blue-500/10 text-blue-500" :
                      t.sourceIcon === "T" ? "bg-green-500/10 text-green-500" :
                      "bg-pink-500/10 text-pink-500"}`}>
                    {t.source}
                  </span>
                </div>

                {/* Highlight tag */}
                <div className="inline-block self-start px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20
                  text-primary text-xs font-bold">
                  {t.highlight}
                </div>

                {/* Quote */}
                <div className="relative flex-1">
                  <svg className="w-6 h-6 text-primary/20 absolute -top-1 -left-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-base-content/70 text-sm leading-relaxed pl-4">{t.text}</p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-base-300">
                  <div className="relative">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    {t.verified && (
                      <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-primary rounded-full
                        flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-base-content text-sm">{t.name}</div>
                    <div className="text-base-content/40 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-base-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

          <div className="text-center mb-14 anim-fade-up">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs sm:text-sm
              mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Kontak
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-base-content">
              Hubungi <span className="text-primary italic">Kami</span>
            </h2>
            <p className="text-base-content/50 mt-3 text-sm sm:text-base">
              Reservasi, katering, atau tanyakan menu kami — kami siap membantu!
            </p>
          </div>

          {/* WA CTA Banner */}
          <div className="anim-fade-up delay-100 mb-8 bg-[#25D366] rounded-2xl p-5 sm:p-6
            flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-[#25D366]/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                {WA_ICON}
              </div>
              <div>
                <div className="font-black text-white text-lg">Chat via WhatsApp</div>
                <div className="text-white/80 text-sm">Respon cepat dalam hitungan menit!</div>
              </div>
            </div>
            <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Halo Pesisir Seafood! Saya ingin reservasi meja 🦞")}`}
              target="_blank" rel="noopener noreferrer"
              className="btn bg-white text-[#25D366] hover:bg-white/90 border-0 rounded-xl font-black
                shadow-lg hover:scale-105 transition-all shrink-0">
              Mulai Chat →
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Info */}
            <div className="anim-slide-r space-y-5">
              <div className="bg-base-100 rounded-2xl border border-base-300 p-5 sm:p-6 space-y-5">
                {INFO.map(i => (
                  <div key={i.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20
                      flex items-center justify-center text-xl flex-shrink-0">
                      {i.emoji}
                    </div>
                    <div>
                      <div className="font-bold text-base-content text-sm mb-0.5">{i.title}</div>
                      <div className="text-base-content/55 text-sm">{i.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps embed */}
              <div className="bg-base-100 rounded-2xl border border-base-300 overflow-hidden
                hover:border-primary/50 transition-colors" style={{height: "220px"}}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.729!2d113.2167!3d-7.7543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7de79b5d3e3e5%3A0x1!2sJl.+Mayangan+No.45%2C+Probolinggo!5e0!3m2!1sid!2sid!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Pesisir Seafood"
                />
              </div>

              <div className="grid grid-cols-4 gap-2">
                {[
                  { emoji:"📸", label:"Instagram", href:"#" },
                  { emoji:"💬", label:"WhatsApp",  href:`https://wa.me/${waNumber}` },
                  { emoji:"👍", label:"Facebook",  href:"#" },
                  { emoji:"🎵", label:"TikTok",    href:"#" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 py-3 rounded-xl border border-base-300 bg-base-100
                      hover:border-primary hover:text-primary hover:bg-primary/5 transition-all text-xs font-semibold text-base-content/60">
                    <span className="text-xl">{s.emoji}</span>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="anim-fade-up delay-200 bg-base-100 rounded-2xl border border-base-300 p-5 sm:p-6">
              <h3 className="font-black text-xl sm:text-2xl text-base-content mb-6">Kirim Pesan</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-bold text-base-content/60 block mb-1.5">Nama Lengkap</label>
                  <input type="text" placeholder="Nama Anda" value={name}
                    onChange={e => setName(e.target.value)}
                    className="input input-bordered w-full rounded-xl focus:border-primary transition-colors text-sm" />
                </div>
                <div>
                  <label className="text-sm font-bold text-base-content/60 block mb-1.5">Jenis Layanan</label>
                  <select value={service} onChange={e => setService(e.target.value)}
                    className="select select-bordered w-full rounded-xl focus:border-primary transition-colors text-sm">
                    <option>Reservasi Meja</option>
                    <option>Pesan Antar</option>
                    <option>Katering</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-bold text-base-content/60 block mb-1.5">Pesan</label>
                  <textarea placeholder="Tulis pesan atau permintaan spesial Anda..." value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="textarea textarea-bordered w-full rounded-xl resize-none h-32 focus:border-primary transition-colors text-sm" />
                </div>
                <button onClick={handleSend}
                  className="btn bg-[#25D366] hover:bg-[#22c35e] text-white border-0 w-full rounded-xl
                    font-black shadow-lg shadow-[#25D366]/25 hover:scale-[1.02]
                    transition-all duration-300 gap-2">
                  {WA_ICON}
                  Kirim via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative bg-base-300 border-t border-base-content/10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">

            {/* Brand column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🦞</span>
                <div>
                  <div className="font-black text-2xl text-base-content leading-none">
                    <span className="text-primary">Pesisir</span> Seafood
                  </div>
                  <div className="text-base-content/40 text-xs mt-0.5">Est. 2026 · Probolinggo</div>
                </div>
              </div>
              <p className="text-base-content/50 text-sm leading-relaxed mb-5 max-w-xs">
                Restoran seafood segar dengan cita rasa Nusantara terbaik, langsung dari nelayan Mayangan setiap hari.
              </p>
              <div className="flex gap-2">
                {[
                  { emoji:"📸", href:"#", label:"Instagram" },
                  { emoji:"💬", href:`https://wa.me/${waNumber}`, label:"WhatsApp" },
                  { emoji:"👍", href:"#", label:"Facebook" },
                  { emoji:"🎵", href:"#", label:"TikTok" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl border border-base-content/15 flex items-center justify-center
                      hover:border-primary hover:bg-primary/10 transition-all text-lg">
                    {s.emoji}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation — no bullet points */}
            <div>
              <h4 className="font-black text-base-content text-sm tracking-widest uppercase mb-5">Navigasi</h4>
              <div className="flex flex-col gap-3">
                {[
                  { label:"Beranda",  href:"#hero" },
                  { label:"Menu",     href:"#menu" },
                  { label:"Tentang",  href:"#about" },
                  { label:"Kontak",   href:"#contact" },
                ].map(l => (
                  <a key={l.label} href={l.href}
                    className="text-base-content/50 hover:text-primary text-sm font-medium
                      transition-colors hover:translate-x-1 transform duration-200 inline-block">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="font-black text-base-content text-sm tracking-widest uppercase mb-5">Informasi</h4>
              <div className="flex flex-col gap-3 text-sm text-base-content/50">
                <div className="flex items-start gap-2">
                  <span className="shrink-0 mt-0.5">📍</span>
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
              <a
                href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Halo Pesisir Seafood! 🦞")}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-5 btn bg-[#25D366] text-white border-0 btn-sm rounded-xl font-bold gap-1.5
                  hover:bg-[#22c35e] hover:scale-105 transition-all shadow-md shadow-[#25D366]/20">
                {WA_ICON}
                Chat Sekarang
              </a>
            </div>
          </div>

          <div className="border-t border-base-content/10 py-5 flex flex-col sm:flex-row
            items-center justify-between gap-3 text-xs text-base-content/35">
            <p>© {new Date().getFullYear()} Pesisir Seafood. All rights reserved.</p>
            <a
              href="https://rayn.web.id"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors font-medium group">
              Built by
              <span className="font-black text-base-content/50 group-hover:text-primary transition-colors">rayn</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WA Button */}
      <a
        href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Halo Pesisir Seafood! 🦞")}`}
        target="_blank" rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 9999 }}
        className="w-14 h-14 rounded-full bg-[#25D366] shadow-2xl shadow-[#25D366]/40
          flex items-center justify-center
          hover:scale-110 transition-all duration-300 group">
        <span
          style={{ position: "absolute", inset: 0, borderRadius: "9999px" }}
          className="bg-[#25D366] animate-ping opacity-30"
        />
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white relative z-10">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span
          className="absolute right-16 bg-base-100 text-base-content text-xs font-bold
            px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap border border-base-200
            opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        >
          Chat WA
        </span>
      </a>
    </>
  );
}
