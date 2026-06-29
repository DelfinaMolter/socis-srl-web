import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SOCIS",
  url: "https://socis.com.ar",
  logo: "https://www.socis.com.ar/socis-logo.png",
  email: "info@socis.com.ar",
  telephone: "+54 911 44478802",
  sameAs: ["https://www.linkedin.com/company/socis-srl/"],
};
export const metadata: Metadata = {
  title: "SOCIS Consultores",
  description: "Consultores de normas ISO para servicios e industrias.",
  icons: {
    icon: "/socis-logo.png",
  },
  openGraph: {
    title: "SOCIS | Consultores de normas ISO para servicios e industrias",
    description: "Consultoría en ISO 27001, SOC 2 y compliance para empresas.",
    url: "https://socis.com.ar",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <body>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}
