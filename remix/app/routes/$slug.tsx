import { type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, redirect } from "@remix-run/react";
import { useQuery } from "@sanity/react-loader";

import redirects from "../redirects";
import { urlFor } from "../sanity/image";
import { loadQuery } from "../sanity/loader.server";
import { PAGE_QUERY } from "../sanity/queries";
import { Page } from "../sanity/types";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  for (const obj of redirects) {
    if (pathname === obj.source || pathname.match(new RegExp(obj.source))) {
      return redirect(obj.destination);
    }
  }

  const initial = await loadQuery<Page>(PAGE_QUERY, params);

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
    {
      property: "og:image",
      content: urlFor(seo?.image).width(1200).height(630).url(),
    },
  ];

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
      {data?.title && <h1 data-sanity={encodeDataAttribute("title")}>{data.title}</h1>}
      <div>Page</div>
    </section>
  );
}
