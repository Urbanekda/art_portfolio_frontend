import React from "react";
import { useNavigate } from "react-router-dom";

export default function Item ({ artwork }) {
    const baseURL = import.meta.env.VITE_BASE_URL
    const imageSmall = artwork.attributes.image.data.attributes.formats.small.url
    const imageSrc = `${baseURL}${imageSmall}`
    const slug = artwork.attributes.slug
    const pageURL = `/portfolio/${slug}`
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate(pageURL, { state: { artwork } });
    };
    
    return(
        <div className="flex m-4 flex-col bg-deep-blue border max-w-64 border-floral-white items-center justify-center text-floral-white rounded-md transition duration-150 hover:scale-110 hover:cursor-pointer" onClick={handleClick}>
            <h2 className="p-4 text-lg font-exo2 underline">{artwork.attributes.name}</h2>
            <img src={imageSrc} alt="Design ukázka" className="w-52 h-52 object-cover rounded" />
            <p className="p-4 text-sm text-center font-lato">{artwork.attributes.meta_desc}</p>
        </div>
    );
};