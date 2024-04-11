import React from 'react';

interface CardProps {
  role: string;
  companyName: string;
  fromDate: string;
  toDate: string;
  modeOfWork: string;
  workDone: string[];
  TechStack: string[];
}

const Card = ({
  role,
  companyName,
  fromDate,
  toDate,
  modeOfWork,
  workDone,
  TechStack,
}: CardProps): JSX.Element => {
  const calculateDuration = (): string => {
    const from = new Date(fromDate);
    const to = new Date(toDate);
    const diffInMs = Math.abs(to.getTime() - from.getTime());
    const days = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    return `${years} years ${months} months`;
  };

  return (
    <div className='border rounded-xl p-4 w-full h-96 overflow-auto'>
      <h1 className='text-3xl font-semibold mb-2 border-b-2 border-purple-500/50 border-dotted p-2 text-center'>
        {role}
      </h1>
      <h2 className='text-2xl font-semibold'>{companyName}</h2>
      <p className='text-gray-600'>Duration: {calculateDuration()}</p>
      <p className='text-gray-600'>Mode of Work: {modeOfWork}</p>
      <div>
        <h3 className='text-lg font-semibold mt-2'>Work Done:</h3>
        <ul className='list-disc pl-6 overflow-y-auto'>
          {workDone.map((task, index) => (
            <li key={index} className='text-gray-600'>
              {task}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className='text-lg font-semibold mt-2'>Tech Stack:</h3>
        <ul className='list-disc pl-6 overflow-y-auto'>
          {TechStack.map((task, index) => (
            <li key={index} className='text-gray-600'>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
