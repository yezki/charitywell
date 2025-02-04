import { Mail, MapPin, PhoneCall } from "lucide-react";

import { Section } from "../../components/layouts/Section";
import { ContactItem } from "../../components/contact/ContactItem";
import { ContactList } from "../../components/contact/ContactList";

export default function ContactUsSection() {
  return (
    <Section id="contact-us">
      <div className="w-full lg:max-w-7xl lg:mx-auto p-8 lg:py-28 flex flex-col gap-16">
        <div className="flex flex-col items-center">
          <span className="text-xs lg:text-sm text-neutral-600 tracking-widest">
            CONTACT US
          </span>
          <h2 className="text-3xl lg:text-5xl text-center font-bold">
            Let’s Connect and Make a Difference
          </h2>
        </div>

        <div className="w-full flex sm:justify-center lg:justify-start">
          <div className="lg:w-full flex flex-col lg:flex-row lg:justify-around gap-8">
            <ContactItem
              heading="Come see us"
              icon={<MapPin className="size-12 text-teal-800" />}
            >
              <ContactList title="CharityWell Headquarters">
                KH. Ahmad Dahlan Street<br />
                Sumberbaru District<br />
                Jember, 68156<br />
                Indonesia
              </ContactList>
            </ContactItem>

            <ContactItem
              heading="Send us an email"
              icon={<Mail className="size-12 text-teal-800" />}
            >
              <ContactList title="Media Inquiries">
                media@charitywell.org
              </ContactList>
              <ContactList title="Donation Inquiries">
                donations@charitywell.org
              </ContactList>
              <ContactList title="Other Inquiries">
                info@charitywell.org
              </ContactList>
            </ContactItem>

            <ContactItem
              heading="Phone number"
              icon={<PhoneCall className="size-12 text-teal-800" />}
            >
              <ContactList title="Landline">
                +62 331 9876-5432
              </ContactList>
              <ContactList title="Mobile">
                +62 812-3456-7890
              </ContactList>
              <ContactList title="Customer Service">
                0800-123-4567
              </ContactList>
            </ContactItem>
          </div>
        </div>
      </div>
    </Section>
  );
}
