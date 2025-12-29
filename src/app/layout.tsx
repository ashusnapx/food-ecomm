import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar, Footer } from "@/components";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ashusnapx.vercel.app"),
  title: {
    default: "Ashutosh Kumar | Full-Stack Developer",
    template: "%s | Ashutosh Kumar",
  },
  description:
    "Full-Stack Developer specializing in React, Next.js, and modern web technologies. Building exceptional digital experiences from India.",
  keywords: [
    "Ashutosh Kumar",
    "ashusnapx",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "India",
    "Portfolio",
  ],
  authors: [{ name: "Ashutosh Kumar", url: "https://ashusnapx.vercel.app" }],
  creator: "Ashutosh Kumar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ashusnapx.vercel.app",
    siteName: "Ashutosh Kumar Portfolio",
    title: "Ashutosh Kumar | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, and modern web technologies. Building exceptional digital experiences from India.",
    images: [
      {
        url: "/pfp5.png",
        width: 400,
        height: 400,
        alt: "Ashutosh Kumar - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashutosh Kumar | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, and modern web technologies.",
    creator: "@ashusnapx",
    images: ["/pfp5.png"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body
        className={cn(
          "relative min-h-screen font-sans antialiased",
          "bg-white dark:bg-gray-950",
          "text-gray-900 dark:text-gray-100",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip to content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-md"
          >
            Skip to main content
          </a>
          
          {/* Gradient background effect */}
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(147,51,234,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(147,51,234,0.25),rgba(255,255,255,0))]" />
          
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
