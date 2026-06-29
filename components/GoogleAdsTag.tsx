"use client";

import Script from "next/script";

export default function GoogleAdsTag() {
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

  if (!adsId) return null;

  return (
    <>
      <Script id="google-ads-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('config', '${adsId}');
        `}
      </Script>
    </>
  );
}
