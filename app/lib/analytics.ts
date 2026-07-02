export const trackEvent = (name: string, params?: Record<string, unknown>) => {
  console.log("TRACK", name, params);

  if (typeof window === "undefined") return;
  console.log("gtag", window.gtag);

  window.gtag?.("event", name, params);
  console.log("dataLayer", window.dataLayer);
};
