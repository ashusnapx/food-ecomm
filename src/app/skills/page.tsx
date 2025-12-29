import type { Metadata } from "next";
import { Skills } from "@/components";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "My technical skills and expertise in programming languages, frontend development, backend development, and data analysis.",
  openGraph: {
    title: "Skills | Ashutosh Kumar",
    description:
      "My technical skills and expertise in programming languages, frontend development, backend development, and data analysis.",
  },
};

const SkillsPage = () => {
  return <Skills />;
};

export default SkillsPage;