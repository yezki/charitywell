import { Mail, MapPin, PhoneCall } from "lucide-react";

import { Section } from "../../components/layouts/Section";

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

        <div className="grid lg:grid-cols-3 lg:justify-between gap-8">
          <div className="flex gap-6 lg:mx-auto">
            <MapPin className="size-12 text-teal-800" />
            <div className="flex flex-col gap-1">
              <h3 className="text-neutral-700">Come see us</h3>
              <div className="flex flex-col text-teal-800 font-bold">
                <span className="text-sm font-medium">
                  (CharityWell Headquarters)
                </span>
                <span>KH. Ahmad Dahlan Street</span>
                <span>Sumberbaru District</span>
                <span>Jember, 68156</span>
                <span>Indonesia</span>
              </div>
            </div>
          </div>

          <div className="flex gap-6 lg:mx-auto">
            <span>
              <Mail className="size-12 text-teal-800" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-neutral-700">
                Send us an email
              </h3>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col text-teal-800">
                  <span className="font-medium text-sm">
                    (Media Inquiries)
                  </span>
                  <span className="font-bold">
                    media@charitywell.org
                  </span>
                </div>
                <div className="flex flex-col text-teal-800">
                  <span className="font-medium text-sm">
                    (Donation Inquiries)
                  </span>
                  <span className="font-bold">
                    donations@charitywell.org
                  </span>
                </div>
                <div className="flex flex-col text-teal-800">
                  <span className="font-medium text-sm">
                    (Other Inquiries)
                  </span>
                  <span className="font-bold">
                    info@charitywell.org
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-6 lg:mx-auto">
            <span>
              <PhoneCall className="size-12 text-teal-800" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-neutral-700">Phone number</h3>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col text-teal-800">
                  <span className="text-sm font-medium">(Landline)</span>
                  <span className="font-bold">+62 331 9876-5432</span>
                </div>
                <div className="flex flex-col text-teal-800">
                  <span className="text-sm font-medium">(Mobile)</span>
                  <span className="font-bold">+62 812-3456-7890</span>
                </div>
                <div className="flex flex-col text-teal-800">
                  <span className="text-sm font-medium">(Customer Service)</span>
                  <span className="font-bold">0800-123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
