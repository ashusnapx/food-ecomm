import type { Metadata } from "next";
import { Projects } from "@/components";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects built with React, Next.js, and modern technologies.",
  openGraph: {
    title: "Projects | Ashutosh Kumar",
    description:
      "Explore my portfolio of web development projects built with React, Next.js, and modern technologies.",
  },
};

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;