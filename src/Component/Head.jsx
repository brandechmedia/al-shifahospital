import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import slider111 from "../assets/Heros/slider111.jpg";
import slider01 from "../assets/Heros/slider01.jpg";
import slider11 from "../assets/Heros/slider11.jpg";
import slider12 from "../assets/Heros/slider12.jpg";
import slider17 from "../assets/Heros/slider17.jpg";
import slider18 from "../assets/Heros/slider18.jpg";
import slider19 from "../assets/Heros/slider19.jpg";
import slider161 from "../assets/Heros/slider161.jpg";
import slider21 from "../assets/Heros/slider21.jpg";
import slider91 from "../assets/Heros/slider91.jpg";
import slider31 from "../assets/Heros/slider31.jpg";
import slider41 from "../assets/Heros/slider41.jpg";
import slider51 from "../assets/Heros/slider51.jpg";
import sliderWelcome from "../assets/Heros/sliderWelcome.jpg";
import sliderWelcome31 from "../assets/Heros/sliderWelcome31.jpg";
import "../Style/Style.css";

const Head = () => {
  const images = [
    sliderWelcome,
    slider01,
    slider11,
    slider111,
    sliderWelcome31, 
    slider12,
    slider17,
    slider18,
    slider19,
    slider161,
    slider21,
    slider91,
    slider31,
    slider41,
    slider51,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);  return nextIndex;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage(); // Call the nextImage function to move to the next slide
    }, 40000); // 2 seconds interval

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="relative h-auto mx-auto overflow-hidden">
        {/* Left Arrow Button */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black z-10 bg-opacity-50 p-2 rounded-full text-xl"
          onClick={prevImage}
        >
          ‹
        </button>
        {/* Image Container with Sliding Effect */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
        {/* Right Arrow Button */}
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full text-xl"
          onClick={nextImage}
        >
          ›
        </button>

        {/* Dot Indicators at the ottom */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-teal-800' :  'bg-gray-50'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Head;
{/* ca377e color theme for website */ }