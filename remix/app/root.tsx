import { type LinksFunction, json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Suspense, lazy } from "react";

import favicon from "./assets/favicon.svg";
import PageLayout from "./components/layout";
import "./styles/tailwind.css";

const LiveVisualEditing = lazy(() => import("./components/live-visual-editing"));

export const loader = () => {
  return json({
    ENV: {
      SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
      SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET,
      SANITY_STUDIO_URL: process.env.SANITY_STUDIO_URL,
      SANITY_STUDIO_STEGA_ENABLED: process.env.SANITY_STUDIO_STEGA_ENABLED,
    },
  });
};

export const links: LinksFunction = () => [{ rel: "icon", type: "image/svg+xml", href: favicon }];

export function Layout({ children }: { children: React.ReactNode }) {
  const { ENV } = useLoaderData<typeof loader>();

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

gtag('config', 'G-RWV1Q86WZK');`,
          }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        <PageLayout>{children}</PageLayout>
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
        {ENV.SANITY_STUDIO_STEGA_ENABLED ? (
          <Suspense>
            <LiveVisualEditing />
          </Suspense>
        ) : null}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
