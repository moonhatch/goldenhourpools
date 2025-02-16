export const loader = () => {
  const allow = process.env.NODE_ENV !== "development" ? "Allow: /" : "Disallow: /";

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
