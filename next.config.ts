import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: "/brandxploited-myversion",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
