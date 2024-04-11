import React from 'react';
import Card from './Card';

const Internships = () => {
  return (
    <div className='mx-9 mt-5'>
      <h1 className='text-center text-5xl text-purple-600 mb-5 font-bold tracking-widest'>
        Internships
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <Card
          role='Frontend Developer'
          companyName='AI Caller.io'
          fromDate='2023-12-11'
          toDate='2024-01-11'
          modeOfWork='Internship, Remote'
          workDone={[
            'Implemented upload CSV feature to trigger bulk calls',
            'Migrated app from client side to server side rendering',
            'Integrated hashnodes headless CMS blog feature for better SEO',
            'Improved call template form with tooltips for better user experience',
            'Integrated Tolt for affiliate marketing',
          ]}
          TechStack={[
            'NextJS',
            'ReactJS',
            'Redux Toolkit',
            'React Query',
            'Typescript',
            'Shadcn',
            'Tailwind CSS',
          ]}
        />

        <Card
          role='Teaching Assistant'
          companyName='Coding Ninjas'
          fromDate='2022-02-01'
          toDate='2022-10-01'
          modeOfWork='Internship, Remote'
          workDone={[
            'Solved more than 1000 questions related to C++, Data structures and algorithm.',
            'Mentored and assisted more than 600 students in solving coding queries.',
            'Achieved a student rating of 4.8/5 , demonstrating effective teaching and problem-solving skills.',
          ]}
          TechStack={['C++', 'Data structures', 'Algorithms']}
        />
      </div>
    </div>
  );
};

export default Internships;
