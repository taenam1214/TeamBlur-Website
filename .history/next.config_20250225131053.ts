import { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config: import("webpack").Configuration) {
    if (config.module) {
      config.module.rules?.push({
        test: /\.svg$/,
        type: "asset/resource",
      });
    }
    return config;
  },
  output: 'export', // Ensure static export for GitHub Pages
  trailingSlash: true, // Ensure proper paths for static export
  images: {
    unoptimized: true, // Ensure image paths work without Next.js image optimization
  },
};

export default nextConfig;
