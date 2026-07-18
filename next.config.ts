import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Migración de URLs antiguas -> nuevas (301 permanentes)
      {
        source: "/cuan-util-es-certificar-iso-9001",
        destination: "/iso-9001",
        permanent: true,
      },
      {
        source: "/subsidio-para-certificar-iso-9001-o-14001",
        destination: "/iso-14001",
        permanent: true,
      },
      {
        source: "/acerca-de-los-costos-de-implementacion-de-una-iso",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
