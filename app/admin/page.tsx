"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
};

const CATEGORIES = ["Kepiting","Udang","Cumi","Ikan","Kerang","Lobster","Nasi","Minuman"];
const BADGES = ["","Best Seller","Populer","Favorit","Premium","Signature"];
const EMPTY_FORM = { name:"", description:"", price:"", category:"Kepiting", image:"", badge:"" };

// ── LOGIN PAGE ──
function LoginPage({ onLogin }: { onLogin: (pw: string) => Promise<boolean> }) {
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const handleLogin = async () => {
    if (!pw.trim()) return;
    setLoading(true);
    setError("");
    const ok = await onLogin(pw);
    if (!ok) {
      setError("Password salah. Coba lagi.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-base-200 flex items-center justify-center px-4 pt-24 pb-16 relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Floating emojis */}
        {[
          { e:"🦞", x:"7%",  y:"20%", d:"0s",   dur:"4.5s" },
          { e:"🦀", x:"88%", y:"15%", d:"0.8s",  dur:"5.2s" },
          { e:"🦑", x:"80%", y:"65%", d:"1.5s",  dur:"4.8s" },
          { e:"🐟", x:"5%",  y:"70%", d:"0.3s",  dur:"3.9s" },
          { e:"🦪", x:"42%", y:"5%",  d:"2s",    dur:"4.2s" },
        ].map((f, i) => (
          <span key={i} className="fixed text-3xl opacity-[0.07] pointer-events-none select-none float-emoji"
            style={{ left: f.x, top: f.y, animationDelay: f.d, animationDuration: f.dur }}>
            {f.e}
          </span>
        ))}

        <div className="w-full max-w-md relative z-10">
          {/* Accent top strip */}
          <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-t-3xl" />

          <div
            className="bg-base-100/90 backdrop-blur-xl rounded-b-3xl border border-base-200 shadow-2xl shadow-black/20"
            style={shake ? { animation: "shake 0.4s ease" } : {}}>

            {/* Header */}
            <div className="relative px-8 pt-10 pb-8 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-primary/10 border-2 border-primary/20
                  flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/10">
                  <span className="text-4xl">🔐</span>
                </div>
                <h1 className="text-3xl font-black text-base-content mb-1">Admin Panel</h1>
                <p className="text-base-content/50 text-sm">
                  Masuk untuk mengelola menu <span className="text-primary font-semibold">Pesisir Seafood</span>
                </p>
              </div>
            </div>

            <div className="mx-8 h-px bg-gradient-to-r from-transparent via-base-300 to-transparent" />

            {/* Form */}
            <div className="px-8 py-8 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-base-content/50 uppercase tracking-widest flex items-center gap-1.5">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                  Password Admin
                </label>
                <input
                  type="password"
                  placeholder="Masukkan password..."
                  value={pw}
                  onChange={e => { setPw(e.target.value); setError(""); }}
                  onKeyDown={e => e.key === "Enter" && handleLogin()}
                  className={`input input-bordered w-full rounded-2xl text-sm focus:border-primary transition-all
                    ${error ? "border-error focus:border-error" : ""}`}
                />
                {error && (
                  <p className="text-error text-xs font-semibold flex items-center gap-1">
                    <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01M12 3a9 9 0 110 18A9 9 0 0112 3z"/>
                    </svg>
                    {error}
                  </p>
                )}
              </div>

              <button onClick={handleLogin} disabled={loading || !pw.trim()}
                className="btn btn-primary w-full rounded-2xl font-black text-base shadow-lg shadow-primary/25
                  hover:scale-[1.02] disabled:opacity-50 disabled:scale-100 transition-all duration-200 gap-2">
                {loading
                  ? <><span className="loading loading-spinner loading-sm" /> Memeriksa...</>
                  : <>Masuk ke Admin Panel <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg></>}
              </button>

              <div className="flex items-center gap-2 p-3 rounded-xl bg-base-200 border border-base-300">
                <svg className="w-4 h-4 text-base-content/30 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <p className="text-xs text-base-content/35">
                  Password diatur via env variable <code className="text-primary/60 font-mono">ADMIN_PASSWORD</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <style>{`
        @keyframes shake {
          0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-5px)} 80%{transform:translateX(5px)}
        }
      `}</style>
    </>
  );
}

// ── MAIN ADMIN DASHBOARD ──
export default function AdminPage() {
  const [pw, setPw] = useState("");
  const [authed, setAuthed] = useState(false);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editId, setEditId] = useState<number | null>(null);
  const [msg, setMsg] = useState({ text: "", type: "" });
  const [imageMode, setImageMode] = useState<"upload" | "url">("upload");
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [uploadDrag, setUploadDrag] = useState(false);

  const flash = (text: string, type = "success") => {
    setMsg({ text, type });
    setTimeout(() => setMsg({ text: "", type: "" }), 3500);
  };

  const handleFileUpload = async (file: File) => {
    setUploadLoading(true);
    setUploadError("");
    const fd = new FormData();
    fd.append("file", file);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "x-admin-password": pw },
        body: fd,
      });
      const data = await res.json();
      if (res.ok && data.url) {
        setForm(f => ({ ...f, image: data.url }));
      } else {
        setUploadError(data.error || "Gagal upload gambar");
      }
    } catch {
      setUploadError("Koneksi gagal, coba lagi");
    } finally {
      setUploadLoading(false);
    }
  };

  const fetchItems = useCallback(async () => {
    const res = await fetch("/api/menu");
    const data = await res.json();
    setItems(data.items ?? []);
  }, []);

  const handleLogin = async (password: string): Promise<boolean> => {
    const res = await fetch("/api/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin-password": password },
      body: JSON.stringify({ name:"__auth_test__", description:"", price:0, category:"Test", image:"" }),
    });
    if (res.status === 401) return false;
    const data = await res.json();
    if (data.item?.id) {
      await fetch(`/api/menu/${data.item.id}`, { method: "DELETE", headers: { "x-admin-password": password } });
    }
    setPw(password);
    setAuthed(true);
    fetchItems();
    return true;
  };

  useEffect(() => { if (authed) fetchItems(); }, [authed, fetchItems]);

  const handleSubmit = async () => {
    if (!form.name || !form.price) { flash("Nama dan harga wajib diisi", "error"); return; }
    setLoading(true);
    const payload = { ...form, price: Number(form.price), badge: form.badge || undefined };
    const res = editId !== null
      ? await fetch(`/api/menu/${editId}`, { method: "PUT", headers: { "Content-Type": "application/json", "x-admin-password": pw }, body: JSON.stringify(payload) })
      : await fetch("/api/menu", { method: "POST", headers: { "Content-Type": "application/json", "x-admin-password": pw }, body: JSON.stringify(payload) });
    if (res.ok) {
      flash(editId !== null ? "Menu berhasil diperbarui!" : "Menu baru berhasil ditambahkan!");
      setForm(EMPTY_FORM); setEditId(null); setUploadError(""); fetchItems();
    } else {
      flash("Gagal menyimpan perubahan", "error");
    }
    setLoading(false);
  };

  const handleEdit = (item: MenuItem) => {
    setEditId(item.id);
    setForm({ name: item.name, description: item.description, price: String(item.price), category: item.category, image: item.image, badge: item.badge ?? "" });
    setImageMode(item.image?.startsWith("/") ? "upload" : "url");
    setUploadError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus menu ini?")) return;
    await fetch(`/api/menu/${id}`, { method: "DELETE", headers: { "x-admin-password": pw } });
    flash("Menu berhasil dihapus");
    fetchItems();
  };

  if (!authed) return <LoginPage onLogin={handleLogin} />;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-base-200 pt-20 pb-0">
        {/* Admin mode banner */}
        <div className="bg-primary/8 border-b border-primary/15 px-4 py-2.5">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-primary font-semibold">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Mode Admin Aktif · {items.length} menu terdaftar
            </div>
            <button
              onClick={() => { setAuthed(false); setPw(""); setForm(EMPTY_FORM); setEditId(null); }}
              className="text-xs text-base-content/40 hover:text-error transition-colors font-medium flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
              </svg>
              Keluar
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">

          {/* Flash */}
          {msg.text && (
            <div className={`mb-6 px-5 py-4 rounded-2xl border font-semibold text-sm flex items-center gap-3 anim-fade-up
              ${msg.type === "error" ? "bg-error/10 border-error/20 text-error" : "bg-success/10 border-success/20 text-success"}`}>
              <span className="text-xl">{msg.type === "error" ? "❌" : "✅"}</span>
              {msg.text}
            </div>
          )}

          {/* Form tambah/edit */}
          <div className="bg-base-100 rounded-3xl border border-base-200 overflow-hidden mb-8 shadow-sm">
            <div className="px-6 py-5 border-b border-base-200 bg-gradient-to-r from-primary/5 via-transparent to-transparent flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-lg">
                  {editId !== null ? "✏️" : "➕"}
                </div>
                <div>
                  <h2 className="font-black text-base-content">{editId !== null ? "Edit Menu" : "Tambah Menu Baru"}</h2>
                  <p className="text-xs text-base-content/40">{editId !== null ? "Perbarui informasi hidangan" : "Isi detail hidangan baru"}</p>
                </div>
              </div>
              {editId !== null && (
                <button onClick={() => { setForm(EMPTY_FORM); setEditId(null); }}
                  className="btn btn-ghost btn-sm rounded-xl text-base-content/40">✕ Batal Edit</button>
              )}
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-base-content/50 uppercase tracking-wide">Nama Menu <span className="text-error">*</span></label>
                  <input value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
                    placeholder="Contoh: Kepiting Saus Padang"
                    className="input input-bordered rounded-xl text-sm focus:border-primary" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-base-content/50 uppercase tracking-wide">Harga (Rp) <span className="text-error">*</span></label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-base-content/40 font-bold">Rp</span>
                    <input type="number" value={form.price} onChange={e => setForm(f => ({...f, price: e.target.value}))}
                      placeholder="125000"
                      className="input input-bordered rounded-xl text-sm pl-9 focus:border-primary w-full" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-base-content/50 uppercase tracking-wide">Deskripsi</label>
                  <textarea value={form.description} onChange={e => setForm(f => ({...f, description: e.target.value}))}
                    placeholder="Deskripsi singkat menu..." rows={2}
                    className="textarea textarea-bordered rounded-xl text-sm focus:border-primary resize-none" />
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-base-content/50 uppercase tracking-wide">Gambar Menu</label>

                  {/* Tab pilih metode */}
                  <div className="flex gap-2 mb-1">
                    <button type="button"
                      onClick={() => setImageMode("upload")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${imageMode === "upload" ? "bg-primary text-primary-content" : "bg-base-200 text-base-content/50 hover:bg-base-300"}`}>
                      📁 Upload File
                    </button>
                    <button type="button"
                      onClick={() => setImageMode("url")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${imageMode === "url" ? "bg-primary text-primary-content" : "bg-base-200 text-base-content/50 hover:bg-base-300"}`}>
                      🔗 URL Gambar
                    </button>
                  </div>

                  {imageMode === "upload" ? (
                    <div className="flex flex-col gap-2">
                      <div
                        className={`relative border-2 border-dashed rounded-xl p-4 text-center transition-all cursor-pointer
                          ${uploadDrag ? "border-primary bg-primary/5" : "border-base-300 hover:border-primary/50 hover:bg-base-200/50"}`}
                        onDragOver={e => { e.preventDefault(); setUploadDrag(true); }}
                        onDragLeave={() => setUploadDrag(false)}
                        onDrop={e => { e.preventDefault(); setUploadDrag(false); const file = e.dataTransfer.files[0]; if (file) handleFileUpload(file); }}
                        onClick={() => document.getElementById("fileInput")?.click()}>
                        <input
                          id="fileInput"
                          type="file"
                          accept="image/jpeg,image/jpg,image/png,image/webp"
                          className="hidden"
                          onChange={e => { const file = e.target.files?.[0]; if (file) handleFileUpload(file); }}
                        />
                        {uploadLoading ? (
                          <div className="flex flex-col items-center gap-2 py-2">
                            <span className="loading loading-spinner loading-sm text-primary" />
                            <p className="text-xs text-base-content/50">Mengupload gambar...</p>
                          </div>
                        ) : form.image && form.image.startsWith("/") ? (
                          <div className="flex items-center gap-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={form.image} alt="preview" className="w-16 h-16 rounded-xl object-cover border border-base-300 shrink-0" />
                            <div className="text-left">
                              <p className="text-xs font-semibold text-success">✓ Gambar terupload</p>
                              <p className="text-xs text-base-content/40 mt-0.5 truncate max-w-[180px]">{form.image}</p>
                              <button type="button" onClick={e => { e.stopPropagation(); setForm(f => ({...f, image: ""})); }}
                                className="text-xs text-error hover:underline mt-1">Hapus</button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-1.5 py-1">
                            <svg className="w-8 h-8 text-base-content/25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            <p className="text-sm font-semibold text-base-content/50">Klik atau drag foto ke sini</p>
                            <p className="text-xs text-base-content/30">JPG, PNG, WEBP · Maks 5MB</p>
                          </div>
                        )}
                      </div>
                      {uploadError && <p className="text-xs text-error font-semibold">⚠️ {uploadError}</p>}
                    </div>
                  ) : (
                    <div className="flex gap-3 items-start">
                      <input value={form.image} onChange={e => setForm(f => ({...f, image: e.target.value}))}
                        placeholder="https://images.unsplash.com/photo-..."
                        className="input input-bordered rounded-xl text-sm focus:border-primary flex-1" />
                      {form.image && !form.image.startsWith("/") && (
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-base-300 shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={form.image} alt="preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-base-content/50 uppercase tracking-wide">Kategori</label>
                  <select value={form.category} onChange={e => setForm(f => ({...f, category: e.target.value}))}
                    className="select select-bordered rounded-xl text-sm focus:border-primary">
                    {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-base-content/50 uppercase tracking-wide">Badge Label</label>
                  <select value={form.badge} onChange={e => setForm(f => ({...f, badge: e.target.value}))}
                    className="select select-bordered rounded-xl text-sm focus:border-primary">
                    {BADGES.map(b => <option key={b} value={b}>{b || "— Tidak ada —"}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button onClick={handleSubmit} disabled={loading}
                  className="btn btn-primary rounded-xl font-bold gap-2 px-6 shadow-md shadow-primary/20 hover:scale-[1.02] transition-all">
                  {loading ? <><span className="loading loading-spinner loading-sm" /> Menyimpan...</> : editId !== null ? "💾 Simpan Perubahan" : "➕ Tambah Menu"}
                </button>
                {editId !== null && (
                  <button onClick={() => { setForm(EMPTY_FORM); setEditId(null); }}
                    className="btn btn-ghost rounded-xl text-base-content/40">Batal</button>
                )}
              </div>
            </div>
          </div>

          {/* Daftar menu */}
          <div className="bg-base-100 rounded-3xl border border-base-200 overflow-hidden shadow-sm">
            <div className="px-6 py-5 border-b border-base-200 flex items-center justify-between">
              <div>
                <h2 className="font-black text-base-content">Daftar Hidangan</h2>
                <p className="text-xs text-base-content/40 mt-0.5">{items.length} menu aktif</p>
              </div>
              <Link href="/menu" target="_blank"
                className="btn btn-ghost btn-sm rounded-xl text-base-content/50 gap-1.5 text-xs">
                Lihat di Site
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </Link>
            </div>
            <div className="divide-y divide-base-200">
              {items.map((item, i) => (
                <div key={item.id}
                  className={`flex items-center gap-4 px-6 py-4 hover:bg-base-200/40 transition-colors
                    ${editId === item.id ? "bg-primary/5 border-l-2 border-primary" : ""}`}>
                  <span className="text-xs text-base-content/25 font-mono w-4 shrink-0 hidden sm:block">{i + 1}</span>
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-base-200 shrink-0 border border-base-300">
                    {item.image
                      // eslint-disable-next-line @next/next/no-img-element
                      ? <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      : <div className="w-full h-full flex items-center justify-center text-2xl opacity-40">🦞</div>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-base-content text-sm">{item.name}</span>
                      {item.badge && <span className="text-xs bg-primary/15 text-primary font-semibold px-2 py-0.5 rounded-full">{item.badge}</span>}
                    </div>
                    <p className="text-xs text-base-content/40 mt-0.5 truncate max-w-xs">{item.description}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-xs text-primary font-black">Rp {item.price.toLocaleString("id-ID")}</span>
                      <span className="text-xs text-base-content/30 bg-base-200 px-2 py-0.5 rounded-full">{item.category}</span>
                    </div>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <button onClick={() => handleEdit(item)}
                      className="btn btn-ghost btn-xs rounded-lg text-primary hover:bg-primary/10 gap-1 font-semibold">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                      </svg>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(item.id)}
                      className="btn btn-ghost btn-xs rounded-lg text-error hover:bg-error/10 gap-1 font-semibold">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                      </svg>
                      Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
