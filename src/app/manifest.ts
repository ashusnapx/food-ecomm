import type { MetadataRoute } from "next";
import { person } from "@/constants/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${person.name} — ${person.role}`,
    short_name: person.name,
    description: person.headline,
    start_url: "/",
    display: "standalone",
    background_color: "#08080d",
    theme_color: "#08080d",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/me.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
