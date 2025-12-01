import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shadcnstudio.com",
        pathname: "/ss-assets/**",
      },
    ],
  },
};

export default nextConfig;
