import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Github, Linkedin, Mail } from "@/components/ui/icons";
import { Lay } from "@/components/ui/reveal";
import { footerLinks, locations, person, writingProfiles } from "@/constants/profile";

/**
 * Closing CTA and footer.
 *
 * These share one continuous dusk backdrop because the reference does: the
 * headline sits on open sky and the footer card floats over the ridge line
 * below it. Splitting them into two sections would put a seam through the
 * artwork.
 */
export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden px-5 pt-28 md:px-10 md:pt-36">
      <div className="scene scene-dusk" />

      {/* Closing call to action, on open sky. */}
      <Lay className="mx-auto max-w-page text-center">
        <h2 className="t-h2">
          The next thing I ship
          <br />
          is one I have not built yet.
        </h2>
        <p className="t-lead mx-auto mt-6 max-w-lg">
          {person.availability}. Send the hard problem, I will ship it.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href={`mailto:${person.email}`}>Get in touch</Button>
        </div>
      </Lay>

      {/* The floating white card that carries the footer proper. */}
      <Lay
        delay={0.08}
        className="mx-auto mt-20 max-w-page rounded-3xl bg-white px-8 py-14 shadow-float md:px-14"
      >
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <Image
                src="/avatar.png"
                alt=""
                width={72}
                height={72}
                className="h-9 w-9 rounded-full object-cover ring-1 ring-line"
              />
              <span className="font-display text-[17px] font-semibold text-ink">
                {person.name}
              </span>
            </a>

            <p className="t-body mt-5 max-w-xs">
              Production LLM applications: retrieval pipelines and multi-agent
              workflows.
            </p>

            <a
              href={`mailto:${person.email}`}
              className="btn btn-dark mt-7"
            >
              <span>{person.email}</span>
              <span className="btn__badge" aria-hidden>
                <Mail className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>

          <nav aria-label="Sections">
            <h3 className="font-display text-[17px] font-semibold text-ink">
              Quick links
            </h3>
            <ul className="mt-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="t-body inline-flex min-h-[40px] items-center transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Elsewhere">
            <h3 className="font-display text-[17px] font-semibold text-ink">
              Elsewhere
            </h3>
            <ul className="mt-3">
              {writingProfiles.map((profile) => (
                <li key={profile.url}>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="t-body inline-flex min-h-[40px] items-center transition-colors hover:text-ink"
                  >
                    {profile.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={person.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-body inline-flex min-h-[40px] items-center transition-colors hover:text-ink"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
            <p className="t-small order-2 sm:order-1">
              {locations.map((l) => l.city).join(" and ")}
            </p>

            <ul className="order-1 flex items-center gap-2 sm:order-2">
              {[
                {
                  label: "GitHub",
                  href: `https://github.com/${person.handle}`,
                  Icon: Github,
                },
                {
                  label: "LinkedIn",
                  href: `https://www.linkedin.com/in/${person.handle}`,
                  Icon: Linkedin,
                },
                {
                  label: "Email",
                  href: `mailto:${person.email}`,
                  Icon: Mail,
                },
              ].map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={label}
                    className="grid h-9 w-9 place-items-center rounded-full bg-surface text-ink transition-colors hover:bg-ink hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Lay>

      {/* Breathing room so the card floats clear of the page edge. */}
      <div className="h-20 md:h-28" />
    </footer>
  );
}
