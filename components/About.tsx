const FEATURES = [
  { emoji:"🎣", title:"Langsung dari Nelayan",  desc:"Pasokan harian dari pelabuhan Mayangan. Tidak ada yang lebih segar dari ini." },
  { emoji:"🌶️", title:"Bumbu Rempah Asli",      desc:"Semua bumbu diracik dari rempah pilihan, tanpa MSG dan pengawet." },
  { emoji:"👨‍🍳", title:"Chef Berpengalaman",    desc:"Tim chef dengan pengalaman 10+ tahun mengolah masakan seafood Nusantara." },
  { emoji:"🚚", title:"Dine-in & Delivery",      desc:"Layanan dine-in, take away, dan delivery di area Probolinggo." },
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-base-100 overflow-hidden relative">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">
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
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { val:"8+",   label:"Tahun Berdiri" },
                { val:"50+",  label:"Menu Pilihan" },
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

          <div className="grid grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <div key={f.title}
                className="card-hover anim-fade-up bg-base-200 rounded-2xl p-5 sm:p-6
                  border border-base-300 hover:border-primary/50 transition-colors group"
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

      </div>
    </section>
  );
}
