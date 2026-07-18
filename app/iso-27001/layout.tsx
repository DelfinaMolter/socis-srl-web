import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificación ISO 27001 en Argentina",
  description:
    "Implementamos y certificamos ISO 27001 (seguridad de la información). Proteja la confidencialidad, integridad y disponibilidad de sus activos digitales. Diagnóstico sin cargo.",
  keywords: [
    "ISO 27001",
    "certificación ISO 27001",
    "seguridad de la información",
    "SGSI",
    "ciberseguridad empresas",
  ],
  alternates: {
    canonical: "/iso-27001",
  },
  openGraph: {
    title: "Certificación ISO 27001 en Argentina | SOCIS Consultores",
    description:
      "Consultoría en ISO 27001. Gestione la seguridad de la información y proteja los activos digitales de su empresa.",
    url: "https://www.socis.com.ar/iso-27001",
    siteName: "SOCIS",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/socis-logo.png",
        width: 1200,
        height: 630,
        alt: "SOCIS - Certificación ISO 27001",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
