import Image from "next/image";

import { Chevron } from "@/components/ui/icons";
import { Lay } from "@/components/ui/reveal";
import { person, stats } from "@/constants/profile";

/**
 * Three ways to work together.
 *
 * The reference sets its three tiers on photographic scenes behind a frosted
 * veil. Here each card carries a single pale tint instead, stepping through the
 * same morning-to-evening hues the page itself walks, so the trio reads as part
 * of that journey while the copy keeps full contrast against near-white.
 *
 * `isolate` on the card gives it its own stacking context, which is what keeps
 * the `-z-10` tint behind the card's own text rather than behind the page.
 *
 * Every number and sentence comes from profile.ts.
 */

type Tier = {
  id: string;
  title: string;
  subtitle: string;
  tint: string;
  rows: string[];
  figure: string;
  caption: string;
};

const TIERS: Tier[] = [
  {
    id: "full-time",
    title: "Full time",
    subtitle: "The one I am looking for",
    tint: "from-[#dcecfb] via-[#eef6fd] to-white",
    rows: [
      "Generative AI engineering",
      "RAG and retrieval pipelines",
      "Multi-agent workflows",
      "Production LLM apps",
    ],
    figure: "Open",
    caption: person.availability,
  },
  {
    id: "contract",
    title: "Contract",
    subtitle: "Scoped builds, end to end",
    tint: "from-[#d9eef4] via-[#ecf7fa] to-white",
    rows: [
      "Everything in full time",
      "Discovery and scoping",
      "Evals and guardrails",
      "Handover and docs",
    ],
    figure: "Project",
    caption: "From brief to shipped",
  },
  {
    id: "mentoring",
    title: "Mentoring",
    subtitle: "Teams and individuals",
    tint: "from-[#fbe4d6] via-[#fdf1e9] to-white",
    rows: [
      "Everything in contract",
      "Code and architecture review",
      "LLM app design sessions",
      "Interview and DSA coaching",
    ],
    figure: "600+",
    caption: "Engineers mentored so far",
  },
];

/** "1000" + "+" + "DSA problems solved" reads as "1,000+ DSA problems solved". */
const statPills = stats.map(
  (stat) => `${stat.value.toLocaleString("en-US")}${stat.suffix} ${stat.label}`,
);

export function Tiers() {
  return (
    <section id="services" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-page">
        <Lay>
          <h2 className="t-h2 text-center">Three ways to work together</h2>
        </Lay>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Lay key={tier.id} className="h-full" delay={0.08 + i * 0.08}>
              <article className="relative isolate flex h-full min-h-[460px] flex-col overflow-hidden rounded-xl p-8">
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-b ${tier.tint}`}
                  aria-hidden
                />

                <h3 className="t-h3">{tier.title}</h3>
                <p className="t-small mt-2">{tier.subtitle}</p>

                <ul className="mt-8 space-y-3.5">
                  {tier.rows.map((row) => (
                    <li key={row} className="flex items-start gap-2.5">
                      <Chevron className="mt-[3px] h-4 w-4 shrink-0 text-accent" />
                      <span className="text-[15px] leading-snug text-ink">
                        {row}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <p className="t-h3 font-display tabular">{tier.figure}</p>
                  <p className="t-small mt-2">{tier.caption}</p>
                </div>
              </article>
            </Lay>
          ))}
        </div>

        <Lay delay={0.12}>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {statPills.map((pill) => (
              <li key={pill} className="chip tabular">
                {pill}
              </li>
            ))}
          </ul>
        </Lay>

        <Lay delay={0.18}>
          <figure className="mx-auto mt-16 max-w-xl text-center">
            <blockquote className="t-h3 font-display font-normal text-ink">
              &ldquo;{person.headline}&rdquo;
            </blockquote>
            <figcaption className="mt-7 flex flex-col items-center gap-3">
              <Image
                src="/me.png"
                alt={`${person.name}, ${person.role}`}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="t-small">
                {person.name}, {person.role}
              </span>
            </figcaption>
          </figure>
        </Lay>
      </div>
    </section>
  );
}
