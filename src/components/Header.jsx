import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-100 text-gray-800 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-500">My Blog</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-500">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
