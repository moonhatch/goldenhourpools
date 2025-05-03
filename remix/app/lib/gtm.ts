/**
 * Utility functions for interacting with Google Tag Manager
 */

/**
 * Push an event to the GTM data layer
 * @param eventName The name of the event
 * @param eventData Additional data to include with the event
 */
export function pushEvent(eventName: string, eventData: Record<string, unknown>): void {
  if (typeof window === "undefined" || !window.dataLayer) return;

  window.dataLayer.push({
    event: eventName,
    ...eventData,
  });
}
