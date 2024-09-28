import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiChainlink, SiGithub } from "react-icons/si";

interface CardProps {
  imageSrc: string; // Image source for the project
  projectName: string; // Name of the project
  description?: string; // Description of the project
  techStack: string[]; // Array of technologies used in the project
  githubLink: string; // Link to the GitHub repository
  liveLink?: string; // Link to the live project (optional)
}

const CardProjects = ({
  imageSrc,
  projectName,
  description,
  techStack,
  githubLink,
  liveLink,
}: CardProps): JSX.Element => {
  return (
    <div className='border border-gray-300 dark:border-gray-700 rounded-xl p-5 w-full h-auto hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800'>
      <div className='mb-4 border border-black rounded-md'>
        <Image
          src={imageSrc}
          alt={projectName}
          className='w-full h-56 object-cover rounded-lg'
          height={224}
          width={400}
        />
      </div>
      <h1 className='text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100 tracking-tight'>
        {projectName} &rarr;
      </h1>
      {description && (
        <p className='text-md text-gray-600 dark:text-gray-300 mb-4 leading-relaxed'>
          {description}
        </p>
      )}
      <div className='mt-4 flex justify-between items-start'>
        <div>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2'>
            Tech Stack:
          </h3>
          <ul className='flex flex-wrap gap-2'>
            {techStack.map((tech, index) => (
              <li
                key={index}
                className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm'
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className='ml-4'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2'>
            Links:
          </h3>
          <ul className='space-y-2'>
            <li>
              <Link
                href={githubLink}
                className='text-purple-700 dark:text-purple-400 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='flex items-center space-x-2'>
                  <SiGithub className='text-xl' />
                  <span>GitHub </span>
                </div>
              </Link>
            </li>
            {liveLink && (
              <li>
                <Link
                  href={liveLink}
                  className='text-purple-700 dark:text-purple-400 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='flex items-center space-x-2'>
                    <SiChainlink className='text-xl' />
                    <span>Live </span>
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
