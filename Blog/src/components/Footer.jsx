import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
