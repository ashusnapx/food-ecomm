import Image from "next/image";
import { ArrowUpRight, Check } from "@/components/ui/icons";
import { Lay } from "@/components/ui/reveal";
import { certifications } from "@/constants/profile";

/**
 * Credentials, shown as the actual badges rather than a list of names.
 *
 * Badges are square and course certificates are landscape, so every tile uses
 * one frame with object-contain: nothing is cropped and the row still lines up.
 */
export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section id="certs" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-page">
        <Lay className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Credentials</span>
            <h2 className="t-h2 mt-6">
              Certified,
              <br />
              and checkable.
            </h2>
          </div>
          <p className="t-lead max-w-md md:text-right">
            Every one links to its issuer. Go and check.
          </p>
        </Lay>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const Frame = cert.credentialUrl ? "a" : "div";

            return (
              <li key={cert.name}>
                <Lay delay={i * 0.05} className="h-full min-w-0">
                  <Frame
                    {...(cert.credentialUrl
                      ? {
                          href: cert.credentialUrl,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    className="card-surface group flex h-full flex-col p-6 transition-transform duration-500 ease-out hover:-translate-y-1"
                  >
                    <div className="relative mb-6 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg bg-white">
                      {cert.image ? (
                        <Image
                          src={cert.image}
                          alt={`${cert.name}, issued by ${cert.issuer}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-contain p-6"
                        />
                      ) : (
                        <span className="font-display text-2xl font-bold text-faint">
                          {cert.issuer}
                        </span>
                      )}

                      {cert.credentialUrl && (
                        <span
                          className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-ink text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          aria-hidden
                        >
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      )}
                    </div>

                    <p className="text-[13px] font-semibold uppercase tracking-widest text-accent">
                      {cert.issuer}
                    </p>
                    <h3 className="mt-2 font-display text-[17px] font-semibold leading-snug text-ink">
                      {cert.name}
                    </h3>

                    {cert.issued && (
                      <p className="t-small mt-1.5 tabular">
                        {cert.issued}
                        {cert.expires ? ` to ${cert.expires}` : ""}
                      </p>
                    )}

                    {cert.blurb && (
                      <p className="t-small mt-4 flex-1">{cert.blurb}</p>
                    )}

                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4">
                      <span className="flex items-center gap-1.5 text-[13px] font-medium text-ink">
                        <Check className="h-3.5 w-3.5 text-positive" />
                        {cert.credentialUrl ? "Verify" : "Issuer verified"}
                      </span>
                      {cert.credentialId && (
                        <span className="font-mono text-[11px] text-faint">
                          {cert.credentialId}
                        </span>
                      )}
                    </div>
                  </Frame>
                </Lay>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
