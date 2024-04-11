import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContactForm = () => {
  return (
    <div className='mx-4 md:mx-9 mt-9 mb-4'>
      <h1 className='text-center text-5xl text-purple-600 mb-5 font-bold tracking-widest'>
        Contact Me
      </h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
        <Link
          href='mailto:ashu.kumarexam@gmail.com'
          className='col-span-1 p-4 rounded-xl border w-fit h-fit'
        >
          <p className='text-xl font-bold mb-2'>Email:</p>
          <p className='text-lg'>ashu.kumarexam@gmail.com &rarr;</p>
        </Link>

        <Link
          href='mailto:ashu.kumarexam@gmail.com'
          className='col-span-1 p-4 rounded-xl border w-fit h-fit'
        >
          <p className='text-xl font-bold mb-2'>Twitter:</p>
          <p className='text-lg'>ashu.kumarexam@gmail.com &rarr;</p>
        </Link>

        <Link
          href='mailto:ashu.kumarexam@gmail.com'
          className='col-span-1 p-4 rounded-xl border w-fit h-fit'
        >
          <p className='text-xl font-bold mb-2'>LinkedIn:</p>
          <p className='text-lg'>ashu.kumarexam@gmail.com &rarr;</p>
        </Link>

        <Link
          href='mailto:ashu.kumarexam@gmail.com'
          className='col-span-1 p-4 rounded-xl border w-fit h-fit'
        >
          <p className='text-xl font-bold mb-2'>Resume:</p>
          <p className='text-lg'>ashu.kumarexam@gmail.com &rarr;</p>
        </Link>
      </div>
    </div>
  );
};

export default ContactForm;
