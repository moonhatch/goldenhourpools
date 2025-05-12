/**
 * Utility functions for handling UTM parameters
 */

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  ga_source?: string;
  gad_campaign?: string;
}

/**
 * Extract UTM parameters from a URL
 * @param url The URL to extract parameters from
 * @returns An object containing the UTM parameters
 */
export function extractUtmParams(url: URL): UtmParams {
  const params: UtmParams = {};

  // Extract standard UTM parameters
  if (url.searchParams.has("utm_source"))
    params.utm_source = url.searchParams.get("utm_source") || undefined;
  if (url.searchParams.has("utm_medium"))
    params.utm_medium = url.searchParams.get("utm_medium") || undefined;
  if (url.searchParams.has("utm_campaign"))
    params.utm_campaign = url.searchParams.get("utm_campaign") || undefined;
  if (url.searchParams.has("utm_term"))
    params.utm_term = url.searchParams.get("utm_term") || undefined;
  if (url.searchParams.has("utm_content"))
    params.utm_content = url.searchParams.get("utm_content") || undefined;

  // Extract additional parameters
  if (url.searchParams.has("ga_source"))
    params.ga_source = url.searchParams.get("ga_source") || undefined;
  if (url.searchParams.has("gad_campaign"))
    params.gad_campaign = url.searchParams.get("gad_campaign") || undefined;

  return params;
}

/**
 * Store UTM parameters in sessionStorage
 * @param params The UTM parameters to store
 */
export function storeUtmParams(params: UtmParams): void {
  if (typeof window === "undefined") return;

  // Only store non-empty parameters
  Object.entries(params).forEach(([key, value]) => {
    if (value) sessionStorage.setItem(key, value);
  });
}

/**
 * Retrieve UTM parameters from sessionStorage
 * @returns An object containing the stored UTM parameters
 */
export function getStoredUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};

  const params: UtmParams = {};

  // Get all possible UTM parameters
  params.utm_source = sessionStorage.getItem("utm_source") || undefined;
  params.utm_medium = sessionStorage.getItem("utm_medium") || undefined;
  params.utm_campaign = sessionStorage.getItem("utm_campaign") || undefined;
  params.utm_term = sessionStorage.getItem("utm_term") || undefined;
  params.utm_content = sessionStorage.getItem("utm_content") || undefined;
  params.ga_source = sessionStorage.getItem("ga_source") || undefined;
  params.gad_campaign = sessionStorage.getItem("gad_campaign") || undefined;

  return params;
}
