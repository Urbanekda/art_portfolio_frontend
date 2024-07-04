import React, { useRef, useEffect } from 'react';
import Video from "../assets/VIDEO.mp4"

const Animation = () => {
  const videoRef = useRef(null)

  return (
    <div className='max-w-lg h-auto'>
      <video 
      ref={videoRef}
      src={Video}
      autoPlay
      muted
      loop
      playsInline
    >
      Your browser does not support the video tag.
    </video>
    </div>
    
  );
};

export default Animation;