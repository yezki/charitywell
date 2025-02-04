import { LifeBuoy, Globe, HeartPulse } from "lucide-react";

import { Section } from "../../components/layouts/Section";
import { OurServicesCard } from "../../components/OurServicesCard";

export default function OurServicesSection() {
  return (
    <Section id="our-services">
      <div className="w-full lg:max-w-7xl lg:mx-auto flex flex-col items-center gap-20 p-8 lg:py-28">
        <div className="text-center">
          <span className="text-xs lg:text-sm text-neutral-600 tracking-widest">
            OUR SERVICES
          </span> 
          <h2 className="text-3xl lg:text-5xl font-bold">
            What We Do at CharityWell
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-y-16 lg:gap-x-6">
          <OurServicesCard
            title="Emergency Relief Support"
            icon={<LifeBuoy size={36} className="text-white" />}
          >
            We provide urgent aid like food, water, and shelter to those affected by disasters and emergencies.
          </OurServicesCard>
          <OurServicesCard
            title="Community Empowerment Programs"
            icon={<Globe size={36} className="text-white" />}
          >
            Our programs equip communities with education and skills to build sustainable, independent futures.
          </OurServicesCard>
          <OurServicesCard
            title="Health and Wellness Initiatives"
            icon={<HeartPulse size={36} className="text-white" />}
          >
            We enhance health and wellness by offering access to healthcare, nutrition, and mental health support.
          </OurServicesCard>
        </div>
      </div>
    </Section>
  );
}
