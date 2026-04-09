"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { seafoodThemes } from "../data/menu";

type ThemeCtx = { current: string; set: (n: string) => void };
const Ctx = createContext<ThemeCtx>({ current: "dark", set: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("sf-theme") || "dark";
    applyTheme(saved);
    setCurrent(saved);
  }, []);

  const set = (name: string) => {
    setCurrent(name);
    localStorage.setItem("sf-theme", name);
    applyTheme(name);
  };

  return <Ctx.Provider value={{ current, set }}>{children}</Ctx.Provider>;
}

export function applyTheme(name: string) {
  document.documentElement.setAttribute("data-theme", name === "light" ? "light" : "dark");
}

export const useTheme = () => useContext(Ctx);
export { seafoodThemes };
