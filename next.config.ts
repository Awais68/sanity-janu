import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        // port: "",
        // pathname: "/**",
        // search: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // port: "",
        // pathname: "/**",
        // search: "",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        // port: "",
        // pathname: "/**",
        // search: "",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        // port: "",
        // pathname: "/**",
        // search: "",
      },
    ],
    // },
  },
};

export default nextConfig;
