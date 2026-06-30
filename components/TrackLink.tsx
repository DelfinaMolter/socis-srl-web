import { trackEvent } from "@/app/lib/analytics";
import { AnchorHTMLAttributes } from "react";

type TrackLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventParams?: Record<string, unknown>;
};

export default function TrackLink({
  eventName,
  eventParams,
  onClick,
  children,
  ...props
}: TrackLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent(eventName, eventParams);

    // Si el componente recibe un onClick adicional, también lo ejecuta.
    onClick?.(e);
  };

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
