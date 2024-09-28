import React from "react";
import { internshipData } from "@/constants/constant";

const Internships = () => {
  return (
    <div className='mx-9 mt-5'>
      <h1 className='text-center text-4xl md:text-5xl text-purple-700 dark:text-purple-400 mb-8 font-extrabold tracking-wider'>
        Internships
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {internshipData.map((internship, index) => (
          <div
            key={index}
            className='p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
          >
            <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2'>
              {internship.role}
            </h2>
            <p className='text-lg font-medium text-purple-600 dark:text-purple-400'>
              {internship.companyName}
            </p>
            <p className='text-sm text-gray-600 dark:text-gray-400 mb-4'>
              {internship.fromDate} to {internship.toDate}
            </p>
            <p className='text-sm text-gray-700 dark:text-gray-300'>
              <span className='font-semibold'>Mode:</span>{" "}
              {internship.modeOfWork}
            </p>
            <div className='mt-4'>
              <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                Work Done
              </h3>
              <ul className='list-disc list-inside text-gray-700 dark:text-gray-300'>
                {internship.workDone.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
            <div className='mt-4'>
              <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                Tech Stack
              </h3>
              <ul className='flex flex-wrap gap-2'>
                {internship.TechStack.map((tech, i) => (
                  <li
                    key={i}
                    className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm'
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
