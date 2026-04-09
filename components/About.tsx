const FEATURES = [
  { emoji:"🎣", title:"Langsung dari Nelayan",  desc:"Pasokan harian dari pelabuhan Mayangan. Tidak ada yang lebih segar dari ini." },
  { emoji:"🌶️", title:"Bumbu Rempah Asli",       desc:"Semua bumbu diracik dari rempah pilihan, tanpa MSG dan pengawet." },
  { emoji:"👨‍🍳", title:"Chef Berpengalaman",    desc:"Tim chef dengan pengalaman 10+ tahun mengolah masakan seafood Nusantara." },
  { emoji:"🚚", title:"Dine-in & Delivery",      desc:"Layanan dine-in, take away, dan delivery di area Probolinggo." },
];

const REVIEWS = [
  { name:"Budi Santoso",  role:"Pelanggan Setia", stars:5, text:"Kepiting saus padangnya juara! Sudah 3 tahun jadi langganan. Segar dan bumbunya meresap sempurna." },
  { name:"Siti Rahayu",   role:"Food Blogger",    stars:5, text:"Seafood terenak di Probolinggo. Tempatnya bersih, pelayanan ramah, harga sangat worth it!" },
  { name:"Ahmad Fauzi",   role:"Pelanggan",       stars:5, text:"Lobster bakarnya luar biasa! Cocok untuk momen spesial keluarga. Pasti akan kembali lagi." },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-base-100 overflow-hidden relative">

      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">

          {/* Left */}
          <div className="anim-slide-r">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs sm:text-sm
              mb-5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Tentang Kami
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-base-content leading-[0.95] mb-6">
              Restoran Seafood<br />
              <span className="text-primary italic">Favorit</span>
              <span className="text-base-content"> Probolinggo</span>
            </h2>
            <p className="text-base-content/65 text-base sm:text-lg leading-relaxed mb-4">
              Berdiri sejak 2016, Pesisir Seafood hadir untuk menghadirkan cita rasa laut
              terbaik dengan suasana nyaman dan harga terjangkau.
            </p>
            <p className="text-base-content/50 leading-relaxed mb-10 text-sm sm:text-base">
              Setiap hari kami menerima pasokan ikan, udang, cumi, dan kepiting segar
              langsung dari pelabuhan Mayangan — tidak ada yang lebih segar dari ini!
            </p>

            {/* Achievement bar */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { val:"8+", label:"Tahun Berdiri" },
                { val:"50+", label:"Menu Pilihan" },
                { val:"10K+", label:"Pelanggan Puas" },
              ].map(a => (
                <div key={a.label}
                  className="text-center p-4 rounded-2xl bg-base-200 border border-base-300 hover:border-primary transition-colors">
                  <div className="text-2xl font-black text-primary">{a.val}</div>
                  <div className="text-xs text-base-content/50 mt-0.5 font-medium">{a.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#menu" className="btn btn-primary rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                Lihat Menu
              </a>
              <a href="#contact" className="btn btn-outline rounded-xl font-bold hover:scale-105 transition-transform">
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Right — Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <div key={f.title}
                className={`card-hover anim-fade-up bg-base-200 rounded-2xl p-5 sm:p-6
                  border border-base-300 hover:border-primary/50 transition-colors group`}
                style={{ animationDelay:`${i * 0.1}s` }}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {f.emoji}
                </div>
                <h3 className="font-black text-base-content text-sm sm:text-base mb-2">{f.title}</h3>
                <p className="text-base-content/50 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs sm:text-sm
              mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Testimoni
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-base-content">
              Kata <span className="text-primary italic">Pelanggan Kami</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {REVIEWS.map((r, i) => (
              <div key={r.name}
                className={`card-hover anim-fade-up bg-base-200 rounded-2xl p-6 border border-base-300
                  hover:border-primary/30 transition-colors`}
                style={{ animationDelay:`${i * 0.15}s` }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({length: r.stars}).map((_,j) => (
                    <span key={j} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-base-content/65 text-sm sm:text-base italic leading-relaxed mb-6">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50
                    flex items-center justify-center shadow-md">
                    <span className="font-black text-primary-content text-sm">{r.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-bold text-base-content text-sm">{r.name}</div>
                    <div className="text-base-content/40 text-xs">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
