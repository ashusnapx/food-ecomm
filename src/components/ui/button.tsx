import type { ReactNode } from "react";
import { ArrowRight } from "@/components/ui/icons";

type Variant = "primary" | "dark";

/**
 * The only two buttons on the page: the glossy blue primary and the near-black
 * pill. Both carry a white circular arrow badge on the right, which is the
 * detail that makes them read as one family.
 *
 * Rendered as an anchor because every call to action on this page is a link.
 */
export function Button({
  href,
  children,
  variant = "primary",
  external,
  className = "",
  badge,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  /** Replaces the arrow, for buttons that want their own glyph. */
  badge?: ReactNode;
}) {
  const isExternal = external ?? /^https?:/.test(href);

  return (
    <a
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : null)}
      className={`btn btn-${variant} ${className}`}
    >
      <span>{children}</span>
      <span className="btn__badge" aria-hidden>
        {badge ?? <ArrowRight className="h-3.5 w-3.5" />}
      </span>
    </a>
  );
}
