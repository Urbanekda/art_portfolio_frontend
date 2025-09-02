import React from "react";
import { useLocation } from "react-router-dom";

export default function AnimationArtPage() {
    const location = useLocation();
    const artwork = location.state?.artwork;
    const videoURL = artwork.videoURL;

    // Convert YouTube URL to embed format
    const getEmbedUrl = (videoURL) => {
        const videoId = videoURL.split('v=')[1];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    if (!artwork) {
        return <div>Loading...</div>;
    }

    return(
        <div className="w-full min-h-screen text-floral-white flex flex-col items-center bg-main-bg p-8">
            {/* Text content at the top */}
            <div className="w-full max-w-4xl mb-8">
                <h1 className="text-4xl font-exo2 underline mb-4">{artwork.name}, {artwork.year}</h1>
                <p className="text-lg">{artwork.description}</p>
            </div>
            
            {/* Video container with increased size */}
            <div className="w-full max-w-4xl h-96">
                <iframe
                    src={getEmbedUrl(videoURL)}
                    className="w-full h-full border border-floral-white rounded-md"
                    title={artwork.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}