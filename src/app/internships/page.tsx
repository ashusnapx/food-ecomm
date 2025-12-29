import type { Metadata } from "next";
import { Internships } from "@/components";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "My professional experience and internships in frontend development, teaching, and software engineering.",
  openGraph: {
    title: "Experience | Ashutosh Kumar",
    description:
      "My professional experience and internships in frontend development, teaching, and software engineering.",
  },
};

const InternshipsPage = () => {
  return <Internships />;
};

export default InternshipsPage;
