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

  // Export Configuration for GitHub Pages
  output: "export", // Ensures static export for GitHub Pages
  trailingSlash: true, // Ensures proper paths for GitHub Pages

  // Image Optimization (Disabled for GitHub Pages)
  images: {
    unoptimized: true, // Avoid Next.js image optimization for static hosting
  },

  // Base Path for GitHub Pages (Change "your-repo-name" to match your GitHub repo name)
  basePath: "/your-repo-name", // This ensures proper asset loading under the GitHub Pages URL

  // Custom Configuration for Static Exports
  staticPageGenerationTimeout: 60, // Increase timeout for large sites

  // Environment Variables (Optional for Custom API Keys, etc.)
  env: {
    NEXT_PUBLIC_SITE_URL: "https://your-github-username.github.io/your-repo-name",
  },
};

export default nextConfig;
