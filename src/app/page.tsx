import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ImageSlider from "@/components/ImageSlider";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <section className="container">
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem', marginTop: '2rem' }}>Our <span className="text-gradient">Gallery</span></h2>
        <ImageSlider />
      </section>
      <Menu />
      <Contact />
      <Footer />
    </main>
  );
}
