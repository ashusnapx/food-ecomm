import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

// Syne for Headlines (Creative/Bold)
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

// Outfit for Body (Clean/Modern)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashutosh Kumar | Creative Full Stack Developer",
  description:
    "Portfolio of Ashutosh Kumar (ashusnapx), a Creative Technologist and Full Stack Developer specializing in modern web experiences.",
  keywords: [
    "ashusnapx",
    "Ashutosh Kumar",
    "Frontend Developer",
    "Full Stack Developer",
    "Creative Technologist",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Ashutosh Kumar", url: "https://github.com/ashusnapx" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          syne.variable,
          outfit.variable,
          "min-h-screen bg-background font-sans antialiased text-foreground overflow-x-hidden"
        )}
      >
        {/* Dot Pattern Background */}
        <div className='fixed inset-0 z-[-1] bg-grid-pattern pointer-events-none' />
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
