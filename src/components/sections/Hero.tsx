"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowMark, CircleMark } from "@/components/ui/marks";
import { person } from "@/constants/profile";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, delay, ease: EASE },
        };

  return (
    <section
      id="top"
      className="ruled margin-rule relative min-h-[calc(100dvh-4rem)] px-5 pb-16 pt-14 md:px-10 md:pt-20"
    >
      <div className="mx-auto grid max-w-page items-center gap-10 pl-8 md:pl-16 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          <motion.p {...rise(0)} className="hand text-2xl text-blue md:text-3xl">
            {person.name}
          </motion.p>

          <motion.h1
            {...rise(0.1)}
            className="hand type-hero relative mt-2 inline-block text-ink"
          >
            Generative
            <br />
            <span className="relative inline-block">
              AI Engineer
              <CircleMark
                pen="var(--red)"
                delay={0.9}
                duration={1.1}
                className="absolute -inset-x-6 -inset-y-4 h-[calc(100%+2rem)] w-[calc(100%+3rem)]"
              />
            </span>
          </motion.h1>

          <motion.p
            {...rise(0.2)}
            className="type-body mt-8 max-w-md text-ink-soft text-pretty"
          >
            I build production LLM applications. Retrieval pipelines,
            multi-agent workflows, and the products they ship inside.
          </motion.p>

          <motion.div {...rise(0.3)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="hand sticky-note rounded-md px-6 py-3 text-2xl leading-none transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              See the work
            </a>
            <a
              href={`mailto:${person.email}`}
              className="hand rounded-md border-2 border-ink px-6 py-3 text-2xl leading-none text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
            >
              Email me
            </a>
          </motion.div>
        </div>

        {/* Taped photograph */}
        <motion.div
          {...rise(0.25)}
          className="relative mx-auto w-full max-w-[19rem] lg:mx-0 lg:ml-auto"
        >
          <div className="card-paper taped tilt-r relative p-3 pb-12">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-2">
              <Image
                src="/me.png"
                alt="Ashutosh Kumar, Generative AI Engineer"
                fill
                priority
                sizes="(max-width: 1024px) 304px, 304px"
                className="object-cover"
              />
            </div>
            <p className="hand absolute inset-x-0 bottom-3 text-center text-xl text-ink-soft">
              that&apos;s me
            </p>
          </div>

          <ArrowMark
            pen="var(--ink-faint)"
            delay={1.1}
            className="absolute -left-14 top-1/3 hidden h-16 w-20 -scale-x-100 lg:block"
          />
        </motion.div>
      </div>
    </section>
  );
}
