const FEATURES = [
  { emoji:"🎣", title:"Langsung dari Nelayan",  desc:"Pasokan harian dari pelabuhan Mayangan. Tidak ada yang lebih segar dari ini." },
  { emoji:"🌶️", title:"Bumbu Rempah Asli",      desc:"Semua bumbu diracik dari rempah pilihan, tanpa MSG dan pengawet." },
  { emoji:"👨‍🍳", title:"Chef Berpengalaman",    desc:"Tim chef dengan pengalaman 10+ tahun mengolah masakan seafood Nusantara." },
  { emoji:"🚚", title:"Dine-in & Delivery",      desc:"Layanan dine-in, take away, dan delivery di area Probolinggo." },
];

const REVIEWS = [
  {
    name:"Budi Santoso",
    role:"Pelanggan Setia · 3 Tahun",
    stars:5,
    text:"Kepiting saus padangnya juara! Sudah 3 tahun jadi langganan. Segar dan bumbunya meresap sempurna.",
    highlight:"Kepiting Saus Padang",
    avatar:"B",
    color:"from-orange-400 to-amber-500",
  },
  {
    name:"Siti Rahayu",
    role:"Food Blogger",
    stars:5,
    text:"Seafood terenak di Probolinggo. Tempatnya bersih, pelayanan ramah, harga sangat worth it!",
    highlight:"Worth It!",
    avatar:"S",
    color:"from-rose-400 to-pink-500",
  },
  {
    name:"Ahmad Fauzi",
    role:"Pelanggan",
    stars:5,
    text:"Lobster bakarnya luar biasa! Cocok untuk momen spesial keluarga. Pasti akan kembali lagi.",
    highlight:"Lobster Bakar",
    avatar:"A",
    color:"from-sky-400 to-blue-500",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-base-100 overflow-hidden relative">
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

        {/* ── TESTIMONIALS — redesigned ── */}
        <div>
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs sm:text-sm
              mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Testimoni Pelanggan
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-base-content">
              Yang Mereka <span className="text-primary italic">Katakan</span>
            </h3>
            <p className="text-base-content/45 mt-3 text-sm max-w-md mx-auto">
              Ribuan pelanggan sudah membuktikan — rasanya berbicara sendiri
            </p>
          </div>

          {/* Big featured review + 2 side cards */}
          <div className="grid lg:grid-cols-5 gap-5">

            {/* Featured — spans 3 cols */}
            <div className="lg:col-span-3 anim-slide-r relative overflow-hidden
              bg-gradient-to-br from-base-200 to-base-300
              rounded-3xl border border-base-300 p-7 sm:p-10
              flex flex-col justify-between min-h-[280px]">

              {/* Big quote mark */}
              <div className="absolute top-4 right-6 text-[120px] font-black leading-none
                text-base-content/5 select-none pointer-events-none">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({length:5}).map((_,j) => (
                  <span key={j} className="text-amber-400 text-xl">★</span>
                ))}
                <span className="ml-2 text-xs font-bold text-amber-500 bg-amber-400/10
                  px-2 py-1 rounded-full border border-amber-400/20 self-center">
                  Verified ✓
                </span>
              </div>

              {/* Highlighted keyword */}
              <div className="mb-4">
                <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10
                  px-3 py-1.5 rounded-full border border-primary/20">
                  ❤️ {REVIEWS[0].highlight}
                </span>
              </div>

              {/* Quote */}
              <p className="text-base-content/80 text-lg sm:text-xl font-medium leading-relaxed mb-8 italic">
                &ldquo;{REVIEWS[0].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${REVIEWS[0].color}
                  flex items-center justify-center shadow-lg`}>
                  <span className="font-black text-white text-lg">{REVIEWS[0].avatar}</span>
                </div>
                <div>
                  <div className="font-black text-base-content text-base">{REVIEWS[0].name}</div>
                  <div className="text-base-content/45 text-xs font-medium">{REVIEWS[0].role}</div>
                </div>
                {/* Google logo placeholder */}
                <div className="ml-auto text-xs font-bold text-base-content/25">Google Maps</div>
              </div>
            </div>

            {/* 2 stacked side cards */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {REVIEWS.slice(1).map((r, i) => (
                <div key={r.name}
                  className="anim-fade-up flex-1 relative overflow-hidden
                    bg-base-200 rounded-3xl border border-base-300 p-6
                    hover:border-primary/40 transition-colors group"
                  style={{ animationDelay:`${(i+1)*0.15}s` }}>

                  {/* Accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${r.color} rounded-t-3xl`} />

                  <div className="flex gap-0.5 mb-3 mt-1">
                    {Array.from({length:r.stars}).map((_,j) => (
                      <span key={j} className="text-amber-400 text-base">★</span>
                    ))}
                  </div>

                  <div className="mb-3">
                    <span className="text-xs font-bold text-primary bg-primary/10
                      px-2.5 py-1 rounded-full border border-primary/15">
                      {r.highlight}
                    </span>
                  </div>

                  <p className="text-base-content/70 text-sm leading-relaxed mb-5 italic">
                    &ldquo;{r.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${r.color}
                      flex items-center justify-center shadow-md`}>
                      <span className="font-black text-white text-sm">{r.avatar}</span>
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

          {/* Rating summary bar */}
          <div className="mt-8 bg-base-200 rounded-2xl border border-base-300 p-5 sm:p-6
            flex flex-col sm:flex-row items-center gap-6">
            <div className="text-center shrink-0">
              <div className="text-5xl font-black text-base-content">5.0</div>
              <div className="flex gap-0.5 justify-center my-1.5">
                {Array.from({length:5}).map((_,j) => (
                  <span key={j} className="text-amber-400 text-lg">★</span>
                ))}
              </div>
              <div className="text-xs text-base-content/40 font-medium">dari 10.000+ ulasan</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-base-300" />
            <div className="flex-1 space-y-2 w-full">
              {[5,4,3,2,1].map((star, i) => {
                const widths = ["95%","4%","1%","0%","0%"];
                return (
                  <div key={star} className="flex items-center gap-3">
                    <span className="text-xs font-bold text-base-content/50 w-3 shrink-0">{star}</span>
                    <span className="text-amber-400 text-xs">★</span>
                    <div className="flex-1 h-2 bg-base-300 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full transition-all duration-1000"
                        style={{ width: widths[i] }}
                      />
                    </div>
                    <span className="text-xs text-base-content/40 w-8 text-right shrink-0">{widths[i]}</span>
                  </div>
                );
              })}
            </div>
            <div className="hidden sm:block w-px h-16 bg-base-300" />
            <div className="text-center shrink-0">
              <div className="text-2xl font-black text-primary mb-1">10K+</div>
              <div className="text-xs text-base-content/40 font-medium">Pelanggan Puas</div>
              <div className="mt-3">
                <a href="#contact"
                  className="btn btn-primary btn-sm rounded-xl font-bold text-xs">
                  Bergabung →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
