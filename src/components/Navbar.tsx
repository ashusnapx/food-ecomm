"use client";

import Link from "next/link";
import { Mode } from "./Mode";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { CiMedicalCross, CiMenuKebab } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { links } from "@/constants/constant";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const handleMenuButton = () => setIsMenuOpen((prev) => !prev);

  const getLinkClass = (href: string) =>
    pathName === href
      ? "text-purple-700 dark:text-purple-400 font-semibold"
      : "hover:text-purple-500 transition";

  const renderLinks = () =>
    links.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        className={`text-lg ${getLinkClass(href)}`}
        onClick={() => setIsMenuOpen(false)}
      >
        {label}
      </Link>
    ));

  return (
    <>
      {/* Common Navbar */}
      <motion.div
        className='flex items-center justify-between mx-3 md:mx-9 mt-5 px-6 py-3 rounded-full shadow-lg bg-white/40 dark:bg-black/40 backdrop-blur-lg border border-gray-300 dark:border-gray-700 transition top-5 sticky z-1'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Logo */}
        <div className='flex items-center space-x-5'>
          <Link href='/' className='text-2xl font-bold tracking-tighter'>
            Ashutosh<span className='italic text-purple-600'>Kumar</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className='hidden md:flex space-x-9 font-medium'>
          {renderLinks()}
        </div>

        {/* Toggle & Contact - Desktop */}
        <div className='hidden md:flex items-center space-x-4'>
          <Mode />
          <Link
            href='/contact-me'
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full"
            )}
          >
            Contact me &rarr;
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          className='md:hidden border rounded-full p-2'
          onClick={handleMenuButton}
          aria-expanded={isMenuOpen}
          aria-label='Toggle Menu'
        >
          {isMenuOpen ? (
            <CiMedicalCross className='text-xl rotate-45 transition-transform duration-300' />
          ) : (
            <CiMenuKebab className='text-xl transition-transform duration-300' />
          )}
        </Button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className='fixed inset-0 bg-black/70 z-50 flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl text-center w-5/6 md:w-1/3'
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
            >
              <div className='space-y-6'>
                <div className='flex flex-col space-y-5'>{renderLinks()}</div>

                {/* Toggle & Contact - Mobile */}
                <div className='flex items-center justify-center space-x-3'>
                  <Mode />
                  <Link
                    href='/contact-me'
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "rounded-full"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact me &rarr;
                  </Link>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className='mt-5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition'
                >
                  Close Menu
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
