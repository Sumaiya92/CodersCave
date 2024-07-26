
import React from 'react';
import { FaLinkedinIn,FaGithub,FaWhatsapp } from 'react-icons/fa';
import { FaPhoneAlt,FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  return (
    <div id='contact' className="py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-0">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Contact Me</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-lg mb-4">Feel free to contact me using any of the following methods:</p>
            <ul className="list-none mb-4">
              <li className="flex items-start mb-3">
                <span className="inline-block w-6 h-6  text-blue-600">
                  <FaEnvelope></FaEnvelope>
                </span>
                <span>
                  <strong className="text-gray-700">Email:</strong> <a className="text-blue-600 hover:text-blue-900" href="mailto:your.email@example.com">sumaiyaamir2020@gmail.com</a>
                </span>
              </li>
              <li className="flex items-start mb-3">
                <span className="inline-block w-6 h-6  text-blue-600">
                  <FaPhoneAlt></FaPhoneAlt>
                </span>
                <span>
                  <strong className="text-gray-700">Phone:</strong> <a className="text-blue-600 hover:text-blue-900" href="tel:+1234567890">+91 9551191912</a>
                 
                  </span>

              </li>
              <li className="flex items-start mb-3">
                <span className="inline-block w-6 h-6 text-xl hover:text-green-600 transition duration-500  ease-in-out hover:-translate-y-1">
                 <FaWhatsapp></FaWhatsapp>
                </span>
                <span>
                  <strong className="text-gray-700">Whatsapp</strong> 
                 
                  </span>
              </li>
              <li className="flex items-start mb-3">
                <span className="inline-block w-6 h-6 text-xl hover:text-blue-400 transition duration-500  ease-in-out hover:-translate-y-1 ">
                 <FaGithub></FaGithub>
                </span>
                <span>
                  <strong className="text-gray-700">Github</strong> 
                 
                  </span>
              </li>
              <li className="flex items-start mb-3 ">
                <span className="inline-block w-6 h-6 text-xl  hover:text-blue-600 transition duration-500  ease-in-out hover:-translate-y-1">
                 <FaLinkedinIn></FaLinkedinIn>
                </span>
                <span>
                  <strong className="text-gray-700">LinkedIn</strong> 
                 
                  </span>
              </li>
              
            
  
            </ul>
          </div>
          <div className="bg-white shadow-lg  rounded-lg p-6">
            <form>
              <label className="block mb-4">
                <span className="text-gray-700 font-medium">Name:</span>
                <input className="block w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="name" />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700 font-medium">Email:</span>
                <input className="block w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" name="email" />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700 font-medium">Message:</span>
                <textarea className="block w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="message" rows="4"></textarea>
              </label>
              
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact