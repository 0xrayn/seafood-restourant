"use client";

import { useState, useEffect, useCallback } from "react";

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

export default function AdminPage() {
  const [pw, setPw] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editId, setEditId] = useState<number | null>(null);
  const [msg, setMsg] = useState("");

  const flash = (m: string) => { setMsg(m); setTimeout(() => setMsg(""), 3000); };

  const fetchItems = useCallback(async () => {
    const res = await fetch("/api/menu");
    const data = await res.json();
    setItems(data.items ?? []);
  }, []);

  const login = async () => {
    setLoading(true);
    // Test auth by trying a dummy PUT on a non-existing endpoint, instead just verify locally
    // We verify by making a POST request with wrong body, a 401 = wrong PW, 201/400 = correct
    const res = await fetch("/api/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin-password": pw },
      body: JSON.stringify({ name:"__test__", description:"", price:0, category:"Test", image:"" }),
    });
    if (res.status === 401) {
      setAuthError("Password salah!");
    } else {
      // Clean up test entry
      const data = await res.json();
      if (data.item?.id) {
        await fetch(`/api/menu/${data.item.id}`, {
          method: "DELETE",
          headers: { "x-admin-password": pw },
        });
      }
      setAuthed(true);
      fetchItems();
    }
    setLoading(false);
  };

  useEffect(() => { if (authed) fetchItems(); }, [authed, fetchItems]);

  const handleSubmit = async () => {
    if (!form.name || !form.price) { flash("❌ Nama dan harga wajib diisi"); return; }
    setLoading(true);
    const payload = { ...form, price: Number(form.price), badge: form.badge || undefined };
    let res;
    if (editId !== null) {
      res = await fetch(`/api/menu/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "x-admin-password": pw },
        body: JSON.stringify(payload),
      });
    } else {
      res = await fetch("/api/menu", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-password": pw },
        body: JSON.stringify(payload),
      });
    }
    if (res.ok) {
      flash(editId !== null ? "✅ Menu diperbarui!" : "✅ Menu ditambahkan!");
      setForm(EMPTY_FORM);
      setEditId(null);
      fetchItems();
    } else {
      flash("❌ Gagal menyimpan");
    }
    setLoading(false);
  };

  const handleEdit = (item: MenuItem) => {
    setEditId(item.id);
    setForm({ name: item.name, description: item.description, price: String(item.price), category: item.category, image: item.image, badge: item.badge ?? "" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin hapus menu ini?")) return;
    await fetch(`/api/menu/${id}`, { method: "DELETE", headers: { "x-admin-password": pw } });
    flash("🗑️ Menu dihapus");
    fetchItems();
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
        <div className="bg-base-100 rounded-3xl p-8 w-full max-w-sm shadow-2xl border border-base-200">
          <div className="text-center mb-8">
            <span className="text-5xl">🦞</span>
            <h1 className="text-2xl font-black mt-3 text-base-content">Admin Panel</h1>
            <p className="text-sm text-base-content/50 mt-1">Pesisir Seafood</p>
          </div>
          <div className="flex flex-col gap-3">
            <input
              type="password"
              placeholder="Password admin..."
              value={pw}
              onChange={e => setPw(e.target.value)}
              onKeyDown={e => e.key === "Enter" && login()}
              className="input input-bordered rounded-xl w-full focus:border-primary"
            />
            {authError && <p className="text-error text-sm text-center">{authError}</p>}
            <button onClick={login} disabled={loading} className="btn btn-primary rounded-xl font-bold">
              {loading ? <span className="loading loading-spinner loading-sm" /> : "Masuk →"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-base-content">🦞 Admin Panel</h1>
            <p className="text-base-content/50 text-sm mt-0.5">Kelola menu Pesisir Seafood</p>
          </div>
          <a href="/" className="btn btn-ghost btn-sm rounded-xl text-base-content/60">← Kembali ke Site</a>
        </div>

        {/* Flash message */}
        {msg && (
          <div className="alert mb-6 rounded-xl border-none bg-primary/10 text-primary font-semibold">
            {msg}
          </div>
        )}

        {/* Form tambah/edit */}
        <div className="bg-base-100 rounded-2xl p-6 border border-base-200 mb-8 shadow-sm">
          <h2 className="text-lg font-black text-base-content mb-5">
            {editId !== null ? "✏️ Edit Menu" : "➕ Tambah Menu Baru"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-base-content/50 uppercase tracking-wide">Nama Menu *</label>
              <input value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
                placeholder="Contoh: Kepiting Saus Padang"
                className="input input-bordered rounded-xl text-sm focus:border-primary" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-base-content/50 uppercase tracking-wide">Harga (Rp) *</label>
              <input type="number" value={form.price} onChange={e => setForm(f => ({...f, price: e.target.value}))}
                placeholder="125000"
                className="input input-bordered rounded-xl text-sm focus:border-primary" />
            </div>
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label className="text-xs font-semibold text-base-content/50 uppercase tracking-wide">Deskripsi</label>
              <textarea value={form.description} onChange={e => setForm(f => ({...f, description: e.target.value}))}
                placeholder="Deskripsi singkat menu..."
                rows={2}
                className="textarea textarea-bordered rounded-xl text-sm focus:border-primary resize-none" />
            </div>
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label className="text-xs font-semibold text-base-content/50 uppercase tracking-wide">URL Gambar (Unsplash / lainnya)</label>
              <input value={form.image} onChange={e => setForm(f => ({...f, image: e.target.value}))}
                placeholder="https://images.unsplash.com/photo-..."
                className="input input-bordered rounded-xl text-sm focus:border-primary" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-base-content/50 uppercase tracking-wide">Kategori</label>
              <select value={form.category} onChange={e => setForm(f => ({...f, category: e.target.value}))}
                className="select select-bordered rounded-xl text-sm focus:border-primary">
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-base-content/50 uppercase tracking-wide">Badge (opsional)</label>
              <select value={form.badge} onChange={e => setForm(f => ({...f, badge: e.target.value}))}
                className="select select-bordered rounded-xl text-sm focus:border-primary">
                {BADGES.map(b => <option key={b} value={b}>{b || "— Tidak ada —"}</option>)}
              </select>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <button onClick={handleSubmit} disabled={loading}
              className="btn btn-primary rounded-xl font-bold gap-2">
              {loading ? <span className="loading loading-spinner loading-sm" /> : editId !== null ? "💾 Simpan Perubahan" : "➕ Tambah Menu"}
            </button>
            {editId !== null && (
              <button onClick={() => { setForm(EMPTY_FORM); setEditId(null); }}
                className="btn btn-ghost rounded-xl font-semibold text-base-content/50">
                Batal
              </button>
            )}
          </div>
        </div>

        {/* Daftar menu */}
        <div className="bg-base-100 rounded-2xl border border-base-200 overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-base-200">
            <h2 className="font-black text-base-content">Daftar Menu ({items.length})</h2>
          </div>
          <div className="divide-y divide-base-200">
            {items.map(item => (
              <div key={item.id} className="flex items-center gap-4 px-6 py-4 hover:bg-base-200/50 transition-colors">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-base-200 shrink-0">
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl">🦞</div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-base-content text-sm">{item.name}</span>
                    {item.badge && (
                      <span className="text-xs bg-primary/15 text-primary font-semibold px-2 py-0.5 rounded-full">{item.badge}</span>
                    )}
                  </div>
                  <p className="text-xs text-base-content/40 mt-0.5 truncate">{item.description}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-primary font-bold">Rp {item.price.toLocaleString("id-ID")}</span>
                    <span className="text-xs text-base-content/30 bg-base-200 px-2 py-0.5 rounded-full">{item.category}</span>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => handleEdit(item)} className="btn btn-ghost btn-xs rounded-lg text-primary">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="btn btn-ghost btn-xs rounded-lg text-error">Hapus</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
