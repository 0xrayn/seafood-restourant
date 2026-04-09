"use client";

import { useState } from "react";

const INFO = [
  { emoji:"📍", title:"Alamat",             detail:"Jl. Mayangan No. 45, Probolinggo, Jawa Timur 67212" },
  { emoji:"📞", title:"Telepon / WhatsApp", detail:"+62 812-3456-7890" },
  { emoji:"🕐", title:"Jam Buka",           detail:"Setiap hari: 10.00 – 22.00 WIB" },
  { emoji:"📧", title:"Email",              detail:"halo@pesisirseafood.id" },
];

const waNumber = "6281234567890";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Reservasi Meja");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const msg = encodeURIComponent(
      `Halo Pesisir Seafood! 🦞\n\nNama: ${name || "(tidak diisi)"}\nLayanan: ${service}\nPesan: ${message || "(tidak ada)"}`
    );
    window.open(`https://wa.me/${waNumber}?text=${msg}`, "_blank");
  };

  const handleWaReservation = () => {
    const msg = encodeURIComponent("Halo Pesisir Seafood! Saya ingin reservasi meja 🦞");
    window.open(`https://wa.me/${waNumber}?text=${msg}`, "_blank");
  };

  return (
    <>
      <section id="contact" className="py-24 bg-base-200 relative overflow-hidden">

        {/* Background decoration */}
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
            flex flex-col sm:flex-row items-center justify-between gap-4
            shadow-xl shadow-[#25D366]/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="font-black text-white text-lg">Chat via WhatsApp</div>
                <div className="text-white/80 text-sm">Respon cepat dalam hitungan menit!</div>
              </div>
            </div>
            <button onClick={handleWaReservation}
              className="btn bg-white text-[#25D366] hover:bg-white/90 border-0 rounded-xl font-black
                shadow-lg hover:scale-105 transition-all shrink-0">
              Mulai Chat →
            </button>
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

              {/* Map */}
              <div className="bg-base-100 rounded-2xl border border-base-300 h-48 overflow-hidden relative
                flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                <div className="text-center relative z-10">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">🗺️</div>
                  <p className="text-sm font-semibold text-base-content/60">Jl. Mayangan No. 45</p>
                  <p className="text-xs text-base-content/40">Probolinggo, Jawa Timur</p>
                </div>
              </div>

              {/* Socials */}
              <div className="grid grid-cols-4 gap-2">
                {[
                  { emoji:"📸", label:"Instagram",  href:"#" },
                  { emoji:"💬", label:"WhatsApp",   href:`https://wa.me/${waNumber}` },
                  { emoji:"👍", label:"Facebook",   href:"#" },
                  { emoji:"🎵", label:"TikTok",     href:"#" },
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
                  <label className="text-sm font-bold text-base-content/60 block mb-1.5">Nomor WhatsApp</label>
                  <input type="tel" placeholder="08xx-xxxx-xxxx" value={phone}
                    onChange={e => setPhone(e.target.value)}
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
                    className="textarea textarea-bordered w-full rounded-xl resize-none h-28 focus:border-primary transition-colors text-sm" />
                </div>
                <button onClick={handleSend}
                  className="btn bg-[#25D366] hover:bg-[#22c35e] text-white border-0 w-full rounded-xl
                    font-black shadow-lg shadow-[#25D366]/25 hover:scale-[1.02] hover:shadow-[#25D366]/40
                    transition-all duration-300 gap-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Kirim via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-base-300 border-t border-base-content/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🦞</span>
              <div>
                <div className="font-black text-lg text-base-content">
                  <span className="text-primary">Pesisir</span> Seafood
                </div>
                <div className="text-base-content/40 text-xs">Probolinggo, Jawa Timur · Est. 2016</div>
              </div>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {["Beranda","Menu","Tentang","Kontak"].map((l,i) => (
                <a key={l} href={`#${["hero","menu","about","contact"][i]}`}
                  className="text-base-content/45 hover:text-primary text-sm font-medium transition-colors">
                  {l}
                </a>
              ))}
            </nav>
            <p className="text-base-content/35 text-xs text-center">
              © {new Date().getFullYear()} Pesisir Seafood. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WA button */}
      <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Halo Pesisir Seafood! 🦞")}`}
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full
          bg-[#25D366] shadow-2xl shadow-[#25D366]/40
          flex items-center justify-center
          hover:scale-110 hover:shadow-[#25D366]/60
          transition-all duration-300 group relative"
        aria-label="Chat via WhatsApp">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white relative z-10
          group-hover:scale-110 transition-transform">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        {/* Tooltip */}
        <span className="absolute right-16 bg-base-100 text-base-content text-xs font-bold
          px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap pointer-events-none
          opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-base-200">
          Chat WA
        </span>
      </a>
    </>
  );
}
