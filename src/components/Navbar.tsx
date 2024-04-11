import Link from 'next/link';
import React from 'react';
import { Mode } from './Mode';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <div>
      {/* logo and nav links */}
      <div>
        <Link href='/'>Ashutosh Kumar</Link>
        <Link href='/'>Home</Link>
        <Link href='/'>Skills</Link>
        <Link href='/'>Links</Link>
        <Link href='/'>Internships</Link>
      </div>

      {/* toggle and contact */}
          <div>
              <Mode />
              <Link href='/contact-me'>
              <Button>Contact Me</Button>
              </Link>
      </div>
    </div>
  );
};

export default Navbar;
