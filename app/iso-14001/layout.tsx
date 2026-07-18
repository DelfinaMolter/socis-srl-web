import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificación ISO 14001 en Argentina",
  description:
    "Implementamos y certificamos ISO 14001 (gestión ambiental). Reduzca el impacto ambiental, cumpla la legislación y mejore su ventaja competitiva. Diagnóstico sin cargo.",
  keywords: [
    "ISO 14001",
    "certificación ISO 14001",
    "sistema de gestión ambiental",
    "gestión ambiental",
    "consultora ambiental Argentina",
  ],
  alternates: {
    canonical: "/iso-14001",
  },
  openGraph: {
    title: "Certificación ISO 14001 en Argentina | SOCIS Consultores",
    description:
      "Consultoría en ISO 14001. Gestión ambiental que reduce el impacto, asegura el cumplimiento legal y mejora su desempeño.",
    url: "https://www.socis.com.ar/iso-14001",
    siteName: "SOCIS",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/socis-logo.png",
        width: 1200,
        height: 630,
        alt: "SOCIS - Certificación ISO 14001",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
