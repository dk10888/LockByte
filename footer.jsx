import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white w-full px-6 md:px-28 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center md:items-end text-sm ">
        
        {/* Logo + Copyright */}
        <div className="font-bold text-white text-xl">
          <span className="text-red-700">&lt;</span>
          <span className='hover:font-bold'>Lock</span>
          <span className="text-red-700 hover:font-bold">Byte&gt;</span> © {new Date().getFullYear()}
        </div>

        {/* Footer Links */}
        <div className="flex gap-4 relative ">
          <a href="" className="hover:font-bold ">Privacy</a>
          <a href="" className="hover:font-bold">Terms</a>
          <a href="" className="hover:font-bold">Support</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
