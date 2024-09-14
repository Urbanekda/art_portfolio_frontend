import React from "react";
import { Link } from "react-router-dom";
import HomeItem from "./homeItem";
import chobot from "../assets/chobot.png";
import animace from "../assets/animace.png";
import mudrc from "../assets/mudrc.png";

export default function Skills() {
    return(
        <div className="flex flex-col md:flex-row p-8 bg-black w-full justify-evenly items-center border-b border-floral-white bg-gradient-to-r from-black via-dark-red to-black">
            <Link to="/portfolio/grafika">
                <HomeItem name="Grafika" image={chobot} description={"Prohlédněte si moji grafickou práci. Rád vytvořím unikátní grafiku pro váš projekt."} />
            </Link>
            <Link to="/portfolio/animace">
                <HomeItem name="Animace" image={animace} description={"Vytvářím krátké animace, které efektivně komunikují myšlenky a pocity."} />
            </Link>
            <Link to="/portfolio/malba">
                <HomeItem name="Malba" image={mudrc} description={"Obrazy, které promlouvají. Moje tvorba je zosobněním vnímání světa a vnitřní zkušenosti"} />
            </Link>
        </div>
    );
};