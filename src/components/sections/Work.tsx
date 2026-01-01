"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { projectsData } from "@/constants/constant";
import { Arrow } from "@/components/vectors";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Work() {
  const allProjects = projectsData;

  return (
    <section id='work' className='py-24 px-6 relative bg-muted/30'>
      <div className='max-w-7xl mx-auto mb-12 flex justify-between items-end'>
        <div>
          <h2 className='text-4xl md:text-5xl font-display font-bold mb-4'>
            Selected Work
          </h2>
          <p className='text-muted-foreground text-lg max-w-xl'>
            A comprehensive list of my digital experiments and products.
          </p>
        </div>
        <Arrow className='hidden md:block w-24 h-24 text-primary rotate-90' />
      </div>

      <BentoGrid className='max-w-7xl mx-auto'>
        {allProjects.map((project, i) => (
          <BentoGridItem
            key={i}
            title={project.name}
            description={<ProjectDescription text={project.description} />}
            header={
              <div className='relative w-full h-48 md:h-60 rounded-xl overflow-hidden group'>
                {/* 
                        Use object-cover with top alignment to show the most relevant part (usually header/nav)
                        Or object-contain with a blurred background to show full image.
                        User requested "something better... they aren't complete".
                        Let's try object-cover with object-top, which usually works best for web screenshots.
                     */}
                {project.imageSrc ? (
                  <Image
                    src={project.imageSrc}
                    alt={project.name}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105'
                    onError={(e) => {
                      // Note: Next/Image onError is different, usually handled by checking src validity beforehand
                      // but for simplicity in this generated code we'll stick to standard behavior or just let it fail gracefully
                    }}
                  />
                ) : (
                  <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-5xl font-display opacity-30'>
                    {project.name.charAt(0)}
                  </div>
                )}

                {/* Hover Overlay with Links hint */}
                <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4'>
                  {project.githubLink && (
                    <div className='flex items-center gap-2 text-white font-medium px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm'>
                      <Github className='w-5 h-5' />
                      <span>View Code</span>
                    </div>
                  )}
                </div>
              </div>
            }
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            icon={
              <div className='flex gap-2 mb-2 items-center'>
                {project.techStacks
                  .split(/,|and/)
                  .slice(0, 3)
                  .map((t, idx) => (
                    <span
                      key={idx}
                      className='text-[10px] font-mono bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20'
                    >
                      {t.trim()}
                    </span>
                  ))}
              </div>
            }
            // Pass GitHub link as the main href for the card
            href={project.githubLink}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

function ProjectDescription({ text }: { text?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  const shouldTruncate = text.length > 120;

  return (
    <div className='relative z-20' onClick={(e) => e.stopPropagation()}>
      <p className='text-sm text-muted-foreground leading-relaxed'>
        {isExpanded || !shouldTruncate ? text : `${text.slice(0, 120)}...`}
      </p>
      {shouldTruncate && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }}
          className='text-xs font-bold text-primary mt-1 hover:underline focus:outline-none'
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
