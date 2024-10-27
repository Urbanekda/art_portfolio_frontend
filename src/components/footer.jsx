import React from 'react';
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-main-bg w-full text-gray-300 py-8 font-lato border-t border-floral-white relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Social Media and Contact */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <div className='flex flex-row items-center mb-2'>
                <FaInstagram />
                <a href="https://www.instagram.com/vojtiseknovak?igsh=MW11enRhODNuYmVsaQ==" target="_blank" rel="noopener noreferrer" className="hover:underline mr-4 ml-1">
                @vojtiseknovak
                </a>
            </div>
            <div className='flex flex-row items-center'>
                <MdAlternateEmail />
                <a href="mailto:vojta@vojtechnovak.xyz" className="hover:underline text-center ml-1">
                vojta@vojtechnovak.xyz
                </a>  
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="w-full md:w-auto mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-end">
              <li className="mr-6"><Link to="/" className="hover:underline">Hlavní stránka</Link></li>
              <li className="mr-6"><Link to="/o_mne" className="hover:underline">O mně</Link></li>
              <li className="mr-6 md:mr-0"><Link to="/kontakt" className="hover:underline">Kontakt</Link></li>
            </ul>
          </nav>

          {/* Copyright */}
          <div className="w-full md:w-auto text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Vojtěch Novák. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;