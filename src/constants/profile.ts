/**
 * Single source of truth for identity, work and SEO.
 *
 * The page and the JSON-LD both read from here, so the structured data Google
 * sees can never drift from the copy a human reads.
 *
 * House style: no em-dashes or en-dashes in any user-visible string. Use a
 * comma, a colon, a period or parentheses instead.
 */

export const SITE_URL = "https://ashusnapx.vercel.app";

export const person = {
  name: "Ashutosh Kumar",
  handle: "ashusnapx",
  role: "Generative AI Engineer",
  headline:
    "I build production LLM applications: retrieval pipelines, multi-agent workflows and the products they ship inside.",
  email: "ashu.kumarexam@gmail.com",
  location: { city: "Bengaluru", region: "Karnataka", country: "India", countryCode: "IN" },
  currentEmployer: "Tata Consultancy Services",
  jobTitle: "Software Engineer",
  image: `${SITE_URL}/me.png`,
  resumeUrl:
    "https://drive.google.com/file/d/1QC2FPE0nrS45xwPMofP6TjlcABXAYpCE/view?usp=sharing",
  availability: "Open to Generative AI engineering roles",
} as const;

export const keywords = [
  "Ashutosh Kumar",
  "ashusnapx",
  "Ashutosh Kumar GenAI Engineer",
  "Generative AI Engineer India",
  "Generative AI Engineer portfolio",
  "AI Engineer Bengaluru",
  "Claude Certified Developer",
  "LLM application developer",
  "RAG pipeline developer",
  "AI agent developer",
  "Model Context Protocol MCP developer",
  "LangGraph developer",
  "prompt engineering",
  "Next.js AI developer",
  "full stack AI engineer",
  "hire GenAI engineer",
];

export const stats = [
  { value: 15, suffix: "+", label: "products shipped", pen: "blue" },
  { value: 1000, suffix: "+", label: "DSA problems solved", pen: "red" },
  { value: 600, suffix: "+", label: "engineers mentored", pen: "green" },
  { value: 5, suffix: "", label: "certifications", pen: "purple" },
] as const;

/** Facts pinned in the hero margin, the way you would annotate a page. */
export const marginNotes = [
  { note: "Bengaluru, India", pen: "blue" },
  { note: "Software Engineer at TCS", pen: "ink" },
  { note: "Rank 1, TCS AI Friday", pen: "red" },
  { note: "Claude Certified Developer", pen: "purple" },
] as const;

export const marqueeSkills = [
  "RAG", "LangGraph", "LangChain", "Claude", "Gemini", "OpenAI", "MCP",
  "Vector search", "Agents", "Voice AI", "LLM evals", "Prompt engineering",
  "Next.js", "TypeScript", "Python", "React", "PostgreSQL",
];

/* -------------------------------------------------------------------------
   WORK
   ------------------------------------------------------------------------- */

export type ProjectCategory = "genai" | "fullstack" | "mobile";

export type ShowcaseProject = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  year: string;
  image?: string;
  github?: string;
  live?: string;
  writeup?: string;
  video?: string;
  /** Self-hosted demo clip, played in place of the still image. */
  videoSrc?: string;
  videoPoster?: string;
  /** Lead projects get a full-width cell and a larger image. */
  lead?: boolean;
};

export const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "Everything",
  genai: "Generative AI",
  fullstack: "Full stack",
  mobile: "Mobile",
};

export const categoryPen: Record<ProjectCategory | "all", string> = {
  all: "var(--ink)",
  genai: "var(--red)",
  fullstack: "var(--blue)",
  mobile: "var(--green)",
};

