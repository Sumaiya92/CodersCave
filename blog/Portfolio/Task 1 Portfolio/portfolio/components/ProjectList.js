import React from 'react';
import Image from 'next/image';
import { RiArrowDropRightLine } from "react-icons/ri";

const ProjectList = () => {
 
  const Projects = [
    {
      id: '1',
      title: "Currency Converter",
      desc: 'A web-based currency converter that allows users to convert amounts across different currencies. Built with HTML, CSS, JavaScript, demonstrating my understanding of real-time data integration and user interface design.',
      img: '/images/currency.jpg',
    },
    {
      id: '2',
      title: "Weather App",
      desc: 'A web-based weather application that provides real-time weather information for locations worldwide. Built with JavaScript and utilizing API integration, this project demonstrates my ability to fetch and parse data, create interactive user interfaces, and implement geolocation functionality. The app offers current weather conditions, forecasts, and temperature conversions, showcasing my attention to detail and commitment to user experience.',
      img: '/images/weatherr.jpg',
    },
    {
      id: '3',
      title: 'To-Do List App',
      desc: 'A web-based to-do list application that enables users to manage tasks and stay organized. This project showcases my ability to create interactive, user-friendly applications using HTML, CSS, JavaScript.',
      img: '/images/to-do list.jpg',
    },
    {
      id: '4',
      title: 'Responsive Landing Page',
      desc: 'A fully dynamic website that showcases my ability to create data-driven, interactive web applications using HTML, TailwindCSS, JavaScript. This project demonstrates my understanding of backend development and database integration.',
      img: '/images/landing.jpg',
    },
    {
      id: '5',
      title: 'The Catering Co',
      desc: 'Designed and developed a dynamic frontend for a catering company using HTML, CSS, and JavaScript. This project demonstrates my ability to create interactive and engaging user experiences for the hospitality industry.',
      img: '/images/catering.jpg',
    },
    {
      id: '6',
      title: 'BMI Calculator',
      desc: 'A web-based BMI calculator that allows users to calculate their body mass index. Built with JavaScript, this project demonstrates my understanding of user input handling, calculation logic, and result display. The calculator provides accurate BMI calculations and offers a simple, intuitive user interface, showcasing my focus on user experience and accessibility.',
      img: '/images/bmi calculator.jpg',
    },
  ];

  return (
    <div id='projects'>
       <h2 className=" pl-[10%] text-6xl  font-playwrite ">Projects</h2>
       <div className="flex flex-wrap justify-center gap-16  p-[4.5rem]  ">
      {Projects.map((project) => (
        <div
          key={project.id}
          className="shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out hover:scale-105 flex flex-col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <div className="relative h-60 sm:h-72 lg:h-80 xl:h-[30vh] shadow-lg pt-20 px-10">
            <Image
              src={project.img}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className=" rounded-t-lg"
            />
          </div>
          <div className="flex flex-col flex-1 p-4  bg-white">
            <h1 className="text-xl font-bold font-playwrite ">{project.title}</h1>
            <p className="pt-2 flex-grow text-gray-500 hover:text-black">{project.desc}</p>
            <div className='flex flex-col justify-center items-center pt-5 pr-5 '>
            
              <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold   text-center p-3 rounded-lg "'>Learn More </button>
            </div>
            </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default ProjectList;
