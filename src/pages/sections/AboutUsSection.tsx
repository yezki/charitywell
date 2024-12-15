import { ArrowRight } from "lucide-react";

import { Button } from "../../components/Button";
import { Section } from "../../components/layouts/Section";

export default function AboutUsSection() {
  return (
    <Section id="about-us" className="bg-neutral-100">
      <div className="w-full lg:max-w-7xl lg:mx-auto grid lg:grid-cols-2 gap-8 p-8 lg:py-28">
        <img
          className="rounded-3xl w-full"
          src="/images/volunteer-selecting-organizing-clothes-donations-charity.jpg" /> 
        <div className="flex flex-col items-start">
          <span className="text-xs lg:text-sm text-neutral-600 tracking-widest">ABOUT US</span>
          <h2 className="text-3xl lg:text-5xl font-bold">Who We Are: The Heart Behind CharityWell</h2>
          <p className="py-4 leading-loose lg:leading-9">
            At CharityWell, we are more than just a charity—we are a community united by a shared vision of a world where compassion flows freely and reaches every person in need. Our team is driven by the desire to make a meaningful difference, leveraging our collective skills and resources to support those facing adversity.
          </p>
          <Button className="font-bold">
            Explore More
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
