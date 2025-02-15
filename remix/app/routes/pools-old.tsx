import type { MetaFunction } from "@remix-run/node";

import ContactForm from "../components/blocks/contact";
import Card from "../components/card";
import Container from "../components/container";
import store from "../config/store.json";

export const meta: MetaFunction = () => {
  return [
    { title: "Pools - Golden Hour Pools" },
    {
      name: "description",
      content: "We offer three pool sizes designed to fit seamlessly into your yard.",
    },
  ];
};

export default function PoolsPage() {
  return (
    <>
      <Container className="my-24" isCentered>
        <div className="ghp-prose mx-auto max-w-2xl prose-headings:text-balance">
          <h2>We offer three pool sizes designed to fit seamlessly into your yard.</h2>
        </div>
      </Container>
      <Container className="my-24 lg:mb-48">
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {store.products.map((product) => (
            <Card key={product.handle} product={product} type="form" />
          ))}
        </div>
      </Container>
      <Container>
        <ContactForm className="mt-12" heading="We’re Now Accepting Projects For 2025" />
      </Container>
    </>
  );
}
