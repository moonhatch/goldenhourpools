import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us - Golden Hour Pools" },
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

export default function Index() {
  return (
    <>
      <div>Contact Us</div>
      <div>Form</div>
    </>
  );
}
