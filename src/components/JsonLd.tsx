import { socialLinks } from "@/constants/constant";
import {
  SITE_URL,
  hackathons,
  certifications,
  keywords,
  marqueeSkills,
  person,
  projects,
  skillStack,
} from "@/constants/profile";

/**
 * Structured data for the whole site, emitted as one `@graph`.
 *
 * A single graph with cross-referenced @ids beats several loose blobs: Google
 * resolves the entity once and every other node inherits it, which is what
 * makes a Knowledge-Panel-style result possible for a personal name.
 *
 * This renders on the server inside the App Router layout, so it is present in
 * the initial HTML, structured data injected after hydration is frequently
 * missed by crawlers.
 */
export function JsonLd() {
  const personId = `${SITE_URL}/#person`;
  const siteId = `${SITE_URL}/#website`;
  const pageId = `${SITE_URL}/#webpage`;

  const knowsAbout = Array.from(
    new Set([...marqueeSkills, ...skillStack.flatMap((g) => g.skills)])
  );

  const graph = [
    {
      "@type": "Person",
      "@id": personId,
      name: person.name,
      alternateName: [person.handle, "Ashutosh Kumar ashusnapx"],
      url: SITE_URL,
      image: {
        "@type": "ImageObject",
        url: person.image,
        caption: `${person.name}, ${person.role}`,
      },
      jobTitle: person.role,
      hasOccupation: {
        "@type": "Occupation",
        name: "Generative AI Engineer",
        occupationalCategory: "15-1252.00",
        skills: marqueeSkills.join(", "),
      },
      identifier: person.handle,
      mainEntityOfPage: { "@id": pageId },
      description: person.headline,
      email: `mailto:${person.email}`,
      knowsAbout,
      knowsLanguage: ["English", "Hindi"],
      address: {
        "@type": "PostalAddress",
        addressLocality: person.location.city,
        addressRegion: person.location.region,
        addressCountry: person.location.countryCode,
      },
      worksFor: {
        "@type": "Organization",
        name: person.currentEmployer,
        url: "https://www.tcs.com/",
      },
      alumniOf: {
        "@type": "Organization",
        name: "Coding Ninjas",
        url: "https://www.codingninjas.com/",
      },
      // sameAs is the strongest identity signal there is: it tells Google the
      // GitHub, LinkedIn and X accounts are the same entity as this page.
      sameAs: socialLinks.map((l) => l.href),
      // Externally-judged results and verifiable credentials are exactly the
      // kind of corroboration Google weighs for a person entity.
      award: hackathons.map((h) =>
        h.rank
          ? `Rank ${h.rank}, ${h.event} (${h.detail}): ${h.project}`
          : `${h.event} (${h.detail}): ${h.project}`
      ),
      ...(certifications.length > 0 && {
        hasCredential: certifications.map((c) => ({
          "@type": "EducationalOccupationalCredential",
          name: c.name,
          credentialCategory: "certificate",
          ...(c.credentialUrl && { url: c.credentialUrl }),
          recognizedBy: { "@type": "Organization", name: c.issuer },
          ...(c.issued && { dateCreated: c.issued }),
        })),
      }),
      seeks: {
        "@type": "Demand",
        name: "Generative AI Engineering roles",
      },
    },
    {
      "@type": "WebSite",
      "@id": siteId,
      url: SITE_URL,
      name: `${person.name}, ${person.role}`,
      description: person.headline,
      inLanguage: "en",
      publisher: { "@id": personId },
      about: { "@id": personId },
      keywords: keywords.join(", "),
    },
    {
      "@type": "ProfilePage",
      "@id": pageId,
      url: SITE_URL,
      name: `${person.name}, ${person.role}`,
      isPartOf: { "@id": siteId },
      about: { "@id": personId },
      mainEntity: { "@id": personId },
      inLanguage: "en",
      dateModified: new Date().toISOString(),
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#projects`,
      name: `Projects by ${person.name}`,
      numberOfItems: projects.length,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      itemListElement: projects.map((project, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareSourceCode",
          name: project.name,
          description: project.description,
          url: project.live ?? project.github ?? SITE_URL,
          codeRepository: project.github,
          programmingLanguage: project.tags,
          keywords: project.tags.join(", "),
          author: { "@id": personId },
          dateCreated: project.year,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Work",
          item: `${SITE_URL}/#work`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Contact",
          item: `${SITE_URL}/#contact`,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      // The payload is built from local constants, never user input.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
