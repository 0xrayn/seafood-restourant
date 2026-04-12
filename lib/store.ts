import { menuItems as defaultMenu, MenuItem } from "../data/menu";

// Global in-memory store — persists across requests in the same process
// For production persistence, swap this with Vercel KV or Neon DB
const g = globalThis as typeof globalThis & {
  __menuStore?: MenuItem[];
  __menuNextId?: number;
};

if (!g.__menuStore) {
  g.__menuStore = [...defaultMenu];
  g.__menuNextId = Math.max(...defaultMenu.map(m => m.id)) + 1;
}

export const store: MenuItem[] = g.__menuStore;
export const getNextId = () => g.__menuNextId!;
export const incrementId = () => { g.__menuNextId = g.__menuNextId! + 1; };
