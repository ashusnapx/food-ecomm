"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/constants/constant";
import { motion, type Variants } from "framer-motion";
import { Calendar } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 20,
      delay: 0.3,
    },
  },
};

const Hero = () => {
  return (
    <section 
      className="relative flex flex-col md:flex-row items-center justify-between mx-3 md:mx-9 p-6 md:p-12 min-h-[calc(100vh-6rem)] rounded-3xl mt-9 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-600/10 dark:from-purple-500/10 dark:to-purple-600/20 pointer-events-none" />
      
      {/* Glassmorphism Card Effect */}
      <div className="absolute inset-0 backdrop-blur-[1px] border border-gray-200/50 dark:border-gray-700/50 rounded-3xl pointer-events-none" />
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <motion.div 
        className="relative z-10 flex flex-col space-y-6 md:space-y-8 mx-0 md:mx-3 max-w-2xl text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Role Badge */}
        <motion.div 
          className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full w-fit mx-auto md:mx-0"
          variants={itemVariants}
        >
          <span className="text-sm md:text-base font-medium text-purple-700 dark:text-purple-300 tracking-wide uppercase">
            Full-Stack Developer
          </span>
        </motion.div>
        
        {/* Name */}
        <motion.h1 
          id="hero-heading" 
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight font-bold text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          Ashutosh
          <span className="block md:inline italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">
            Kumar
          </span>
        </motion.h1>
        
        {/* Tagline */}
        <motion.div 
          className="relative pl-4 border-l-4 border-purple-500 text-left"
          variants={itemVariants}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Building exceptional digital experiences from{" "}
            <span className="font-semibold text-gray-900 dark:text-white">India</span>{" "}
            <span className="inline-block" aria-label="Indian flag">🇮🇳</span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          variants={itemVariants}
        >
          <Link
            href="https://dub.sh/ashutosh-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default" }),
              "group relative overflow-hidden rounded-full text-base md:text-lg tracking-wide px-6 md:px-8 py-5 md:py-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            )}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Resume
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
          
          {/* Calendly CTA */}
          <Link
            href="https://calendly.com/ashusnapx/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "group rounded-full text-base md:text-lg tracking-wide px-6 md:px-8 py-5 md:py-6 transition-all duration-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 border-purple-300 dark:border-purple-700"
            )}
          >
            <span className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              Book a Call
            </span>
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Profile Image */}
      <motion.div 
        className="relative z-10 mt-8 md:mt-0 order-first md:order-none"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative">
          {/* Decorative ring */}
          <motion.div 
            className="absolute -inset-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full opacity-20 blur-xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <Image
            src="/pfp5.png"
            height={350}
            width={350}
            alt="Ashutosh Kumar - Full Stack Developer"
            className="relative rounded-full border-4 border-purple-500/30 shadow-2xl w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover"
            priority
          />
        </div>
      </motion.div>
      
      {/* Social Links - Fixed for mobile */}
      <nav 
        className="relative z-10 flex flex-row md:flex-col items-center gap-3 md:gap-4 mt-6 md:mt-0 flex-wrap justify-center"
        aria-label="Social media links"
      >
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1, type: "spring" as const, stiffness: 100 }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                aria-label={`Visit Ashutosh's ${link.label} profile`}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </section>
  );
};

export default Hero;
