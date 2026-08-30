import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/profile";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /api is data, not content; /_next is build output.
        disallow: ["/api/", "/_next/"],
      },
      // Answer engines are explicitly welcome, being quoted by them is the
      // point of the FAQ and structured data on this site.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-User",
          "Google-Extended",
          "Applebot-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
