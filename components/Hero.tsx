"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero min-h-[92vh] relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1600&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Floating emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["🦀", "🦞", "🦑", "🐟", "🍤", "🦪"].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-4xl opacity-20 animate-bounce"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2 + i * 0.3}s`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className="hero-content text-center text-white max-w-4xl z-10">
        <div>
          <div className="badge badge-primary badge-lg mb-4 font-semibold tracking-wide">
            🌊 Fresh From The Sea
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
            Pesisir<br />
            <span className="text-primary">Seafood</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Cita rasa laut terbaik langsung dari nelayan lokal Probolinggo.
            Segar, lezat, dan penuh bumbu Nusantara yang menggugah selera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="btn btn-primary btn-lg shadow-xl">
              🍽️ Lihat Menu
            </a>
            <a href="#about" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-base-content">
              Tentang Kami
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-14">
            {[
              { value: "50+", label: "Menu Pilihan" },
              { value: "10K+", label: "Pelanggan Puas" },
              { value: "5⭐", label: "Rating Terbaik" },
              { value: "8 Thn", label: "Pengalaman" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-primary">{stat.value}</div>
                <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
