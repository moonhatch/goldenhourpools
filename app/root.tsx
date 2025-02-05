import favicon from "@/assets/favicon.svg";
import type { LinksFunction } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import PageLayout from "@/components/layout";

import "./styles/tailwind.css";

export const links: LinksFunction = () => [{ rel: "icon", type: "image/svg+xml", href: favicon }];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="text/javascript"
          src="//script.crazyegg.com/pages/scripts/0128/2022.js"
          async="async"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RZ7WY7ZVVZ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-RZ7WY7ZVVZ');`,
          }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        <PageLayout>{children}</PageLayout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