export const projects: ShowcaseProject[] = [
  {
    id: "kavach",
    name: "Kavach",
    tagline: "The first hour, and the ninety days after",
    description:
      "India logs 22.5 lakh cybercrime complaints a year. A victim who reports one gets a complaint number and nothing else, while eight separate obligations run on statutory clocks nobody tells them about. Kavach takes a spoken account in any of 23 languages, classifies it against the official NCRP category tree, extracts the identifiers with regex before any model sees them, and returns every deadline plus seven ready documents: the portal complaint, the 1930 script, the bank dispute letter and the FIR application.",
    category: "genai",
    tags: ["GPT-4o", "Strict JSON schema", "Next 16", "119 unit tests"],
    year: "2026",
    image: "/kavach/case-dashboard.png",
    videoSrc: "/kavach/demo.mp4",
    videoPoster: "/kavach/demo-poster.jpg",
    github: "https://github.com/ashusnapx/hackathon",
    live: "https://cybercrime-assistant.vercel.app/",
    writeup:
      "https://dev.to/ashusnapx/you-have-sixty-minutes-nobody-tells-you-what-to-do-with-them-3lb6",
    video:
      "https://drive.google.com/file/d/15YK3JONlj1ai6QRl9LvdUHIlY1PBIXUr/view?usp=sharing",
    lead: true,
  },
  {
    id: "nexus-cold-chain",
    name: "Nexus Cold Chain AI",
    tagline: "Agentic cold chain safety, Rank 1 at TCS AI Friday",
    description:
      "Predicts when a vaccine shipment is about to breach temperature and drives the response. Three LangChain agents split sensor analysis, root cause and risk prediction; Gmail over MCP dispatches the incident notice; Braintrust and Pydantic AI keep the outputs checked and schema valid.",
    category: "genai",
    tags: ["LangChain", "Multi-agent", "MCP", "Braintrust"],
    year: "2026",
    image: "/tcs-ai-friday.jpg",
    live: "https://www.linkedin.com/posts/ashusnapx_tcs-aifriday-tcsaifriday-share-7492162677893660672-6l24/",
    lead: true,
  },
  {
    id: "vaaniverse",
    name: "VaaniVerse",
    tagline: "Voice AI contact centre simulator",
    description:
      "AI customer personas with emotions, memory and hidden objectives roleplay live calls while an AI coach scores the trainee on empathy, listening, ownership and compliance, then replays the call with a transcript level breakdown.",
    category: "genai",
    tags: ["Voice AI", "TypeScript", "AI personas"],
    year: "2026",
    image: "/vaani/vaaniverse-dashboard.jpg",
    github: "https://github.com/ashusnapx/contact-center-simulator",
  },
  {
    id: "postgen",
    name: "PostGen",
    tagline: "Multi-agent LinkedIn ghostwriter",
    description:
      "A multi-agent workflow that splits content planning from tone adaptation, so each stage has one job and one prompt to debug.",
    category: "genai",
    tags: ["Gemini", "Multi-agent", "Next.js"],
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
    github: "https://github.com/ashusnapx/linkedin-post-generator",
    live: "https://postgen-ashusnapx.vercel.app/",
  },
  {
    id: "ai-book-explorer",
    name: "AI Book Explorer",
    tagline: "Conversational discovery over a book corpus",
    description:
      "LangGraph holds the conversation state and CopilotKit surfaces it in product, backed by Prisma and PostgreSQL.",
    category: "genai",
    tags: ["LangGraph", "CopilotKit", "Prisma"],
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1600&auto=format&fit=crop",
    github: "https://github.com/ashusnapx/ai-book-explorer",
  },
  {
    id: "know-your-food",
    name: "Know About Your Food",
    tagline: "Multimodal nutrition analysis",
    description:
      "Point a camera at a meal and get its ingredients back. Gemini Vision handles the image reasoning, Streamlit keeps the interface out of the way.",
    category: "genai",
    tags: ["Gemini Vision", "Python", "Streamlit"],
    year: "2024",
    image: "https://i.postimg.cc/nz3zBkKx/Screenshot-2024-01-22-at-11-46-59-PM.png",
    github: "https://github.com/ashusnapx/know-the-ingredient",
    live: "https://know-your-food-ashusnapx.streamlit.app/",
  },
  {
    id: "coal-mines-laws",
    name: "AI Coal Mines Laws",
    tagline: "Domain assistant for mining regulation",
    description:
      "A grounded assistant over India's coal mining legal framework, the kind of narrow, high stakes domain where a general chatbot is worse than useless without retrieval.",
    category: "genai",
    tags: ["Gemini Pro", "Domain RAG", "Python"],
    year: "2024",
    image: "https://i.postimg.cc/6pGxntLp/Screenshot-2024-01-22-at-3-33-22-PM.png",
    github: "https://github.com/ashusnapx/gemini-mining",
    live: "https://dgms-gemini-ashusnapx.streamlit.app/",
  },
  {
    id: "genai-apps-generator",
    name: "GenAI Apps Generator",
    tagline: "Scaffolding for AI powered apps",
    description:
      "Turns a described idea into a working AI app shell. Gemini Pro for generation, Clerk for auth, Next.js for everything the user touches.",
    category: "genai",
    tags: ["Gemini Pro", "Next.js", "Clerk"],
    year: "2024",
    image: "https://i.postimg.cc/8cjDyyMk/Screenshot-2024-05-13-at-3-36-02-AM.png",
    github: "https://github.com/ashusnapx/genai-assignment-frontend",
    live: "https://genai-assignment.vercel.app/",
  },
  {
    id: "habit-ai",
    name: "Habit.AI",
    tagline: "Productivity tracking that sticks",
    description:
      "Organises study material into subjects and chapters, tracks progress and visualises streaks.",
    category: "fullstack",
    tags: ["Next.js", "Appwrite", "shadcn/ui"],
    year: "2024",
    image: "https://i.postimg.cc/sgx4bKbg/Screenshot-2024-08-26-at-1-54-25-AM.png",
    github: "https://github.com/ashusnapx/habit-builder",
    live: "https://habit-ai-lake.vercel.app/",
  },
  {
    id: "airbnb-clone",
    name: "Airbnb Clone",
    tagline: "Listings, auth and booking flow",
    description:
      "A full rebuild of the core Airbnb loop: OAuth sign in, property listings and bookings, on React and Supabase.",
    category: "fullstack",
    tags: ["React", "Supabase", "OAuth"],
    year: "2023",
    image: "https://i.postimg.cc/nc7XGF4S/Screenshot-2023-10-07-at-1-03-54-AM.png",
    github: "https://github.com/ashusnapx/airbnb-x-oyo",
    live: "https://airbnb-by-ashusnapx.vercel.app/",
  },
  {
    id: "yt-analytics",
    name: "YouTube Playlist Analytics",
    tagline: "How long is that course, really?",
    description:
      "Computes total runtime and per video breakdowns for any public playlist.",
    category: "fullstack",
    tags: ["Python", "Django"],
    year: "2023",
    image: "https://i.postimg.cc/L6dbbDP4/Screenshot-2023-10-07-at-1-10-10-AM.png",
    github: "https://github.com/ashusnapx/youtube-playlist-length",
    live: "https://yt-playlist-length-4nzq.onrender.com/",
  },
  {
    id: "secourse",
    name: "Secourse",
    tagline: "Study planning for aspirants",
    description:
      "Breaks a syllabus into subjects and chapters and tracks progress against it.",
    category: "mobile",
    tags: ["React Native", "Nativewind", "Appwrite"],
    year: "2024",
    image: "https://i.postimg.cc/k4jTV467/Untitled-design.png",
    github: "https://github.com/ashusnapx/abhi-start-upsc",
  },
];

