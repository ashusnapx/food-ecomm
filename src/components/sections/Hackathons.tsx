import { person, hackathons } from "@/constants/profile";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Quote } from "@/components/ui/icons";
import { Lay } from "@/components/ui/reveal";

/**
 * Judged work, laid out as testimonial cards.
 *
 * The reference floats white quote cards over a painted landscape, and that is
 * exactly the right container for a hackathon result: someone outside the work
 * scored it, so it reads as a quote rather than a claim. The middle card drops
 * on large screens so the row is a scatter, not a strip.
 */

/**
 * The stories in `profile.ts` are written at full length for the case study
 * pages. A floating card only has room for the hook, so take the first
 * sentence and let the card link carry the rest.
 */
function opening(story: string) {
  const sentences = story.match(/[^.!?]+[.!?]+(?:\s|$)/g);
  if (!sentences) return story;
  return sentences.slice(0, 1).join("").trim();
}

export function Hackathons() {
  return (
    <section id="hackathons" className="relative px-5 py-24 md:px-10 md:py-32">

      <div className="mx-auto max-w-page">
        <Lay>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <h2 className="t-h2">
              Built under a clock,
              <br />
              and it still shipped.
            </h2>

            <div className="shrink-0">
              <Button href={person.resumeUrl} variant="dark">
                See the resume
              </Button>
            </div>
          </div>
        </Lay>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {hackathons.map((hackathon, i) => {
            const body = (
              <>
                <Quote className="h-5 w-5 text-ink" />

                <h3 className="t-h3 mt-6">{hackathon.result}</h3>

                <p className="t-small mt-2">
                  {hackathon.event}, {hackathon.detail}
                </p>

                <p className="mt-5 text-[15px] leading-relaxed text-ink">
                  {opening(hackathon.story)}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  {hackathon.stack.slice(0, 3).map((tool) => (
                    <span key={tool} className="chip-outline">
                      {tool}
                    </span>
                  ))}
                </div>
              </>
            );

            const shell = hackathon.url ? (
              <a
                href={hackathon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-white group flex h-full flex-col rounded-xl p-8"
              >
                <span
                  className="pointer-events-none absolute right-6 top-6 text-muted opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                  aria-hidden
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                {body}
              </a>
            ) : (
              <article className="card-white flex h-full flex-col rounded-xl p-8">
                {body}
              </article>
            );

            return (
              <Lay
                key={hackathon.id}
                delay={i * 0.08}
                className={`h-full ${i === 1 ? "lg:mt-10" : ""}`}
              >
                {shell}
              </Lay>
            );
          })}
        </div>
      </div>
    </section>
  );
}
