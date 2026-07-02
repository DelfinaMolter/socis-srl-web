export const trackEvent = (name: string, params?: Record<string, unknown>) => {
  console.log("TRACK", name, params);

  if (typeof window === "undefined") return;

  window.gtag?.("event", name, params);
};
