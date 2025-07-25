import { zodResolver } from "@hookform/resolvers/zod";
import { PortableText } from "@portabletext/react";
import { Link, useNavigate } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cleanObject } from "@/lib/utils";

import { cn, formatCurrency } from "../lib/utils";
import { urlFor } from "../sanity/image";
import { components } from "../sanity/portable-text";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Label } from "./ui/label";

const formSchema = z.object({
  addons: z.array(z.string()),
});

const getVariant = (product, options) => {
  const variant = product?.variants?.find((variant) => {
    return JSON.stringify(cleanObject(variant.options)) === JSON.stringify(options);
  });

  return variant || product.variants[0];
};

const Card = ({ className, product, type = "nav" }) => {
  const [depth, setDepth] = useState("deep");
  const [ledge, setLedge] = useState(false);
  const [spa, setSpa] = useState(false);
  const [variant, setVariant] = useState(getVariant(product));
  const [price, setPrice] = useState(product?.price);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      addons: [],
    },
  });

  const addons = form.watch("addons");

  useEffect(() => {
    setLedge(addons.includes("ledge"));
  }, [addons]);

  useEffect(() => {
    setSpa(addons.includes("spa"));
  }, [addons]);

  useEffect(() => {
    const newVariant = getVariant(product, { depth, ledge, spa });
    const newAddons = addons.filter((addon) => addon !== "ledge" && addon !== "spa");
    const addonsSubtotal = newVariant?.addons.reduce((price, addon) => {
      return (price += newAddons.includes(addon.slug.current) ? addon.price : 0);
    }, 0);

    setVariant(newVariant);
    setPrice(newVariant?.price + addonsSubtotal);
  }, [addons, depth, ledge, product, spa]);

  const onSubmit = (data) => {
    navigate("/contact", {
      state: {
        product,
        variant,
        addons: data.addons,
      },
    });
  };

  return (
    <div className={cn("rounded-3xl bg-stone-200 p-5", className)}>
      <div className="invisible relative -top-10 block" id={product.handle}></div>
      <h3 className="flex justify-between border-b border-stone-300 pb-4 font-serif text-3xl">
        <span>{product?.title ?? "Pool"}</span>
        <span>{formatCurrency(price)}</span>
      </h3>
      <img
        alt={variant?.image?.alt ?? "Pool"}
        className="w-full"
        src={urlFor(variant?.image).url()}
      />
      {type === "form" && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {variant.depth && (
              <div className="mb-3 grid grid-cols-2 gap-3">
                <Button
                  className="h-12"
                  kind={depth === "deep" ? "outline" : "secondary"}
                  onClick={() => setDepth("deep")}
                  rounded="xl"
                  type="button"
                >
                  Deep
                </Button>
                <Button
                  className="h-12"
                  kind={depth === "shallow" ? "outline" : "secondary"}
                  onClick={() => setDepth("shallow")}
                  rounded="xl"
                  type="button"
                >
                  Shallow
                </Button>
              </div>
            )}
            <Accordion collapsible type="single">
              {variant.description.map((desc, i) => (
                <AccordionItem
                  className={!i && "border-0"}
                  layer={2}
                  key={`product-desc-${i}`}
                  value={`product-desc-${i}`}
                >
                  <AccordionTrigger compact>{desc.name}</AccordionTrigger>
                  <AccordionContent compact className="ghp-prose -mt-5">
                    <div className="ghp-prose prose-ul:list-none prose-ul:px-0 prose-li:px-0">
                      <PortableText value={desc.value} components={components} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
              <AccordionItem layer={2} value="product-desc-addons">
                <AccordionTrigger compact>Add-ons</AccordionTrigger>
                <AccordionContent compact className="ghp-prose -mt-5">
                  <FormField
                    control={form.control}
                    name="addons"
                    render={() => (
                      <FormItem>
                        <p className="grid gap-2">
                          {variant.addons.map((addon) => (
                            <FormField
                              key={addon.slug.current}
                              control={form.control}
                              name="addons"
                              render={({ field }) => (
                                <FormControl>
                                  <span className="flex items-center space-x-2">
                                    <Checkbox
                                      checked={field.value?.includes(addon.slug.current)}
                                      id={`${variant.slug.current}-${addon.slug.current}`}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, addon.slug.current])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== addon.slug.current,
                                              ),
                                            );
                                      }}
                                    />
                                    <Label
                                      htmlFor={`${variant.slug.current}-${addon.slug.current}`}
                                    >
                                      {addon?.title} - {formatCurrency(addon?.price)}
                                    </Label>
                                  </span>
                                </FormControl>
                              )}
                            />
                          ))}
                        </p>
                      </FormItem>
                    )}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button className="mt-3 h-12 w-full" kind="default" rounded="xl" type="submit">
              Get Started
            </Button>
          </form>
        </Form>
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
