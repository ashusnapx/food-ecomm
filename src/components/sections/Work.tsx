"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  categoryLabels,
  categoryPen,
  projects,
  type ProjectCategory,
} from "@/constants/profile";
import { StarMark } from "@/components/ui/marks";
import { VideoPlayer } from "@/components/ui/video-player";
import { Lay } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

type Filter = ProjectCategory | "all";
const FILTERS: Filter[] = ["genai", "fullstack", "mobile", "all"];

/**
 * Work as things pinned to a board: cards with a real screenshot, a slight
 * tilt, and a tape strip. Lead projects take the full width and a bigger image
 * so the board has rhythm instead of twelve identical tiles.
 */
export function Work() {
  const [filter, setFilter] = useState<Filter>("genai");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const counts = useMemo(() => {
    const base: Record<Filter, number> = { all: projects.length, genai: 0, fullstack: 0, mobile: 0 };
    projects.forEach((p) => (base[p.category] += 1));
    return base;
  }, []);

  return (
    <section id="work" className="mx-auto max-w-page px-5 py-20 md:px-10 md:py-28">
      <SectionTitle
        title="Things I actually built"
        pen="var(--red)"
        note="Every one is live or open source. The generative AI set is the work I want to be judged on."
      />

      <Lay delay={0.1}>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className="hand text-xl leading-none transition-colors"
              style={{ color: filter === f ? `hsl(${categoryPen[f]})` : "hsl(var(--ink-faint))" }}
            >
              {categoryLabels[f]}
              <sup className="ml-1 text-[0.6em]">{counts[f]}</sup>
              {filter === f && (
                <motion.span
                  layoutId="work-mark"
                  className="mt-1 block h-[3px] rounded-full"
                  style={{ background: `hsl(${categoryPen[f]})` }}
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
            </button>
          ))}
        </div>
      </Lay>

      <motion.ul layout className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.li
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.34, delay: Math.min(i * 0.04, 0.24) }}
              className={project.lead ? "sm:col-span-2" : ""}
            >
              <Card project={project} index={i} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}

function Card({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const tilt = index % 3 === 0 ? "tilt-l" : index % 3 === 1 ? "tilt-r" : "tilt-none";
  const pen = categoryPen[project.category];
  const primary = project.live ?? project.github ?? project.writeup;

  return (
    <article
      className={`card-paper ${tilt} group relative flex h-full flex-col rounded-md p-4 transition-transform duration-500 ease-paper hover:rotate-0 hover:-translate-y-1`}
    >
      {project.lead && (
        <StarMark
          pen="var(--orange)"
          delay={0.2}
          className="absolute -right-3 -top-3 z-10 h-9 w-9 rotate-12"
        />
      )}

      {project.videoSrc ? (
        <VideoPlayer
          src={project.videoSrc}
          poster={project.videoPoster}
          label={`${project.name} demo walkthrough`}
        />
      ) : project.image ? (
        <div
          className={`relative w-full overflow-hidden rounded-sm border border-rule bg-paper-2 ${
            project.lead ? "aspect-[16/9]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={project.image}
            alt={`${project.name}, ${project.tagline}`}
            fill
            sizes={project.lead ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
            className="object-cover object-top transition-transform duration-700 ease-paper group-hover:scale-[1.03]"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col pt-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="hand text-3xl leading-none" style={{ color: `hsl(${pen})` }}>
            {primary ? (
              <a
                href={primary}
                target="_blank"
                rel="noopener noreferrer"
                className="after:absolute after:inset-0 after:content-['']"
              >
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h3>
          <span className="font-mono text-[11px] text-ink-faint">{project.year}</span>
        </div>

        <p className="mt-1.5 text-sm text-ink-soft">{project.tagline}</p>

        <p
          className={`mt-3 flex-1 text-sm leading-relaxed text-ink-soft text-pretty ${
            project.lead ? "" : "line-clamp-4"
          }`}
        >
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
          {project.tags.map((tag) => (
            <li key={tag} className="font-mono text-[11px] text-ink-faint">
              {tag}
            </li>
          ))}
        </ul>

        {/* Secondary links sit above the stretched card link */}
        <div className="relative z-10 mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-rule pt-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="hand text-lg text-ink-soft hover:text-ink">
              <span className="pen-underline">code</span>
            </a>
          )}
          {project.writeup && (
            <a href={project.writeup} target="_blank" rel="noopener noreferrer" className="hand text-lg text-ink-soft hover:text-ink">
              <span className="pen-underline">write-up</span>
            </a>
          )}
          {project.video && (
            <a href={project.video} target="_blank" rel="noopener noreferrer" className="hand text-lg text-ink-soft hover:text-ink">
              <span className="pen-underline">video</span>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="hand text-lg text-ink-soft hover:text-ink">
              <span className="pen-underline">live</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
