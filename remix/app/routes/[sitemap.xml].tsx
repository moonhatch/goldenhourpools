import { client } from "../sanity/client";
import { SITEMAP_QUERY } from "../sanity/queries";

export const loader = async () => {
  const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

  const paths = await client.fetch(SITEMAP_QUERY);

  const pathContent = paths.map((path) => {
    return path.noIndex
      ? ""
      : `<url>
    <loc>${new URL(path.href!, baseUrl).toString()}/</loc>
    <lastmod>${new Date(path._updatedAt)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;
  });

  const content = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pathContent.join("")}
</urlset>`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
