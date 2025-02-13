import { createClient } from "@sanity/client/stega";

import { stegaEnabled, projectId, dataset, studioUrl } from "./project-details";

// do not import this into client-side components unless lazy-loaded
export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: "2025-02-10",
  stega: {
    enabled: stegaEnabled,
    studioUrl,
  },
});
