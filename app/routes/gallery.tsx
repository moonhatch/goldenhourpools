import type { MetaFunction } from "@remix-run/node";

import Contact from "@/components/contact";
import Container from "@/components/container";
import Media from "@/components/media";
import Tag from "@/components/tag";

import { useBreakpoint } from "@/hooks";

export const meta: MetaFunction = () => {
  return [
    { title: "Gallery - Golden Hour Pools" },
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

export default function GalleryPage() {
  const bp = useBreakpoint();

  return (
    <Container className="my-12">
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-6">
        <div className="grid gap-6 lg:col-span-2">
          <Media
            alt="Golden Hour Pools"
            imgSrc="/5315-avg-g-pool-steps.jpg"
            ratio={bp === "lg" ? 16 / 9 : 4 / 5}
          >
            <Tag>Classic</Tag>
          </Media>
        </div>
        <div className="grid gap-6">
          <Media alt="Golden Hour Pools" imgSrc="/5315-avg-g-pool-pipes.jpg" ratio={4 / 5}>
            <Tag>Classic</Tag>
          </Media>
          <Media alt="Golden Hour Pools" imgSrc="/5315-avg-g-pool-steps.jpg" ratio={4 / 5}>
            <Tag>Classic</Tag>
          </Media>
        </div>
        <div className="grid gap-6">
          <Media
            alt="Golden Hour Pools"
            imgSrc="/5315-avg-g-pool-landscaping.jpg"
            ratio={bp === "lg" ? 5 / 4 : 4 / 5}
          >
            <Tag>Grand</Tag>
          </Media>
          <Media
            alt="Golden Hour Pools"
            imgSrc="/5313-avg-g.jpg"
            ratio={bp === "lg" ? 5 / 4 : 4 / 5}
          >
            <Tag>Classic</Tag>
          </Media>
          <Media
            alt="Golden Hour Pools"
            imgSrc="/golden-hour-mini-pool.jpg"
            ratio={bp === "lg" ? 5 / 4 : 4 / 5}
          >
            <Tag>Mini</Tag>
          </Media>
        </div>
      </div>
      <Contact className="mt-6" heading="We’re Now Accepting Projects For 2025" />
    </Container>
  );
}
