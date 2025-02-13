import React from "react";
import { projectsData } from "@/constants/constant";
import CardProjects from "./CardProjects";

const Projects = () => {
  // Calculate total projects and unique tech stacks
  const totalProjects = projectsData.length;
  const uniqueTechStacks = Array.from(
    new Set(projectsData.flatMap((project) => project.techStacks.split(", ")))
  ).length;

  return (
    <div className='mx-9 mt-9'>
      <h1 className='text-center text-5xl text-purple-600 mb-5 font-bold tracking-widest'>
        Projects
      </h1>
      <div className='mb-8 text-center text-lg text-gray-600 dark:text-gray-400'>
        <p>
          Total Projects: <span className='font-semibold'>{totalProjects}</span>
        </p>
        <p>
          Unique Technologies Used:{" "}
          <span className='font-semibold'>{uniqueTechStacks}</span>
        </p>
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {projectsData.map((project) => (
          <CardProjects
            key={project.name}
            imageSrc={project.imageSrc}
            projectName={project.name}
            description={project.description}
            techStack={project.techStacks.split(", ")}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
