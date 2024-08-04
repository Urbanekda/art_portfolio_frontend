import React from "react";
import Zastup from "../assets/zastup.png"

export default function Item ({ artwork }) {
    return(
        <div className="flex m-4 flex-col bg-deep-blue border max-w-64 border-floral-white items-center justify-center text-floral-white rounded-md transition duration-150 hover:scale-110">
            <h2 className="p-4 text-lg font-exo2 underline">{artwork.attributes.nazev}</h2>
            <img src={`http://localhost:1337${artwork.attributes.image.data.attributes.formats.small.url}`} alt="Design ukázka" className="w-52 h-52 object-cover rounded" />
            <p className="p-4 text-sm text-center font-lato">{artwork.attributes.popis}</p>
        </div>
    );
};