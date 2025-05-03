import { useEffect } from "react";

interface GoogleAnalyticsProps {
  gaId: string;
}

/**
 * Client-only component that loads Google Analytics after hydration is complete.
 * This prevents hydration mismatches caused by the gtag script inserting an iframe
 * into the document before hydration.
 */
export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Only run in production and on the client
    if (typeof window === "undefined") return;

    // Load the gtag script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", gaId);

    // Cleanup function
    return () => {
      document.head.removeChild(script);
    };
  }, [gaId]);

  // This component doesn't render anything
  return null;
}

// Add the gtag type definition to the Window interface
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
