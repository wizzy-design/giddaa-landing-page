import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import OurPartners from "@/components/OurPartners";
import WhyGiddaa from "@/components/WhyGiddaa";
import PeopleTalk from "@/components/PeopleTalk";
import KnowMoreAboutUs from "@/components/KnowMoreAboutUs";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import ScrollUp from "@/components/shared/ScrollUp";

export default function Home() {
  return (
    <section>
      <div className="fixed top-0 z-[100] w-full bg-white">
        <NavBar />
      </div>
      <ScrollUp />
      <Hero />
      <Products />
      <OurPartners />
      <WhyGiddaa />
      <PeopleTalk />
      <KnowMoreAboutUs />
      <GetStarted />
      <Footer />
    </section>
  );
}
