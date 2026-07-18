import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SOCIS",
  url: "https://www.socis.com.ar",
  logo: "https://www.socis.com.ar/socis-logo.png",
  email: "info@socis.com.ar",
  telephone: "+54 911 44478802",
  sameAs: ["https://www.linkedin.com/company/socis-srl/"],
};
export const metadata: Metadata = {
  metadataBase: new URL("https://www.socis.com.ar"),
  title: {
    default: "SOCIS Consultores | Normas ISO para servicios e industrias",
    template: "%s | SOCIS Consultores",
  },
  description:
    "Consultores en normas ISO (9001, 14001, 27001 y 45001) para empresas de servicios e industrias en Argentina. Diagnóstico sin cargo.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/socis-logo.png",
  },
  openGraph: {
    title: "SOCIS | Consultores de normas ISO para servicios e industrias",
    description:
      "Consultoría en ISO 9001, 14001, 27001 y 45001 para empresas de servicios e industrias.",
    url: "https://www.socis.com.ar",
    siteName: "SOCIS",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/socis-logo.png",
        width: 1200,
        height: 630,
        alt: "SOCIS - Consultores",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}
