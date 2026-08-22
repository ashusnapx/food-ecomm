/**
 * Single source of truth for identity, positioning and SEO.
 *
 * Everything the page renders AND everything the structured data emits reads
 * from here, so the JSON-LD Google sees can never drift from the copy a human
 * sees — which is exactly the consistency signal search engines reward.
 */

export const SITE_URL = "https://ashusnapx.vercel.app";

export const person = {
  name: "Ashutosh Kumar",
  handle: "ashusnapx",
  /** Primary keyword. This is the phrase the whole page is optimised for. */
  role: "Generative AI Engineer",
  /** Rotated in the hero. Each is a real, searched-for job title. */
  roles: [
    "Generative AI Engineer",
    "AI Application Engineer",
    "LLM & RAG Developer",
    "Full-Stack AI Engineer",
  ],
  headline:
    "I build production LLM applications — retrieval pipelines, multi-agent workflows and the full-stack products they ship inside.",
  email: "ashu.kumarexam@gmail.com",
  location: {
    city: "Bengaluru",
    region: "Karnataka",
    country: "India",
    countryCode: "IN",
  },
  currentEmployer: "Tata Consultancy Services",
  jobTitle: "Software Engineer",
  image: `${SITE_URL}/me.png`,
  resumeUrl:
    "https://drive.google.com/file/d/1QC2FPE0nrS45xwPMofP6TjlcABXAYpCE/view?usp=sharing",
  availability: "Open to Generative AI engineering roles",
} as const;

/**
 * Long-tail keyword set. Deliberately mixes the identity terms (name, handle)
 * with the capability terms someone would search when hiring for this work.
 */
export const keywords = [
  "Ashutosh Kumar",
  "ashusnapx",
  "Ashutosh Kumar GenAI Engineer",
  "Claude Certified Developer",
  "Anthropic certified developer India",
  "Generative AI Engineer India",
  "Generative AI Engineer portfolio",
  "AI Engineer Bengaluru",
  "LLM application developer",
  "RAG pipeline developer",
  "LangGraph developer",
  "AI agent developer",
  "Model Context Protocol MCP developer",
  "prompt engineering",
  "vector database engineer",
  "Next.js AI developer",
  "full stack AI engineer",
  "Gemini API developer",
  "OpenAI API developer",
  "hire GenAI engineer",
];

/** Headline numbers, split so the counter can animate the numeric part. */
export const stats = [
  { value: 15, suffix: "+", label: "Products shipped" },
  { value: 1000, suffix: "+", label: "DSA problems solved" },
  { value: 600, suffix: "+", label: "Engineers mentored" },
  { value: 3, suffix: "", label: "Years in production" },
];

/**
 * Hero spec sheet. Reads like the colophon on a piece of print — the facts a
 * recruiter scans for, set as data rather than prose.
 */
export const specSheet = [
  { key: "Role", value: "Generative AI Engineer" },
  { key: "Based", value: "Bengaluru, India \u00b7 remote-friendly" },
  { key: "Focus", value: "RAG \u00b7 agents \u00b7 AI product" },
  { key: "Now", value: "Software Engineer, TCS" },
  { key: "Recent", value: "Rank 1 \u2014 TCS AI Friday" },
  { key: "Status", value: "Open to GenAI roles" },
];

/**
 * The "how I work" pillars. This section is what LLM-based search engines
 * quote when asked "what does this person actually do" — so each answer is
 * self-contained and factual rather than adjective soup.
 */
