import { zodResolver } from "@hookform/resolvers/zod";
import { PortableText } from "@portabletext/react";
import { Link, useNavigate } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn, formatCurrency } from "../lib/utils";
import { urlFor } from "../sanity/image";
import { components } from "../sanity/portable-text";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { Form } from "./ui/form";
import { NumberInput } from "./ui/number-input";

const formSchema = z.object({
  addons: z.array(z.string()),
});

const LandscapeCard = ({ className, landscape, type = "nav" }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 0,
    },
  });

  const onSubmit = () => {
    navigate("/contact", {
      state: {
        landscape,
        quantity: quantity,
      },
    });
  };

  // Calculate display price based on quantity
  const getDisplayPrice = () => {
    if (quantity > 0 && landscape?.price) {
      return formatCurrency(landscape.price * quantity);
    }
    return `${formatCurrency(landscape?.price)}${landscape?.pricePer === "sqft" ? "/sqft" : ""}`;
  };

  return (
    <div className={cn("bg-ghp-50 p-5", className)}>
      <div className="invisible relative -top-10 block" id={landscape.handle}></div>
      <h3 className="flex justify-between border-b border-dashed border-ghp-300 pb-4 text-xl">
        <span>{landscape?.title ?? "Landscape"}</span>
        <span>{getDisplayPrice()}</span>
      </h3>
      <img
        alt={landscape?.image?.alt ?? "Landscape"}
        className="w-full"
        src={urlFor(landscape?.image).url()}
      />
      {type === "form" && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Accordion collapsible type="single">
              <AccordionItem
                className="border-0"
                layer={2}
                key={`product-desc-${landscape.handle}`}
                value={`product-desc-${landscape.handle}`}
              >
                <AccordionTrigger compact>More Info</AccordionTrigger>
                <AccordionContent compact className="ghp-prose -mt-5">
                  <div className="ghp-prose prose-ul:list-none prose-ul:px-0 prose-li:px-0">
                    <PortableText value={landscape.description} components={components} />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <NumberInput
              value={quantity}
              onChange={setQuantity}
              placeholder={landscape?.pricePer === "sqft" ? "Square Feet" : "Quantity"}
              min={0}
            />
          </form>
        </Form>
      )}
      {type === "nav" && (
        <Button asChild align="between" className="w-full" kind="outline">
          <Link to={`/landscaping#${landscape?.handle ?? ""}`}>
            Learn More <ArrowRight strokeWidth={1.5} />
          </Link>
        </Button>
      )}
    </div>
  );
};

LandscapeCard.propTypes = {
  className: PropTypes.string,
  landscape: PropTypes.object.isRequired,
  type: PropTypes.oneOf(["form", "nav"]),
};

export default LandscapeCard;
