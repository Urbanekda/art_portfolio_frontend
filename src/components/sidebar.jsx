import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom"
import logo from "../assets/logo.png";
import PortfolioSubmenu from './portfolioSubmenu';

const Sidebar = () => {

  const [display, setDisplay] = useState(false)

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div className="text-lg md:sidebar md:w-36 md:h-full z-20 w-full bg-sidebar-bg border-b bg-cover bg-center text-floral-white fixed bg h-16 border-r border-floral-white">
      <nav className="font-lato h-full">
        <ul className='relative flex md:flex-col w-full md:h-20 h-full flex-row md:space-y-5 md:space-x-0'>
          
          <li className='w-full md:mt-4 h-full flex items-center justify-center'>
            <Link to="/" className='h-full flex items-center justify-center w-full'>
            <img src={logo} alt="logo" className="h-auto md:w-16 w-10"></img>
            </Link>
          </li>
          

          <li className='w-full h-full'>
            <Link to="/o_mne" className='flex items-center justify-center h-full md:py-3 hover:bg-gray-700 md:border-t md:border-l-0 md:border-r-0 md:border-b text-center hover:underline'>O mně</Link>
          </li>
          

          <li onClick={handleClick} className="w-full flex items-center justify-center h-full md:py-3 hover:bg-gray-700 md:border-t md:border-l-0 md:border-r-0 md:border-b text-center hover:underline hover:cursor-pointer">
            Portfolio
            {display && <PortfolioSubmenu />}
          </li>
          

          
          

          <li className="w-full h-full mr-4">
            <Link to="/kontakt" className='flex items-center justify-center h-full md:py-3 hover:bg-gray-700 md:border-t md:border-l-0 md:border-r-0 md:border-b text-center hover:underline'>Kontakt</Link>
          </li>
        
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;