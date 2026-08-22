"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  categoryLabels,
  categoryTone,
  categoryToneInk,
  projects,
  type ProjectCategory,
} from "@/constants/profile";
import { Lift } from "@/components/ui/mask-reveal";
import { SectionHeader } from "@/components/ui/section-header";

type Filter = ProjectCategory | "all";
const FILTERS: Filter[] = ["genai", "fullstack", "mobile", "all"];

/**
 * Work as an index, not a card grid.
 *
 * A list of ruled rows is how a printed catalogue would show this, and it lets
 * fifteen projects breathe where fifteen cards would turn into wallpaper. The
 * thumbnail is promoted to a preview that tracks the cursor, so the imagery
 * still gets shown — just on demand rather than all at once.
 */
export function Work() {
  const [filter, setFilter] = useState<Filter>("genai");
  const [hovered, setHovered] = useState<string | null>(null);
  const reduce = useReducedMotion();

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const x = useSpring(px, { stiffness: 260, damping: 30, mass: 0.5 });
  const y = useSpring(py, { stiffness: 260, damping: 30, mass: 0.5 });

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  const counts = useMemo(() => {
    const base: Record<Filter, number> = {
      all: projects.length,
      genai: 0,
      fullstack: 0,
      mobile: 0,
    };
    projects.forEach((p) => (base[p.category] += 1));
    return base;
  }, []);

  const preview = visible.find((p) => p.id === hovered);

  return (
    <section
      id="work"
      className="gutter relative mx-auto max-w-page py-20 md:py-28"
      onPointerMove={(e) => {
        if (reduce) return;
        px.set(e.clientX);
        py.set(e.clientY);
      }}
    >
      <SectionHeader
        index="02"
        label="Selected work"
        tone="blue"
        title={
          <>
            Things I built,
            <br />
            not things I read about.
          </>
        }
        note="Every project below is live or open source. Start with the generative AI set — that is the work I want to be judged on."
      />

      {/* Filters */}
      <Lift>
        <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-b border-rule pb-4 md:mt-20">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`label flex items-baseline gap-1.5 transition-colors ${
                filter === f ? "text-ink" : "text-faint hover:text-ink"
              }`}
            >
              <span
                aria-hidden
                className="h-2.5 w-2.5"
                style={{
                  backgroundColor:
                    filter === f ? `hsl(${categoryTone[f]})` : "hsl(var(--rule-strong))",
                }}
              />
              {categoryLabels[f]}
              <sup className="text-[9px] text-faint">{counts[f]}</sup>
            </button>
          ))}
        </div>
      </Lift>

      {/* Index */}
      <ul onMouseLeave={() => setHovered(null)}>
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project, i) => {
            const href = project.live ?? project.github;
            return (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.25) }}
                className="border-b border-rule"
                onMouseEnter={() => setHovered(project.id)}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={
                    {
                      "--wipe": categoryTone[project.category],
                      "--wipe-ink": categoryToneInk[project.category],
                    } as React.CSSProperties
                  }
                  className="row-wipe row-wipe-tinted group grid grid-cols-12 items-baseline gap-x-4 gap-y-2 py-6 transition-colors duration-300 hover:[color:hsl(var(--wipe-ink))] md:py-7"
                >
                  <span className="label col-span-2 text-faint transition-colors group-hover:[color:hsl(var(--wipe-ink)/0.65)] md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="type-lg col-span-10 md:col-span-4">
                    {project.name}
                  </h3>

                  <p className="col-span-12 text-sm text-dim transition-colors group-hover:[color:hsl(var(--wipe-ink)/0.85)] md:col-span-3">
                    {project.tagline}
                  </p>

                  <p className="label col-span-8 text-faint transition-colors group-hover:[color:hsl(var(--wipe-ink)/0.65)] md:col-span-3">
                    {project.tags.slice(0, 3).join(" · ")}
                  </p>

                  <span className="label col-span-4 justify-self-end text-faint transition-colors group-hover:[color:hsl(var(--wipe-ink)/0.65)] md:col-span-1">
                    {project.year} ↗
                  </span>
                </a>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>

      {/* Cursor-tracked preview. Hidden on touch, where there is no hover. */}
      {!reduce && (
        <motion.div
          aria-hidden
          style={{ x, y }}
          className="pointer-events-none fixed left-0 top-0 z-30 hidden lg:block"
        >
          <AnimatePresence>
            {preview?.image && (
              <motion.div
                key={preview.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="relative -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative h-[13rem] w-[19rem] border border-ink bg-raised">
                  <Image
                    src={preview.image}
                    alt=""
                    fill
                    sizes="304px"
                    className="object-cover object-top"
                  />
                </div>
                <p className="label accent-block absolute -bottom-3 left-3 px-2 py-1.5">
                  {preview.name}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      <Lift>
        <p className="label mt-8 text-faint">
          Full source on{" "}
          <a
            href="https://github.com/ashusnapx"
            target="_blank"
            rel="noopener noreferrer"
            className="link-wipe text-ink"
          >
            github.com/ashusnapx
          </a>
        </p>
      </Lift>
    </section>
  );
}
