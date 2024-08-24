import React from "react";
import { Link } from "react-router-dom";


export default function PortfolioSubmenu(){


    return(
        <div className="h-32 w-36">
            <nav className="p-3 font-lato">
                <ul className="space-y-3 flex flex-col items-center justify-evenly">
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