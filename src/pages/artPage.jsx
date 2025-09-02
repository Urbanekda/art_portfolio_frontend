import React from "react";
import { useLocation } from "react-router-dom";

export default function ArtPage() {
    const location = useLocation();
    const artwork = location.state?.artwork;
    const imageSrc = artwork.image
    

    if (!artwork) {
        return <div>Loading...</div>;
    }

    return(
        <div className="w-full text-floral-white flex flex-col md:flex-row items-center justify-evenly bg-main-bg">
            <img src={imageSrc} className="max-w-96 h-auto border border-floral-white rounded-md m-8" />
            <div className="p-8">
                <h1 className="mb-4 font-exo2 text-3xl underline">{artwork.name}, {artwork.year}</h1>
                <div className="">
                    <p>{artwork.description}</p>
                </div>
            </div>
        </div>
    );
}