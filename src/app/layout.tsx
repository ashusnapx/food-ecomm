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

const TITLE = `${person.name}, Generative AI Engineer | LLM, RAG & AI Agents`;
const DESCRIPTION =
  "Ashutosh Kumar (ashusnapx) is a Generative AI Engineer building production LLM applications: RAG pipelines, multi-agent workflows and the full-stack products they ship inside. Open to GenAI engineering roles.";

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
