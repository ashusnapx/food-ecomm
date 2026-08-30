import Image from "next/image";
import { hackathons } from "@/constants/profile";
import { CheckMark } from "@/components/ui/marks";
import { Lay } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

const PEN: Record<string, string> = {
  red: "var(--red)",
  blue: "var(--blue)",
  green: "var(--green)",
  purple: "var(--purple)",
  orange: "var(--orange)",
};

/**
 * Hackathons and the results someone else scored.
 *
 * Awards and event posts used to be two sections, which meant the TCS result
 * appeared twice. One entry per event, ranked ones carry a marked rank.
 */
export function Hackathons() {
  return (
    <section
      id="hackathons"
      className="grid-paper border-y border-rule bg-paper-2/40"
    >
      <div className="mx-auto max-w-page px-5 py-20 md:px-10 md:py-28">
        <SectionTitle
          title="Judged by other people"
          pen="var(--orange)"
          note="Internal work is easy to describe and hard to verify. These are the weekends that got scored."
        />

        <div className="mt-14 space-y-8">
          {hackathons.map((h, i) => (
            <Lay key={h.id} delay={i * 0.07} tilt={i % 2 === 0 ? -0.35 : 0.3}>
              <article className="card-paper rounded-md p-5 md:p-8">
                <div className="grid gap-7 md:grid-cols-[1fr_1.25fr] md:gap-10">
                  {/* Photograph */}
                  {h.image && (
                    <div>
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-rule bg-paper-2">
                        <Image
                          src={h.image}
                          alt={`${h.project} at ${h.event}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover"
                        />
                      </div>

                      {h.gallery && h.gallery.length > 0 && (
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          {h.gallery.map((src, gi) => (
                            <div
                              key={src}
                              className="relative aspect-[4/3] overflow-hidden rounded-sm border border-rule bg-paper-2"
                            >
                              <Image
                                src={src}
                                alt={`${h.event}, photo ${gi + 2}`}
                                fill
                                sizes="(max-width: 768px) 50vw, 20vw"
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Story */}
                  <div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <h3
                        className="hand text-4xl leading-none"
                        style={{ color: `hsl(${PEN[h.pen]})` }}
                      >
                        {h.event}
                      </h3>
                      {h.rank && (
                        <span className="hand sticky-note rounded-md px-3 py-1 text-xl leading-none">
                          Rank {h.rank}
                        </span>
                      )}
                    </div>

                    <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                      {h.detail}
                    </p>

                    <p className="hand mt-5 text-2xl leading-tight text-ink">
                      {h.project}
                    </p>

                    <p className="type-body mt-3 text-ink-soft text-pretty">
                      {h.story}
                    </p>

                    {h.progression && (
                      <ul className="mt-6 space-y-2">
                        {h.progression.map((step) => (
                          <li key={step} className="flex items-center gap-2.5 text-sm text-ink-soft">
                            <CheckMark pen="var(--green)" className="h-4 w-4 shrink-0" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    )}

                    <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5">
                      {h.stack.map((tech) => (
                        <li key={tech} className="font-mono text-[11px] text-ink-faint">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap items-baseline justify-between gap-4 border-t border-rule pt-4">
                      {h.team && h.team.length > 0 && (
                        <p className="max-w-sm text-xs text-ink-faint">
                          built with {h.team.join(", ")}
                        </p>
                      )}
                      {h.url && (
                        <a
                          href={h.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hand text-lg text-ink-soft hover:text-ink"
                        >
                          <span className="pen-underline">read the write-up</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Lay>
          ))}
        </div>
      </div>
    </section>
  );
}