export const pillars = [
  {
    id: "retrieval",
    tone: "accent" as const,
    title: "Retrieval & RAG",
    blurb:
      "Chunking strategies, embeddings and hybrid search wired into a retrieval layer that grounds every answer in real source documents instead of guessing.",
    tags: ["Embeddings", "Hybrid search", "Re-ranking", "Chunking"],
  },
  {
    id: "agents",
    tone: "blue" as const,
    title: "Agents & Orchestration",
    blurb:
      "Multi-step workflows built as explicit state machines with LangGraph — tool calling, structured outputs and human-in-the-loop checkpoints instead of one giant prompt.",
    tags: ["LangGraph", "Tool calling", "Structured output", "MCP"],
  },
  {
    id: "product",
    tone: "orange" as const,
    title: "AI-Native Product",
    blurb:
      "The model is a third of the work. I ship the streaming UI, the auth, the rate limits and the database that turn a demo notebook into something people can actually use.",
    tags: ["Next.js", "Streaming UI", "TypeScript", "Postgres"],
  },
  {
    id: "rigor",
    tone: "pink" as const,
    title: "Evaluation & Reliability",
    blurb:
      "Prompts get versioned, outputs get schemas, and behaviour gets checked against fixed cases — because 'it worked when I tried it' is not a release criterion.",
    tags: ["Prompt versioning", "Schema validation", "Regression cases"],
  },
];

/* -------------------------------------------------------------------------
   SKILL STACK
   Grouped the way an AI hiring manager reads a CV: model layer first,
   product layer second, fundamentals last.
   ------------------------------------------------------------------------- */

export type SkillGroup = {
  id: string;
  title: string;
  caption: string;
  skills: string[];
};

export const skillStack: SkillGroup[] = [
  {
    id: "genai",
    title: "Generative AI",
    caption: "The model layer",
    skills: [
      "LLM prompt orchestration",
      "Retrieval-Augmented Generation (RAG)",
      "LangGraph",
      "LangChain",
      "CopilotKit",
      "Multi-agent workflows",
      "Function / tool calling",
      "Structured outputs",
      "Google Gemini API",
      "Gemini Vision (multimodal)",
      "Model Context Protocol (MCP)",
      "Embeddings & vector search",
      "Voice AI / speech agents",
      "Mem0 (agent memory)",
      "Braintrust (LLM evals)",
      "Pydantic AI",
      "PageIndex retrieval",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    caption: "Day-to-day",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "C", "SQL", "ABAP"],
  },
  {
    id: "frontend",
    title: "AI Product & Frontend",
    caption: "Where the model meets a user",
    skills: [
      "Next.js 16 (App Router)",
      "React 19",
      "Server Components",
      "Streaming responses",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Redux Toolkit",
      "React Query",
      "React Native",
    ],
  },
  {
    id: "backend",
    title: "Backend & Data",
    caption: "What holds it up",
    skills: [
      "Node.js",
      "Express.js",
      "Streamlit",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "Supabase",
      "Appwrite",
      "Redis",
      "REST API design",
    ],
  },
  {
    id: "foundations",
    title: "Foundations",
    caption: "The part that does not go stale",
    skills: [
      "Data Structures & Algorithms",
      "System design",
      "NumPy",
      "Pandas",
      "Plotly",
      "Git & GitHub",
      "Vercel",
      "SEO & Core Web Vitals",
    ],
  },
];

/** Flat list for the marquee strip and for the JSON-LD `knowsAbout` field. */
export const marqueeSkills = [
  "RAG",
  "LangGraph",
  "LangChain",
  "Gemini",
  "OpenAI",
  "MCP",
  "Vector Search",
  "Embeddings",
  "Agents",
  "Voice AI",
  "LLM Evals",
  "Prompt Engineering",
  "Next.js",
  "TypeScript",
  "Python",
  "React",
  "Node.js",
  "PostgreSQL",
  "Tailwind",
  "Streamlit",
];

/* -------------------------------------------------------------------------
   PROJECTS
   Ordered AI-first on purpose: the first screen of the work section decides
   what a recruiter thinks you are.
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
  featured?: boolean;
};

export const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "All work",
  genai: "Generative AI",
  fullstack: "Full-stack",
  mobile: "Mobile",
};

/**
 * One flat ink per category. Used for the filter marker and for the row wipe,
 * so colour carries information instead of decorating.
 */
