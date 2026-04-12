import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";

export const metadata = { title: "Kontak — Pesisir Seafood" };

export default function KontakPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Contact />
      </main>
    </>
  );
}
