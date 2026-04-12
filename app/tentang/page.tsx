import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Contact from "../../components/Contact";

export const metadata = { title: "Tentang Kami — Pesisir Seafood" };

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <About />
        <Contact />
      </main>
    </>
  );
}
