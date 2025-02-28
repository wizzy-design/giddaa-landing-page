import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import OurPartners from "@/components/OurPartners";

export default function Home() {
  return (
    <section>
      <NavBar />
      <Hero />
      <Products />
      <OurPartners />
    </section>
  );
}
