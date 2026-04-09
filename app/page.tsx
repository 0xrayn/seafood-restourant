import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <About />
        <Contact />
      </main>
    </>
  );
}
