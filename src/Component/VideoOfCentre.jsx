import React, { useRef, useState, useEffect } from 'react';
// import HospitalWebVideo from '../assets/videos/HospitalWebVideo.mp4';

const VideoOfCentre = () => {
  const videoRef = useRef(null); // Proper use of useRef for video element
  const [isInView, setIsInView] = useState(false);

  // IntersectionObserver callback function
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    });
  };

  useEffect(() => {
    // Create IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the video is in the viewport
    });

    // Observe the video element
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play(); // Auto-play when in view
      } else {
        videoRef.current.pause(); // Pause when not in view
      }
    }
  }, [isInView]);

  return (
    <div className="flex justify-center">
      {/* <h3 className='px-10 pt-16 hidden 2xl:block text-7xl font-asap font-semibold text-white'>Jeevan Jyoti Hospital Prayagraj</h3>
      <video
        ref={videoRef}
        className="w-full rounded-xl max-w-5xl"
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={HospitalWebVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <h3 className='px-10 hidden 2xl:block font-asap text-7xl pt-20 font-semibold text-rose-200'>Multi Speciality Hospital</h3>
    </div>
  );
};

export default VideoOfCentre;
