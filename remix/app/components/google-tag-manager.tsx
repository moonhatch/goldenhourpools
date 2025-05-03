import { useEffect } from "react";

interface GoogleTagManagerProps {
  gtmId: string;
}

/**
 * Client-only component that loads Google Tag Manager after hydration is complete.
 * This prevents hydration mismatches caused by the script modifying the DOM
 * before hydration.
 */
export default function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  useEffect(() => {
    // Only run on the client
    if (typeof window === "undefined") return;

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];

    // Insert GTM script
    const script = document.createElement("script");
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
    document.head.appendChild(script);

    // Add GTM noscript iframe for browsers with JavaScript disabled
    const noscript = document.createElement("noscript");
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);

    return () => {
      document.head.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, [gtmId]);

  // This component doesn't render anything
  return null;
}

// Add the dataLayer type definition to the Window interface
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
