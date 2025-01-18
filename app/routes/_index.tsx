import type { MetaFunction } from "@remix-run/node";
import { ArrowRight } from "lucide-react";

import Container from "@/components/container";
import Hero from "@/components/hero";
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
    </>
  );
}
