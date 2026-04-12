import Navbar from "../../components/Navbar";
import MenuSection from "../../components/MenuSection";
import Footer from "../../components/Footer";

export const metadata = { title: "Menu — Pesisir Seafood" };

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main>
        <MenuSection standalone />
      </main>
      <Footer />
    </>
  );
}
