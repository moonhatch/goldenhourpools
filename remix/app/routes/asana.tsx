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

  console.log("Creating task", data);

  try {
    const task = await tasksApiInstance.createTask(body);
    console.log("Created task", task);
    return redirect("/thank-you");
  } catch (error) {
    console.error("Task error", error);
    return json({ error: error.response.body });
  }

  return redirect("/thank-you");
}
