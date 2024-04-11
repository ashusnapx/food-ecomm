import React from 'react';

interface SkillCategory {
  icon: React.ComponentType<{ className: string }>;
  title: string;
  skills: { icon: React.ComponentType<{ className: string }>; label: string }[];
}

interface SkillCardProps {
  skillCategory: SkillCategory;
}

const CardSkills = ({ skillCategory }: SkillCardProps): JSX.Element => (
  <div className='border rounded-xl p-4 w-full h-auto'>
    <div className='flex items-center mb-2 border-b-2 border-purple-500/50 border-dotted p-1 text-center'>
      <skillCategory.icon className='w-8 h-8 mr-2' />
      <h2 className='text-xl font-semibold tracking-tighter'>
        {skillCategory.title}
      </h2>
    </div>
    <div>
      <ul className='list-disc pl-6'>
        {skillCategory.skills.map((skill, index) => (
          <li key={index} className='text-gray-600 gap-2 flex'>
            <skill.icon className='w-6 h-6 mr-2 mb-3' />
            {skill.label}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default CardSkills;
