import type { MetadataRoute } from "next";
import { person } from "@/constants/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${person.name}, ${person.role}`,
    short_name: person.name,
    description: person.headline,
    start_url: "/",
    display: "standalone",
    background_color: "#F3F1E9",
    theme_color: "#F3F1E9",
    // Android requires raster icons here; SVG is not accepted for PWA
    // manifest icons, so this points at the PNG set rather than icon.svg.
    icons: [
      { src: "/icon.png", sizes: "96x96", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
