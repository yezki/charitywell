import { ArrowRight } from "lucide-react";

import { Button } from "../../components/Button";
import { FAQItem } from "../../components/FAQItem";
import { Section } from "../../components/layouts/Section";

export default function FAQSection() {
  return (
    <Section id="faq" className="bg-teal-100/70">
      <div className="w-full lg:max-w-7xl lg:mx-auto p-8 lg:py-28 flex flex-col items-center gap-16">
        <div className="flex flex-col items-center">
          <span className="text-xs lg:text-sm text-neutral-600 tracking-widest">F A Q</span>
          <h2 className="text-3xl lg:text-5xl text-teal-900 text-center font-bold">Everything You Need to Know</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FAQItem question="What is CharityWell?">
            CharityWell is a non-profit organization dedicated to supporting vulnerable communities by providing shelter, food, education, and resources to improve lives and create opportunities for a better future.
          </FAQItem>
          <FAQItem question="How can I donate to CharityWell?">
            You can donate easily through our website by clicking the “Donate now” button. Choose a cause you want to support, enter the amount, and complete the process securely online.
          </FAQItem>
          <FAQItem question="Where does my donation go?">
            Your donation directly supports our ongoing projects, including building shelters, providing school supplies for children, and assisting homeless families. We ensure full transparency by sharing updates on how your contributions are making a difference.
          </FAQItem>
          <FAQItem question="Can I volunteer with CharityWell?">
            Yes! We welcome volunteers to join us in our mission. Whether you want to help on the ground or contribute your skills remotely, please visit our volunteer page by clicking to the "Join us" button to learn more and sign up.
          </FAQItem>
          <FAQItem question="Is my donation tax-deductible?">
            Yes, CharityWell is a registered non-profit organization, and donations are tax-deductible to the extent allowed by law. After donating, you will receive a receipt for tax purposes.
          </FAQItem>
          <FAQItem question="Can I donate items instead of money?">
            Yes, we accept certain in-kind donations such as school supplies, clothing, and non-perishable food items. Visit our donation page for details on what we’re currently accepting.
          </FAQItem>
        </div>
        <Button className="font-bold">
          Learn more
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </Section>
  );
}
