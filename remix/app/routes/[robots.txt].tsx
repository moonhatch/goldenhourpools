export const loader = () => {
  let allow = "Allow: /";

  if (
    process.env.NODE_ENV === "development" ||
    process.env.SANITY_STUDIO_STEGA_ENABLED === "true"
  ) {
    allow = "Disallow: /";
  }

  const url = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

  const content = `
User-agent: *
${allow}

Sitemap: ${url}/sitemap.xml
`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
