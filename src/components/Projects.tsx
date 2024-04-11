import React from 'react';
import { projectsData } from '@/constants/constant';
import CardProjects from './CardProjects';

const Projects = () => {
  return (
    <div className='mx-9 mt-9'>
      <h1 className='text-center text-5xl text-purple-600 mb-5 font-bold tracking-widest'>
        Projects
      </h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {projectsData.map((project) => (
          <CardProjects
            key={project.id}
            imageSrc={project.imageSrc}
            projectName={project.name}
            description={project.description}
            techStack={project.techStacks.split(', ')}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
