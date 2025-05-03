import { Form, useLocation, useActionData } from "@remix-run/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { cn, cleanObject } from "../../lib/utils";
import { getStoredUtmParams } from "../../lib/utm";
import Container from "../container";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Contact = ({ className, ...rest }) => {
  const location = useLocation();
  const data = useActionData();
  // Add state for UTM parameters
  const [utmParams, setUtmParams] = useState({});

  // Get stored UTM parameters on component mount
  useEffect(() => {
    setUtmParams(getStoredUtmParams());
  }, []);

  let { container, heading } = rest;

  if (data) {
    // errors
    console.log(data);
  }

  const { state } = location;

  if (state?.product?.title) {
    heading = `The ${cleanObject(state?.product).title}. Good Choice.`;
  }

  let addons = "";

  if (state?.addons && state?.variant?.addons) {
    addons = state.addons.reduce((str, addon) => {
      const { title } = state.variant.addons.find((a) => a.slug.current === addon);
      return !str ? title : (str += `, ${title}`);
    }, "");
  }

  return (
    <Container {...cleanObject(container)}>
      <div
        className={cn("rounded-3xl bg-orange px-6 py-8 text-center text-white lg:py-20", className)}
      >
        <div className="mx-auto max-w-sm">
          <div className="ghp-prose mt-4 mb-10 text-white prose-headings:text-white">
            <h2 className="text-balance">{heading || "Get In Touch"}</h2>
            <p className="text-balance">
              Just leave us your name and number and we will contact you within 24 hours.
            </p>
          </div>
          <Form action="/asana" method="post">
            <Input className="mt-8" name="name" placeholder="Name *" required />
            <Input className="mt-5" name="phone" placeholder="Phone Number *" required type="tel" />
            <Input
              name="product"
              placeholder="Product"
              defaultValue={state?.product?.title ?? ""}
              hidden
            />
            <Input
              name="variant"
              placeholder="Variant"
              defaultValue={state?.variant?.title ?? ""}
              hidden
            />
            <Input name="addons" placeholder="Add-ons" defaultValue={addons ?? ""} hidden />

            {/* Add UTM parameter hidden fields */}
            <Input name="utm_source" defaultValue={utmParams.utm_source || ""} hidden />
            <Input name="utm_medium" defaultValue={utmParams.utm_medium || ""} hidden />
            <Input name="utm_campaign" defaultValue={utmParams.utm_campaign || ""} hidden />
            <Input name="utm_term" defaultValue={utmParams.utm_term || ""} hidden />
            <Input name="utm_content" defaultValue={utmParams.utm_content || ""} hidden />

            <Button className="mt-5 w-full" kind="outline">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
};

export default Contact;
