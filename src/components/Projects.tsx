"use client";

import { projectsData } from "@/constants/constant";
import CardProjects from "./CardProjects";
import { motion } from "framer-motion";

// Normalize technology names to count unique technologies properly
// e.g., "NextJS", "Next.js", "nextjs", "Next.js 14" all become "nextjs"
const normalizeTechName = (tech: string): string => {
  return tech
    .toLowerCase()
    .replace(/[.\s-]/g, '')      // Remove dots, spaces, hyphens
    .replace(/\d+(\.\d+)*/g, '') // Remove version numbers
    .trim();
};

const getUniqueTechCount = (projects: typeof projectsData): number => {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.techStacks.split(", ").forEach((tech) => {
      techSet.add(normalizeTechName(tech));
    });
  });
  return techSet.size;
};

const Projects = () => {
  const totalProjects = projectsData.length;
  const uniqueTechStacks = getUniqueTechCount(projectsData);

  return (
    <section className="mx-4 md:mx-9 mt-16" aria-labelledby="projects-heading">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.span 
          className="inline-block px-4 py-1.5 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 rounded-full mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Featured Work
        </motion.span>
        <h2 
          id="projects-heading"
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {totalProjects} projects built with {uniqueTechStacks}+ technologies
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <CardProjects
            key={project.name}
            imageSrc={project.imageSrc}
            projectName={project.name}
            description={project.description}
            techStack={project.techStacks.split(", ")}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
