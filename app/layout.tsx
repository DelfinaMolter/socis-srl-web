import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "SOCIS Consultores",
  description: "Consultores de normas ISO para servicios e industrias.",
  icons: {
    icon: "/socis-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}
