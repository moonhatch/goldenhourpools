import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import ContactForm from "../components/blocks/contact";
import Container from "../components/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export const meta: MetaFunction = () => {
  return [
    { title: "FAQ - Golden Hour Pools" },
    {
      name: "description",
      content:
        "What does your price include? How long does it take to build? Can I visit one of your pools? Do you make custom sizes? What equipment do you use? Are your pools pre-fabricated? Do you offer financing? What's your warranty? What areas do you service? Do you make hot tubs? Do you do landscaping?",
    },
  ];
};

export default function FaqPage() {
  return (
    <>
      <Container className="mb-12 lg:mt-12" isMobileFullWidth>
        <Accordion
          className="overflow-hidden border-b border-ghp-250 lg:rounded-2xl lg:border"
          collapsible
          type="single"
        >
          <AccordionItem className="border-0" layer={1} value="item-1">
            <AccordionTrigger>What does your price include?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                Our pricing covers everything you need: design, permitting, construction, equipment,
                and finishes. We believe in transparency, so there are no hidden costs.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem layer={1} value="item-2">
            <AccordionTrigger>How long does it take to build?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                Typically, our pool construction process takes about 6 to 8 weeks. This timeline can
                vary based on design complexity and weather conditions. We’ll keep you updated every
                step of the way to ensure a smooth experience.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem layer={1} value="item-3">
            <AccordionTrigger>Can I visit one of your pools?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                Absolutely! We’d be happy to arrange a visit to one of our completed projects so you
                can see our craftsmanship firsthand. Just{" "}
                <Link
                  className="underline underline-offset-2 outline-none hover:underline-offset-4
                    focus-visible:underline-offset-4"
                  prefetch="viewport"
                  to="/contact"
                >
                  get in touch
                </Link>
                , and we’ll set up a convenient time.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem layer={1} value="item-4">
            <AccordionTrigger>Do you make custom sizes?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                Our process and design is carefully optimized to deliver high-end pools at
                accessible prices. While we use a standardized design to maintain this balance, we
                know every space is unique. That’s why, in special cases, we can make minor
                adjustments to size and specifications to better fit your specific needs.{" "}
                <Link
                  className="underline underline-offset-2 outline-none hover:underline-offset-4
                    focus-visible:underline-offset-4"
                  prefetch="viewport"
                  to="/contact"
                >
                  Let’s talk about your vision and see what’s possible!
                </Link>
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem layer={1} value="item-5">
            <AccordionTrigger>What equipment do you use?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                We use top-of-the-line Pentair equipment for all our pools. Known for reliability
                and efficiency, Pentair’s pumps, filters, and heaters ensure your pool runs smoothly
                while keeping maintenance hassle-free.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem layer={1} value="item-6">
            <AccordionTrigger>Are your pools pre-fabricated?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                Nope! Each of our pools is custom-designed and built on-site to perfectly fit your
                space and style preferences. We believe that personalized pools offer the best in
                aesthetics and functionality.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem layer={1} value="item-7">
            <AccordionTrigger>Do you offer financing?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                Yes, we do! We understand that a pool is a significant investment, so we offer
                flexible financing options to make your dream pool more accessible.{" "}
                <Link
                  className="underline underline-offset-2 outline-none hover:underline-offset-4
                    focus-visible:underline-offset-4"
                  prefetch="viewport"
                  to="/contact"
                >
                  Contact us
                </Link>{" "}
                to discuss the best financing plan for you.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem layer={1} value="item-8">
            <AccordionTrigger>What’s your warranty?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                We stand by the quality of our work. Our pools come with a comprehensive warranty
                that covers both structural and equipment aspects. For specific details, feel free
                to reach out, and we’ll provide all the information you need.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem layer={1} value="item-9">
            <AccordionTrigger>What areas do you service?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                We proudly serve Austin, Texas and the surrounding area. If you’re nearby and
                considering a pool, we’d love to bring your vision to life.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem layer={1} value="item-10">
            <AccordionTrigger>Do you make hot tubs?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                We sure do! The Golden Hour Spa is the perfect add-on for any of our pools. With its
                wraparound bench and seamless design, it integrates beautifully with every Golden
                Hour Pool.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem layer={1} value="item-11">
            <AccordionTrigger>Do you do landscaping?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                We don’t offer landscaping services in-house. This allows us to simplify our process
                and keep our pricing as accessible as possible. However, we work with trusted
                landscape partners and would be happy to introduce you to them to complete your
                outdoor space.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Container>
      <Container>
        <ContactForm className="mt-12" heading="We’re Now Accepting Projects For 2025" />
      </Container>
    </>
  );
}
