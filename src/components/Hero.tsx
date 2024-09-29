import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  SiGithub,
  SiHashnode,
  SiInstagram,
  SiLeetcode,
  SiLinkedin,
  SiMedium,
  SiTwitter,
} from "react-icons/si";
const socialLinks = [
  { href: "https://github.com/ashusnapx", icon: <SiGithub /> },
  { href: "https://instagram.com/ashusnapx", icon: <SiInstagram /> },
  { href: "https://x.com/ashusnapx", icon: <SiTwitter /> },
  { href: "https://linkedin.com/in/ashusnapx", icon: <SiLinkedin /> },
  { href: "https://medium.com/@ashusnapx", icon: <SiMedium /> },
  { href: "https://leetcode.com/u/dollarSign/", icon: <SiLeetcode /> },
  { href: "https://hashnode.com/@ashusnapx", icon: <SiHashnode /> },
];

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between mx-3 md:mx-9 p-9 md:p-2 min-h-screen border dark:border-gray-600 border-dotted mb-2 rounded-3xl mt-2'>
      <div className='flex flex-col space-y-9 mx-0 md:mx-3'>
        <div className='text-xl md:text-4xl text-slate-700 dark:text-slate-400 tracking-widest whitespace-nowrap'>
          FULL-STACK DEVELOPER
        </div>
        <div className='text-4xl md:text-7xl tracking-tighter font-bold text-center md:text-left'>
          Ashutosh<span className='italic text-purple-600'>Kumar </span>{" "}
        </div>
        <div className='border-l-2 border-purple-600 tracking-tight text-2xl px-3 text-slate-700 dark:text-slate-400'>
          {" "}
          I&apos;m a full-stack web developer
          <br /> working remotely
          <br /> from Bharat(India) 🇮🇳
        </div>

        <Link
          href='https://dub.sh/ashutosh-frontend'
          target='_blank'
          className={cn(
            buttonVariants({ variant: "default" }),
            "rounded-full text-xl tracking-wider w-full"
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
        loading='lazy'
        priority={false}
      />
      <div className='flex flex-row md:flex-col items-center justify-between gap-3 md:space-y-3 mt-6 md:mt-0 mx-3 text-xl md:text-4xl text-primary '>
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target='_blank'
            className='hover:text-black dark:hover:text-white'
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
