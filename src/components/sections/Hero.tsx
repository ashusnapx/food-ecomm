"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Counter } from "@/components/ui/counter";
import { Marquee } from "@/components/ui/marquee";
import { MaskReveal } from "@/components/ui/mask-reveal";
import { marqueeSkills, person, specSheet, stats } from "@/constants/profile";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Flat inks cycled across the colophon and the stat row. */
const SPEC_TONE = [
  "var(--accent)",
  "var(--blue)",
  "var(--orange)",
  "var(--pink)",
  "var(--fg-dim)",
];

/** Masked line reveal driven by the load timeline rather than by scroll. */
function Line({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <span className="block">{children}</span>;

  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.05, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  return (
    <section id="top" className="pt-14">
      {/* ------------------------------------------------- Colophon strip */}
      <motion.div
        {...fade(0.05)}
        className="gutter mx-auto flex max-w-page items-center justify-between gap-4 border-b border-rule py-3"
      >
        <p className="label text-faint">
          Portfolio <span className="text-rule-strong">/</span> 2026 Edition
        </p>
        <p className="label flex items-center gap-2 text-dim">
          <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
          {person.availability}
        </p>
      </motion.div>

      {/* ------------------------------------------------------ Nameplate */}
      <div className="gutter mx-auto max-w-page">
        <div className="pt-10 md:pt-16">
          {/* Wordmark — full content width. Anything narrower clips the
              longest word at laptop sizes. */}
          <div>
            <motion.p
              {...fade(0.15)}
              className="label mb-6 text-faint md:mb-10"
            >
              {person.name} <span className="text-rule-strong">—</span>{" "}
              {person.location.city}, {person.location.countryCode}
            </motion.p>

            <h1 className="type-display uppercase">
              {/* The visual lines are separate clipped blocks, which would make
                  the extracted heading read "GenerativeAIEngineer". The real
                  string is exposed once, here, and the lines are decorative. */}
              <span className="sr-only">Generative AI Engineer</span>
              <span aria-hidden>
                <Line delay={0.25}>Generative</Line>
                <Line delay={0.34}>
                  <span className="inline-flex items-baseline gap-[0.12em]">
                    AI
                    <span className="inline-block h-[0.5em] w-[0.5em] translate-y-[-0.06em] bg-accent" />
                  </span>
                </Line>
                <Line delay={0.43}>Engineer</Line>
              </span>
            </h1>
          </div>

          {/* Spec sheet — a horizontal colophon under the wordmark rather
              than a side column, so the wordmark keeps the full measure. */}
          <motion.dl
            {...fade(0.6)}
            className="mt-10 grid grid-cols-2 gap-px border-t border-rule bg-rule sm:grid-cols-3 lg:grid-cols-6"
          >
            {specSheet.map((row, i) => (
              <div key={row.key} className="bg-bg px-4 py-4">
                <dt className="label flex items-center gap-2 text-faint">
                  <span
                    aria-hidden
                    className="h-2 w-2 shrink-0"
                    style={{ backgroundColor: `hsl(${SPEC_TONE[i % SPEC_TONE.length]})` }}
                  />
                  {row.key}
                </dt>
                <dd className="mt-2 text-sm leading-snug text-ink">
                  {row.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* ------------------------------------------------- Statement row */}
        <div className="mt-14 grid grid-cols-12 gap-x-4 gap-y-10 border-t border-rule pt-10 md:mt-20">
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <p className="type-lg text-balance">
              <MaskReveal delay={0.05}>I build LLM systems</MaskReveal>
              <MaskReveal delay={0.12}>
                <span className="text-dim">that survive contact</span>
              </MaskReveal>
              <MaskReveal delay={0.19}>
                <span className="text-dim">with real users.</span>
              </MaskReveal>
            </p>

            <motion.p
              {...fade(0.9)}
              className="type-body mt-8 max-w-lg text-dim text-pretty"
            >
              Retrieval pipelines grounded in real documents, multi-agent
              workflows that take more than one step, and the full-stack
              products they ship inside. Currently building enterprise software
              at TCS and generative AI everywhere else.
            </motion.p>

            <motion.div {...fade(1)} className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="label accent-block px-5 py-3.5 transition-opacity hover:opacity-80"
              >
                See the work ↓
              </a>
              <a
                href={`mailto:${person.email}`}
                className="label border border-rule-strong px-5 py-3.5 text-ink transition-colors hover:border-ink"
              >
                Start a conversation ↗
              </a>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            {...fade(0.8)}
            className="group col-span-12 md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9"
          >
            <div className="relative aspect-[4/5] w-full border border-rule">
              <Image
                src="/me.png"
                alt="Ashutosh Kumar, Generative AI Engineer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="duotone object-cover"
              />
            </div>
            <p className="label mt-3 text-faint">
              Fig. 01 <span className="text-rule-strong">—</span> {person.name}
            </p>
          </motion.div>
        </div>

        {/* -------------------------------------------------- Stats table */}
        <motion.dl
          {...fade(1.1)}
          className="mt-16 grid grid-cols-2 border-t border-rule md:mt-24 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              // Left rule on every cell that is not first in its row: column 2
              // on mobile (2-up), columns 2-4 on desktop (4-up).
              className={`border-b border-rule py-6 md:py-8 ${
                i % 2 === 1 ? "border-l pl-4" : ""
              } ${i > 0 ? "md:border-l md:pl-6" : "md:border-l-0 md:pl-0"}`}
            >
              <span
                aria-hidden
                className="mb-4 block h-1.5 w-10"
                style={{ backgroundColor: `hsl(${SPEC_TONE[i % SPEC_TONE.length]})` }}
              />
              <dd className="type-lg tabular">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="label mt-2.5 text-dim">{stat.label}</dt>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* ---------------------------------------------------- Skill ticker */}
      <motion.div
        {...fade(1.2)}
        className="mt-0 border-y border-rule bg-raised py-3.5"
      >
        <Marquee duration={52}>
          {marqueeSkills.map((skill) => (
            <span key={skill} className="label flex items-center text-dim">
              <span aria-hidden className="mx-6 h-1 w-1 bg-accent" />
              {skill}
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
