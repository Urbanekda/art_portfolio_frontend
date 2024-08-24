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
    <div className="sidebar bg-sidebar-bg bg-cover bg-center text-floral-white h-full w-36 fixed bg border-r border-floral-white">
      <div className="flex p-4 items-center justify-center">
        <Link to="/">
          <img src={logo} alt="logo" className="h-auto w-16"></img>
        </Link>
      </div>
      <nav className="mt-4 font-lato">
        <ul className='flex flex-col space-y-2'>
          <li>
            <Link to="/o_mne" className='block hover:bg-gray-700 border-t border-b border-floral-white text-center hover:underline p-4'>O mně</Link>
          </li>
          <li onClick={handleClick} className="block p-4 hover:bg-gray-700 border-t border-b border-floral-white text-center hover:underline hover:cursor-pointer">
            Portfolio
          </li>
          {display && <li><PortfolioSubmenu /></li>}
          <li className="">
            <Link to="/kontakt" className='block p-4 hover:bg-gray-700 border-t border-b border-floral-white text-center hover:underline'>Kontakt</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;