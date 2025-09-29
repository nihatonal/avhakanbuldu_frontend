import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: "/hakkinda",
        destination: "/about",
      },
      {
        source: "/iletisim",
        destination: "/contact",
      },
      {
        source: "/faaliyet-alanlari",
        destination: "/services",
      },
      {
        source: "/faaliyet-alanlari/:slug",
        destination: "/services/:slug",
      },
      {
        source: "/gizlilik-politikasi",
        destination: "/privacy",
      },
      {
        source: "/kullanim-sartlari",
        destination: "/termsOfUse",
      },
      {
        source: "/cerez-politikasi",
        destination: "/cookies",
      },
      {
        source: "/telif-ve-marka-haklari",
        destination: "/rightsOfContent",
      },
    ];
  },
};

export default nextConfig;
