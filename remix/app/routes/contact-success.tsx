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
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  ga_source?: string;
  gad_campaign?: string;
}

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const formData: FormData = {
    name: url.searchParams.get("name") || "",
    phone: url.searchParams.get("phone") || "",
    product: url.searchParams.get("product") || "",
    variant: url.searchParams.get("variant") || "",
    addons: url.searchParams.get("addons") || "",
    utm_source: url.searchParams.get("utm_source") || undefined,
    utm_medium: url.searchParams.get("utm_medium") || undefined,
    utm_campaign: url.searchParams.get("utm_campaign") || undefined,
    utm_term: url.searchParams.get("utm_term") || undefined,
    utm_content: url.searchParams.get("utm_content") || undefined,
    ga_source: url.searchParams.get("ga_source") || undefined,
    gad_campaign: url.searchParams.get("gad_campaign") || undefined,
  };

  return json({ formData });
}

export default function ContactSuccess() {
  const { formData } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  useEffect(() => {
    // Push form submission event to GTM with UTM parameters
    pushEvent("contactSubmission", {
      contactData: {
        name: formData.name,
        phone: formData.phone,
        product: formData.product,
        variant: formData.variant,
        addons: formData.addons,
      },
      utmData: {
        utm_source: formData.utm_source,
        utm_medium: formData.utm_medium,
        utm_campaign: formData.utm_campaign,
        utm_term: formData.utm_term,
        utm_content: formData.utm_content,
        ga_source: formData.ga_source,
        gad_campaign: formData.gad_campaign,
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
