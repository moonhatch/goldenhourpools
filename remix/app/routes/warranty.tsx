import type { MetaFunction } from "@remix-run/node";

import Container from "../components/container";

export const meta: MetaFunction = () => {
  return [
    { title: "Warranty - Golden Hour Pools" },
    {
      name: "description",
      content: "At Golden Hour Pools, we stand by the quality of our pools with a robust warranty.",
    },
    {
      property: "og:image",
      content: "/golden-hour.jpg",
    },
  ];
};

export default function WarrantyPage() {
  return (
    <Container className="my-24" size="sm">
      <div className="ghp-prose">
        <h1>Warranty</h1>
        <p>At Golden Hour Pools, we stand by the quality of our pools with a robust warranty.</p>
        <p>Our Warranty Includes:</p>
        <ul>
          <li>Structural integrity of the pool shell</li>
          <li>Pool surface finishes</li>
          <li>Pool equipment such as pumps, filters, and heaters</li>
          <li>Pool lighting and other electrical components</li>
        </ul>
        <p>Warranty Periods:</p>
        <ul>
          <li>Varies based on components, ranging from 1 to 10 years</li>
        </ul>
        <p>Our Commitment:</p>
        <ul>
          <li>Quality construction adhering to industry standards</li>
          <li>Use of licensed and insured professionals</li>
          <li>No hidden clauses; our warranty is straightforward</li>
        </ul>
      </div>
    </Container>
  );
}
