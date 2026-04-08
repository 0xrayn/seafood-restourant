export default function About() {
  const features = [
    {
      emoji: "🎣",
      title: "Langsung dari Nelayan",
      desc: "Kami bekerja sama langsung dengan nelayan lokal Probolinggo untuk memastikan kesegaran setiap hidangan.",
    },
    {
      emoji: "🌶️",
      title: "Bumbu Rempah Asli",
      desc: "Semua bumbu diracik sendiri menggunakan rempah-rempah pilihan tanpa MSG dan bahan pengawet.",
    },
    {
      emoji: "👨‍🍳",
      title: "Chef Berpengalaman",
      desc: "Tim chef kami memiliki pengalaman lebih dari 10 tahun mengolah masakan seafood Nusantara.",
    },
    {
      emoji: "🚚",
      title: "Layanan Cepat",
      desc: "Kami melayani dine-in, take away, dan delivery di area Probolinggo dengan waktu persiapan cepat.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="badge badge-primary mb-4">🏠 Tentang Kami</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-base-content leading-tight mb-6">
              Restoran Seafood <span className="text-primary">Favorit</span> Probolinggo
            </h2>
            <p className="text-base-content/70 text-lg leading-relaxed mb-6">
              Berdiri sejak 2016, Pesisir Seafood hadir untuk menghadirkan cita rasa laut terbaik
              dengan suasana nyaman dan harga yang terjangkau. Kami bangga menjadi tempat makan
              favorit keluarga di Probolinggo.
            </p>
            <p className="text-base-content/70 leading-relaxed mb-8">
              Setiap hari, kami menerima pasokan ikan, udang, cumi, dan kepiting segar langsung
              dari pelabuhan Mayangan. Tidak ada yang lebih segar dari ini!
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#menu" className="btn btn-primary">Lihat Menu</a>
              <a href="#contact" className="btn btn-outline">Hubungi Kami</a>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="card bg-base-200 border border-base-300 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="card-body p-5">
                  <div className="text-4xl mb-2">{f.emoji}</div>
                  <h3 className="font-bold text-base-content text-lg">{f.title}</h3>
                  <p className="text-base-content/60 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10 text-base-content">
            Kata <span className="text-primary">Pelanggan Kami</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Budi Santoso",
                role: "Pelanggan Setia",
                text: "Kepiting saus padangnya juara! Sudah 3 tahun jadi langganan di sini. Segar dan bumbunya meresap sempurna.",
                rating: 5,
              },
              {
                name: "Siti Rahayu",
                role: "Food Blogger",
                text: "Seafood terenak yang pernah saya coba di Probolinggo. Tempatnya bersih, pelayanan ramah, harga sangat worth it!",
                rating: 5,
              },
              {
                name: "Ahmad Fauzi",
                role: "Pelanggan",
                text: "Lobster bakarnya luar biasa! Cocok untuk momen spesial keluarga. Pasti akan kembali lagi.",
                rating: 5,
              },
            ].map((t) => (
              <div key={t.name} className="card bg-base-200 border border-base-300">
                <div className="card-body p-6">
                  <div className="text-yellow-400 text-lg mb-2">{"⭐".repeat(t.rating)}</div>
                  <p className="text-base-content/70 italic leading-relaxed mb-4">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="avatar placeholder">
                      <div className="bg-primary text-primary-content rounded-full w-10">
                        <span className="text-base font-bold">{t.name[0]}</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-base-content text-sm">{t.name}</div>
                      <div className="text-base-content/50 text-xs">{t.role}</div>
                    </div>
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