export const categoryTone: Record<ProjectCategory | "all", string> = {
  all: "var(--fg)",
  genai: "var(--accent)",
  fullstack: "var(--blue)",
  mobile: "var(--orange)",
};

/** Text colour that stays legible on top of each category's fill. */
export const categoryToneInk: Record<ProjectCategory | "all", string> = {
  all: "var(--bg)",
  genai: "var(--accent-ink)",
  fullstack: "var(--blue-ink)",
  mobile: "var(--orange-ink)",
};

export const projects: ShowcaseProject[] = [
  {
    id: "nexus-cold-chain",
    name: "Nexus Cold Chain AI",
    tagline: "Agentic cold-chain safety — TCS AI Friday, Rank 1",
    description:
      "An agentic system that predicts vaccine cold-chain breaches before they happen and drives the response. Three LangChain agents split sensor analysis, root cause and risk prediction; Gmail-MCP dispatches incident notifications over OAuth 2.0; Mem0 and PageIndex carry conversational memory; Braintrust and Pydantic AI keep the outputs checked and schema-valid.",
    category: "genai",
    tags: ["LangChain", "Multi-agent", "MCP", "Braintrust"],
    year: "2026",
    live: "https://www.linkedin.com/posts/ashusnapx_tcs-aifriday-tcsaifriday-share-7492162677893660672-6l24/",
    featured: true,
  },
  {
    id: "vaaniverse",
    name: "VaaniVerse",
    tagline: "Voice-AI contact centre simulator",
    description:
      "A training simulator for contact-centre agents: AI personas with emotions, memory and hidden objectives play the customer over live voice, while an AI coach scores the trainee on empathy, active listening, ownership and compliance and replays the call with a transcript-level QA breakdown. Built on Vaani Research Labs' voice APIs.",
    category: "genai",
    tags: ["Voice AI", "TypeScript", "AI personas", "Evaluation"],
    year: "2026",
    image: "/vaani/vaaniverse-dashboard.jpg",
    github: "https://github.com/ashusnapx/contact-center-simulator",
    featured: true,
  },
  {
    id: "postgen",
    name: "PostGen",
    tagline: "Multi-agent LinkedIn ghostwriter",
    description:
      "An AI-driven LinkedIn post generator built on LLM prompt orchestration. A multi-agent workflow splits content planning from tone adaptation, so each stage has one job and one prompt to debug.",
    category: "genai",
    tags: ["Gemini", "Multi-agent", "Next.js", "TypeScript"],
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
    github: "https://github.com/ashusnapx/linkedin-post-generator",
    live: "https://postgen-ashusnapx.vercel.app/",
    featured: true,
  },
  {
    id: "ai-book-explorer",
    name: "AI Book Explorer",
    tagline: "Conversational discovery over a book corpus",
    description:
      "Book discovery and summarisation driven by a conversational agent. LangGraph holds the conversation state and CopilotKit surfaces it in-product, backed by Prisma and PostgreSQL.",
    category: "genai",
    tags: ["LangGraph", "CopilotKit", "Prisma", "PostgreSQL"],
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1600&auto=format&fit=crop",
    github: "https://github.com/ashusnapx/ai-book-explorer",
    featured: true,
  },
  {
    id: "genai-apps-generator",
    name: "GenAI Apps Generator",
    tagline: "Scaffolding for AI-powered apps",
    description:
      "A generator that turns a described idea into a working AI app shell — Gemini Pro for generation, Clerk for auth, Next.js for everything the user touches.",
    category: "genai",
    tags: ["Gemini Pro", "Next.js", "Clerk", "Tailwind"],
    year: "2024",
    image:
      "https://i.postimg.cc/8cjDyyMk/Screenshot-2024-05-13-at-3-36-02-AM.png",
    github: "https://github.com/ashusnapx/genai-assignment-frontend",
    live: "https://genai-assignment.vercel.app/",
    featured: true,
  },
  {
    id: "know-your-food",
    name: "Know About Your Food",
    tagline: "Multimodal nutrition analysis",
    description:
      "Point a camera at a meal and get its ingredients back. Gemini Vision Pro handles the image reasoning; Streamlit keeps the interface out of the way.",
    category: "genai",
    tags: ["Gemini Vision", "Multimodal", "Python", "Streamlit"],
    year: "2024",
    image:
      "https://i.postimg.cc/nz3zBkKx/Screenshot-2024-01-22-at-11-46-59-PM.png",
    github: "https://github.com/ashusnapx/know-the-ingredient",
    live: "https://know-your-food-ashusnapx.streamlit.app/",
    featured: true,
  },
  {
    id: "coal-mines-laws",
    name: "AI Coal Mines Laws",
    tagline: "Domain assistant for mining regulation",
    description:
      "A grounded assistant over India's coal mining legal framework — the kind of narrow, high-stakes domain where a general chatbot is worse than useless without retrieval.",
    category: "genai",
    tags: ["Gemini Pro", "Domain RAG", "Python", "Streamlit"],
    year: "2024",
    image:
      "https://i.postimg.cc/6pGxntLp/Screenshot-2024-01-22-at-3-33-22-PM.png",
    github: "https://github.com/ashusnapx/gemini-mining",
    live: "https://dgms-gemini-ashusnapx.streamlit.app/",
  },
  {
    id: "gemini-chatbot",
    name: "Gemini Chatbot",
    tagline: "Streaming conversational assistant",
    description:
      "A general-purpose assistant on Google Generative AI with streamed responses and conversation memory — the reference implementation I reuse when starting a new chat surface.",
    category: "genai",
    tags: ["Google GenAI", "Streaming", "Python", "Streamlit"],
    year: "2024",
    image:
      "https://i.postimg.cc/q7brn5HL/Screenshot-2024-01-21-at-11-18-23-AM.png",
    github: "https://github.com/ashusnapx/gemini-chatbot",
    live: "https://ashusnapx-gemini-chatbot-main-b5ybtn.streamlit.app/",
  },
  {
    id: "instagram-caption",
    name: "AI Caption Generator",
    tagline: "Image-to-copy in one hop",
    description:
      "Upload a photo, get captions that match it. A compact demonstration of vision-grounded generation with tone controls.",
    category: "genai",
    tags: ["Gemini Vision", "Python", "Streamlit"],
    year: "2024",
    image:
      "https://i.postimg.cc/hjvk4njn/Screenshot-2024-01-22-at-3-42-41-PM.png",
    github: "https://github.com/ashusnapx/ai-instagram-caption",
    live: "https://ai-instagram-caption-ashusnapx.streamlit.app/",
  },
  {
    id: "creator-tools",
    name: "Creator Tools AI",
    tagline: "An AI toolkit for content creators",
    description:
      "A suite of AI-assisted authoring tools behind one interface, built with Next.js and shadcn/ui.",
    category: "genai",
    tags: ["Next.js", "shadcn/ui", "Tailwind"],
    year: "2024",
    image:
      "https://i.postimg.cc/13WPDhLn/Screenshot-2024-05-13-at-3-30-42-AM.png",
    github: "https://github.com/ashusnapx/creator-tool-ai",
    live: "https://creator-tool-ai.vercel.app/",
  },
  {
    id: "ai-joke-generator",
    name: "Jokes Generator",
    tagline: "Prompt-tuning, with a punchline",
    description:
      "A small app that turned into a good excuse to study how prompt phrasing changes output quality on Gemini Pro. Auth via Clerk.",
    category: "genai",
    tags: ["Gemini Pro", "Next.js", "Clerk"],
    year: "2024",
    image:
      "https://i.postimg.cc/nz9Q61v2/Screenshot-2024-05-13-at-3-34-14-AM.png",
    github: "https://github.com/ashusnapx/ai-joke-generator",
    live: "https://ai-joke-generator-zeta.vercel.app/",
  },
  {
    id: "habit-ai",
    name: "Habit.AI",
    tagline: "Productivity tracking that sticks",
    description:
      "Organises study material into subjects and chapters, tracks progress and visualises streaks. Next.js on the front, Appwrite behind it.",
    category: "fullstack",
    tags: ["Next.js", "Appwrite", "shadcn/ui"],
    year: "2024",
    image:
      "https://i.postimg.cc/sgx4bKbg/Screenshot-2024-08-26-at-1-54-25-AM.png",
    github: "https://github.com/ashusnapx/habit-builder",
    live: "https://habit-ai-lake.vercel.app/",
  },
  {
    id: "airbnb-clone",
    name: "Airbnb Clone",
    tagline: "Listings, auth and booking flow",
    description:
      "A full rebuild of the core Airbnb loop — OAuth sign-in, property listings and bookings — on React and Supabase.",
    category: "fullstack",
    tags: ["React", "Supabase", "OAuth"],
    year: "2023",
    image:
      "https://i.postimg.cc/nc7XGF4S/Screenshot-2023-10-07-at-1-03-54-AM.png",
    github: "https://github.com/ashusnapx/airbnb-x-oyo",
    live: "https://airbnb-by-ashusnapx.vercel.app/",
  },
  {
    id: "swiggie",
    name: "Swiggie",
    tagline: "Food ordering, end to end",
    description:
      "A food ordering app with dynamic routing and Redux Toolkit state management, built while working through React in depth.",
    category: "fullstack",
    tags: ["React", "Redux Toolkit", "Tailwind"],
    year: "2023",
    image:
      "https://i.postimg.cc/8zd9ntRC/Screenshot-2023-08-30-at-4-39-38-PM.png",
    github:
      "https://github.com/ashusnapx/react-final-revision/tree/main/DAY%20-%204",
    live: "https://swiggie.vercel.app/",
  },
  {
    id: "yt-analytics",
    name: "YouTube Playlist Analytics",
    tagline: "How long is that course, really?",
    description:
      "Computes total runtime and per-video breakdowns for any public playlist. Django on the backend, revamped UI on the front.",
    category: "fullstack",
    tags: ["Python", "Django"],
    year: "2023",
    image:
      "https://i.postimg.cc/L6dbbDP4/Screenshot-2023-10-07-at-1-10-10-AM.png",
    github: "https://github.com/ashusnapx/youtube-playlist-length",
    live: "https://yt-playlist-length-4nzq.onrender.com/",
  },
  {
    id: "secourse",
    name: "Secourse",
    tagline: "Study planning for aspirants",
    description:
      "A mobile app that breaks a syllabus into subjects and chapters and tracks progress against it. React Native with Nativewind, Appwrite for data.",
    category: "mobile",
    tags: ["React Native", "Nativewind", "Appwrite"],
    year: "2024",
    image: "https://i.postimg.cc/k4jTV467/Untitled-design.png",
    github: "https://github.com/ashusnapx/abhi-start-upsc",
  },
];

