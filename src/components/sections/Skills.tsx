"use client";
import { skillCategories } from "@/constants/constant";
import { Star } from "@/components/vectors";

export function Skills() {
  return (
    <section className='py-24 px-6 bg-secondary/5 rounded-3xl mx-4 my-12'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-display font-bold flex items-center justify-center gap-4'>
            <Star className='w-8 h-8 text-secondary' />
            Technical Arsenal
            <Star className='w-8 h-8 text-secondary' />
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className='bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow'
            >
              <h3 className='font-display font-bold text-xl mb-4 text-primary'>
                {cat.title}
              </h3>
              <ul className='space-y-2'>
                {cat.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className='flex items-center gap-2 text-muted-foreground'
                  >
                    <span className='w-1.5 h-1.5 rounded-full bg-secondary' />
                    {skill.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
