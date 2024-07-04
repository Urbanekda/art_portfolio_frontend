import React from "react";
import Zastup from "../assets/zastup.png"

export default function Item () {
    return(
        <div className="flex m-4 flex-col bg-deep-blue border max-w-64 border-floral-white items-center justify-center text-floral-white rounded-md transition duration-150 hover:scale-110">
            <h2 className="p-4 text-lg font-exo2 underline">Grafický design</h2>
            <img src={Zastup} alt="Design ukázka" className="w-52 h-52 object-cover rounded" />
            <p className="p-4 text-sm text-center font-lato">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur  egestas lectus, </p>
        </div>
    );
};