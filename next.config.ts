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
    ];
  },
};

export default nextConfig;
