# 🦞 Pesisir Seafood — Website Restoran Seafood

Website restoran seafood modern dibangun dengan **Next.js 15**, **Tailwind CSS v4**, dan **DaisyUI v5**.

## ✨ Fitur

- **6 Pilihan Tema** — Samudra (gelap), Sunset, Karang, Mangrove, Mewah, Segar
- **Menu Interaktif** — Filter per kategori + pencarian real-time
- **Desain Responsif** — Mobile-first, tampil sempurna di semua perangkat
- **Smooth Scrolling** — Navigasi antar section yang mulus
- **Animasi** — Hero floating emojis, hover cards, transisi tema

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka browser
http://localhost:3000
```

## 🎨 Tema yang Tersedia

| Nama      | Label      | DaisyUI Theme |
|-----------|------------|---------------|
| ocean     | 🌊 Samudra | dark          |
| sunset    | 🌅 Sunset  | cupcake       |
| coral     | 🪸 Karang  | synthwave     |
| forest    | 🌿 Mangrove| forest        |
| luxury    | ✨ Mewah   | black         |
| fresh     | 🌸 Segar   | lofi          |

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: DaisyUI v5
- **Language**: TypeScript

## 📂 Struktur Project

```
src/
├── app/
│   ├── globals.css     # Tailwind + DaisyUI imports
│   ├── layout.tsx      # Root layout dengan ThemeProvider
│   └── page.tsx        # Halaman utama
├── components/
│   ├── ThemeContext.tsx # Context untuk manajemen tema
│   ├── Navbar.tsx      # Navigasi + theme switcher
│   ├── Hero.tsx        # Halaman hero
│   ├── MenuSection.tsx # Daftar menu + filter
│   ├── About.tsx       # Tentang kami + testimoni
│   └── Contact.tsx     # Kontak + footer
└── data/
    └── menu.ts         # Data menu & tema
```
