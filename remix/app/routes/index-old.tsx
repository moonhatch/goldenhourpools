import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import Hero from "../components/blocks/hero";
import Card from "../components/card";
import ContactForm from "../components/contact-form";
import Container from "../components/container";
import Media from "../components/media";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import store from "../config/store.json";
import { useBreakpoint } from "../hooks";

export const meta: MetaFunction = () => {
  return [
    { title: "Golden Hour Pools - Austin Pool Builders" },
    {
      name: "description",
      content:
        "Golden Hour Pools specializes in crafting pools at accessible rates in Austin. View our pools online and get started today.",
    },
  ];
};

export default function Index() {
  const bp = useBreakpoint();
  const [options, setOptions] = useState({});
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useEffect(() => {
    setOptions((currentOptions) => ({
      ...currentOptions,
      active: bp !== "lg",
    }));
  }, [bp, emblaApi]);

  return (
    <>
      <Hero />
      <Container className="my-12" isCentered>
        <div className="ghp-prose mx-auto prose-headings:m-0">
          <h2>Our Pools:</h2>
        </div>
      </Container>
      <Container className="my-12" isMobileFullWidth>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container mx-3">
            {store.products.map((product) => (
              <div className="embla__slide px-3" key={product.handle}>
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Container className="my-24 lg:my-48" isCentered>
        <div className="ghp-prose mx-auto max-w-2xl prose-headings:text-balance">
          <h2>
            Our mission is simple: make building a pool easy, skip the sales gimmicks, and pass the
            savings right to you.
          </h2>
          <Button asChild className="mt-8" size="wide">
            <Link to="/pools">Explore All Pools</Link>
          </Button>
        </div>
      </Container>
      <Media
        alt="Golden Hour Pools"
        imgSrc="/photos/ave-g-classic-2.jpg"
        ratio={bp === "lg" ? 7 / 5 : 4 / 5}
        rounded={false}
      />
      <Container className="mb-12 lg:my-48" isMobileFullWidth>
        <Accordion
          className="overflow-hidden border-b border-ghp-250 lg:rounded-2xl lg:border"
          collapsible
          type="single"
        >
          <AccordionItem layer={1} className="lg:border-0" value="item-1">
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
            <AccordionTrigger>Are your pools pre-fabricated?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                Nope! Each of our pools is custom-designed and built on-site to perfectly fit your
                space and style preferences. We believe that personalized pools offer the best in
                aesthetics and functionality.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem layer={1} value="item-4">
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
          <AccordionItem layer={1} value="item-5">
            <AccordionTrigger>What’s your warranty?</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <p>
                We stand by the quality of our work. Our pools come with a comprehensive warranty
                that covers both structural and equipment aspects. For specific details, feel free
                to reach out, and we’ll provide all the information you need.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem layer={1} value="item-6">
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
        <ContactForm className="mt-12" heading="We’re Now Accepting Projects For 2025" />
      </Container>
    </>
  );
}
