import { createClient } from "@sanity/client/stega";

import { stegaEnabled, projectId, dataset, studioUrl } from "./project-details";

// do not import this into client-side components unless lazy-loaded
export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: "2023-03-20",
  stega: {
    enabled: stegaEnabled,
    studioUrl,
  },
});
