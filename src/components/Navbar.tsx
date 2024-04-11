import Link from 'next/link';
import React from 'react';
import { Mode } from './Mode';
import { Button, buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between mx-9 mt-5 border px-5 py-3 rounded-full text-xl'>
      {/* logo and nav links */}
      <div className='space-x-5 flex items-center'>
        <Link href='/' className='text-2xl font-bold mx-5 tracking-tighter'>
          Ashutosh
          <span className='italic text-purple-600'>Kumar</span>
        </Link>
        <div className='space-x-6 hidden md:inline'>
          <Link href='/'>Projects</Link>
          <Link href='/'>Skills</Link>
          <Link href='/'>Links</Link>
          <Link href='#internships'>Internships</Link>
        </div>
      </div>

      <div className='md:hidden'>
        <Mode />
      </div>

      {/* toggle and contact */}
      <div className='space-x-2 hidden md:flex items-center'>
        <Mode />
        <Link
          href='/contact-me'
          className={cn(buttonVariants({ variant: 'default' }), 'rounded-full')}
        >
          Contact me &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
