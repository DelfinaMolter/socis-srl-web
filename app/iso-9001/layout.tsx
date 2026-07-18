import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificación ISO 9001 en Argentina",
  description:
    "Implementamos y certificamos ISO 9001 (gestión de calidad) para empresas de servicios e industrias. Diagnóstico sin cargo y acompañamiento hasta la certificación.",
  keywords: [
    "ISO 9001",
    "certificación ISO 9001",
    "sistema de gestión de calidad",
    "consultora ISO Argentina",
    "certificar calidad",
  ],
  alternates: {
    canonical: "/iso-9001",
  },
  openGraph: {
    title: "Certificación ISO 9001 en Argentina | SOCIS Consultores",
    description:
      "Consultoría en ISO 9001 para servicios e industrias. Mejore procesos, reduzca costos y acceda a más oportunidades.",
    url: "https://www.socis.com.ar/iso-9001",
    siteName: "SOCIS",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/socis-logo.png",
        width: 1200,
        height: 630,
        alt: "SOCIS - Certificación ISO 9001",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
