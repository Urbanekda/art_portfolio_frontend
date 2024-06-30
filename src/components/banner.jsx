import React from "react";
import Strihac from "../assets/strihac.png";
import { useNavigate } from "react-router-dom";

export default function Banner() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/kontakt");
    }

    return(
        <div className="flex items-center justify-center p-8 bg-main-bg bg-cover bg-center text-floral-white h-96">
           <div className="w-40">
            <h1 className="font-exo2 text-5xl font-light">Vojtěch Novák.</h1>
            <h2 className="font-exo2 text-5xl font-light">Grafika, design</h2>
            <p className="font-lato text-lg my-4">Ahooj, tady Vojta, grafický designer z Prahy. Koukejte moje portfolio a pricujte se mnou. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
            <button className="bg-dark-red text-floral-white py-2 px-8 rounded hover:bg-red-950 underline" onClick={handleClick}>
                Kontakt
                </button>
           </div>
           <div className="flex p-4">
            <img src={Strihac} alt="Nůžková postava" className="w-80 h-auto"></img>
           </div>
        </div>
    );
};