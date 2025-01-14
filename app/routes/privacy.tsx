import type { MetaFunction } from "@remix-run/node";

import Container from "@/components/container";

export const meta: MetaFunction = () => {
  return [
    { title: "Privacy - Golden Hour Pools" },
    {
      name: "description",
      content:
        "At Golden Hour Pools, your privacy is paramount. This policy outlines how we handle the personal information you share with us.",
    },
    {
      property: "og:image",
      content: "/golden-hour.jpg",
    },
  ];
};

export default function Privacy() {
  return (
    <Container className="my-24">
      <div className="ghp-prose">
        <h1>Privacy</h1>
        <p>
          At Golden Hour Pools, your privacy is paramount. This policy outlines how we handle the
          personal information you share with us.
        </p>
        <p>Information Collection and Use:</p>
        <p>
          We collect information such as names, contact details, and email addresses. This
          information is used to enhance your experience with our services, for customer
          communication, and to improve our website.
        </p>
        <p>Cookies and Tracking:</p>
        <p>
          Our website utilizes cookies to personalize and optimize your browsing experience. We also
          gather non-personal information for site analytics.
        </p>
        <p>Data Sharing:</p>
        <p>
          We do not sell your personal information. It may be shared with trusted partners for
          service provision or as required by law.
        </p>
        <p>Your Rights:</p>
        <p>
          You have the right to access and control your personal information. Contact us to update
          or request deletion of your data.
        </p>
        <p>Policy Updates:</p>
        <p>We may update this policy. Regularly reviewing this page for changes is advised.</p>
        <p>Contact Us:</p>
        <p>
          For privacy-related questions or requests, please contact us at{" "}
          <a href="mailto:hello@goldenhourpools.com">hello@godenhourpools.com</a>.
        </p>
      </div>
    </Container>
  );
}
