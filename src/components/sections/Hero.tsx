"use client";
import { Arrow, Star, Scribble } from "@/components/vectors";
import { FloatingElement } from "@/components/ui/floating-element";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className='min-h-[90vh] flex flex-col justify-center relative overflow-hidden px-6 pt-32 pb-12 md:py-0'>
      <div className='max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center'>
        {/* Left: Text */}
        <div className='space-y-8 relative z-10 order-2 md:order-1 text-center md:text-left'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6'>
              <div className='w-2 h-2 rounded-full bg-primary animate-pulse' />
              Available for new projects
            </div>
            <h1 className='text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tight'>
              Software
              <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative'>
                Engineer
                <Scribble className='absolute -bottom-4 left-0 w-full text-accent opacity-50' />
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='text-lg md:text-xl text-muted-foreground max-w-md font-light mx-auto md:mx-0'
          >
            I build digital experiences that blend{" "}
            <strong className='text-foreground'>engineering precision</strong>{" "}
            with <strong className='text-foreground'>visual impact</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='flex flex-wrap gap-4 justify-center md:justify-start'
          >
            <button
              onClick={() => scrollTo("work")}
              className='px-8 py-4 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1'
            >
              See My Work
            </button>
            <button
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
              className='px-8 py-4 border border-border rounded-lg font-medium hover:bg-secondary/10 transition-colors'
            >
              Contact Me
            </button>
            <a
              href='https://drive.google.com/file/d/1QC2FPE0nrS45xwPMofP6TjlcABXAYpCE/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='px-8 py-4 border border-border rounded-lg font-medium hover:bg-primary/10 transition-colors flex items-center gap-2 text-primary'
            >
              <FileText className='w-4 h-4' /> Resume
            </a>
          </motion.div>
        </div>

        {/* Right: Visual Playground */}
        <div className='relative h-[350px] md:h-[600px] w-full order-1 md:order-2 flex justify-center items-center'>
          {/* Desktop Decorative Elements */}
          <div className='hidden md:block'>
            <FloatingElement depth={1} className='absolute top-10 right-10'>
              <div className='w-32 h-32 bg-gradient-to-br from-primary to-purple-600 rounded-2xl rotate-12 opacity-80 backdrop-blur-md shadow-2xl' />
            </FloatingElement>

            <FloatingElement depth={2} className='absolute bottom-20 left-10'>
              <div className='w-24 h-24 bg-gradient-to-br from-secondary to-teal-400 rounded-full opacity-80 backdrop-blur-md shadow-xl border border-white/20' />
            </FloatingElement>

            <Star className='absolute top-20 left-20 text-accent w-12 h-12 animate-pulse' />
          </div>

          {/* Arrow - Repositioned to point from text to image on desktop */}
          <Arrow className='hidden md:block absolute bottom-1/4 -left-12 text-foreground w-20 h-20 rotate-[-45deg] z-20' />

          {/* Photo - Centered */}
          <FloatingElement depth={0.5} className='relative z-10'>
            <div className='relative w-64 h-80 md:w-80 md:h-96 bg-card border border-border rounded-xl shadow-2xl p-3 md:rotate-[-6deg] group hover:rotate-0 transition-transform duration-500'>
              <div className='w-full h-full rounded-lg overflow-hidden relative'>
                <Image
                  src='/me.png'
                  alt='Ashutosh Kumar'
                  fill
                  className='object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500'
                  priority
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6'>
                  <span className='text-white font-display font-bold text-xl'>
                    Ashutosh Kumar
                  </span>
                </div>
              </div>
            </div>
          </FloatingElement>
        </div>
      </div>
    </section>
  );
}
