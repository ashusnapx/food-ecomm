"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faqs } from "@/constants/profile";
import { Lift } from "@/components/ui/mask-reveal";
import { SectionHeader } from "@/components/ui/section-header";

/**
 * Q&A block.
 *
 * Two jobs: answer the obvious hiring questions, and give answer engines
 * (AI Overviews, ChatGPT, Perplexity) clean question-answer pairs to quote.
 * The same array feeds the FAQPage JSON-LD, so copy and structured data can
 * never disagree.
 */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="gutter mx-auto max-w-page py-20 md:py-28">
      <SectionHeader
        index="10"
        label="Questions"
        tone="orange"
        title="The things people ask first."
      />

      <div className="mt-16 border-t border-rule md:mt-24">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <Lift key={faq.q} delay={i * 0.04}>
              <div className="border-b border-rule">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="group grid w-full grid-cols-12 items-baseline gap-x-4 py-6 text-left"
                  >
                    <span className="label col-span-2 text-faint md:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="type-md col-span-9 transition-colors group-hover:text-dim md:col-span-10">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden
                      className="col-span-1 justify-self-end text-lg leading-none text-faint transition-transform duration-300 ease-editorial"
                      style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    >
                      +
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-12 gap-x-4 pb-8">
                        <p className="type-body col-span-12 text-dim text-pretty md:col-span-8 md:col-start-2">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Lift>
          );
        })}
      </div>
    </section>
  );
}
