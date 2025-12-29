"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";

interface CardProps {
  imageSrc: string;
  projectName: string;
  description?: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  index?: number;
}

const CardProjects = ({
  imageSrc,
  projectName,
  description,
  techStack,
  githubLink,
  liveLink,
  index = 0,
}: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongDescription = description && description.length > 150;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.article 
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -8,
        transition: { type: "spring" as const, stiffness: 300, damping: 20 }
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={imageSrc}
          alt={`Screenshot of ${projectName}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick links overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-900/90 rounded-full text-sm font-medium hover:bg-white dark:hover:bg-gray-900 transition-colors"
            aria-label={`View ${projectName} on GitHub`}
          >
            <Github className="w-4 h-4" />
            Code
          </Link>
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
              aria-label={`View live demo of ${projectName}`}
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {projectName}
        </h3>
        
        {description ? (
          <div className="mb-4 flex-1">
            <p 
              className={`text-gray-600 dark:text-gray-400 text-sm leading-relaxed ${
                !isExpanded && isLongDescription ? 'line-clamp-3' : ''
              }`}
            >
              {description}
            </p>
            {isLongDescription && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 flex items-center gap-1 text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              >
                {isExpanded ? (
                  <>
                    Show less <ChevronUp className="w-3 h-3" />
                  </>
                ) : (
                  <>
                    Read more <ChevronDown className="w-3 h-3" />
                  </>
                )}
              </button>
            )}
          </div>
        ) : (
          <p className="text-gray-400 dark:text-gray-500 text-sm italic mb-4 flex-1">
            Project description coming soon...
          </p>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default CardProjects;
