import Navbar from "../../components/Navbar";
import MenuSection from "../../components/MenuSection";
import Contact from "../../components/Contact";

export const metadata = { title: "Menu — Pesisir Seafood" };

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main>
        <MenuSection standalone />
        <Contact />
      </main>
    </>
  );
}
