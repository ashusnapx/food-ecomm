import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import {
  SiGithub,
  SiHashnode,
  SiInstagram,
  SiLeetcode,
  SiLinkedin,
  SiMedium,
  SiTwitter,
} from 'react-icons/si';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between mx-3 md:mx-9 p-2 min-h-screen border border-dotted mt-2 mb-2 rounded-3xl'>
      <div className='flex flex-col space-y-9 mx-0 md:mx-3'>
        <div className='text-2xl md:text-4xl text-slate-700 dark:text-slate-400 tracking-widest whitespace-nowrap'>
          FULL-STACK DEVELOPER
        </div>
        <div className='text-4xl md:text-7xl tracking-tighter font-bold text-center md:text-left'>
          Ashutosh<span className='italic text-purple-600'>Kumar </span>{' '}
        </div>
        <div className='border-l-2 border-purple-600 tracking-tight text-2xl px-3 text-slate-700 dark:text-slate-400'>
          {' '}
          I&apos;m a developer
          <br /> working remotely
          <br /> from Bharat(India) 🇮🇳
        </div>

        <Link
          href='/contact-me'
          className={cn(
            buttonVariants({ variant: 'default' }),
            'rounded-full text-xl tracking-wider w-full'
          )}
        >
          Resume &rarr;
        </Link>
      </div>
      <Image
        src='/pfp5.png'
        height={400}
        width={400}
        alt='profile-pic'
        className='dark:border-2 rounded-full border-purple-600 mt-3'
      />
      <div className='flex flex-row md:flex-col items-center justify-between gap-3 md:space-y-3 mt-6 md:mt-0 mx-3 text-xl'>
        <SiGithub />
        <SiInstagram />
        <SiTwitter />
        <SiLinkedin />
        <SiMedium />
        <SiLeetcode />
        <SiHashnode />
      </div>
    </div>
  );
};

export default Hero;
