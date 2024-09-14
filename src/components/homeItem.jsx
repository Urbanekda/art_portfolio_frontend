import React from "react";

export default function HomeItem({ name, image, description }) {
    return(
        <div className="flex m-4 flex-col bg-deep-blue border max-w-64 border-floral-white items-center justify-center text-floral-white rounded-md transition duration-150 hover:scale-110">
            <h2 className="p-4 text-lg font-exo2 underline">{name}</h2>
            <img src={image} alt={`${name} ukázka`} className="w-52 h-52 object-cover rounded" />
            <p className="p-4 text-sm text-center font-lato">{description}</p>
        </div>
    );
};