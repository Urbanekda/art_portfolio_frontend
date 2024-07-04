import React from "react";
import Strihac from "../assets/strihac.png";
import { useNavigate } from "react-router-dom";

export default function Banner() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/kontakt");
    }

    return(
        <div className="w-full bg-main-bg text-floral-white flex flex-col md:flex-row items-center justify-center p-8 border-b border-floral-white">
      <div className="text-center md:text-left md:mr-7 md:max-w-80">
        <h1 className="text-5xl font-exo2 font-light">Vojtěch Novák.</h1>
        <h2 className="text-5xl font-exo2 font-medium">Grafika Animace</h2>
        <p className="mt-4 font-lato text-floral-white">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        <button className="mt-4 bg-dark-red text-floral-white py-2 px-10 rounded hover:bg-red-950 underline transition duration-300 hover:scale-110" onClick={handleClick}>Kontakt</button>
      </div>
      <div className="mt-8 md:mt-0">
        <img src={Strihac} alt="Design" className="w-64 h-64 object-cover rounded shadow-red-shadow" />
      </div>
    </div>
    );
};