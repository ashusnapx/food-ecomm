'use client';
import Link from 'next/link';
import { Mode } from './Mode';
import { Button, buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Common Navbar */}
      <div className='flex flex-row items-center justify-between mx-3 md:mx-9 mt-5 border px-3 py-3 rounded-full text-xl'>
        {/* Logo */}
        <div className='space-x-5 flex items-center'>
          <Link href='/' className='text-2xl font-bold mx-5 tracking-tighter'>
            Ashutosh
            <span className='italic text-purple-600'>Kumar</span>
          </Link>
        </div>

        <div className='hidden md:block space-x-9 font-medium'>
          <Link href='/'>Home</Link>
          <Link href='/projects'>Projects</Link>
          <Link href='/skills'>Skills</Link>
          <Link href='/internships'>Internships</Link>
        </div>

        {/* Menu Button */}
        <Button
          className='md:hidden border rounded-full'
          onClick={handleMenuButton}
        >
          {isMenuOpen ? (
            <ImCross className='text-white text-xl' />
          ) : (
            <CiMenuKebab className='text-white text-xl' />
          )}
        </Button>

        {/* Toggle and Contact */}
        <div className='space-x-2 hidden md:flex items-center'>
          <Mode />
          <Link
            href='/contact-me'
            className={cn(
              buttonVariants({ variant: 'default' }),
              'rounded-full'
            )}
          >
            Contact me &rarr;
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='fixed bg-opacity-95 mx-4 px-9 py-4 md:p-0 z-10 md:hidden text-white w-auto bg-black border rounded-3xl mt-1'>
          <div className='space-y-6'>
            {/* Links */}
            <div className='flex flex-col space-y-5'>
              <Link href='/'>Home</Link>
              <Link href='/projects'>Projects</Link>
              <Link href='/skills'>Skills</Link>
              <Link href='/internships'>Internships</Link>
            </div>

            {/* Toggle and Contact */}
            <div className='space-x-2 flex items-center'>
              <Mode />
              <Link
                href='/contact-me'
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'rounded-full'
                )}
              >
                Contact me &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
