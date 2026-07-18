import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificación ISO 45001 en Argentina",
  description:
    "Implementamos y certificamos ISO 45001 (seguridad y salud en el trabajo). Prevenga riesgos, proteja a sus colaboradores y cumpla la legislación. Diagnóstico sin cargo.",
  keywords: [
    "ISO 45001",
    "certificación ISO 45001",
    "seguridad y salud en el trabajo",
    "SST",
    "salud ocupacional",
  ],
  alternates: {
    canonical: "/iso-45001",
  },
  openGraph: {
    title: "Certificación ISO 45001 en Argentina | SOCIS Consultores",
    description:
      "Consultoría en ISO 45001. Seguridad y salud ocupacional para proteger a las personas y mejorar el desempeño de su organización.",
    url: "https://www.socis.com.ar/iso-45001",
    siteName: "SOCIS",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/socis-logo.png",
        width: 1200,
        height: 630,
        alt: "SOCIS - Certificación ISO 45001",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
