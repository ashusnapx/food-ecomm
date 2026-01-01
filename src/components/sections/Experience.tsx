"use client";
import { internshipData } from "@/constants/constant";
import { Scribble } from "@/components/vectors";

export function Experience() {
  return (
    <section id='experience' className='py-24 px-6'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex items-center gap-4 mb-20 justify-center'>
          <h2 className='text-4xl font-display font-bold'>My Journey</h2>
          <Scribble className='w-24 text-primary' />
        </div>

        <div className='relative'>
          {/* Center Line (Desktop) */}
          <div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2' />

          <div className='space-y-12'>
            {internshipData.map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Half */}
                <div className='md:w-1/2 ml-16 md:ml-0 md:px-8'>
                  <div
                    className={`p-6 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-all relative group ${
                      i % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    {/* Arrow styling */}
                    <div
                      className={`absolute top-6 w-4 h-4 bg-card border-border rotate-45 
                              md:block hidden
                              ${
                                i % 2 === 0
                                  ? "-left-2 border-l border-b"
                                  : "-right-2 border-r border-t"
                              }
                           `}
                    />
                    {/* Mobile Arrow */}
                    <div className='md:hidden absolute top-6 -left-2 w-4 h-4 bg-card border-l border-b border-border rotate-45' />

                    <div
                      className={`flex flex-col gap-1 ${
                        i % 2 !== 0 ? "md:items-end" : ""
                      }`}
                    >
                      <h3 className='text-xl font-bold font-display'>
                        {item.role}
                      </h3>
                      <p className='text-sm font-medium text-primary'>
                        {item.companyName}
                      </p>
                      <span className='font-mono text-xs text-muted-foreground mb-4 block'>
                        {item.fromDate} — {item.toDate}
                      </span>
                    </div>

                    <ul
                      className={`space-y-2 text-sm text-muted-foreground list-disc list-inside ${
                        i % 2 !== 0 ? "md:text-right" : ""
                      }`}
                    >
                      {item.workDone.slice(0, 3).map((w, idx) => (
                        <li key={idx} className='leading-relaxed'>
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Bead */}
                <div className='absolute left-8 md:left-1/2 -translate-x-1/2 top-0 flex items-center justify-center p-1 bg-background'>
                  <div className='w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm z-10' />
                </div>

                {/* Empty Half for spacing */}
                <div className='md:w-1/2 hidden md:block' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
