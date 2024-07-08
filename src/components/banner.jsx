import React from "react";
import Strihac from "../assets/strihac.png";
import Animation from "./animation";
import { useNavigate } from "react-router-dom";

export default function Banner() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/kontakt");
    }

    return(

    <div className="relative z-10 overflow-hidden border-b border-floral-white">
    <div className="absolute inset-0 z-0">
      <Animation />
    </div>
    
    <div className="relative z-10 w-full text-floral-white flex flex-col md:flex-row items-center justify-center p-8">
      <div className="text-center md:text-left md:mr-7 md:max-w-96 bg-black bg-opacity-30 rounded p-6 px-10">
          <h1 className="text-5xl font-exo2 font-light">Vojtěch Novák.</h1>
          <h2 className="text-5xl font-exo2 font-medium">Grafika Animace</h2>
          <p className="mt-4 font-lato text-floral-white">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
          <button className="mt-4 bg-dark-red text-floral-white py-2 px-10 rounded hover:bg-red-950 underline transition duration-300 hover:scale-110" onClick={handleClick}>Kontakt</button>
      </div>
        <div className="mt-8 md:mt-0">
          <img src={Strihac} alt="Design" className="w-64 h-64 object-cover rounded shadow-red-shadow" />
        </div>
    </div>
    </div>
    );
};