import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-4xl mx-auto px-6 lg:px-0">
        <div className="flex justify-between items-center">
          <p>&copy;  All rights reserved.</p>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
