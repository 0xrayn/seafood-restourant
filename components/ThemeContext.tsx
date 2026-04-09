"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { seafoodThemes } from "../data/menu";

type ThemeCtx = { current: string; set: (n: string) => void };
const Ctx = createContext<ThemeCtx>({ current: "dark", set: () => {} });

// Custom CSS variables per theme since DaisyUI themes alone look too similar
const themeVars: Record<string, string> = {
  dark:     "--p:216 87% 60%;--s:174 64% 42%;",
  luxury:   "--p:43 88% 58%;--s:30 80% 55%;",
  coral:    "--p:0 80% 65%;--s:30 85% 58%;",
  forest:   "--p:142 69% 50%;--s:160 55% 40%;",
  midnight: "--p:263 70% 72%;--s:292 60% 62%;",
  sunrise:  "--p:25 85% 58%;--s:350 75% 62%;",
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("sf-theme") || "dark";
    apply(saved);
    setCurrent(saved);
  }, []);

  const apply = (name: string) => {
    const daisyMap: Record<string,string> = {
      dark:"dark", luxury:"black", coral:"synthwave",
      forest:"forest", midnight:"night", sunrise:"autumn",
    };
    document.documentElement.setAttribute("data-theme", daisyMap[name] || name);
  };

  const set = (name: string) => {
    setCurrent(name);
    localStorage.setItem("sf-theme", name);
    apply(name);
  };

  return <Ctx.Provider value={{ current, set }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);
export { seafoodThemes };
