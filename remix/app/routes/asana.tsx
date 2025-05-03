import { redirect, ActionArgs, json } from "@remix-run/node";
import asana from "asana";
import { z } from "zod";

export async function action({ request }: ActionArgs) {
  const formData = Object.fromEntries(await request.formData());

  const schema = z.object({
    name: z.string(),
    phone: z.string(),
    product: z.string(),
    variant: z.string(),
    addons: z.string(),
    utm_source: z.string().optional(),
    utm_medium: z.string().optional(),
    utm_campaign: z.string().optional(),
    utm_term: z.string().optional(),
    utm_content: z.string().optional(),
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
Add-ons: ${data?.addons ?? ""}
UTM Source: ${data?.utm_source ?? ""}
UTM Medium: ${data?.utm_medium ?? ""}
UTM Campaign: ${data?.utm_campaign ?? ""}
UTM Term: ${data?.utm_term ?? ""}
UTM Content: ${data?.utm_content ?? ""}`;

  const tasksApiInstance = new asana.TasksApi();
  const body = {
    data: {
      name: `Form Submission - ${data.name}`,
      projects: [process.env.ASANA_PROJECT],
      notes,
    },
  };

  console.log("Creating task", data);

  try {
    const task = await tasksApiInstance.createTask(body);
    console.log("Created task", task);

    // Redirect to contact-success page with form data and UTM parameters as URL parameters
    // This allows us to send the data to GTM before redirecting to thank-you
    return redirect(
      `/contact-success?name=${encodeURIComponent(data.name)}&phone=${encodeURIComponent(data.phone)}&product=${encodeURIComponent(data.product)}&variant=${encodeURIComponent(data.variant)}&addons=${encodeURIComponent(data.addons)}&utm_source=${encodeURIComponent(data.utm_source || "")}&utm_medium=${encodeURIComponent(data.utm_medium || "")}&utm_campaign=${encodeURIComponent(data.utm_campaign || "")}&utm_term=${encodeURIComponent(data.utm_term || "")}&utm_content=${encodeURIComponent(data.utm_content || "")}`,
    );
  } catch (error) {
    console.error("Task error", error);
    return json({ error: error.response.body });
  }
}
