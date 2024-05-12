import Link from 'next/link';
import {
  SiGithub,
  SiHashnode,
  SiInstagram,
  SiLeetcode,
  SiLinkedin,
  SiMedium,
  SiTwitter,
} from 'react-icons/si';
const socialLinks = [
  { href: 'https://github.com/ashusnapx', icon: <SiGithub /> },
  { href: 'https://instagram.com/ashusnapx', icon: <SiInstagram /> },
  { href: 'https://x.com/ashusnapx', icon: <SiTwitter /> },
  { href: 'https://linkedin.com/in/ashusnapx', icon: <SiLinkedin /> },
  { href: 'https://medium.com/@ashusnapx', icon: <SiMedium /> },
  { href: 'https://leetcode.com/u/dollarSign/', icon: <SiLeetcode /> },
  { href: 'https://hashnode.com/@ashusnapx', icon: <SiHashnode /> },
];

const ContactForm = () => {
  return (
    <div className='mx-4 md:mx-9 mt-9 mb-4'>
      <h1 className='text-center text-5xl text-purple-600 mb-5 font-bold tracking-widest'>
        Contact Me
      </h1>
      <div className='flex flex-row items-center justify-between px-5 md:px-80'>
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target='_blank'
            className='text-xl md:text-2xl md:border md:rounded-full md:hover:shadow-2xl md:p-3'
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactForm;
