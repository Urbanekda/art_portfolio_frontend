import React from 'react';
import { Link } from "react-router-dom"
import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar bg-sidebar-bg bg-cover bg-center text-floral-white h-full w-36 fixed bg border-r border-floral-white">
      <div className="flex p-4 items-center justify-center">
        <img src={logo} alt="logo" className="h-auto w-16"></img>
      </div>
      <nav className="mt-4 items-center justify-center font-lato">
        <ul>
          <li className="p-4 my-4 hover:bg-gray-700 border-t border-b border-floral-white text-center">
            <Link to="/o_mne" className='hover:underline'>O mně</Link>
          </li>
          <li className="p-4 my-4 hover:bg-gray-700 border-t border-b border-floral-white text-center">
            <Link to="/portfolio" className='hover:underline'>Portfolio</Link>
          </li>
          <li className="p-4 my-4 hover:bg-gray-700 border-t border-b border-floral-white text-center">
            <Link to="/kontakt" className='hover:underline'>Kontakt</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;