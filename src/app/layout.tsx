import type { Metadata, Viewport } from "next";
import { Archivo, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_URL, keywords, person } from "@/constants/profile";

/**
 * Type system: one grotesque set oversized and tight for display, a narrower
 * companion for reading, and a mono for every label, number and piece of
 * metadata on the page.
 */
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

const interTight = Inter_Tight({
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

const TITLE = `${person.name} — Generative AI Engineer | LLM, RAG & AI Agents`;
const DESCRIPTION =
  "Ashutosh Kumar (ashusnapx) is a Generative AI Engineer building production LLM applications — RAG pipelines, LangGraph multi-agent workflows and the full-stack Next.js products they ship inside. Open to GenAI engineering roles.";

export const metadata: Metadata = {
  // Required for OG/Twitter images and canonical URLs to resolve absolutely.
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
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: `${person.name} — ${person.role}`,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    firstName: "Ashutosh",
    lastName: "Kumar",
    username: person.handle,
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
    // Without these Google may truncate the snippet and shrink the preview.
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  // Fill in once verified in Search Console / Bing Webmaster Tools.
  // verification: { google: "…", other: { "msvalidate.01": "…" } },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F0EEE9" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0C" },
  ],
  colorScheme: "dark light",
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
        <link rel="dns-prefetch" href="https://github-contributions-api.jogruber.de" />
        <JsonLd />
      </head>
      <body
        className={`${archivo.variable} ${interTight.variable} ${jetbrains.variable} min-h-screen overflow-x-hidden bg-bg font-sans text-ink antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
