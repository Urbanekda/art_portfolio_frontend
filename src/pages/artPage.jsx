import React from "react";
import MarkdownDisplay from "../components/markdownDisplay";
import { useParams, useLocation } from "react-router-dom";

export default function ArtPage() {
    const { slug } = useParams();
    const location = useLocation();
    const artwork = location.state?.artwork;
    const baseURL = import.meta.env.VITE_BASE_URL
    const imageMedium = artwork.attributes.image.data.attributes.formats.medium.url
    const imageSrc = `${baseURL}${imageMedium}`
    

    if (!artwork) {
        return <div>Loading...</div>;
    }

    return(
        <div className="w-full text-floral-white flex flex-col md:flex-row items-center justify-evenly bg-main-bg">
            <img src={imageSrc} className="max-w-96 h-auto border border-floral-white rounded-md m-8" />
            <div className="p-8">
                <h1 className="mb-4 font-exo2 text-3xl underline">{artwork.attributes.name}</h1>
                <div className="">
                    <MarkdownDisplay markdownText={artwork.attributes.description} />
                </div>
            </div>
        </div>
    );
}