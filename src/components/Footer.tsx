"use client";
import { socialLinks } from "@/constants/constant";

export function Footer() {
  return (
    <footer className='py-24 px-6 bg-foreground text-background mt-24'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12'>
        <div className='space-y-6'>
          <h2 className='text-6xl md:text-8xl font-display font-bold tracking-tight'>
            Let&apos;s
            <br />
            Create.
          </h2>
          <a
            href='mailto:hello@ashutosh.com'
            className='inline-block text-xl border-b border-background/20 pb-1 hover:border-background transition-colors'
          >
            ashu.kumarexam@gmail.com
          </a>
        </div>

        <div className='flex flex-wrap gap-4'>
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-3 rounded-full border border-background/20 hover:bg-background hover:text-foreground transition-all flex items-center gap-2 group'
            >
              {/* We could render the icon here if needed */}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
      <div className='max-w-7xl mx-auto mt-24 pt-8 border-t border-background/10 flex justify-between text-sm text-background/60 font-mono'>
        <p>© {new Date().getFullYear()} Ashutosh Kumar</p>
        <p>Designed visually.</p>
      </div>
    </footer>
  );
}
