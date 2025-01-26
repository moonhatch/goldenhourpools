import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";

import Contact from "@/components/contact";
import Container from "@/components/container";
import Hero from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Video from "@/components/video";

import { useBreakpoint } from "@/hooks";

import { Sun } from "@/icons";

export const meta: MetaFunction = () => {
  return [
    { title: "Golden Hour Pools - Austin Pool Builders" },
    {
      name: "description",
      content:
        "Golden Hour Pools specializes in crafting pools at accessible rates in Austin. View our pools online and get started today.",
    },
    {
      property: "og:image",
      content: "/golden-hour.jpg",
    },
  ];
};

export default function Index() {
  const bp = useBreakpoint();

  return (
    <>
      <Hero />
      <Container className="my-16 grid grid-cols-3 gap-5">
        <Sun className="h-16 w-16 text-orange" />
      </Container>
      <Container className="my-16 grid grid-cols-3 gap-5">
        <Input placeholder="Phone Number*" />
      </Container>
      <Container className="my-16 grid grid-cols-3 gap-5">
        <Button>Get In Touch</Button>
        <Button size="sm">Contact</Button>
        <Button kind="outline">Explore All Pools</Button>
        <Button align="between" kind="secondary" rounded="xl">
          Submit <ArrowRight strokeWidth={1} />
        </Button>
      </Container>
      <Container className="my-16 grid grid-cols-3 gap-5">
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
        </RadioGroup>
      </Container>
      <Video
        ratio={bp === "lg" ? 16 / 9 : 4 / 5}
        src="https://player.vimeo.com/video/974252497?background=1"
        title="Test video"
      />
      <Container className="mb-12 lg:my-48" mobileFullWidth>
        <Accordion
          className="overflow-hidden border-ghp-250 lg:rounded-2xl lg:border"
          collapsible
          type="single"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>What does your price include?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                Our pricing covers everything you need: design, permitting, construction, equipment,
                and finishes. We believe in transparency, so there are no hidden costs.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How long does it take to build?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                Typically, our pool construction process takes about 6 to 8 weeks. This timeline can
                vary based on design complexity and weather conditions. We’ll keep you updated every
                step of the way to ensure a smooth experience.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Are your pools pre-fabricated?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                Nope! Each of our pools is custom-designed and built on-site to perfectly fit your
                space and style preferences. We believe that personalized pools offer the best in
                aesthetics and functionality.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
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
          <AccordionItem value="item-5">
            <AccordionTrigger>What’s your warranty?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                We stand by the quality of our work. Our pools come with a comprehensive warranty
                that covers both structural and equipment aspects. For specific details, feel free
                to reach out, and we’ll provide all the information you need.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="lg:border-0" value="item-6">
            <AccordionTrigger>What areas do you service?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                We proudly serve Austin, Texas and the surrounding area. If you’re nearby and
                considering a pool, we’d love to bring your vision to life.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Container>
      <Container>
        <Contact className="my-12" heading="We’re Now Accepting Projects For 2025" />
      </Container>
    </>
  );
}
