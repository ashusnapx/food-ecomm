import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/profile";

/**
 * The previous sitemap listed /projects, /skills, /internships and
 * /contact-me — none of which exist in the app. Submitting URLs that 404 wastes
 * crawl budget and Search Console flags them, so this now lists only the one
 * page that actually renders.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
