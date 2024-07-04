import React from 'react';
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-main-bg text-gray-300 py-8 font-lato border-t border-floral-white relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Social Media and Contact */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className='flex flex-row items-center'>
                <FaInstagram />
                <a href="https://www.instagram.com/youraccount" target="_blank" rel="noopener noreferrer" className="hover:underline mr-4 ml-1">
                @vojtiseknovak
                </a>
            </div>
            <div className='flex flex-row items-center'>
                <MdAlternateEmail />
                <a href="mailto:your@email.com" className="hover:underline text-center ml-1">
                vojta@vojtechnovak.cz
                </a>  
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="w-full md:w-1/3 mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center">
              <li className="mr-6"><Link to="/" className="hover:underline">Hlavní stránka</Link></li>
              <li className="mr-6"><Link to="/o_mne" className="hover:underline">O mně</Link></li>
              <li className="mr-6"><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
              <li className="mr-6"><Link to="/kontakt" className="hover:underline">Kontakt</Link></li>
            </ul>
          </nav>

          {/* Copyright */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Vojtěch Novák. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;