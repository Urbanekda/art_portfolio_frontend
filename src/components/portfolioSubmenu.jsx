import React from "react";
import { Link } from "react-router-dom";


export default function PortfolioSubmenu(){


    return(
        <div className="absolute top-full md:top-36 md:left-full left-30 rounded-sm bg-black bg-sidebar-bg md:border-t border-t-0 border-l border-r border-b border-floral-white bg-center h-32 w-36">
            <nav className=" font-lato">
                <ul className="p-2 space-y-3 flex flex-col items-center justify-evenly">
                    <li>
                        <Link to="/portfolio/grafika" className="p-3 text-center hover:underline">Grafika</Link>
                    </li>
                    <li>
                        <Link to="/portfolio/malba" className="p-3 text-center hover:underline">Malba</Link>
                    </li>
                    <li>
                        <Link to="portfolio/animace" className="p-3 text-center hover:underline">Animace</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};