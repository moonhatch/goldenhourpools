import { type LinksFunction, json } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import { useQuery } from "@sanity/react-loader";
import { Suspense, lazy } from "react";

import favicon from "./assets/favicon.svg";
import CrazyEgg from "./components/crazy-egg";
import GoogleAnalytics from "./components/google-analytics";
import GoogleTagManager from "./components/google-tag-manager";
import PageLayout from "./components/layout";
import { loadQuery } from "./sanity/loader-server";
import { SITE_SETTINGS_QUERY } from "./sanity/queries";
import { SiteSettings } from "./sanity/types";
import "./styles/tailwind.css";

const LiveVisualEditing = lazy(() => import("./components/live-visual-editing"));

export const loader = async () => {
  const initial = await loadQuery<SiteSettings>(SITE_SETTINGS_QUERY);

  return json({
    initial,
    query: SITE_SETTINGS_QUERY,
    params: {},
    ENV: {
      NODE_ENV: process.env.NODE_ENV,
      SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
      SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET,
      SANITY_STUDIO_URL: process.env.SANITY_STUDIO_URL,
      SANITY_STUDIO_STEGA_ENABLED: process.env.SANITY_STUDIO_STEGA_ENABLED,
    },
  });
};

export const links: LinksFunction = () => [{ rel: "icon", type: "image/svg+xml", href: favicon }];

export function Layout({ children }: { children: React.ReactNode }) {
  const { initial, query, params, ENV } = useLoaderData<typeof loader>();
  const { data } = useQuery<typeof initial.data>(query, params, {
    initial,
  });

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <PageLayout siteData={data}>{children}</PageLayout>
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
        {ENV.NODE_ENV !== "development" && (
          <>
            <CrazyEgg scriptId="0128/2022" />
            <GoogleAnalytics gaId="G-RWV1Q86WZK" />
            <GoogleTagManager gtmId="GTM-WW4QR3W4" />
          </>
        )}
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
