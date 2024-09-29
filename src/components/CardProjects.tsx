import { VerifiedIcon, Github, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { SiChainlink, SiGithub } from "react-icons/si";

interface CardProps {
  imageSrc: string;
  projectName: string;
  description?: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
}

const CardProjects = ({
  imageSrc,
  projectName,
  description,
  techStack,
  githubLink,
  liveLink,
}: CardProps): JSX.Element => {
  // Memoizing tech stack to avoid re-rendering unless techStack changes
  const memoizedTechStack = useMemo(() => {
    return techStack.map((tech, index) => (
      <li
        key={index}
        className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm'
      >
        {tech}
      </li>
    ));
  }, [techStack]);

  return (
    <div className='border border-gray-300 dark:border-gray-700 rounded-xl p-5 w-full h-auto hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800'>
      <div className='mb-4 border border-black rounded-md'>
        <Image
          src={imageSrc}
          alt={projectName}
          className='w-auto h-auto object-cover rounded-lg'
          height={224}
          width={400}
          priority
        />
      </div>
      <h1 className='text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100 tracking-tight'>
        <span className='flex items-center gap-2'>
          {projectName}
          <VerifiedIcon className='text-primary' />
        </span>
      </h1>
      {description ? (
        <p className='text-md text-gray-600 dark:text-gray-300 mb-4 leading-relaxed tracking-tighter'>
          {description}
        </p>
      ) : (
        <p className='text-md text-red-600 dark:text-red-300 mb-4 leading-relaxed'>
          Description not available
        </p>
      )}
      <div className='mt-4 flex justify-between items-start'>
        <div>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2'>
            Tech Stack:
          </h3>
          <ul className='flex flex-wrap gap-2'>{memoizedTechStack}</ul>
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
                  <Github className='text-xl' />
                  <span>Github </span>
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
                    <Link2 className='text-xl' />
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

// Memoizing the entire component to avoid unnecessary re-renders
export default React.memo(CardProjects);
