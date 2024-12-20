import { Facebook, Twitter, Rss } from "lucide-react";

import { Input } from "../Input";
import { Button } from "../Button";
import { SocialMediaLink } from "../SocialMediaLink";

export const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
  };

  return (
    <footer className="bg-teal-800">
      <div className="w-full lg:max-w-7xl lg:mx-auto p-8 flex flex-col gap-4 lg:gap-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 justify-between">
          <div className="flex flex-col gap-4 lg:gap-0">
            <a href="#home" className="text-xl lg:text-2xl text-white font-bold">
              CharityWell
            </a>

            <nav className="flex flex-col lg:flex-row gap-2 lg:gap-4 text-sm text-white pt-4">
              <a href="#our-services" className="hover:underline">Our Services</a>
              <a href="#donations" className="hover:underline">Donations</a>
              <a href="#faq" className="hover:underline">FAQ</a>
              <a href="#contact-us" className="hover:underline">Contact Us</a>
            </nav>
          </div>

          <div className="flex flex-col gap-1 lg:flex-1">
            <span className="text-white font-bold">
              Subscribe to our newsletter
            </span>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                placeholder="johndoe@example.com"
                className="hover:ring-white md:max-w-lg"
              />
              <Button variant="secondary">Submit</Button>
            </form>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-white font-bold">
              Follow our social media
            </span>
            <div className="flex gap-2">
              <SocialMediaLink href="#home">
                <Facebook />
              </SocialMediaLink>
              <SocialMediaLink href="#home">
                <Twitter />
              </SocialMediaLink>
              <SocialMediaLink href="#home">
                <Rss />
              </SocialMediaLink>
            </div>
          </div>
        </div>

        <span className="text-white text-sm font-medium">
          CharityWell is a non-profit charity organization based in Jember, Indonesia.
        </span>
      </div>
    </footer>
  );
};
