import React, { useRef, useEffect } from 'react';

const AutoplayVideo = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // Autoplay was prevented.
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <video 
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-auto"
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default AutoplayVideo;