/* -------------------------------------------------------------------------
   RECOGNITION
   ------------------------------------------------------------------------- */

export type Award = {
  id: string;
  rank: string;
  event: string;
  season: string;
  year: string;
  /** Ordered stages of the competition, with the furthest reached last. */
  progression: { stage: string; result: string }[];
  project: string;
  summary: string;
  /** Framed in the vocabulary a GenAI hiring manager screens for. */
  highlights: { label: string; detail: string }[];
  stack: string[];
  team: string[];
  postUrl?: string;
  /** Drop a file in /public and set the path here to show a photo. */
  image?: string;
};

export const awards: Award[] = [
  {
    id: "tcs-ai-friday",
    rank: "Rank 01",
    event: "TCS AI Friday",
    season: "Season 2",
    year: "2026",
    progression: [
      { stage: "Weekly hackathon", result: "Rank 1" },
      { stage: "Semi-finals", result: "Qualified" },
      { stage: "Regionals", result: "Reached" },
    ],
    project: "Nexus Cold Chain AI",
    summary:
      "An agentic system for vaccine cold-chain safety: it predicts when a shipment is about to breach temperature, explains why, and drives the incident response — rather than just raising an alarm and leaving a human to work it out.",
    highlights: [
      {
        label: "Multi-agent orchestration",
        detail:
          "Three specialised LangChain agents — IoT sensor analyser, root-cause analyser and risk-prediction analyser — each owning one job instead of one prompt owning all three.",
      },
      {
        label: "Unified data schema",
        detail:
          "A single schema joining IoT sensor telemetry, vehicles, warehouses, weather and mapping data, so the agents reason over one consistent view of the shipment.",
      },
      {
        label: "Risk prediction",
        detail:
          "An ML model classifying every shipment as Normal, Partial or Critical, which is what turns raw telemetry into a decision the response system can act on.",
      },
      {
        label: "Incident response",
        detail:
          "On a breach the system returns remaining repair time, the nearest viable warehouse alternatives and a packaging remedy — a recommendation, not just a red flag.",
      },
      {
        label: "Tool use over MCP",
        detail:
          "Gmail-MCP behind OAuth 2.0 so the agent dispatches incident notifications itself, using the Model Context Protocol rather than a bespoke integration.",
      },
      {
        label: "Memory & retrieval",
        detail:
          "A conversational layer built on PageIndex for document retrieval and Mem0 for contextual memory across turns.",
      },
      {
        label: "Evaluation & validation",
        detail:
          "Braintrust for LLM evaluations and Pydantic AI for schema-validated outputs — the difference between a demo and something you would run unattended.",
      },
    ],
    stack: [
      "LangChain",
      "Multi-agent",
      "MCP",
      "Mem0",
      "PageIndex",
      "Braintrust",
      "Pydantic AI",
      "OAuth 2.0",
      "IoT telemetry",
    ],
    team: [
      "Vishnu Shanker Sharma",
      "Shashank N U",
      "Namratha S",
      "Sachi Motghare",
    ],
    postUrl:
      "https://www.linkedin.com/posts/ashusnapx_tcs-aifriday-tcsaifriday-share-7492162677893660672-6l24/",
    image: "/tcs-ai-friday.jpg",
  },
];

