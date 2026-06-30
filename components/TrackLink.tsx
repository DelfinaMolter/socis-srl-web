"use client";

import { AnchorHTMLAttributes } from "react";

type TrackLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "onClick"
> & {
  eventName: string;
  eventParams?: Record<string, unknown>;
};

const trackEvent = (name: string, params?: Record<string, unknown>) => {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
};

export default function TrackLink({
  eventName,
  eventParams,
  children,
  ...props
}: TrackLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent(eventName, eventParams);
  };

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