/* -------------------------------------------------------------------------
   HACKATHONS
   Awards and events in one place. The TCS entry used to appear in two separate
   sections, which is exactly the duplication that made the page feel long.
   ------------------------------------------------------------------------- */

export type Hackathon = {
  id: string;
  event: string;
  detail: string;
  result: string;
  /** Empty when the event was not ranked. */
  rank?: string;
  progression?: string[];
  project: string;
  story: string;
  stack: string[];
  team?: string[];
  url?: string;
  image?: string;
  gallery?: string[];
  pen: "red" | "blue" | "green" | "purple" | "orange";
};

export const hackathons: Hackathon[] = [
  {
    id: "tcs-ai-friday",
    event: "TCS AI Friday",
    detail: "Season 2, 2026",
    result: "Rank 1, then the regionals",
    rank: "1",
    progression: ["Rank 1 in the weekly", "Qualified for semi-finals", "Reached the regionals"],
    project: "Nexus Cold Chain AI",
    story:
      "We built an agentic system for vaccine cold chain safety. It predicts when a shipment is about to breach temperature, explains why, and drives the incident response instead of raising an alarm and leaving a human to work it out. Three specialised LangChain agents own sensor analysis, root cause and risk prediction; Gmail over MCP dispatches the notice behind OAuth 2.0; Braintrust runs the evals and Pydantic AI validates every output schema.",
    stack: ["LangChain", "Multi-agent", "MCP", "Mem0", "Braintrust", "Pydantic AI"],
    team: ["Vishnu Shanker Sharma", "Shashank N U", "Namratha S", "Sachi Motghare"],
    url: "https://www.linkedin.com/posts/ashusnapx_tcs-aifriday-tcsaifriday-share-7492162677893660672-6l24/",
    image: "/tcs-ai-friday.jpg",
    pen: "red",
  },
  {
    id: "build-what-moves-india",
    event: "Build What Moves India",
    detail: "2026",
    result: "Shipped Kavach",
    project: "Kavach",
    story:
      "The obvious build was a nicer version of the government complaint form. We started there and threw it away, because filing the complaint is about one percent of the job. What a fraud victim actually faces is eight obligations on statutory clocks, and the one that matters most, notifying your own bank in writing within three working days, is the one almost nobody is told about. Miss it and the citizen personally absorbs a loss the bank was obliged to carry.",
    stack: ["Next 16", "GPT-4o", "Strict JSON schema", "Deadline engine"],
    team: ["Kaustubh Tripathi"],
    url: "https://dev.to/ashusnapx/you-have-sixty-minutes-nobody-tells-you-what-to-do-with-them-3lb6",
    image: "/kavach/landing.png",
    pen: "orange",
  },
  {
    id: "vaani-research-labs",
    event: "Vaani Research Labs",
    detail: "Hackathon and meetup, 2026",
    result: "First hackathon, prototype after",
    project: "VaaniVerse",
    story:
      "My first hackathon, hosted with AI Learn Circle. I ran out of time and never got the idea working on the day. But I pitched it to Tushar Shinde, Vaani's co-founder and CEO, and he liked the concept, so I went straight back and built it: a voice AI contact centre simulator on Vaani's APIs.",
    stack: ["Voice AI", "TypeScript", "Vaani APIs"],
    url: "https://www.linkedin.com/posts/ashusnapx_hackathon-voiceai-vaani-activity-7484367382568775680-U6sx",
    image: "/vaani/meetup-1.jpg",
    gallery: ["/vaani/meetup-2.jpg", "/vaani/meetup-3.jpg"],
    pen: "blue",
  },
];

