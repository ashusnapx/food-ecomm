import Image from "next/image";
import { ArrowUpRight } from "@/components/ui/icons";
import { Lay } from "@/components/ui/reveal";
import { projects, type ShowcaseProject } from "@/constants/profile";

/**
 * Selected work, laid out as the reference's feature bento.
 *
 * Every card is the same object: a centred title at the top and, below it, the
 * project's own site rendered inside a small browser frame. The previews are
 * real screenshots of each live deployment rather than stock imagery, so the
 * grid shows what was actually built. Only the card body changes, grey or
 * black, which is what gives the bento its rhythm.
 */

type Tone = "surface" | "black";

/** The one link a card points at, in order of what a visitor would rather see. */
function cardHref(project: ShowcaseProject) {
  return project.live ?? project.github ?? project.writeup;
}

/** What the browser frame's address bar shows. */
function displayHost(project: ShowcaseProject) {
  const url = cardHref(project);
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

/** Chrome around the preview, so a screenshot reads as a live site. */
function BrowserFrame({
  project,
  sizes,
}: {
  project: ShowcaseProject;
  sizes: string;
}) {
  if (!project.image) return null;
  const host = displayHost(project);

  return (
    <div className="mt-auto px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="overflow-hidden rounded-lg bg-white shadow-[0_1px_0_rgba(0,0,0,.05),0_10px_24px_-16px_rgba(29,29,29,.4)]">
        <div className="flex items-center gap-2 border-b border-line px-3 py-2">
          <span className="flex shrink-0 gap-1" aria-hidden>
            <span className="block h-2 w-2 rounded-full bg-line" />
            <span className="block h-2 w-2 rounded-full bg-line" />
            <span className="block h-2 w-2 rounded-full bg-line" />
          </span>
          {host ? (
            <span className="min-w-0 flex-1 truncate rounded-full bg-surface px-2.5 py-0.5 text-center font-mono text-[11px] text-muted">
              {host}
            </span>
          ) : null}
        </div>

        <div className="relative aspect-[16/10] w-full bg-surface">
          <Image
            src={project.image}
            alt={`${project.name}: ${project.tagline}`}
            fill
            sizes={sizes}
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  tone = "surface",
  sizes,
  showTags = false,
  className = "",
}: {
  project: ShowcaseProject;
  tone?: Tone;
  /** Passed straight to next/image, so each placement downloads its own width. */
  sizes: string;
  showTags?: boolean;
  className?: string;
}) {
  const href = cardHref(project);
  const body = tone === "black" ? "card-black" : "card-surface";

  const content = (
    <>
      <span
        className="absolute right-4 top-4 z-10 grid h-8 w-8 place-items-center
          rounded-full bg-white text-ink opacity-0 shadow-card transition-opacity
          duration-300 group-hover:opacity-100"
        aria-hidden
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>

      <div className="px-5 pb-5 pt-7 text-center sm:px-7">
        <h3 className="t-h3">{project.name}</h3>
        <p className="t-small mx-auto mt-2 max-w-sm">{project.tagline}</p>
      </div>

      <BrowserFrame project={project} sizes={sizes} />

      {showTags ? (
        <div className="flex flex-wrap items-center justify-center gap-1.5 px-4 pb-5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="chip-outline">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </>
  );

  const shell = `${body} group flex h-full flex-col transition-transform
    duration-300 ease-out hover:-translate-y-1 ${className}`;

  if (!href) return <div className={shell}>{content}</div>;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={shell}>
      {content}
    </a>
  );
}

export function Work() {
  const leads = projects.filter((p) => p.lead);
  const others = projects.filter((p) => !p.lead);

  /* Row one: the two lead builds and the next project.
     Row two: one wide card and one normal one. Everything after that runs
     three up as compact cards with their tags showing. */
  const [rowOneA, rowOneB] = leads;
  const rowOneC = others[0];
  const wide = others[1];
  const beside = others[2];
  const rest = others.slice(3);

  const thirdSizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";
  const wideSizes = "(min-width: 1024px) 66vw, 100vw";

  return (
    <section id="work" className="relative px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-page">
        <Lay>
          <span className="eyebrow">Selected work</span>
        </Lay>

        <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <Lay>
            <h2 className="t-h2">
              Things I built,
              <br />
              and what they had to survive.
            </h2>
          </Lay>

          <Lay delay={0.08} className="max-w-md">
            <p className="t-lead md:text-right">
              Every one shipped. Rank 1 at TCS AI Friday, 119 unit tests on
              Kavach.
            </p>
          </Lay>
        </div>

        {/* Bento: two rows of large cards. */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {rowOneA ? (
            <Lay delay={0} className="h-full min-w-0">
              <ProjectCard project={rowOneA} tone="surface" sizes={thirdSizes} />
            </Lay>
          ) : null}

          {rowOneB ? (
            <Lay delay={0.05} className="h-full min-w-0">
              <ProjectCard project={rowOneB} tone="surface" sizes={thirdSizes} />
            </Lay>
          ) : null}

          {rowOneC ? (
            <Lay delay={0.1} className="h-full min-w-0 sm:col-span-2 lg:col-span-1">
              <ProjectCard project={rowOneC} tone="black" sizes={thirdSizes} />
            </Lay>
          ) : null}

          {wide ? (
            <Lay delay={0.15} className="h-full min-w-0 sm:col-span-2">
              <ProjectCard project={wide} tone="surface" sizes={wideSizes} />
            </Lay>
          ) : null}

          {beside ? (
            <Lay delay={0.2} className="h-full min-w-0 sm:col-span-2 lg:col-span-1">
              <ProjectCard project={beside} tone="surface" sizes={thirdSizes} />
            </Lay>
          ) : null}
        </div>

        {/* Everything else, three up and compact. */}
        {rest.length > 0 ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {rest.map((project, i) => (
              <Lay key={project.id} delay={i * 0.05} className="h-full min-w-0">
                <ProjectCard
                  project={project}
                  tone="surface"
                  sizes={thirdSizes}
                  showTags
                />
              </Lay>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
