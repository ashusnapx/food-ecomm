import Image from "next/image";
import { certifications } from "@/constants/profile";
import { CheckMark } from "@/components/ui/marks";
import { Lay } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

/**
 * Credentials, shown as the actual badges and certificates rather than a list
 * of names. Badges are square and course certificates are landscape, so every
 * tile uses one frame with object-contain: nothing is cropped, the row lines up.
 */
export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section id="certs" className="mx-auto max-w-page px-5 py-20 md:px-10 md:py-28">
      <SectionTitle
        title="Certified, and checkable"
        pen="var(--purple)"
        note="Every one links to its issuer, so you can verify it rather than take my word for it."
      />

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <li key={cert.name}>
            <Lay delay={i * 0.05} tilt={i % 2 === 0 ? -0.5 : 0.45}>
              <article className="card-paper flex h-full flex-col rounded-md p-5 transition-transform duration-500 ease-paper hover:rotate-0 hover:-translate-y-1">
                <div className="relative mb-5 flex aspect-[4/3] w-full items-center justify-center rounded-sm border border-rule bg-paper-2 p-4">
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={`${cert.name}, issued by ${cert.issuer}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-contain p-4"
                    />
                  ) : (
                    <span className="hand text-4xl text-ink-faint">{cert.issuer}</span>
                  )}
                </div>

                <p className="hand text-xl leading-none text-purple">{cert.issuer}</p>
                <h3 className="mt-2 font-medium leading-snug text-ink">{cert.name}</h3>

                {cert.issued && (
                  <p className="mt-1 font-mono text-[11px] text-ink-faint">
                    {cert.issued}
                    {cert.expires ? ` to ${cert.expires}` : ""}
                  </p>
                )}

                {cert.blurb && (
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft text-pretty">
                    {cert.blurb}
                  </p>
                )}

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-rule pt-3">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hand flex items-center gap-1.5 text-lg text-ink-soft hover:text-ink"
                    >
                      <CheckMark pen="var(--green)" className="h-4 w-4" />
                      <span className="pen-underline">verify</span>
                    </a>
                  ) : (
                    <span className="hand text-lg text-ink-faint">issuer verified</span>
                  )}
                  {cert.credentialId && (
                    <span className="font-mono text-[10px] text-ink-faint">
                      {cert.credentialId}
                    </span>
                  )}
                </div>
              </article>
            </Lay>
          </li>
        ))}
      </ul>
    </section>
  );
}