/* -------------------------------------------------------------------------
   CERTIFICATIONS
   Mirrors the LinkedIn "Licenses & certifications" section.

   Only add entries that exist and are verifiable — a fabricated credential is
   the fastest way to lose an offer. The section hides itself when empty.
   ------------------------------------------------------------------------- */

export type Certification = {
  name: string;
  issuer: string;
  /** "MMM YYYY", e.g. "Mar 2026". Empty when the issuer does not date it. */
  issued?: string;
  expires?: string;
  credentialId?: string;
  credentialUrl?: string;
  /** Issuer's own wording where one exists — not a paraphrase. */
  blurb?: string;
  skills?: string[];
  /** Artwork under /public/certs. Square Credly badge vs landscape document. */
  image?: string;
  artwork?: "badge" | "certificate";
};

/**
 * Ordered by relevance to generative-AI hiring, not by date. Every entry was
 * checked against its issuer before being listed: the two Credly badges and
 * both Anthropic certificates resolve to pages naming Ashutosh Kumar.
 */
export const certifications: Certification[] = [
  {
    name: "Claude Certified Developer — Foundations",
    issuer: "Anthropic",
    issued: "Aug 2026",
    expires: "Aug 2027",
    credentialUrl:
      "https://www.credly.com/badges/349dcf68-0289-4aa4-bc93-db36d8de621f/public_url",
    blurb:
      "Designed for developers who can build, integrate and ship production applications and agents on Claude using the Claude API, Claude Code, custom tools and MCP servers.",
    skills: ["Claude API", "Claude Code", "Custom tools", "MCP servers"],
    image: "/certs/claude-certified-developer.png",
    artwork: "badge",
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    issued: "Mar 2026",
    credentialId: "uc66j6vuqecs",
    credentialUrl: "https://verify.skilljar.com/c/uc66j6vuqecs",
    blurb:
      "Agentic development with Claude Code — driving multi-step engineering work through tool use and the Model Context Protocol.",
    skills: ["Claude Skills", "Model Context Protocol (MCP)"],
    image: "/certs/claude-code-in-action.jpg",
    artwork: "certificate",
  },
  {
    name: "Introduction to Agent Skills",
    issuer: "Anthropic",
    issued: "Mar 2026",
    credentialId: "pk474prkjtf8",
    credentialUrl: "https://verify.skilljar.com/c/pk474prkjtf8",
    blurb:
      "Building and packaging Agent Skills — the reusable capability units that extend what an agent can do.",
    skills: ["Agentic AI Development", "Claude Skills"],
    image: "/certs/agent-skills.jpg",
    artwork: "certificate",
  },
  {
    name: "Kestra Fundamentals",
    issuer: "Kestra",
    credentialId: "YKXTMLod",
    blurb:
      "Declarative orchestration of data and workflow pipelines with Kestra.",
    skills: ["Kestra", "Workflow orchestration"],
  },
  {
    name: "SAP Certified Associate — Security Administrator",
    issuer: "SAP",
    issued: "Aug 2024",
    credentialUrl:
      "https://www.credly.com/badges/d750caf7-909d-40bc-b696-8a2052407dad/public_url",
    blurb:
      "Core SAP authorization and security concepts across S/4HANA Public and Private Edition, applied as a security administrator.",
    skills: ["SAP S/4HANA", "Authorization", "System security"],
    image: "/certs/sap-security-administrator.png",
    artwork: "badge",
  },
];

