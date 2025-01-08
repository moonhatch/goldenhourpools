import type { MetaFunction } from "@remix-run/node";
import { Sun } from "~/icons";
import { Button } from "~/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  return <div>Main</div>;
  return (
    <div className="flex flex-col gap-4 m-4">
      <Sun className="h-16 w-16 text-orange" />
      <Button>Click me</Button>
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
      <Input />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <AspectRatio ratio={1 / 1}>
        <img
          src="/golden-hour.jpg"
          alt="Golden Hour Pools"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  );
}
