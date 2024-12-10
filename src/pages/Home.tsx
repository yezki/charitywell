import HeroSection from "./sections/HeroSection";
import AboutUsSection from "./sections/AboutUsSection";
import OurServicesSection from "./sections/OurServicesSection";

export default function Home() {
  return (
    <main className="mt-[4.5rem]">
      <HeroSection />
      <AboutUsSection />
      <OurServicesSection />
    </main>
  );
}
