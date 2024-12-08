import { HandHeart, HeartHandshake } from "lucide-react";

import { Button } from "../Button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-neutral-200">
      <div className="px-8 py-4 flex justify-between items-center w-full lg:max-w-7xl lg:mx-auto">
        <a href="#home" className="text-xl lg:text-2xl font-bold">CharityWell</a>
        <div className="hidden lg:flex lg:gap-2">
          <Button className="text-md font-bold" variant="outline">
            <HeartHandshake className="size-4" />
            Join us
          </Button>
          <Button className="text-md font-bold">
            <HandHeart className="size-4" />
            Donate now
          </Button>
        </div>
      </div>
    </header>
  );
};
