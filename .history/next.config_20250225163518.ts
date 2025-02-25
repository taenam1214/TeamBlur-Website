import { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  // Webpack Configuration for SVG and Asset Handling
  webpack(config: Configuration) {
    if (config.module) {
      config.module.rules?.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"], // Converts SVGs into React components
      });
    }
    return config;
  },

  // Export Configuration for Static Site
  output: "export", // Ensures static export for GitHub Pages
  trailingSlash: true, // Ensures proper paths for GitHub Pages

  // Image Optimization (Disabled for GitHub Pages)
  images: {
    unoptimized: true, // Avoid Next.js image optimization for static hosting
  },

  // Base Path for GitHub Pages (Ensure proper asset loading)
  basePath: "",

  // Custom Configuration for Static Exports
  staticPageGenerationTimeout: 60, // Increase timeout for large sites

  // Environment Variables (Optional for Custom API Keys, etc.)
  env: {
    NEXT_PUBLIC_SITE_URL: "https://blurapp.io",
  },
};

export default nextConfig;
