import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "henmpoano.org" },
    ],
  },
};

export default nextConfig;
