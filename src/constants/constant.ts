/**
 * Legacy data kept because it is still the source of truth for these two lists.
 *
 * Everything else that used to live here (projectsData, skillCategories,
 * linksData, navigationItems) has moved to `profile.ts`, which models the same
 * information in the shape the page and the JSON-LD both consume.
 *
 * Social links carry no icon: this design uses typographic labels rather than
 * brand pictograms, which also sidesteps lucide and Simple Icons both having
 * dropped their LinkedIn and GitHub glyphs.
 */

export interface SocialLink {
  href: string;
  label: string;
  handle: string;
}

export interface Internship {
  role: string;
  companyName: string;
  fromDate: string;
  toDate: string;
  modeOfWork: string;
  workDone: string[];
  TechStack: string[];
}

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/ashusnapx", label: "GitHub", handle: "@ashusnapx" },
  { href: "https://linkedin.com/in/ashusnapx", label: "LinkedIn", handle: "in/ashusnapx" },
  { href: "https://x.com/ashusnapx", label: "X", handle: "@ashusnapx" },
  { href: "https://leetcode.com/u/dollarSign/", label: "LeetCode", handle: "u/dollarSign" },
  { href: "https://medium.com/@ashusnapx", label: "Medium", handle: "@ashusnapx" },
  { href: "https://hashnode.com/@ashusnapx", label: "Hashnode", handle: "@ashusnapx" },
  { href: "https://www.fiverr.com/ashusnapx", label: "Fiverr", handle: "/ashusnapx" },
];

export const internshipData: Internship[] = [
  {
    role: "Software Engineer (Core ABAP)",
    companyName: "Tata Consultancy Services (TCS)",
    fromDate: "2025-06-01",
    toDate: "Present",
    modeOfWork: "Full-time, Onsite",
    workDone: [
      "Developing and maintaining enterprise-grade business applications for a European client (Bayer) using Core ABAP.",
      "Performed system analysis, debugging, testing, and defect resolution within SAP-based production systems.",
      "Translated business requirements into technical solutions aligned with enterprise standards and compliance practices.",
      "Worked in controlled production environments following structured change management and release processes.",
    ],
    TechStack: [
      "ABAP",
      "SAP",
      "Enterprise Applications",
      "System Analysis",
      "Debugging & Testing",
    ],
  },
  {
    role: "Frontend Developer",
    companyName: "AI Caller.io",
    fromDate: "2023-12-11",
    toDate: "2024-01-11",
    modeOfWork: "Internship, Remote",
    workDone: [
      "Implemented CSV upload functionality to trigger bulk calling workflows.",
      "Migrated application from client-side rendering to server-side rendering for improved performance and SEO.",
      "Integrated Hashnode’s headless CMS for blog management and better search engine visibility.",
      "Improved call template forms with tooltips to enhance user experience and usability.",
      "Integrated Tolt for affiliate marketing and referral tracking.",
    ],
    TechStack: [
      "NextJS",
      "ReactJS",
      "Redux Toolkit",
      "React Query",
      "TypeScript",
      "Shadcn",
      "Tailwind CSS",
    ],
  },
  {
    role: "Teaching Assistant",
    companyName: "Coding Ninjas",
    fromDate: "2022-02-01",
    toDate: "2022-10-01",
    modeOfWork: "Internship, Remote",
    workDone: [
      "Solved more than 1000 questions related to C++, Data Structures, and Algorithms.",
      "Mentored and assisted more than 600 students in resolving coding and logical queries.",
      "Achieved a student rating of 4.8/5, reflecting strong teaching and problem-solving skills.",
    ],
    TechStack: ["C++", "Data Structures", "Algorithms"],
  },
];
