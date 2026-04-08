import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

export const metadata: Metadata = {
  title: "Pesisir Seafood — Restoran Seafood Terbaik Probolinggo",
  description:
    "Restoran seafood segar dengan cita rasa Nusantara terbaik di Probolinggo. Kepiting, udang, cumi, ikan, dan lobster segar langsung dari nelayan lokal.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
