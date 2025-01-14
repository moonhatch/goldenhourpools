import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";

import Container from "@/components/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
  return (
    <>
      <Container className="my-5 grid grid-cols-3 gap-5">
        <Sun className="h-16 w-16 text-orange" />
      </Container>
      <Container className="my-5 grid grid-cols-3 gap-5">
        <Input placeholder="Phone Number*" />
      </Container>
      <Container className="my-5 grid grid-cols-3 gap-5">
        <Button>Get In Touch</Button>
        <Button size="sm">Contact</Button>
        <Button kind="outline">Explore All Pools</Button>
        <Button align="between" kind="secondary">
          Submit <ArrowRight strokeWidth={1} />
        </Button>
        <Button rounded="xl">Click me</Button>
      </Container>
      <Container className="my-5 grid grid-cols-3 gap-5">
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
      <Container className="my-5 grid grid-cols-3 gap-5">
        <AspectRatio ratio={1 / 1}>
          <img
            src="/golden-hour.jpg"
            alt="Golden Hour Pools"
            className="h-full w-full object-cover"
          />
        </AspectRatio>
      </Container>
      <Container className="my-5" mobileFullWidth>
        <Accordion className="overflow-hidden lg:rounded-2xl lg:border" collapsible type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>What does your price include?</AccordionTrigger>
            <AccordionContent>
              Our pricing covers everything you need: design, permitting, construction, equipment,
              and finishes. We believe in transparency, so there are no hidden costs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How long does it take to build?</AccordionTrigger>
            <AccordionContent>
              Typically, our pool construction process takes about 6 to 8 weeks. This timeline can
              vary based on design complexity and weather conditions. We’ll keep you updated every
              step of the way to ensure a smooth experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I visit one of your pools?</AccordionTrigger>
            <AccordionContent>
              Absolutely! We’d be happy to arrange a visit to one of our completed projects so you
              can see our craftsmanship firsthand. Just{" "}
              <Link className="underline" prefetch="viewport" to="/contact">
                get in touch
              </Link>
              , and we’ll set up a convenient time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Do you make custom sizes?</AccordionTrigger>
            <AccordionContent>
              Our process and design are carefully optimized to deliver high-end pools at accessible
              prices. While we use a standardized design to maintain this balance, we know every
              space is unique. That’s why, in special cases, we can make minor adjustments to size
              and specifications to better fit your specific needs.{" "}
              <Link className="underline" prefetch="viewport" to="/contact">
                Let’s talk about your vision and see what’s possible!
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What equipment do you use?</AccordionTrigger>
            <AccordionContent>
              We use top-of-the-line Pentair equipment for all our pools. Known for reliability and
              efficiency, Pentair’s pumps, filters, and heaters ensure your pool runs smoothly while
              keeping maintenance hassle-free.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Are your pools pre-fabricated?</AccordionTrigger>
            <AccordionContent>
              Nope! Each of our pools is custom-designed and built on-site to perfectly fit your
              space and style preferences. We believe that personalized pools offer the best in
              aesthetics and functionality.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Do you offer financing?</AccordionTrigger>
            <AccordionContent>
              Yes, we do! We understand that a pool is a significant investment, so we offer
              flexible financing options to make your dream pool more accessible.{" "}
              <Link className="underline" prefetch="viewport" to="/contact">
                Contact us
              </Link>{" "}
              to discuss the best financing plan for you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>What’s your warranty?</AccordionTrigger>
            <AccordionContent>
              We stand by the quality of our work. Our pools come with a comprehensive warranty that
              covers both structural and equipment aspects. For specific details, feel free to reach
              out, and we’ll provide all the information you need.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>What areas do you service?</AccordionTrigger>
            <AccordionContent>
              We proudly serve Austin, Texas and the surrounding area. If you’re nearby and
              considering a pool, we’d love to bring your vision to life.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>Do you make hot tubs?</AccordionTrigger>
            <AccordionContent>
              We sure do! The Golden Hour Spa is the perfect add-on for any of our pools. With its
              wraparound bench and seamless design, it integrates beautifully with every Golden Hour
              Pool.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="lg:border-0" value="item-11">
            <AccordionTrigger>Do you do landscaping?</AccordionTrigger>
            <AccordionContent>
              We don’t offer landscaping services in-house. This allows us to simplify our process
              and keep our pricing as accessible as possible. However, we work with trusted
              landscape partners and would be happy to introduce you to them to complete your
              outdoor space.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Container>
    </>
  );
}
