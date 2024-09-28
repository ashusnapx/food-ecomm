import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ContactForm, Navbar } from "@/components";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashutosh Kumar (@ashusnapx)",
  description:
    "Ashutosh Kumar (ashusnapx) - Frontend Web Developer and Software Developer based in India. Visit my portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn(
          "relative h-full font-sans antialiased grainy",
          inter.className
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='relative flex flex-col min-h-screen bg-my-image bg-no-repeat'>
            <div className='flex-1 flex-grow'>
              <Navbar />
              {children}
              <ContactForm/>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
