import store from "@/config/store.json";
import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { cn } from "@/lib/utils";

const getVariant = (product, options) => {
  const variant = product?.variants?.find((variant) => {
    return JSON.stringify(variant.options) === JSON.stringify(options);
  });

  return variant || product.variants[0];
};

const Card = ({ className, product, type = "nav" }) => {
  const [depth, setDepth] = useState("deep");
  const [spa, setSpa] = useState(false);
  const [variant, setVariant] = useState(getVariant(product));

  const descriptions = [...variant.descriptions, ...store.descriptions];

  useEffect(() => {
    setVariant(getVariant(product, { depth, spa }));
  }, [depth, product, spa]);

  return (
    <div className={cn("rounded-3xl bg-ghp-200 p-5", className)}>
      <div className="invisible relative -top-[140px] block" id={product.handle}></div>
      <h3 className="flex justify-between border-b border-ghp-300 pb-4 font-serif text-3xl">
        <span>{product?.name ?? "Pool"}</span>
        <span>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          }).format(variant?.price ?? 0)}
        </span>
      </h3>
      <img
        alt={product?.name ?? "Pool"}
        className="w-full"
        src={variant?.image ?? "/classic.png"}
      />
      {type === "form" && (
        <div className="mb-3 grid grid-cols-2 gap-3">
          <Button
            kind={depth === "deep" ? "outline" : "secondary"}
            onClick={() => setDepth("deep")}
            rounded="xl"
          >
            Deep
          </Button>
          <Button
            kind={depth === "shallow" ? "outline" : "secondary"}
            onClick={() => setDepth("shallow")}
            rounded="xl"
          >
            Shallow
          </Button>
        </div>
      )}
      {type === "form" && (
        <Accordion collapsible type="single">
          {descriptions.map((desc, i) => (
            <AccordionItem
              className={i === 0 && "border-0"}
              layer={2}
              key={`product-desc-${i}`}
              value={`product-desc-${i}`}
            >
              <AccordionTrigger compact>{desc.name}</AccordionTrigger>
              <AccordionContent compact className="ghp-prose -mt-5">
                <p>{desc.value}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
      {type === "form" && (
        <Button asChild className="mt-3 w-full" kind="default" rounded="xl">
          <Link to={`/contact`}>Get Started</Link>
        </Button>
      )}
      {type === "nav" && (
        <Button asChild align="between" className="w-full" kind="secondary" rounded="xl">
          <Link to={`/pools#${product?.handle ?? ""}`}>
            Learn More <ArrowRight strokeWidth={1} />
          </Link>
        </Button>
      )}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired,
  type: PropTypes.oneOf(["form", "nav"]),
};

export default Card;
