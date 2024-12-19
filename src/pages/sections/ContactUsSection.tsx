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

        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Mailing address</h3>
            <div className="text-sm flex flex-col gap-2">
              <span className="font-semibold">CharityWell Headquarters</span>
              <span>KH. Ahmad Dahlan Street</span>
              <span>Sumberbaru District</span>
              <span>Jember, 68156</span>
              <span>Indonesia</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">
              Email
            </h3>
            <ul className="list-disc list-inside text-sm flex flex-col gap-2">
              <li>
                For media inquiries, please contact {" "}
                <a
                  href="#home"
                  className="text-teal-900 font-medium hover:underline"
                >
                  media@charitywell.org
                </a>.
              </li>
              <li>
                For donation inquiries, please contact {" "}
                <a href="#home" className="text-teal-900 font-medium hover:underline">
                  donations@charitywell.org
                </a>.
              </li>
              <li>
                For other inquiries, please contact {" "}
                <a href="#home" className="text-teal-900 font-medium hover:underline">
                  info@charitywell.org
                </a>.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Phone number</h3>
            <ul className="text-sm list-disc list-inside flex flex-col gap-2">
              <li>Landline: +62 21 9876-5432</li>
              <li>Mobile: +62 811-2345-6789</li>
              <li>Customer Service: 1500-555</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
