// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      type: "asset/resource",
    });
    return config;
  },
  output: 'export', // Ensure static export for GitHub Pages
  trailingSlash: true, // Ensure proper paths for static export
  images: {
    unoptimized: true, // Ensure image paths work without Next.js image optimization
  },
  // Remove basePath and assetPrefix when using a custom domain
};

module.exports = nextConfig;
