import Image from "next/image";
import { certifications } from "@/constants/profile";
import { Lift } from "@/components/ui/mask-reveal";
import { SectionHeader } from "@/components/ui/section-header";

/**
 * Licences and certifications, with the real artwork.
 *
 * Badges are square and course certificates are landscape, so every tile uses
 * one fixed frame with `object-contain` on a neutral panel — nothing gets
 * cropped, and the row still lines up. Entries without artwork fall back to a
 * typographic tile rather than a grey box.
 *
 * The section removes itself when the list is empty.
 */
export function Certifications() {
  if (certifications.length === 0) return null;

  const issuers = [...new Set(certifications.map((c) => c.issuer))];

  return (
    <section
      id="certifications"
      className="gutter mx-auto max-w-page py-20 md:py-28"
    >
      <SectionHeader
        index="04"
        label="Certifications"
        tone="pink"
        title={
          <>
            Credentials, and
            <br />
            the link to check them.
          </>
        }
        note={`${certifications.length} licences and certifications from ${issuers.join(
          ", "
        )}. Every one links to the issuer so you can verify it rather than take my word for it.`}
      />

      <ul className="mt-14 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
        {certifications.map((cert, i) => (
          <li key={`${cert.name}-${cert.issuer}`} className="flex bg-bg">
            <Lift delay={Math.min(i * 0.05, 0.25)} className="flex w-full">
              <article className="flex w-full flex-col p-6 md:p-7">
                {/* Artwork */}
                <div className="relative mb-6 flex aspect-[4/3] w-full items-center justify-center border border-rule bg-raised p-4">
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={`${cert.name} — issued by ${cert.issuer} to Ashutosh Kumar`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-4"
                    />
                  ) : (
                    <span className="type-lg text-center leading-none text-rule-strong">
                      {cert.issuer}
                    </span>
                  )}
                </div>

                {/* Meta */}
                <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="label pink-block px-2 py-1">
                    {cert.issuer}
                  </span>
                  {cert.issued && (
                    <span className="label text-faint">
                      {cert.issued}
                      {cert.expires ? ` — ${cert.expires}` : ""}
                    </span>
                  )}
                </div>

                <h3 className="type-md">{cert.name}</h3>

                {cert.blurb && (
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-dim text-pretty">
                    {cert.blurb}
                  </p>
                )}

                {cert.skills && cert.skills.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                    {cert.skills.map((skill) => (
                      <li
                        key={skill}
                        className="label flex items-center gap-2 text-dim"
                      >
                        <span aria-hidden className="h-[6px] w-[6px] bg-pink" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 flex items-baseline justify-between gap-3 border-t border-rule pt-4">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label link-wipe text-ink"
                    >
                      Verify ↗
                    </a>
                  ) : (
                    <span className="label text-faint">Issuer-verified</span>
                  )}
                  {cert.credentialId && (
                    <span className="label-sm text-faint">
                      ID {cert.credentialId}
                    </span>
                  )}
                </div>
              </article>
            </Lift>
          </li>
        ))}
      </ul>
    </section>
  );
}
