"use client";
import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

export function Contributions() {
  const { theme } = useTheme();

  return (
    <section id='contributions' className='py-24 px-6 bg-background'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-12'>
          <h2 className='text-4xl md:text-5xl font-display font-bold mb-4'>
            Open Source
          </h2>
          <p className='text-muted-foreground text-lg max-w-xl'>
            My contributions to the developer community.
          </p>
        </div>

        <div className='flex justify-center w-full overflow-hidden border border-border/50 rounded-3xl p-8 bg-muted/20 hover:bg-muted/30 transition-colors'>
          <div className='w-full overflow-x-auto flex justify-center'>
            {/* If the component is not exported as GitHubCalendar, this will fail. 
                 But based on error message, it likely IS exported, just not default. */}
            <GitHubCalendar
              username='ashusnapx'
              colorScheme={theme === "dark" ? "dark" : "light"}
              blockSize={14}
              blockMargin={4}
              fontSize={12}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
