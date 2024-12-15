import { ArrowRight } from "lucide-react";

import { Button } from "../../components/Button";
import { Section } from "../../components/layouts/Section";
import { DonationsCard } from "../../components/DonationsCard";

export default function DonationsSection() {
  return (
    <Section id="donations" className="bg-teal-800">
      <div className="w-full lg:max-w-7xl lg:mx-auto flex flex-col gap-16 items-center p-8 lg:py-20">
        <div className="flex flex-col text-center">
          <span className="text-xs lg:text-sm text-neutral-200 tracking-widest">
            DONATIONS
          </span>
          <h2 className="text-3xl lg:text-5xl text-white font-bold">
            Your Support in Action
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 justify-between">
          <DonationsCard
            imageUrl="/images/2151561492.jpg"
            title="Provide Safe Shelters for Children"
            progress={56}
          >
            Help us build safe and comfortable homes for children in need, ensuring they have a secure place to grow, learn, and thrive.
          </DonationsCard>
          <DonationsCard
            imageUrl="/images/2151696367-mod.jpg"
            title="Equip Kids with School Supplies"
            progress={40}
          >
            Your donation can give orphanage kids the necessary supplies to thrive in their studies and pursue a brighter future.
          </DonationsCard>
          <DonationsCard
            imageUrl="/images/2150901824.jpg"
            title="Support These Families"
            progress={72}
          >
            Your donation can offer homeless families shelter, food, and the resources they need to rebuild their lives with dignity and hope.
          </DonationsCard>
        </div>
        <Button variant="secondary" className="font-bold">
          See more
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </Section>
  );
}
