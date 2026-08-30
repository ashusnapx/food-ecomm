import type { Metadata, Viewport } from "next";
import { Caveat, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_URL, keywords, person } from "@/constants/profile";

/**
 * Caveat carries the headings and marginalia. Outfit carries every word a
 * recruiter actually has to read. JetBrains Mono carries numbers and code.
 */
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

const TITLE = `${person.name} (${person.handle}), Generative AI Engineer`;
// Kept under ~160 characters so Google shows it whole instead of truncating.
const DESCRIPTION =
  "Ashutosh Kumar (ashusnapx), Generative AI Engineer. I build production LLM apps: RAG pipelines, multi-agent workflows, and the products they ship inside.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s | ${person.name}` },
  description: DESCRIPTION,
  keywords,
  applicationName: `${person.name} Portfolio`,
  authors: [{ name: person.name, url: SITE_URL }],
  creator: person.name,
  publisher: person.name,
  category: "technology",
  alternates: { canonical: "/" },
  // Next generates these from icon.svg / icon.png / apple-icon.png in app/,
  // but declaring them keeps the order explicit: SVG first for modern
  // browsers, 96px PNG for Google's SERP favicon, ICO for legacy.
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "96x96" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: `${person.name}, ${person.role}`,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    firstName: "Ashutosh",
    lastName: "Kumar",
    username: person.handle,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${person.name}, Generative AI Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: `@${person.handle}`,
    site: `@${person.handle}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  // Fill these in from Search Console and Bing Webmaster Tools. Verification
  // is what unlocks indexing reports and the URL inspection tool.
  // verification: { google: "…", other: { "msvalidate.01": "…" } },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F3F1E9" },
    { media: "(prefers-color-scheme: dark)", color: "#16171B" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://i.postimg.cc" />
        <JsonLd />
      </head>
      <body
        className={`${caveat.variable} ${outfit.variable} ${jetbrains.variable} paper-grain relative min-h-[100dvh] overflow-x-hidden bg-paper font-sans text-ink antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
