import { type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, redirect } from "@remix-run/react";
import { useQuery } from "@sanity/react-loader";

import PageBuilder from "../components/page-builder";
import { fetchRedirects } from "../sanity/fetch-redirects";
import { urlFor } from "../sanity/image";
import { loadQuery } from "../sanity/loader.server";
import { PAGE_QUERY } from "../sanity/queries";
import { Page, Redirect } from "../sanity/types";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const { pathname } = new URL(request.url);

  // 1) attempt to redirect

  const redirectData: Redirect = await fetchRedirects(pathname);
  if (redirectData) {
    const code = redirectData.permanent ? 301 : 302;

    return redirectData.destination
      ? redirect(redirectData.destination, code)
      : redirect("/", code);
  }

  const initial = await loadQuery<Page>(PAGE_QUERY, params);

  // 2) redirect home if no page data

  if (!initial.data) return redirect("/");

  return { initial, query: PAGE_QUERY, params };
};

export const meta: MetaFunction = ({ data }) => {
  const seo = data?.initial?.data?.seo ?? {};

  const meta = [
    { title: seo?.title },
    {
      name: "description",
      content: seo?.description,
    },
  ];

  if (seo?.image) {
    meta.push({
      property: "og:image",
      content: urlFor(seo?.image).width(1200).height(630).url(),
    });
  }

  if (seo?.noIndex) {
    meta.push({
      name: "robots",
      content: "noindex",
    });
  }

  return meta;
};

export default function PageRoute() {
  const { initial, query, params } = useLoaderData<typeof loader>();
  const { data, loading, error, encodeDataAttribute } = useQuery<typeof initial.data>(
    query,
    params,
    {
      initial,
    },
  );

  if (error) {
    throw error;
  } else if (loading && !data) {
    return <div>Loading...</div>;
  }

  return (
    <section data-sanity={encodeDataAttribute("slug")}>
      <PageBuilder content={data.pageBuilder} data-sanity={encodeDataAttribute("pageBuilder")} />
    </section>
  );
}
