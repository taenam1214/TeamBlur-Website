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

  // Export Configuration for Static Site Deployment
  output: "export", // Ensures static export for GitHub Pages
  trailingSlash: true, // Ensures proper paths for static export

  // Image Optimization (Disabled for GitHub Pages)
  images: {
    unoptimized: true, // Avoid Next.js image optimization for static hosting
  },

  // Custom Configuration for Static Exports
  staticPageGenerationTimeout: 60, // Increase timeout for large sites

  // Environment Variables (Optional for Custom API Keys, etc.)
  env: {
    NEXT_PUBLIC_SITE_URL: "https://blurapp.io",
  },
};

export default nextConfig;
