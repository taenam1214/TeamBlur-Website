// next.config.js

import { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  /**
   * 1) Webpack Configuration for SVG and Asset Handling
   */
  webpack(config: Configuration) {
    // Ensure that the config.module is defined before modifying it
    if (config.module) {
      config.module.rules?.push({
        test: /\.svg$/,
        // `@svgr/webpack` converts your SVGs into React components
        use: ["@svgr/webpack"],
      });
    }
    return config;
  },

  /**
   * 2) Export Configuration for Static Site
   * - `output: "export"` allows you to run `next build && next export`,
   *   producing a fully static site suitable for GitHub Pages or other
   *   static hosts.
   */
  output: "export",
  trailingSlash: true, // Adds a trailing slash to every path (important for some static hosts)

  /**
   * 3) Image Optimization (Disabled for GitHub Pages)
   * - Because you’re doing a static export, Next.js image optimization
   *   won’t work on GitHub Pages. Setting `unoptimized: true` disables it.
   */
  images: {
    unoptimized: true,
  },

  /**
   * 4) Base Path for GitHub Pages (Ensure proper asset loading)
   * - If your site is deployed at `https://github.com/<user>/<repo>/`,
   *   and you’re using GitHub Pages, you might need a basePath like `/<repo>`.
   * - If you’re deploying at a custom domain or root, you can leave this blank.
   */
  basePath: "",

  /**
   * 5) Custom Configuration for Static Exports
   * - `staticPageGenerationTimeout` can be increased for large sites.
   */
  staticPageGenerationTimeout: 60,

  /**
   * 6) Environment Variables
   * - You can define environment variables to use in your client-side code.
   */
  env: {
    NEXT_PUBLIC_SITE_URL: "https://blurapp.io",
  },
};

export default nextConfig;
