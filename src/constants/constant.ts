import { AiFillDatabase } from "react-icons/ai";
import { LucideHammer } from "lucide-react";
import {
  SiPandas,
  SiPlotly,
  SiNumpy,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiCplusplus,
  SiC,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiBun,
  SiDataverse,
  SiBackendless,
  SiPeakdesign,
  SiCodepen,
  SiNextdotjs,
} from "react-icons/si";

import {
  LucideBadge,
  LucideMousePointerClick,
  LucidePhoneCall,
} from "lucide-react";

import {
  SiGithub,
  SiHashnode,
  SiInstagram,
  SiLeetcode,
  SiLinkedin,
  SiMedium,
  SiTwitter,
} from "react-icons/si";

export const projectsData = [
  {
    id: 0,
    name: "Secourse",
    imageSrc: "https://i.postimg.cc/k4jTV467/Untitled-design.png",
    techStacks: "React Native, Nativewind, Appwrite",
    description:
      "Secourse is a mobile app designed to help students manage their study schedules effectively. By organizing tasks into subjects and chapters, it tracks progress and visualizes achievements, using a smooth and intuitive UI built with cutting-edge tech.",
    githubLink: "https://github.com/ashusnapx/abhi-start-upsc",
    liveLink: "https://ashusnapx.vercel.app/",
  },
  {
    id: 0,
    name: "Habit.AI",
    imageSrc:
      "https://i.postimg.cc/sgx4bKbg/Screenshot-2024-08-26-at-1-54-25-AM.png",
    techStacks: "NextJS 14.6.2, Tailwind CSS, Appwrite, Shadcn",
    description:
      "Habit.AI is designed to boost productivity by helping users organize their tasks into subjects and chapters, track their progress, and visualize their achievements. Built with a modern tech stack, it offers a seamless user experience with powerful features.",
    githubLink: "https://github.com/ashusnapx/habit-builder",
    liveLink: "https://habit-ai-lake.vercel.app/",
  },
  {
    id: 0,
    name: "Fooder",
    imageSrc: "https://i.postimg.cc/Z5kjQqXt/GNJ5-X53-Wc-AAps-I.jpg",
    techStacks:
      "NextJS, Tailwind CSS, ClerkJS (For authentication), Swiggy API",
    description:
      "Fooder is a food delivery app that integrates with the Swiggy API, allowing users to order meals with ease. The app features real-time food tracking, authentication via ClerkJS, and a sleek UI with Tailwind CSS.",
    githubLink:
      "https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg",
    liveLink:
      "https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg",
  },
  {
    id: 0,
    name: "GenAI Apps Generator (Frontend)",
    imageSrc:
      "https://i.postimg.cc/8cjDyyMk/Screenshot-2024-05-13-at-3-36-02-AM.png",
    techStacks:
      "NextJS, Tailwind CSS, ClerkJS (For authentication), Google Gemini Pro API",
    description:
      "GenAI Apps Generator simplifies the creation of AI-powered applications by providing an easy-to-use interface for generating AI apps. The frontend leverages NextJS for smooth performance, along with Google Gemini Pro API for AI functionalities.",
    githubLink: "https://github.com/ashusnapx/genai-assignment-frontend",
    liveLink: "https://genai-assignment.vercel.app/",
  },
  {
    id: 0,
    name: "Jokes Generator (Frontend)",
    imageSrc:
      "https://i.postimg.cc/nz9Q61v2/Screenshot-2024-05-13-at-3-34-14-AM.png",
    techStacks:
      "NextJS, Tailwind CSS, ClerkJS (For authentication), Google Gemini Pro API",
    description:
      "The Jokes Generator uses Google Gemini Pro API to generate creative and hilarious jokes. It features user authentication via ClerkJS, and its responsive design makes it easy to enjoy on any device.",
    githubLink: "https://github.com/ashusnapx/ai-joke-generator",
    liveLink: "https://ai-joke-generator-zeta.vercel.app/",
  },
  {
    id: 0,
    name: "Creator tools AI (Frontend)",
    imageSrc:
      "https://i.postimg.cc/13WPDhLn/Screenshot-2024-05-13-at-3-30-42-AM.png",
    techStacks: "NextJS, Tailwind CSS, Shadcn UI",
    description:
      "Creator tools AI is a platform that offers AI-powered features for content creators. Built with NextJS and styled with Tailwind CSS and Shadcn UI, the app provides intuitive tools to enhance the content creation process.",
    githubLink: "https://github.com/ashusnapx/creator-tool-ai",
    liveLink: "https://creator-tool-ai.vercel.app/",
  },
  {
    id: 0,
    name: "Know About Your Food",
    imageSrc:
      "https://i.postimg.cc/nz3zBkKx/Screenshot-2024-01-22-at-11-46-59-PM.png",
    techStacks: "Python, Google Gemini Vision Pro, Streamlit",
    description:
      "Know About Your Food helps users analyze the ingredients in their meals using the Google Gemini Vision Pro API. It provides detailed nutritional information and suggestions for healthier alternatives, all through a Python and Streamlit-based platform.",
    githubLink: "https://github.com/ashusnapx/know-the-ingredient",
    liveLink: "https://know-your-food-ashusnapx.streamlit.app/",
  },
  {
    id: 0,
    name: "AI Instagram Caption Generator",
    imageSrc:
      "https://i.postimg.cc/hjvk4njn/Screenshot-2024-01-22-at-3-42-41-PM.png",
    techStacks: "Python, Google Gemini Vision Pro, Streamlit",
    description:
      "AI Instagram Caption Generator helps users craft creative and engaging captions for their Instagram posts, powered by Google Gemini Vision Pro API. It's a user-friendly tool with seamless functionality, built using Python and Streamlit.",
    githubLink: "https://github.com/ashusnapx/ai-instagram-caption",
    liveLink: "https://ai-instagram-caption-ashusnapx.streamlit.app/",
  },
  {
    id: 1,
    name: "AI Coal Mines Laws",
    imageSrc:
      "https://i.postimg.cc/6pGxntLp/Screenshot-2024-01-22-at-3-33-22-PM.png",
    techStacks: "Python, Google Gemini Pro, Streamlit",
    description:
      "AI Coal Mines Laws is an AI-powered application that assists in navigating complex coal mining regulations. Using Google Gemini Pro, it provides a detailed breakdown of the legal frameworks surrounding coal mining in an interactive manner.",
    githubLink: "https://github.com/ashusnapx/gemini-mining",
    liveLink: "https://dgms-gemini-ashusnapx.streamlit.app/",
  },
  {
    id: 2,
    name: "Chatbot",
    imageSrc:
      "https://i.postimg.cc/q7brn5HL/Screenshot-2024-01-21-at-11-18-23-AM.png",
    techStacks: "Python, Google Generative AI, Streamlit",
    description:
      "Chatbot is an interactive assistant built using Google Generative AI and Streamlit, capable of holding meaningful conversations, answering queries, and providing support across various topics.",
    githubLink: "https://github.com/ashusnapx/gemini-chatbot",
    liveLink: "https://ashusnapx-gemini-chatbot-main-b5ybtn.streamlit.app/",
  },
  {
    id: 3,
    name: "Airbnb Clone",
    imageSrc:
      "https://i.postimg.cc/nc7XGF4S/Screenshot-2023-10-07-at-1-03-54-AM.png",
    techStacks: "React, Tailwind CSS, Supabase, OAuth",
    description:
      "Airbnb Clone replicates the core functionalities of Airbnb, including user authentication, property listing, and booking. Built with React, it integrates Supabase for backend services and OAuth for user login.",
    githubLink: "https://github.com/ashusnapx/airbnb-x-oyo",
    liveLink: "https://airbnb-by-ashusnapx.vercel.app/",
  },
  {
    id: 4,
    name: "Swiggie - Food Ordering App",
    imageSrc:
      "https://i.postimg.cc/8zd9ntRC/Screenshot-2023-08-30-at-4-39-38-PM.png",
    techStacks:
      "React, Tailwind CSS, React router dom, Redux toolkit, [Please enable CORS]",
    description:
      "Swiggie is a food ordering app inspired by Swiggy, featuring dynamic routing, state management with Redux, and sleek UI with Tailwind CSS. The app allows users to browse, order, and track meals seamlessly.",
    githubLink:
      "https://github.com/ashusnapx/react-final-revision/tree/main/DAY%20-%204",
    liveLink: "https://swiggie.vercel.app/",
  },
  {
    id: 5,
    name: "Youtube Playlist Checklist",
    imageSrc:
      "https://i.postimg.cc/Gpp3VdDC/Screenshot-2023-10-01-at-1-11-58-AM.png", // Replace with actual image URL
    techStacks: "React, Tailwind CSS",
    // description: 'Another project description.',
    githubLink: "https://github.com/ashusnapx/checklist-app",
    liveLink: "https://youtube-playlist-checklist.vercel.app/",
  },
  {
    id: 6,
    name: "Youtube Playlist Analytics",
    imageSrc:
      "https://i.postimg.cc/L6dbbDP4/Screenshot-2023-10-07-at-1-10-10-AM.png", // Replace with actual image URL
    techStacks: "Python, Django, [Revamped UI]",
    // description: 'Another project description.',
    githubLink: "https://github.com/ashusnapx/youtube-playlist-length",
    liveLink: "https://yt-playlist-length-4nzq.onrender.com/",
  },
  {
    id: 7,
    name: "Portfolio Website",
    imageSrc:
      "https://i.postimg.cc/mrLXp9yf/Screenshot-2023-08-30-at-4-44-36-PM.png", // Replace with actual image URL
    techStacks: "React, Tailwind CSS, React router dom",
    // description: 'Another project description.',
    githubLink:
      "https://github.com/ashusnapx/portfolio-website/tree/main/portfolio",
    liveLink: "https://ashusnapx.vercel.app/",
  },
  {
    id: 7,
    name: "Restaurant Website",
    imageSrc:
      "https://i.postimg.cc/BQ7BZDJC/Screenshot-2023-08-30-at-4-43-05-PM.png", // Replace with actual image URL
    techStacks: "HTML, CSS",
    // description: 'Another project description.',
    githubLink: "https://github.com/ashusnapx/ashufoodlove.github.io",
    liveLink: "https://ashusnapx.github.io/ashufoodlove.github.io/",
  },
];

