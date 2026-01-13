import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      // Add Strapi CMS domain when ready
      // {
      //   protocol: "https",
      //   hostname: process.env.NEXT_PUBLIC_STRAPI_URL?.replace("https://", "") || "",
      // },
    ],
  },
};

export default nextConfig;
