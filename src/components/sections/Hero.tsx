import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import { Layers, Sparkle, Terminal } from "@/components/ui/icons";
import { Written } from "@/components/ui/reveal";
import { person, stats } from "@/constants/profile";

/**
 * The three proof points under the call to action, in the order the reference
 * reads them. Each one is looked up in `stats` by label so the numbers can only
 * ever come from profile.ts.
 */
const TRUST = [
  { icon: Layers, label: "products shipped" },
  { icon: Sparkle, label: "engineers mentored" },
  { icon: Terminal, label: "DSA problems solved" },
] as const;

/**
 * Open sky and one claim.
 *
 * The blue comes from the page-long day-to-night ramp rather than from this
 * section, so the hero is simply the top of that gradient with a cloud field
 * laid over it. The clouds are masked out well before the horizon: they are
 * texture, and nothing here is allowed to compete with the headline.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-28 pt-36 md:px-10 md:pb-36 md:pt-44"
    >
      <div className="scene scene-clouds" />

      <div className="mx-auto max-w-page text-center">
        <h1 className="t-hero mx-auto max-w-4xl text-ink">
          <Written text="I build LLM apps that survive production" />
        </h1>

        <p className="t-lead mx-auto mt-6 max-w-xl">
          Generative AI Engineer in Bengaluru and San Francisco. Open to work.
        </p>

        <div className="mt-9 flex justify-center">
          <Button href={`mailto:${person.email}`} variant="primary">
            Get in touch
          </Button>
        </div>

        {/* Trust strip: three proof points split by hairline rules. */}
        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[15px] text-muted">
          {TRUST.map(({ icon: Icon, label }, i) => {
            const stat = stats.find((s) => s.label === label);
            if (!stat) return null;

            return (
              <li key={label} className="flex items-center gap-5">
                {i > 0 ? (
                  <span
                    aria-hidden
                    className="hidden h-4 w-px bg-line sm:block"
                  />
                ) : null}
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-accent" />
                  <span>
                    <Counter value={stat.value} suffix={stat.suffix} /> {label}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
