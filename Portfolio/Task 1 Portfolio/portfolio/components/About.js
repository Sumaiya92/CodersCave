import React from 'react';
import Image from 'next/image';

const About = () => {
  return (

    <div id='about' className="about-section  px-5 lg:flex lg:gap-x-[50%] lg:flex-row space-y-20 ">
      <div className=' lg:basis-1/2 w-[50vw] '>
      <h1 className='text-6xl font-playwrite '>About Me</h1>
      <p className='text-gray-500 text-lg  py-5'>I am a curious and driven individual with a passion for science, engineering, and technology.
      I am currently developing my skills in frontend development and backend development, with a goal to build a personal project that combines AI and web development.
     My unique strengths include proficiency in JavaScript, problem-solving skills, and experience with version control.
     </p>
      </div>

      <div className='flex lg:basis-1/2  '> 
      <Image className='rounded-full md:max-w-[20vw] lg:w-[20vw]  lg:h-fit md:h-[55%] lg:text-balance   lg:flex justify-end' src="/images/About.jpg" alt='About'width={600} // add this
  height={300} // add this
   ></Image>
      </div>
    </div>
  );
};
export default About;
