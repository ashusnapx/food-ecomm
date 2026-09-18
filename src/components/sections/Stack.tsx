import { Marquee } from "@/components/ui/marquee";
import { Lay } from "@/components/ui/reveal";
import { marqueeSkills, skillStack } from "@/constants/profile";

/**
 * The stack, as a bento of five clusters over a running ticker.
 *
 * The model layer gets the tall cell because that is where the interesting
 * problems are; everything under it exists to make the model layer usable.
 */
export function Stack() {
  const [lead, ...rest] = skillStack;

  return (
    <section id="stack" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-page">
        <Lay className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">The stack</span>
            <h2 className="t-h2 mt-6">
              What I reach for,
              <br />
              and what it is for.
            </h2>
          </div>
          <p className="t-lead max-w-md md:text-right">
            Model layer first. The rest exists to make it usable.
          </p>
        </Lay>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* The model layer leads, and gets the black card for it. */}
          <Lay>
            <div className="card-black h-full p-8">
              <h3 className="t-h3 text-white">{lead.title}</h3>
              <p className="t-small mt-1.5">{lead.caption}</p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {lead.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[13px] text-white/85"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Lay>

          {rest.map((group, i) => (
            <Lay key={group.id} delay={(i + 1) * 0.05}>
              <div className="card-surface h-full p-8">
                <h3 className="t-h3">{group.title}</h3>
                <p className="t-small mt-1.5">{group.caption}</p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="chip-outline">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Lay>
          ))}
        </div>
      </div>

      {/* Full-bleed ticker, masked at both edges so it fades rather than cuts. */}
      <div
        className="pause-hover relative mt-16 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
        aria-hidden
      >
        <Marquee duration={54}>
          {marqueeSkills.map((skill) => (
            <span
              key={skill}
              className="mx-3 whitespace-nowrap rounded-full bg-surface px-5 py-2.5 text-[15px] font-medium text-muted"
            >
              {skill}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
