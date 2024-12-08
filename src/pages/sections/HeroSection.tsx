import { HandHeart } from "lucide-react";

import { Button } from "../../components/Button";

export default function HeroSection() {
  return (
    <section id="hero" className="grid lg:grid-cols-2 lg:gap-8 w-full lg:max-w-7xl lg:mx-auto lg:px-8 lg:py-24">
      <div className="order-last lg:order-first flex flex-col items-start lg:justify-center gap-4 p-8 lg:p-0">
        <h1 className="text-3xl lg:text-6xl font-bold">
          Your Kindness Powers Our Mission
        </h1>
        <p className="lg:text-lg leading-loose lg:leading-10">
          Every contribution, big or small, helps us turn compassion into action, creating lasting impact on lives and communities.
        </p>
        <Button className="text-md font-bold lg:h-11 lg:rounded-md lg:px-8">
          <HandHeart className="size-4" />
          Donate now
        </Button>
      </div>
      <img 
        className="lg:rounded-3xl w-full"
        src="/images/volunteers-holding-boxes-containing-donations-charity.jpg"
        alt="Volunteers holding boxes containing donations charity"
      />
    </section>
  );
}