/* -------------------------------------------------------------------------
   STACK
   Grouped so a long list never renders as one undifferentiated column.
   ------------------------------------------------------------------------- */

export type SkillGroup = {
  id: string;
  title: string;
  caption: string;
  pen: "red" | "blue" | "green" | "purple" | "orange";
  skills: string[];
};

export const skillStack: SkillGroup[] = [
  {
    id: "genai",
    title: "Generative AI",
    caption: "the model layer",
    pen: "red",
    skills: [
      "RAG", "LangGraph", "LangChain", "CopilotKit", "Multi-agent workflows",
      "Tool calling", "Structured outputs", "Claude API", "Gemini", "OpenAI",
      "MCP", "Embeddings", "Mem0", "Braintrust evals", "Pydantic AI", "Voice AI",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    caption: "day to day",
    pen: "blue",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "ABAP"],
  },
  {
    id: "product",
    title: "Product and frontend",
    caption: "where the model meets a user",
    pen: "green",
    skills: [
      "Next.js 16", "React 19", "Server Components", "Streaming responses",
      "Tailwind", "Framer Motion", "Redux Toolkit", "React Native",
    ],
  },
  {
    id: "backend",
    title: "Backend and data",
    caption: "what holds it up",
    pen: "purple",
    skills: [
      "Node.js", "Express", "Streamlit", "PostgreSQL", "Prisma", "MongoDB",
      "Supabase", "Redis", "REST APIs",
    ],
  },
  {
    id: "foundations",
    title: "Foundations",
    caption: "the part that does not go stale",
    pen: "orange",
    skills: ["Data structures", "Algorithms", "System design", "NumPy", "Pandas", "Git", "SEO"],
  },
];

