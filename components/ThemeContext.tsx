"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { seafoodThemes } from "../data/menu";

type ThemeCtx = { current: string; set: (n: string) => void };
const Ctx = createContext<ThemeCtx>({ current: "ocean", set: () => {} });

const themeConfig: Record<string, { daisyTheme: string; vars: string }> = {
  ocean:    { daisyTheme: "dark",    vars: "--p:210 100% 56%;--pf:210 100% 46%;--s:174 72% 40%;--b1:215 40% 10%;--b2:215 38% 8%;--b3:215 35% 6%;--bc:210 40% 92%;" },
  luxury:   { daisyTheme: "black",   vars: "--p:43 95% 55%;--pf:43 95% 45%;--s:30 88% 52%;--b1:240 15% 6%;--b2:240 12% 5%;--b3:240 10% 4%;--bc:43 50% 88%;" },
  coral:    { daisyTheme: "light",   vars: "--p:8 85% 58%;--pf:8 85% 48%;--s:25 90% 55%;--b1:20 30% 98%;--b2:20 25% 94%;--b3:20 20% 90%;--bc:20 30% 15%;" },
  forest:   { daisyTheme: "forest",  vars: "--p:142 72% 42%;--pf:142 72% 34%;--s:160 58% 35%;--b1:150 22% 8%;--b2:150 20% 6%;--b3:150 18% 5%;--bc:142 30% 88%;" },
  midnight: { daisyTheme: "night",   vars: "--p:265 75% 68%;--pf:265 75% 58%;--s:292 65% 58%;--b1:235 35% 8%;--b2:235 32% 6%;--b3:235 30% 5%;--bc:265 30% 90%;" },
  sunrise:  { daisyTheme: "autumn",  vars: "--p:22 92% 56%;--pf:22 92% 46%;--s:355 78% 58%;--b1:25 30% 97%;--b2:25 25% 93%;--b3:25 20% 89%;--bc:22 35% 12%;" },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState("ocean");

  useEffect(() => {
    const saved = localStorage.getItem("sf-theme") || "ocean";
    apply(saved);
    setCurrent(saved);
  }, []);

  const apply = (name: string) => {
    const cfg = themeConfig[name] || themeConfig.ocean;
    document.documentElement.setAttribute("data-theme", cfg.daisyTheme);
    const existing = document.getElementById("sf-theme-vars");
    const el = existing || document.createElement("style");
    el.id = "sf-theme-vars";
    el.textContent = `:root { ${cfg.vars} }`;
    if (!existing) document.head.appendChild(el);
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
