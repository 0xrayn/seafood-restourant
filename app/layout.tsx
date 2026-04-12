import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeContext";

export const metadata: Metadata = {
  title: "Pesisir Seafood",
  description: "Restoran seafood segar dengan cita rasa Nusantara terbaik di Probolinggo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
