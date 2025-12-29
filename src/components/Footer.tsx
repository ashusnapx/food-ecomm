"use client";

import Link from "next/link";
import { socialLinks } from "@/constants/constant";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="relative mx-4 md:mx-9 mt-12 mb-4 py-12 rounded-2xl overflow-hidden"
      role="contentinfo"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-transparent dark:from-purple-500/20 dark:via-purple-600/10 pointer-events-none" />
      <div className="absolute inset-0 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 rounded-2xl pointer-events-none" />
      
      <div className="relative z-10">
        <motion.h2 
          className="text-center text-3xl md:text-4xl font-bold tracking-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">
            Let&apos;s Connect
          </span>
        </motion.h2>
        
        {/* Social Links */}
        <nav 
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
          aria-label="Social media links"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 
                           bg-white dark:bg-gray-800/80 rounded-2xl shadow-lg 
                           hover:shadow-purple-500/25 
                           transition-all duration-300
                           border border-gray-100 dark:border-gray-700"
                  aria-label={`Connect on ${link.label}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 
                                   group-hover:text-purple-600 dark:group-hover:text-purple-400 
                                   transition-colors duration-300" />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </nav>
        
        {/* Divider */}
        <motion.div 
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500/50" />
          <span className="text-gray-400 dark:text-gray-500">•</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500/50" />
        </motion.div>
        
        {/* Copyright */}
        <motion.p 
          className="text-center text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          © {currentYear} Ashutosh Kumar. Crafted with{" "}
          <motion.span 
            className="text-purple-500 inline-block" 
            aria-label="love"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ♥
          </motion.span>{" "}
          in India.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