/* -------------------------------------------------------------------------
   FEATURED POSTS
   LinkedIn blocks automated profile access (HTTP 999) and its robots.txt
   forbids crawling, so this list cannot be generated — individual post URLs
   are added here by hand.
   ------------------------------------------------------------------------- */

export type FeaturedPost = {
  id: string;
  title: string;
  blurb: string;
  kind: "Hackathon" | "Meetup" | "Talk" | "Announcement";
  date: string;
  url: string;
  /** Lead image, path under /public. */
  image?: string;
  /** Extra photos. Rendered as a strip beneath the lead image. */
  gallery?: string[];
  tags?: string[];
};

export const featuredPosts: FeaturedPost[] = [
  {
    id: "tcs-ai-friday-regionals",
    title: "Nexus Cold Chain AI — TCS AI Friday Regionals",
    blurb:
      "Breakdown of the agentic cold-chain system my team built for TCS AI Friday Season 2: three LangChain agents, Gmail-MCP tool calling, Mem0 memory and Braintrust evals.",
    kind: "Hackathon",
    date: "2026-08-08",
    url: "https://www.linkedin.com/posts/ashusnapx_tcs-aifriday-tcsaifriday-share-7492162677893660672-6l24/",
    image: "/tcs-ai-friday.jpg",
    tags: ["TCS AI Friday", "Multi-agent", "MCP"],
  },
  {
    id: "vaani-research-labs-hackathon",
    title: "First hackathon — and the prototype that came after",
    blurb:
      "My first hackathon/meetup, hosted by Vaani Research Labs and AI Learn Circle. I ran out of time and never got the idea working on the day — but I pitched it to Tushar Shinde, Vaani's co-founder and CEO, and he liked the concept. I went straight back and built it: VaaniVerse, an AI contact-centre simulator on Vaani's voice APIs.",
    kind: "Hackathon",
    date: "2026-07-19",
    url: "https://www.linkedin.com/posts/ashusnapx_hackathon-voiceai-vaani-activity-7484367382568775680-U6sx",
    image: "/vaani/meetup-1.jpg",
    gallery: ["/vaani/meetup-2.jpg", "/vaani/meetup-3.jpg"],
    tags: ["Vaani Research Labs", "Voice AI", "Build in public"],
  },
];