export const linksData = [
  {
    name: "Leetcode",
    link: "https://leetcode.com/dollarSign/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/2560px-LeetCode_Logo_black_with_text.svg.png",
    description:
      "Contest rating: 1452 | Questions solved: 204+ | Contests given: 27 --> Its an online coding platform which offers various level problems. ",
  },
  {
    name: "Coding Ninjas",
    link: "https://www.codingninjas.com/studio/profile/ashusnapx",
    logo: "https://asset.brandfetch.io/idQVGbrvGL/idFrWdCkB5.png",
    description:
      "Online coding and programming courses platform and i also worked as teaching assistant.",
  },
  {
    name: "Github",
    link: "https://github.com/ashusnapx",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png",
    description:
      "Web-based platform for version control and collaboration on software projects. Love this tool.",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashusnapx/",
    logo: "https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png",
    description:
      "Professional networking platform for connecting with colleagues and potential employers. ",
  },
  {
    name: "X (Previously Twitter)",
    link: "https://twitter.com/ashusnapx",
    logo: "https://img.freepik.com/premium-vector/twitter-new-logo-twitter-x-twitter-logo-vinnitsa-ukraine-july-25-2023_230281-303.jpg?w=2000",
    description:
      "Love this platforms due to its networking capabilities. And i am very active here, beacause of people.",
  },
  {
    name: "Medium",
    link: "https://medium.com/@ashusnapx",
    logo: "https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png",
    description:
      "Blogging platform for sharing articles and stories on various topics. I love writing and express my thoughts while learning.",
  },
  {
    name: "Hashnode",
    link: "https://hashnode.com/@ashusnapx",
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1675531271955/ALEtNA1cM.png?auto=compress",
    description:
      "Community-driven platform for developers to write and share technical articles. ",
  },
  // ... (other links)
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: SiCodepen,
    skills: [
      { icon: SiC, label: "C" },
      { icon: SiCplusplus, label: "C++" },
      { icon: SiPython, label: "Python" },
      { icon: SiJavascript, label: "JavaScript" },
      { icon: SiTypescript, label: "Typescript" },
    ],
  },
  {
    title: "Frontend Development",
    icon: SiPeakdesign,
    skills: [
      { icon: SiHtml5, label: "HTML/HTML5" },
      { icon: SiCss3, label: "CSS/CSS3" },
      { icon: SiReact, label: "ReactJS" },
      { icon: SiNextdotjs, label: "NextJS" },
      { icon: SiTailwindcss, label: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend Development",
    icon: SiBackendless,
    skills: [
      { icon: SiNodedotjs, label: "Node.js" },
      { icon: SiExpress, label: "Express.js" },
      { icon: SiMongodb, label: "MongoDB" },
      { icon: SiBun, label: "Bun.js" },
    ],
  },
  {
    title: "Data Analysis",
    icon: AiFillDatabase,
    skills: [
      { icon: SiNumpy, label: "Numpy" },
      { icon: SiPandas, label: "Pandas" },
      { icon: SiDataverse, label: "Bokeh" },
      { icon: SiPlotly, label: "Plotly" },
    ],
  },
];

export const navigationItems = [
  { to: "/skills", text: "SKILLS", icon: LucideHammer },
  { to: "/projects", text: "PROJECTS", icon: LucideBadge },
  {
    to: "/important-links",
    text: "IMPORTANT LINKS",
    icon: LucideMousePointerClick,
  },
  // { to: '/qualifications', text: 'QUALIFICATIONS', icon: LucideSchool },
  { to: "/contact", text: "CONTACT", icon: LucidePhoneCall },
];

export const internshipData = [
  {
    role: "Frontend Developer",
    companyName: "AI Caller.io",
    fromDate: "2023-12-11",
    toDate: "2024-01-11",
    modeOfWork: "Internship, Remote",
    workDone: [
      "Implemented upload CSV feature to trigger bulk calls",
      "Migrated app from client side to server side rendering",
      "Integrated hashnodes headless CMS blog feature for better SEO",
      "Improved call template form with tooltips for better user experience",
      "Integrated Tolt for affiliate marketing",
    ],
    TechStack: [
      "NextJS",
      "ReactJS",
      "Redux Toolkit",
      "React Query",
      "Typescript",
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
      "Solved more than 1000 questions related to C++, Data structures and algorithm.",
      "Mentored and assisted more than 600 students in solving coding queries.",
      "Achieved a student rating of 4.8/5, demonstrating effective teaching and problem-solving skills.",
    ],
    TechStack: ["C++", "Data structures", "Algorithms"],
  },
];

export const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/internships", label: "Internships" },
];
