export default function Contact() {
  return (
    <>
      <section id="contact" className="py-20 bg-base-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="badge badge-primary mb-3">📞 Kontak</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-base-content">
              Hubungi <span className="text-primary">Kami</span>
            </h2>
            <p className="text-base-content/60 mt-3">
              Reservasi meja, pesan katering, atau tanyakan menu kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Info */}
            <div className="space-y-6">
              <div className="card bg-base-100 border border-base-300">
                <div className="card-body p-6 space-y-5">
                  {[
                    {
                      icon: "📍",
                      title: "Alamat",
                      detail: "Jl. Mayangan No. 45, Probolinggo, Jawa Timur 67212",
                    },
                    {
                      icon: "📞",
                      title: "Telepon / WhatsApp",
                      detail: "+62 812-3456-7890",
                    },
                    {
                      icon: "🕐",
                      title: "Jam Buka",
                      detail: "Setiap hari: 10.00 – 22.00 WIB",
                    },
                    {
                      icon: "📧",
                      title: "Email",
                      detail: "halo@pesisirseafood.id",
                    },
                  ].map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <div className="font-bold text-base-content text-sm">{info.title}</div>
                        <div className="text-base-content/70 text-sm mt-0.5">{info.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-3">
                {[
                  { label: "Instagram", emoji: "📸" },
                  { label: "WhatsApp", emoji: "💬" },
                  { label: "Facebook", emoji: "👍" },
                  { label: "TikTok", emoji: "🎵" },
                ].map((s) => (
                  <button
                    key={s.label}
                    className="btn btn-outline btn-sm gap-1 flex-1"
                  >
                    <span>{s.emoji}</span>
                    <span className="hidden sm:inline">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="card bg-base-100 border border-base-300">
              <div className="card-body p-6">
                <h3 className="font-bold text-xl text-base-content mb-4">Kirim Pesan</h3>
                <div className="space-y-4">
                  <div>
                    <label className="label label-text font-medium text-sm">Nama Lengkap</label>
                    <input
                      type="text"
                      placeholder="Nama Anda"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div>
                    <label className="label label-text font-medium text-sm">Nomor HP / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="08xx-xxxx-xxxx"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div>
                    <label className="label label-text font-medium text-sm">Pesan / Permintaan</label>
                    <textarea
                      placeholder="Tulis pesan atau reservasi meja Anda..."
                      className="textarea textarea-bordered w-full h-28 resize-none"
                    />
                  </div>
                  <button className="btn btn-primary w-full">
                    🚀 Kirim via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center bg-base-300 text-base-content py-10 px-4">
        <div>
          <p className="text-2xl font-black">🦞 Pesisir Seafood</p>
          <p className="text-base-content/60 max-w-sm text-center text-sm leading-relaxed mt-1">
            Menyajikan cita rasa laut terbaik langsung dari nelayan Probolinggo sejak 2016.
          </p>
        </div>
        <nav>
          <div className="grid grid-flow-col gap-4 text-sm">
            <a href="#hero" className="link link-hover">Beranda</a>
            <a href="#menu" className="link link-hover">Menu</a>
            <a href="#about" className="link link-hover">Tentang</a>
            <a href="#contact" className="link link-hover">Kontak</a>
          </div>
        </nav>
        <aside>
          <p className="text-base-content/50 text-sm">
            © 2025 Pesisir Seafood — Probolinggo, Jawa Timur
          </p>
        </aside>
      </footer>
    </>
  );
}
