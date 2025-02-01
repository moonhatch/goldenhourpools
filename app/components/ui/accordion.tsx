"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, layer, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-t", layer === 1 && "border-ghp-250", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, compact = false, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        `group flex flex-1 cursor-pointer items-center justify-between text-left text-ghp-900
        underline-offset-2 transition-all outline-none hover:underline focus-visible:underline`,
        compact
          ? "py-3"
          : "px-5 py-6 font-serif text-lg lg:px-12 [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      {compact ? (
        <>
          <Plus className="h-4 w-4 shrink-0 group-[[data-state=open]]:hidden" strokeWidth={1} />
          <Minus
            className="hidden h-4 w-4 shrink-0 group-[[data-state=open]]:inline-block"
            strokeWidth={1}
          />
        </>
      ) : (
        <ChevronDown
          className="h-5 w-5 shrink-0 transition-transform duration-200"
          strokeWidth={1}
        />
      )}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, compact, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up
      data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pt-0 pb-0", !compact && "px-5 pb-5 lg:px-12", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
