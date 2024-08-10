import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import { SiMysql, SiTailwindcss } from 'react-icons/si';

const SkillCard = () => {
  return (
    <div className="skill-card sm:flex">
      <div className='px-32 pt-20'>
        <ul className='grid grid-cols-3 grid-rows-2 gap-20'>
          <li className='bg-white shadow-lg p-6 transform hover:-translate-y-5 hover:text-red-500 transition duration-500 ease-in-out rounded-lg hover:shadow-2xl hover:animate-pulse'>
            <FaHtml5 className='h-56 w-40 mx-auto text-red-500' /> 
            <p className='text-lg text-center mt-4'>HTML5</p>
          </li>
          <li className='bg-white shadow-lg p-6 transform hover:-translate-y-5 hover:text-blue-500 transition duration-500 ease-in-out rounded-lg hover:shadow-2xl hover:animate-pulse'>
            <FaCss3 className='h-56 w-40 mx-auto text-blue-500' /> 
            <p className='text-lg text-center mt-4'>CSS3</p>
          </li>
          <li className='bg-white shadow-lg p-6 transform hover:-translate-y-5 hover:text-yellow-500 transition duration-500 ease-in-out rounded-lg hover:shadow-2xl hover:animate-pulse'>
            <FaJs className='h-56 w-40 mx-auto text-yellow-500' /> 
            <p className='text-lg text-center mt-4'>JavaScript</p>
          </li>
          <li className='bg-white shadow-lg p-6 transform hover:-translate-y-5 hover:text-blue-400 transition duration-500 ease-in-out rounded-lg hover:shadow-2xl hover:animate-pulse'>
            <FaReact className='h-56 w-fit mx-auto text-blue-400' /> 
            <p className='text-lg text-center mt-4'>React</p>
          </li>
          <li className='bg-white shadow-lg p-6 transform hover:-translate-y-5 hover:text-blue-300 transition duration-500 ease-in-out rounded-lg hover:shadow-2xl hover:animate-pulse'>
            <SiMysql className='h-56 w-40 mx-auto text-blue-300' /> 
            <p className='text-lg text-center mt-4'>MySQL</p>
          </li>
          <li className='bg-white shadow-lg p-6 transform hover:-translate-y-5 hover:text-teal-500 transition duration-500 ease-in-out rounded-lg hover:shadow-2xl hover:animate-pulse'>
            <SiTailwindcss className='h-56 w-40 mx-auto text-teal-500' /> 
            <p className='text-lg text-center mt-4'>Tailwind CSS</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
