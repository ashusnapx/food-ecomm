import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Layers, Shield, Terminal } from "@/components/ui/icons";
import { Lay } from "@/components/ui/reveal";
import { TiltIn } from "@/components/ui/tilt-in";
import { projects } from "@/constants/profile";

/**
 * Case study block: one project, taken apart.
 *
 * The whole section rides on the painted hills, with the product shot centred
 * in a screen frame and three white cards hooked over its bottom edge so the
 * artwork, the screenshot and the copy read as one stacked object rather than
 * three separate rows.
 *
 * Every fact here comes from the Kavach entry in profile.ts.
 */

const kavach = projects.find((project) => project.id === "kavach");

const PILLARS = [
  {
    id: "languages",
    Icon: Shield,
    body:
      "23 languages in, classified against the official NCRP category tree.",
  },
  {
    id: "redaction",
    Icon: Layers,
    body:
      "Identifiers stripped by regex before any model sees them.",
  },
  {
    id: "documents",
    Icon: Terminal,
    body:
      "Seven documents out: portal complaint, 1930 script, bank dispute letter, FIR application.",
  },
] as const;

export function Spotlight() {
  if (!kavach) return null;

  return (
    <section id="kavach" className="relative px-5 py-24 md:px-10 md:py-32">

      <div className="mx-auto max-w-page">
        <Lay>
          <div className="text-center">
            <span className="eyebrow">Case study</span>
            <h2 className="t-h2 mt-6">{kavach.name}</h2>
            <p className="t-lead mx-auto mt-5 max-w-2xl">
              Eight obligations on statutory clocks, driven from a spoken account
              in any of 23 languages.
            </p>
          </div>
        </Lay>

        {kavach.live ? (
          <Lay delay={0.08}>
            <div className="mt-8 flex justify-center">
              <Button href={kavach.live}>See it live</Button>
            </div>
          </Lay>
        ) : null}

        <TiltIn className="mx-auto mt-14 max-w-[1100px]">
          <div className="screen-frame">
            <Image
              src="/kavach/triage.png"
              alt="The Kavach triage screen: a spoken fraud report classified against the NCRP category tree, with the extracted identifiers and the statutory deadlines listed beside it."
              width={1600}
              height={1000}
              sizes="(min-width: 1100px) 1100px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </TiltIn>

        <div className="relative z-10 -mt-10 grid gap-5 md:grid-cols-3">
          {PILLARS.map(({ id, Icon, body }, i) => (
            <Lay key={id} className="h-full" delay={0.2 + i * 0.07}>
              <div className="card-white h-full p-6">
                <span className="icon-tile">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-[15px] leading-relaxed text-ink">{body}</p>
              </div>
            </Lay>
          ))}
        </div>
      </div>
    </section>
  );
}
