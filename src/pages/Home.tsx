import FAQSection from "./sections/FAQSection";
import HeroSection from "./sections/HeroSection";
import AboutUsSection from "./sections/AboutUsSection";
import ContactUsSection from "./sections/ContactUsSection";
import DonationsSection from "./sections/DonationsSection";
import OurServicesSection from "./sections/OurServicesSection";

export default function Home() {
  return (
    <main className="mt-[4.5rem]">
      <HeroSection />
      <AboutUsSection />
      <OurServicesSection />
      <DonationsSection />
      <FAQSection />
      <ContactUsSection />
    </main>
  );
}
