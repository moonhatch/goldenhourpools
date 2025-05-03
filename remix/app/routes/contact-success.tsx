import { json, LoaderArgs } from "@remix-run/node";
import { useNavigate, useLoaderData } from "@remix-run/react";
import { useEffect } from "react";

import { pushEvent } from "../lib/gtm";

interface FormData {
  name: string;
  phone: string;
  product: string;
  variant: string;
  addons: string;
}

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const formData: FormData = {
    name: url.searchParams.get("name") || "",
    phone: url.searchParams.get("phone") || "",
    product: url.searchParams.get("product") || "",
    variant: url.searchParams.get("variant") || "",
    addons: url.searchParams.get("addons") || "",
  };

  return json({ formData });
}

export default function ContactSuccess() {
  const { formData } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  useEffect(() => {
    // Push form submission event to GTM
    pushEvent("contactSubmission", {
      contactData: {
        name: formData.name,
        phone: formData.phone,
        product: formData.product,
        variant: formData.variant,
        addons: formData.addons,
      },
    });

    // Redirect to thank you page after a short delay
    // This gives GTM time to process the event
    const timer = setTimeout(() => {
      navigate("/thank-you");
    }, 500);

    return () => clearTimeout(timer);
  }, [formData, navigate]);

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-lg">Processing your submission...</p>
    </div>
  );
}
