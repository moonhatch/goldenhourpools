import { redirect, json } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import asana from "asana";
import { z } from "zod";

import { subscribeToKlaviyoList } from "../lib/klaviyo";

export async function action({ request }: ActionFunctionArgs) {
  const formData = Object.fromEntries(await request.formData());

  const schema = z.object({
    name: z.string(),
    phone: z.string(),
    service: z.string(),
    product: z.string(),
    variant: z.string(),
    addons: z.string(),
    landscapes: z.string().optional(),
    utm_source: z.string().optional(),
    utm_medium: z.string().optional(),
    utm_campaign: z.string().optional(),
    utm_term: z.string().optional(),
    utm_content: z.string().optional(),
    ga_source: z.string().optional(),
    gad_campaign: z.string().optional(),
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
Service: ${data?.service ?? ""}
Product: ${data?.product ?? ""}
Variant: ${data?.variant ?? ""}
Add-ons: ${data?.addons ?? ""}
Landscapes: ${data?.landscapes ?? ""}
UTM Source: ${data?.utm_source ?? ""}
UTM Medium: ${data?.utm_medium ?? ""}
UTM Campaign: ${data?.utm_campaign ?? ""}
UTM Term: ${data?.utm_term ?? ""}
UTM Content: ${data?.utm_content ?? ""}
GA Source: ${data?.ga_source ?? ""}
GAd Campaign: ${data?.gad_campaign ?? ""}`;

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

    // Subscribe to Klaviyo list
    try {
      await subscribeToKlaviyoList(data.name, data.phone);
      console.log("Subscribed to Klaviyo list");
    } catch (klaviyoError) {
      // Log the error but continue with the form submission
      console.error("Klaviyo subscription error:", klaviyoError);
      // We don't want to fail the whole submission if Klaviyo fails
    }

    // Redirect to contact-success page with form data and UTM parameters as URL parameters
    // This allows us to send the data to GTM before redirecting to thank-you
    return redirect(
      `/contact-success?name=${encodeURIComponent(data.name)}&phone=${encodeURIComponent(data.phone)}&service=${encodeURIComponent(data.service)}&product=${encodeURIComponent(data.product)}&variant=${encodeURIComponent(data.variant)}&addons=${encodeURIComponent(data.addons)}&landscapes=${encodeURIComponent(data.landscapes || "")}&utm_source=${encodeURIComponent(data.utm_source || "")}&utm_medium=${encodeURIComponent(data.utm_medium || "")}&utm_campaign=${encodeURIComponent(data.utm_campaign || "")}&utm_term=${encodeURIComponent(data.utm_term || "")}&utm_content=${encodeURIComponent(data.utm_content || "")}&ga_source=${encodeURIComponent(data.ga_source || "")}&gad_campaign=${encodeURIComponent(data.gad_campaign || "")}`,
    );
  } catch (error) {
    console.error("Task error", error);
    return json({ error: error.response.body });
  }
}
