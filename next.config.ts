import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    qualities: [25, 50, 75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  }, 
};

export default nextConfig;
