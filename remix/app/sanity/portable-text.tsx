import { Link } from "@remix-run/react";

import { Button } from "../components/ui/button";

export const components = {
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;

      if (!rel) {
        return (
          <Link prefetch="viewport" to={value.href}>
            {children}
          </Link>
        );
      }

      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
  types: {
    button: ({ value }) => {
      return (
        <Button asChild className="mt-8" size="wide">
          <Link to={value.to}>{value.text}</Link>
        </Button>
      );
    },
  },
};
