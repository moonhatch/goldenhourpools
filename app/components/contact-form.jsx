import store from "@/config/store.json";
import { Form, useLocation, useActionData } from "@remix-run/react";
import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

const ContactForm = ({ className, heading }) => {
  const location = useLocation();
  const data = useActionData();

  if (data) {
    // errors
    console.log(data);
  }

  const { state } = location;

  if (state?.product?.name) {
    heading = `The ${state?.product.name}. Good Choice.`;
  }

  const addons = state?.addons.reduce((str, addon) => {
    const { label } = store.addons.find((a) => a.id === addon);
    return !str ? label : (str += `, ${label}`);
  }, "");

  return (
    <div
      className={cn("rounded-3xl bg-orange px-6 py-8 text-center text-white lg:py-20", className)}
    >
      <div className="mx-auto max-w-sm">
        <div className="ghp-prose my-4 text-white prose-headings:text-white">
          <h2 className="text-balance">{heading || "Get In Touch"}</h2>
          <p className="text-balance">
            Just leave us your name and number and we will contact you within 24 hours.
          </p>
        </div>
        <Form action="/contact" method="post">
          <Input className="mt-8" name="name" placeholder="Name *" required />
          <Input className="mt-5" name="phone" placeholder="Phone Number *" required type="tel" />
          <Input
            name="product"
            placeholder="Product"
            defaultValue={state?.product?.name ?? ""}
            hidden
          />
          <Input
            name="variant"
            placeholder="Variant"
            defaultValue={state?.variant?.name ?? ""}
            hidden
          />
          <Input name="addons" placeholder="Add-ons" defaultValue={addons ?? ""} hidden />
          <Button className="mt-5 w-full" kind="outline">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
};

export default ContactForm;
