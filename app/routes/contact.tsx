import type { MetaFunction } from "@remix-run/node";

import Contact from "@/components/contact";
import Container from "@/components/container";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us - Golden Hour Pools" },
    {
      name: "description",
      content:
        "Get in touch. Just leave us your name and number and we will contact you within 24 hours.",
    },
    {
      property: "og:image",
      content: "/golden-hour.jpg",
    },
  ];
};

export default function ContactPage() {
  return (
    <Container className="my-12">
      <Contact />
    </Container>
  );
}
