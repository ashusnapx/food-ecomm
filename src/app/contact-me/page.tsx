import { ContactForm } from '@/components';
import Image from 'next/image';

const page = () => {
  return (
    <div className='flex flex-col justify-center'>
      <ContactForm />
      <div className='flex flex-col items-center'>
        <p className='text-4xl text-center md:text-7xl px-9'>
          Thanks for connecting BTW!
        </p>
        <Image
          src='/thnx.gif'
          width={300}
          height={300}
          alt='thnx image'
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default page;
