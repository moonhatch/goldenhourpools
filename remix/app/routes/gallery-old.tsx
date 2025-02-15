import type { MetaFunction } from "@remix-run/node";

import ContactForm from "../components/blocks/contact";
import Container from "../components/container";
import Media from "../components/media";
import Tag from "../components/tag";
import { useBreakpoint } from "../hooks";

export const meta: MetaFunction = () => {
  return [
    { title: "Gallery - Golden Hour Pools" },
    {
      name: "description",
      content:
        "Golden Hour Pools specializes in crafting pools at accessible rates in Austin. View our pools online and get started today.",
    },
  ];
};

export default function GalleryPage() {
  const bp = useBreakpoint();

  return (
    <Container className="mt-6 lg:mt-12">
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-6">
        <div className="grid gap-6 lg:col-span-2">
          <Media
            alt="Golden Hour Pools"
            imgSrc="/photos/landscape-ave-g-classic.jpg"
            ratio={16 / 9}
          >
            <Tag>Classic</Tag>
          </Media>
        </div>
        <div className="grid gap-6">
          <Media alt="Golden Hour Pools" imgSrc="/photos/fountain.jpg" ratio={4 / 5}>
            <Tag>Classic</Tag>
          </Media>
          <Media alt="Golden Hour Pools" imgSrc="/photos/ave-g-mini-2.jpg" ratio={4 / 5}>
            <Tag>Mini</Tag>
          </Media>
        </div>
        <div className="grid gap-6">
          <Media
            alt="Golden Hour Pools"
            imgSrc="/photos/ave-g-classic.jpg"
            ratio={bp === "lg" ? 5 / 4 : 4 / 5}
          >
            <Tag>Classic</Tag>
          </Media>
          <Media
            alt="Golden Hour Pools"
            imgSrc="/photos/ave-g-classic-2.jpg"
            ratio={bp === "lg" ? 5 / 4 : 4 / 5}
          >
            <Tag>Classic</Tag>
          </Media>
          <Media
            alt="Golden Hour Pools"
            imgSrc="/photos/ave-g-mini.jpg"
            ratio={bp === "lg" ? 5 / 4 : 4 / 5}
          >
            <Tag>Mini</Tag>
          </Media>
        </div>
        <div className="grid gap-6 lg:col-span-2">
          <Media alt="Golden Hour Pools" imgSrc="/photos/landscape-ave-g-mini.jpg" ratio={16 / 9}>
            <Tag>Mini</Tag>
          </Media>
        </div>
        <div className="grid gap-6">
          <Media alt="Golden Hour Pools" imgSrc="/photos/gonzales-mini-2.jpg" ratio={4 / 5}>
            <Tag>Mini</Tag>
          </Media>
          <Media
            alt="Golden Hour Pools"
            imgSrc="/photos/muskdeer-classic.png"
            ratio={bp === "lg" ? 5 / 4 : 4 / 5}
          >
            <Tag>Classic</Tag>
          </Media>
        </div>
        <div className="grid gap-6">
          <Media
            alt="Golden Hour Pools"
            imgSrc="/photos/muskdeer-classic-2.jpg"
            ratio={bp === "lg" ? 5 / 4 : 4 / 5}
          >
            <Tag>Classic</Tag>
          </Media>
          <Media alt="Golden Hour Pools" imgSrc="/photos/gonzales-mini.jpg" ratio={4 / 5}>
            <Tag>Mini</Tag>
          </Media>
        </div>
        <div className="grid gap-6 lg:col-span-2">
          <Media
            alt="Golden Hour Pools"
            imgSrc="/photos/landscape-avenue-g-classic.jpg"
            ratio={16 / 9}
          >
            <Tag>Classic</Tag>
          </Media>
        </div>
      </div>
      <ContactForm className="mt-6" heading="We’re Now Accepting Projects For 2025" />
    </Container>
  );
}
