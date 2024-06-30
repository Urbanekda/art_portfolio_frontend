import React from "react";
import Strihac from "../assets/strihac.png";
import { useNavigate } from "react-router-dom";

export default function Banner() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/kontakt");
    }

    return(
        <div className="w-full bg-black text-white flex flex-col md:flex-row items-center justify-between p-8">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold">Vojtěch Novák</h1>
        <p className="text-xl">Grafika, design</p>
        <p className="mt-4">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded">Kontakt</button>
      </div>
      <div className="mt-8 md:mt-0">
        <img src={Strihac} alt="Design" className="w-48 h-48 object-cover rounded" />
      </div>
    </div>
    );
};