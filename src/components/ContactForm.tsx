import Link from "next/link";
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

const ContactForm = () => {
  return (
    <footer className='mx-4 md:mx-9 mt-9 mb-4 py-10 bg-primary/30 text-gray-900 dark:text-gray-100 rounded-md'>
      <h1 className='text-center text-4xl md:text-5xl text-purple-500 dark:text-purple-200 mb-8 font-bold tracking-tighter'>
        Contact Me
      </h1>
      <div className='flex flex-wrap justify-center gap-6 md:gap-10'>
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl md:text-3xl p-4 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300'
          >
            {link.icon}
          </Link>
        ))}
      </div>
      <p className='text-center text-sm text-gray-600 tracking-tighter dark:text-gray-400 mt-8'>
        © {new Date().getFullYear()} Ashutosh Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default ContactForm;
