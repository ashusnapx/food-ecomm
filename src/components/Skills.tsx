import React from 'react';
import CardSkills from './CardSkills';
import { skillCategories } from '@/constants/constant';

const Skills = () => {
  return (
    <div className='mx-9 mt-9'>
      <h1 className='text-center text-5xl text-purple-600 mb-5 font-bold tracking-widest'>
        Skills
      </h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {skillCategories.map((skillCategory, index) => (
          <CardSkills key={index} skillCategory={skillCategory} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
