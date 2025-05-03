import { useEffect } from "react";

interface CrazyEggProps {
  scriptId: string;
}

/**
 * Client-only component that loads CrazyEgg after hydration is complete.
 * This prevents hydration mismatches caused by the script modifying the DOM
 * before hydration.
 */
export default function CrazyEgg({ scriptId }: CrazyEggProps) {
  useEffect(() => {
    // Only run in production and on the client
    if (typeof window === "undefined") return;

    // Load the CrazyEgg script
    const script = document.createElement("script");
    script.src = `//script.crazyegg.com/pages/scripts/${scriptId}.js`;
    script.async = true;
    script.type = "text/javascript";
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(script);
    };
  }, [scriptId]);

  // This component doesn't render anything
  return null;
}
