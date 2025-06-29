import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white w-full">
      <div className="mycontainer flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="logo font-bold text-white text-3xl md:text-2xl mb-2 md:mb-0">
          <span className="text-red-700">&lt;</span>
          Lock
          <span className="text-red-700">Byte&gt;</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm md:text-base">
          <li>
            <a href="#" className="hover:font-bold border border-white px-4 py-2 rounded block text-center">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-bold border border-white px-4 py-2 rounded block text-center">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-bold border border-white px-4 py-2 rounded block text-center">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
