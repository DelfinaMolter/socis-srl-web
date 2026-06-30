"use client";

import { trackEvent } from "@/app/lib/analytics";
import { AnchorHTMLAttributes } from "react";

type TrackLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "onClick"
> & {
  eventName: string;
  eventParams?: Record<string, unknown>;
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
