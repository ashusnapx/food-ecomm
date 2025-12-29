"use client";

import Link from "next/link";
import { Mode } from "./Mode";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { links } from "@/constants/constant";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const isActive = (href: string) => pathName === href;

  return (
    <>
      <motion.header
        className="sticky top-4 z-50 mx-3 md:mx-9"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav
          className="flex items-center justify-between px-6 py-3 rounded-2xl 
                     bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl
                     border border-gray-200/50 dark:border-gray-800/50
                     shadow-lg shadow-gray-100/20 dark:shadow-gray-900/20"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            aria-label="Go to homepage"
          >
            Ashutosh
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">
              Kumar
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  isActive(href)
                    ? "text-purple-600 dark:text-purple-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                {label}
                {isActive(href) && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400 rounded-full"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-3">
            <Mode />
            <Link
              href="/contact-me"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-full px-5"
              )}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl 
                       bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300
                       hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-20 left-4 right-4 p-6 rounded-2xl 
                         bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800
                         shadow-2xl"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 mb-6" aria-label="Mobile navigation">
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    className={cn(
                      "px-4 py-3 rounded-xl text-lg font-medium transition-colors",
                      isActive(href)
                        ? "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              {/* Divider */}
              <div className="h-px bg-gray-200 dark:bg-gray-800 mb-6" />

              {/* Actions */}
              <div className="flex items-center gap-3">
                <Mode />
                <Link
                  href="/contact-me"
                  onClick={closeMenu}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "rounded-full flex-1 justify-center"
                  )}
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
