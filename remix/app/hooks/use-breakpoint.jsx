import { useState, useEffect } from "react";

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("xs");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setBreakpoint("xs");
      } else if (width < 768) {
        setBreakpoint("sm");
      } else if (width < 1024) {
        setBreakpoint("md");
      } else {
        setBreakpoint("lg");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}

export default useBreakpoint;
