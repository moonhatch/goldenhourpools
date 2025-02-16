import { Link } from "@remix-run/react";

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
};
