import React from 'react';
import ProfileImage from '../components/ProfileImage';
import SkillCard from '../components/SkilCard'; // Note: Ensure this filename matches
import About from '../components/About';
import ProjectList from '../components/ProjectList'; // Correct path
import Contact from '../components/Contact'; // Correct path
import Footer from '../components/Footer';
import Link from 'next/link';



const Port = () => {
  return (
    <div id='home' className='bg-slate-200'>
      <div className='flex justify-between bg-gray-700 '>
        <div className='flex p-5'>
          <h4 className="text-orange-500 px-52 text-lg ">Sumaiya</h4>
        </div>
        <div className='flex text-orange-400 text-lg'>
          <nav className="flex justify-between items-center p-5">
            <ul className="flex justify-between items-center">
              <li className="mr-6 transition duration-300 hover:text-white">
                <Link href="#home">Home</Link>
              </li>
              <li className="mr-6 transition duration-300 hover:text-white">
                <Link href="#about">About</Link>
              </li>
              <li className="mr-6 transition duration-300 hover:text-white">
                <Link href="#projects">Projects</Link>
              </li>
              <li className="mr-6 transition duration-300 hover:text-white">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      <div className="header-text text-left flex px-[7%] pt-60 w-[100vw] h-[100vh]">
        <div className='basis-2/3 px-20'>
          <h4 className="text-6xl py-2">Hi, I am <span className='font-playwrite text-orange-500'>Sumaiya</span></h4>
          <h2 className="text-xl py-2">Web Developer</h2>
          <p className="leading-7 text-l text-gray-500 text-balance py-5">
            As a driven student, I am committed to mastering web development,
            fueled by my strong work ethic and dedication to learning. I am
            excited to explore the world of coding and bring my ideas to life.
          </p>
        </div>
          
        <div className='flex-grow-1'>
          <ProfileImage/>
        </div>
      </div>
        
      {/* about section */}
        
      <div className='px-[7%] mb-20 ml-[3%] '>
        <About />
      </div>

      <div className='px-[7%] ml-[3%] pt-20'>
        <h2 className="text-6xl font-playwrite">Skills</h2>
        <p className="text-gray-500 text-lg text-balance py-5">
          I have hands-on experience with front-end development and am currently learning and exploring back-end development
        </p>
        <div>
          <SkillCard />
        </div>
      </div>
      
      <div className='pt-10 pb-2'>
        <ProjectList />
      </div>
      
      <div className='px-[15%]'>
        <Contact />
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Port;
