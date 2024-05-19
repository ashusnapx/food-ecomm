import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SiChainlink, SiGithub } from 'react-icons/si';

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
    <div className='border rounded-xl p-4 w-full h-96 overflow-auto hover:border hover:border-purple-700'>
      <div>
        <Image
          src={imageSrc}
          alt={projectName}
          className='w-full h-full object-cover mb-4 rounded-xl'
          height={400}
          width={400}
        />
        <h1 className='text-2xl font-semibold mb-2 tracking-tighter'>
          {projectName} &rarr;
        </h1>
        <p className='text-gray-600 dark:text-gray-300'>{description}</p>
        <div className='mt-4 flex items-center justify-between'>
          <div>
            <h3 className='text-lg font-semibold'>Tech Stack:</h3>
            <ul className='list-disc pl-6'>
              {techStack.map((tech, index) => (
                <li key={index} className='text-gray-600 dark:text-gray-300'>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Links:</h3>
            <ul className='list-none pl-0'>
              <li className='text-blue-600'>
                <Link
                  href={githubLink}
                  className='text-purple-600'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='flex items-center space-x-2'>
                    <SiGithub />
                    <span>GitHub &rarr;</span>
                  </div>
                </Link>
              </li>
              {liveLink && (
                <li className='text-blue-600'>
                  <Link
                    className='text-purple-600'
                    href={liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div className='flex items-center space-x-2'>
                      <SiChainlink />
                      <span>Live &rarr;</span>
                    </div>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
