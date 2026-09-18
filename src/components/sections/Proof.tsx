import { Lay } from "@/components/ui/reveal";
import { certifications } from "@/constants/profile";

/**
 * The trust strip.
 *
 * A quiet band between two loud sections: one small accent label and the
 * issuers behind the certifications, set as plain wordmarks. They sit at
 * 55% so the row reads as texture, and come up to full weight under the
 * cursor. The issuers are derived from `certifications` rather than listed
 * here, so adding a credential from a new issuer widens the row on its own.
 */
const issuers = Array.from(new Set(certifications.map((cert) => cert.issuer)));

export function Proof() {
  return (
    <section id="certified" className="relative px-5 py-16 md:px-10">
      <div className="mx-auto max-w-page">
        <Lay>
          <p className="text-center text-[13px] font-semibold uppercase tracking-widest text-accent">
            Certified by
          </p>

          <ul className="mt-7 flex flex-wrap items-center justify-center gap-10">
            {issuers.map((issuer) => (
              <li
                key={issuer}
                className="font-display text-xl font-bold text-ink opacity-[0.55] transition-opacity duration-300 ease-out hover:opacity-100"
              >
                {issuer}
              </li>
            ))}
          </ul>
        </Lay>
      </div>
    </section>
  );
}
