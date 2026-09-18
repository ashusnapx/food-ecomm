"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "@/components/ui/icons";
import { Lay } from "@/components/ui/reveal";
import { locations, person } from "@/constants/profile";

/**
 * Accordion of the questions that actually come up in a first call.
 *
 * Answers stay factual and are all backed by something on the page: the
 * shipped projects, the stack, or the locations in profile.ts.
 */
const FAQS = [
  {
    q: "What are you looking for right now?",
    a: "Generative AI engineering roles. I want the part after the demo: retrieval that holds up on real documents, agents that fail safely, evals that catch a regression before a user does.",
  },
  {
    q: "What does production actually mean here?",
    a: "Strict schemas on every model call, tests on the logic the model does not own, a write-up the next person can run from. Kavach ships with 119 unit tests on its deadline engine.",
  },
  {
    q: "Which models and frameworks do you use?",
    a: "Claude, Gemini and OpenAI at the model layer, LangGraph and LangChain for multi-agent workflows, MCP for tools, Braintrust and Pydantic AI for evals and schemas.",
  },
  {
    q: "Where are you based?",
    a: `${locations.map((l) => `${l.city}, ${l.country}`).join(" and ")}. Distributed teams and US hours both work.`,
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-page gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        {/* Left rail: heading, then the "still have questions" card. */}
        <Lay>
          <h2 className="t-h2">
            Frequently
            <br />
            asked questions
          </h2>
          <p className="t-lead mt-5 max-w-xs">
            What comes up before a first call.
          </p>

          <div className="card-surface mt-12 p-8">
            <div className="flex items-center gap-2">
              <Image
                src="/me.png"
                alt="Ashutosh Kumar"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
              />
              <span className="t-small">+</span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-[12px] font-medium text-white ring-2 ring-white">
                You
              </span>
            </div>

            <h3 className="mt-5 font-display text-[19px] font-semibold text-ink">
              Still have questions?
            </h3>
            <p className="t-small mt-1.5">
              One email, one straight answer.
            </p>

            <div className="mt-6">
              <Button href={`mailto:${person.email}`} variant="dark">
                Talk to me
              </Button>
            </div>
          </div>
        </Lay>

        {/* Right rail: the accordion. */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Lay key={faq.q} delay={i * 0.04}>
                <div className="faq-row" data-open={isOpen}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                    >
                      <span className="font-display text-[17px] font-semibold tracking-[-.02em] text-ink md:text-[19px]">
                        {faq.q}
                      </span>
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                          isOpen ? "bg-ink text-white" : "bg-surface text-ink"
                        }`}
                        aria-hidden
                      >
                        {isOpen ? (
                          <Minus className="h-3.5 w-3.5" />
                        ) : (
                          <Plus className="h-3.5 w-3.5" />
                        )}
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="t-body px-7 pb-7 pr-16">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Lay>
            );
          })}
        </div>
      </div>
    </section>
  );
}