/* -------------------------------------------------------------------------
   CERTIFICATIONS
   Every entry was checked against its issuer. Never list one that is not.
   ------------------------------------------------------------------------- */

export type Certification = {
  name: string;
  issuer: string;
  issued?: string;
  expires?: string;
  credentialId?: string;
  credentialUrl?: string;
  blurb?: string;
  skills?: string[];
  image?: string;
};

export const certifications: Certification[] = [
  {
    name: "Claude Certified Developer, Foundations",
    issuer: "Anthropic",
    issued: "Aug 2026",
    expires: "Aug 2027",
    credentialUrl:
      "https://www.credly.com/badges/349dcf68-0289-4aa4-bc93-db36d8de621f/public_url",
    blurb:
      "For developers who can build, integrate and ship production applications and agents on Claude using the Claude API, Claude Code, custom tools and MCP servers.",
    skills: ["Claude API", "Claude Code", "MCP servers"],
    image: "/certs/claude-certified-developer.png",
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    issued: "Mar 2026",
    credentialId: "uc66j6vuqecs",
    credentialUrl: "https://verify.skilljar.com/c/uc66j6vuqecs",
    blurb:
      "Agentic development with Claude Code: driving multi-step engineering work through tool use and the Model Context Protocol.",
    skills: ["Claude Skills", "MCP"],
    image: "/certs/claude-code-in-action.jpg",
  },
  {
    name: "Introduction to Agent Skills",
    issuer: "Anthropic",
    issued: "Mar 2026",
    credentialId: "pk474prkjtf8",
    credentialUrl: "https://verify.skilljar.com/c/pk474prkjtf8",
    blurb:
      "Building and packaging Agent Skills, the reusable capability units that extend what an agent can do.",
    skills: ["Agentic AI", "Claude Skills"],
    image: "/certs/agent-skills.jpg",
  },
  {
    name: "Kestra Fundamentals",
    issuer: "Kestra",
    credentialId: "YKXTMLod",
    blurb: "Declarative orchestration of data and workflow pipelines.",
    skills: ["Kestra", "Orchestration"],
  },
  {
    name: "SAP Certified Associate, Security Administrator",
    issuer: "SAP",
    issued: "Aug 2024",
    credentialUrl:
      "https://www.credly.com/badges/d750caf7-909d-40bc-b696-8a2052407dad/public_url",
    blurb:
      "Core SAP authorization and security concepts across S/4HANA Public and Private Edition.",
    skills: ["SAP S/4HANA", "Authorization"],
    image: "/certs/sap-security-administrator.png",
  },
];

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#certs", label: "Certified" },
  { href: "#stack", label: "Stack" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export const writingProfiles = [
  { label: "Hashnode", url: "https://hashnode.com/@ashusnapx" },
  { label: "Medium", url: "https://medium.com/@ashusnapx" },
  { label: "dev.to", url: "https://dev.to/ashusnapx" },
];
