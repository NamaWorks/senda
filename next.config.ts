import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    // implementation: 'sass-embedded',
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
