import { MetaFunction, redirect, ActionArgs, json } from "@remix-run/node";
import asana from "asana";
import { z } from "zod";

import ContactForm from "@/components/contact-form";
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

export async function action({ request }: ActionArgs) {
  const formData = Object.fromEntries(await request.formData());

  const schema = z.object({
    name: z.string(),
    phone: z.string(),
    product: z.string(),
    variant: z.string(),
    addons: z.string(),
  });

  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    return json({ error: parsed.error.format() });
  }

  const { data } = parsed;

  const client = asana.ApiClient.instance;
  const token = client.authentications["token"];
  token.accessToken = process.env.ASANA_TOKEN;

  const notes = `Name: ${data?.name ?? ""}
Phone: ${data?.phone ?? ""}
Product: ${data?.product ?? ""}
Variant: ${data?.variant ?? ""}
Add-ons: ${data?.addons ?? ""}`;

  const tasksApiInstance = new asana.TasksApi();
  const body = {
    data: {
      name: `Form Submission - ${data.name}`,
      projects: [process.env.ASANA_PROJECT],
      notes,
    },
  };

  tasksApiInstance.createTask(body).then(
    () => {
      return redirect("/thank-you");
    },
    (error) => {
      return json({ error: error.response.body });
    },
  );

  return redirect("/thank-you");
}

export default function ContactPage() {
  return (
    <Container className="mt-12">
      <ContactForm />
    </Container>
  );
}
