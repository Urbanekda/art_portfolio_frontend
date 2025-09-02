import React from "react";
import { useNavigate } from "react-router-dom";

export default function Item({ artwork }) {
    const imageSrc = artwork.image
    const slug = artwork.slug;
    const pageURL = `/portfolio/${slug}`;
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(pageURL, { state: { artwork } });
    };
    
    return(
        <div className="flex m-4 flex-col bg-gradient-to-b from-gray-300 from-30% to-dark-red border max-w-80 border-floral-white items-center justify-evenly text-floral-white rounded-md transition duration-150 hover:scale-110 hover:cursor-pointer" onClick={handleClick}>
            <img 
                src={imageSrc} 
                className="my-4 shadow-red-shadow w-52 h-52 object-cover rounded" 
                alt={artwork.name}
            />
            <div className="border border-floral-white rounded-md bg-sidebar-bg w-full px-5">
                <h2 className="pt-2 text-md text-left font-exo2 underline">{artwork.name}, {artwork.year}</h2>
                <p className="pb-3 text-sm text-left font-lato">{artwork.technique}</p>
            </div>
        </div>
    );
};