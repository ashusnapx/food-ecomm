import Image from "next/image";
import { featuredPosts } from "@/constants/profile";
import { Lift } from "@/components/ui/mask-reveal";
import { SectionHeader } from "@/components/ui/section-header";

/** One ink per post kind, so the category is readable before the title is. */
const KIND_BLOCK: Record<string, string> = {
  Hackathon: "orange-block",
  Meetup: "blue-block",
  Talk: "pink-block",
  Announcement: "accent-block",
};

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric" })
    .format(d)
    .toUpperCase();
}

/**
 * Featured LinkedIn posts — hackathons, meetups and talks.
 *
 * Curated by hand rather than fetched: LinkedIn returns HTTP 999 to automated
 * profile requests and its robots.txt forbids crawling, so there is no feed to
 * read. Entries live in `featuredPosts` in profile.ts.
 *
 * Posts render with or without a photo; the layout switches between a media
 * card and a text card so a missing image never leaves a grey box.
 */
export function Featured() {
  if (featuredPosts.length === 0) return null;

  return (
    <section id="featured" className="gutter mx-auto max-w-page py-20 md:py-28">
      <SectionHeader
        index="09"
        label="Featured"
        tone="blue"
        title={
          <>
            Hackathons, meetups
            <br />
            and the rooms in between.
          </>
        }
        note="Selected posts from LinkedIn — what I built, who I built it with, and what I took away."
      />

      {/* A lone card in a two-column grid leaves a dead half, so the grid only
          splits once there is something to put beside it. */}
      <ul
        className={`mt-14 grid gap-px bg-rule md:mt-20 ${
          featuredPosts.length > 1 ? "sm:grid-cols-2" : ""
        }`}
      >
        {featuredPosts.map((post, i) => (
          <li key={post.id} className="bg-bg">
            <Lift delay={Math.min(i * 0.05, 0.25)}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col p-6 transition-colors hover:bg-raised md:p-8"
              >
                {post.image && (
                  <div className="mb-6">
                    <div className="relative aspect-[16/9] w-full overflow-hidden border border-rule">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="duotone object-cover"
                      />
                    </div>

                    {/* Supporting shots sit in a strip so one card can carry a
                        whole event without turning into a slideshow. */}
                    {post.gallery && post.gallery.length > 0 && (
                      <div className="mt-px grid grid-cols-2 gap-px bg-rule">
                        {post.gallery.map((src, gi) => (
                          <div
                            key={src}
                            className="relative aspect-[4/3] overflow-hidden border-x border-b border-rule"
                          >
                            <Image
                              src={src}
                              alt={`${post.title} — photo ${gi + 2}`}
                              fill
                              sizes="(max-width: 640px) 50vw, 25vw"
                              className="duotone object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className={`label ${KIND_BLOCK[post.kind]} px-2 py-1`}>
                    {post.kind}
                  </span>
                  <span className="label text-faint">
                    {formatDate(post.date)}
                  </span>
                </div>

                <h3 className="type-md">
                  <span className="link-wipe">{post.title}</span>
                </h3>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-dim text-pretty">
                  {post.blurb}
                </p>

                {post.tags && post.tags.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                    {post.tags.map((tag) => (
                      <li key={tag} className="label text-faint">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                <span className="label mt-6 text-dim">Read on LinkedIn ↗</span>
              </a>
            </Lift>
          </li>
        ))}
      </ul>
    </section>
  );
}
