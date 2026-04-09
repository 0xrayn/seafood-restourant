"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { seafoodThemes } from "../data/menu";

type ThemeContextType = {
  currentTheme: string;
  setTheme: (name: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: "ocean",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState("ocean");

  useEffect(() => {
    const saved = localStorage.getItem("seafood-theme") || "ocean";
    setCurrentTheme(saved);
  }, []);

  const setTheme = (name: string) => {
    setCurrentTheme(name);
    localStorage.setItem("seafood-theme", name);
  };

  const daisyTheme = seafoodThemes.find((t) => t.name === currentTheme)?.daisyTheme || "dark";

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      <div data-theme={daisyTheme} className="min-h-screen transition-all duration-500">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
