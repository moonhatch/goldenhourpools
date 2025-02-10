export const loader = () => {
  const allowAll = `
User-agent: *
Allow: /
`;

  const disallowAll = `
User-agent: *
Disallow: /
`;

  const robotText = process.env.SANITY_STUDIO_STEGA_ENABLED === "true" ? disallowAll : allowAll;

  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
