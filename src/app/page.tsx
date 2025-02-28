import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import OurPartners from "@/components/OurPartners";
import WhyGiddaa from "@/components/WhyGiddaa";
import PeopleTalk from "@/components/PeopleTalk";
import KnowMoreAboutUs from "@/components/KnowMoreAboutUs";

export default function Home() {
  return (
    <section>
      <NavBar />
      <Hero />
      <Products />
      <OurPartners />
      <WhyGiddaa />
      <PeopleTalk />
      <KnowMoreAboutUs />
    </section>
  );
}
