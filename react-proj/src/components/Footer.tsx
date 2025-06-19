import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-3 mt-4">
      &copy; {new Date().getFullYear()} Car Management System
    </footer>
  );
};

export default Footer;
