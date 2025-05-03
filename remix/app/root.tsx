import { type LinksFunction, json, LoaderArgs } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import { useQuery } from "@sanity/react-loader";
import { Suspense, lazy, useEffect } from "react";

import favicon from "./assets/favicon.svg";
import CrazyEgg from "./components/crazy-egg";
import GoogleAnalytics from "./components/google-analytics";
import GoogleTagManager from "./components/google-tag-manager";
import PageLayout from "./components/layout";
import { extractUtmParams, storeUtmParams } from "./lib/utm";
import { loadQuery } from "./sanity/loader-server";
import { SITE_SETTINGS_QUERY } from "./sanity/queries";
import { SiteSettings } from "./sanity/types";
import "./styles/tailwind.css";

const LiveVisualEditing = lazy(() => import("./components/live-visual-editing"));

export const loader = async ({ request }: LoaderArgs) => {
  // Extract UTM parameters from the URL
  const url = new URL(request.url);
  const utmParams = extractUtmParams(url);
  const initial = await loadQuery<SiteSettings>(SITE_SETTINGS_QUERY);

  return json({
    initial,
    query: SITE_SETTINGS_QUERY,
    params: {},
    utmParams, // Include UTM params in loader data
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
  const { initial, query, params, utmParams, ENV } = useLoaderData<typeof loader>();
  const { data } = useQuery<typeof initial.data>(query, params, {
    initial,
  });

  // Store UTM parameters on client-side
  useEffect(() => {
    if (
      utmParams &&
      Object.keys(utmParams).some((key) => utmParams[key as keyof typeof utmParams])
    ) {
      storeUtmParams(utmParams);
    }
  }, [utmParams]);

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