/* -------------------------------------------------------------------------
   NAVIGATION
   ------------------------------------------------------------------------- */

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#recognition", label: "Recognition" },
  { href: "#certifications", label: "Certified" },
  { href: "#stack", label: "Stack" },
  { href: "#github", label: "GitHub" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

/** Where the articles come from. The feeds themselves are read server-side. */
export const writingProfiles = [
  { label: "Hashnode", url: "https://hashnode.com/@ashusnapx" },
  { label: "Medium", url: "https://medium.com/@ashusnapx" },
  { label: "LinkedIn", url: "https://linkedin.com/in/ashusnapx" },
];

/* -------------------------------------------------------------------------
   FAQ
   Question-and-answer pairs are the format AI search engines quote most
   readily, and they earn a FAQPage rich result in classic search.
   ------------------------------------------------------------------------- */

export const faqs = [
  {
    q: "Who is Ashutosh Kumar?",
    a: "Ashutosh Kumar (ashusnapx) is a Generative AI Engineer and full-stack developer based in India. He builds LLM-powered applications — retrieval-augmented generation pipelines, multi-agent workflows and the production web products they ship inside — and currently works as a Software Engineer at Tata Consultancy Services.",
  },
  {
    q: "What does Ashutosh Kumar build as a Generative AI Engineer?",
    a: "He builds RAG systems that ground model answers in real documents, multi-agent workflows orchestrated with LangGraph, multimodal applications on Gemini Vision, and the full-stack Next.js and Python products that wrap them — including PostGen, AI Book Explorer and GenAI Apps Generator.",
  },
  {
    q: "What is Ashutosh Kumar's GenAI tech stack?",
    a: "Python and TypeScript as core languages; LangGraph, LangChain and CopilotKit for agent orchestration; Google Gemini and OpenAI APIs for generation; embeddings and vector search for retrieval; and Next.js, React, Node.js, PostgreSQL and Streamlit for the surrounding product.",
  },
  {
    q: "Is Ashutosh Kumar available for hire?",
    a: "Yes. He is open to Generative AI engineering roles and selected freelance work. The fastest way to reach him is by email at ashu.kumarexam@gmail.com or through LinkedIn at linkedin.com/in/ashusnapx.",
  },
  {
    q: "What is Ashutosh Kumar's engineering background?",
    a: "He has solved over 1,000 data structures and algorithms problems, mentored more than 600 students as a Teaching Assistant at Coding Ninjas with a 4.8/5 rating, shipped frontend work at AI Caller.io, and now develops enterprise SAP applications at Tata Consultancy Services for a European client.",
  },
  {
    q: "What certifications does Ashutosh Kumar hold?",
    a: "He is a Claude Certified Developer \u2014 Foundations (Anthropic, 2026), covering production applications and agents built on the Claude API, Claude Code, custom tools and MCP servers. He has also completed Anthropic's Claude Code in Action and Introduction to Agent Skills courses, Kestra Fundamentals, and is an SAP Certified Associate \u2014 Security Administrator. Every credential links to its issuer for verification.",
  },
  {
    q: "Has Ashutosh Kumar won any AI hackathons?",
    a: "Yes. His team placed Rank 1 in a TCS AI Friday Season 2 weekly hackathon, qualified for the semi-finals and went on to the regionals, with Nexus Cold Chain AI — an agentic system for vaccine cold-chain safety built on three LangChain agents, Gmail-MCP tool calling over OAuth 2.0, Mem0 contextual memory, PageIndex retrieval, Braintrust LLM evaluations and Pydantic AI schema validation.",
  },
];
