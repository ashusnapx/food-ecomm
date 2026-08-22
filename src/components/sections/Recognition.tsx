import Image from "next/image";
import { awards } from "@/constants/profile";
import { Lift, MaskReveal } from "@/components/ui/mask-reveal";
import { SectionHeader } from "@/components/ui/section-header";

/**
 * Awards and credentials.
 *
 * The hackathon result gets the space because it is the single strongest
 * signal on the page for GenAI hiring: a ranked, externally-judged result on a
 * multi-agent system, with named collaborators and a public write-up.
 *
 * The certifications list renders only when populated — an empty "Certifications"
 * heading reads worse than no heading at all.
 */
export function Recognition() {
  return (
    <section
      id="recognition"
      className="gutter mx-auto max-w-page py-20 md:py-28"
    >
      <SectionHeader
        index="03"
        label="Recognition"
        tone="orange"
        title={
          <>
            Judged against
            <br />
            everyone else.
          </>
        }
        note="Internal work is easy to describe and hard to verify. These are the results someone else scored."
      />

      {awards.map((award) => (
        <article key={award.id} className="mt-14 md:mt-20">
          {/* Headline result */}
          <div className="grid grid-cols-12 gap-x-4 gap-y-6 border-t border-rule pt-8">
            <div className="col-span-12 md:col-span-4">
              <Lift>
                <p className="accent-block inline-block px-4 py-3">
                  <span className="type-lg block leading-none">
                    {award.rank}
                  </span>
                </p>
                <p className="label mt-4 text-dim">
                  {award.event}
                  <span className="mx-2 text-rule-strong">/</span>
                  {award.season}
                  <span className="mx-2 text-rule-strong">/</span>
                  {award.year}
                </p>
              </Lift>
            </div>

            <div className="col-span-12 md:col-span-8">
              <h3 className="type-lg">
                <MaskReveal>{award.project}</MaskReveal>
              </h3>
              <Lift delay={0.08}>
                <p className="type-body mt-5 max-w-2xl text-dim text-pretty">
                  {award.summary}
                </p>
              </Lift>
            </div>
          </div>

          {/* Photo + progression. The source photo is portrait, so it takes a
              narrow column rather than being cropped into a wide banner. */}
          <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-8">
            {award.image && (
              <Lift className="col-span-12 sm:col-span-7 md:col-span-4">
                <figure>
                  <div className="relative aspect-[3/4] w-full border border-rule">
                    <Image
                      src={award.image}
                      alt={`Ashutosh Kumar and team at ${award.event} ${award.season}, working on ${award.project}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="label mt-3 text-faint">
                    Fig. 02 <span className="text-rule-strong">—</span> the team
                    at {award.event} {award.season}
                  </figcaption>
                </figure>
              </Lift>
            )}

            <Lift
              delay={0.1}
              className={award.image ? "col-span-12 md:col-span-8" : "col-span-12"}
            >
              <ol className="grid h-full grid-cols-1 gap-px bg-rule">
                {award.progression.map((step, i) => (
                  <li
                    key={step.stage}
                    className="flex flex-col justify-center bg-bg px-5 py-6"
                  >
                    <p className="label flex items-center gap-2 text-faint">
                      <span aria-hidden className="h-2 w-2 shrink-0 bg-orange" />
                      Stage 0{i + 1}
                    </p>
                    <p className="type-md mt-3">{step.result}</p>
                    <p className="mt-1 text-sm text-dim">{step.stage}</p>
                  </li>
                ))}
              </ol>
            </Lift>
          </div>

          {/* What it actually does */}
          <div className="mt-12 border-t border-rule">
            <h4 className="label py-5 text-ink">What we built</h4>
            <dl>
              {award.highlights.map((item, i) => (
                <Lift key={item.label} delay={Math.min(i * 0.04, 0.2)}>
                  <div className="grid grid-cols-12 gap-x-4 gap-y-1.5 border-t border-rule py-5">
                    <dt className="type-md col-span-12 md:col-span-4">
                      {item.label}
                    </dt>
                    <dd className="col-span-12 text-sm leading-relaxed text-dim text-pretty md:col-span-8">
                      {item.detail}
                    </dd>
                  </div>
                </Lift>
              ))}
            </dl>
          </div>

          {/* Credits */}
          <Lift>
            <div className="mt-10 flex flex-col gap-6 border-t border-rule pt-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="label text-faint">Stack</p>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                  {award.stack.map((tech) => (
                    <li key={tech} className="label flex items-center gap-2 text-dim">
                      <span aria-hidden className="h-[6px] w-[6px] bg-orange" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:text-right">
                <p className="label text-faint">Built with</p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-dim">
                  {award.team.join(" · ")}
                </p>
                {award.postUrl && (
                  <a
                    href={award.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label link-wipe mt-4 inline-block text-ink"
                  >
                    Read the write-up ↗
                  </a>
                )}
              </div>
            </div>
          </Lift>
        </article>
      ))}

    </section>
  );
}
