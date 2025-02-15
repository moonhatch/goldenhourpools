import { MetaFunction } from "@remix-run/node";

import Container from "../components/container";

export const meta: MetaFunction = () => {
  return [
    { title: "Thank You - Golden Hour Pools" },
    {
      name: "description",
      content: "Got it! You'll hear from us soon!",
    },
  ];
};

export default function ThankYouPage() {
  return (
    <Container className="my-12">
      <div className="rounded-3xl bg-yellow px-6 py-36 text-center text-white lg:py-64">
        <div
          className="ghp-prose mx-auto my-4 w-full max-w-none text-white prose-headings:text-white"
        >
          <h2 className="text-balance">
            Got it!
            <br />
            You’ll hear from us soon!
          </h2>
        </div>
      </div>
    </Container>
  );
}
