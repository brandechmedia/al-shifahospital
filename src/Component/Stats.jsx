import React, { useEffect, useState, useRef } from 'react'
import familyDoctors1 from "../assets/familyDoctors1.png";
const Stats = () => {


  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const elementRef = useRef(null); // Reference for the element to observe

  useEffect(() => {
    // Create a new IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Task triggered when the component is visible
            setIsVisible(true);
          } else {
            // Task triggered when the component is not visible
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,  // 10% of the component needs to be visible
      }
    );

    // Start observing the element when it is mounted
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    // Cleanup observer on component unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []); // Empty dependency array, only runs once on mount and unmount


  const [patients, setPatients] = useState(0);

  // if (isVisible) {
  useEffect(() => {
    // for (let i = 0; i < 100; i++) {

    if (patients < 100000) {
      const timer = setTimeout(() => {
        setPatients(patients + 10);
      }, 1);
      return () => clearTimeout(timer);
    }
    // }

    // }
  }, [patients, 10000]);

  return (
    <>
      <div>
        <img className='w-11/12 md:w-4/5 -mt-10 mx-auto' src={familyDoctors1} alt="" />
      </div>
      <div className="bg-teal-800 flex flex-wrap py-4 px-2 md:py-16 w-full m-auto ">
        <div ref={elementRef} className="lg:w-1/4 md:border-r-2 mb-4 text-center md:w-1/2 w-full px-10">
          <h1 className='md:mb-8 text-2xl md:text-4xl font-bold font-asap text-white '>Patients Treated</h1>
          <span className='md:text-3xl text-white font-extrabold'>{patients}+</span>
        </div>

        <div className="lg:w-1/4 md:border-r-2 text-center mb-4 md:w-1/2 w-full px-4">
          <h1 className='md:mb-8 text-2xl md:text-4xl font-bold font-asap text-white'>Year of Exellence</h1>
          <span className='md:text-3xl text-white font-extrabold'>36+</span>
        </div>

        <div className="lg:w-1/4 md:border-r-2 text-center mb-4 md:w-1/2 w-full px-4">
          <h1 className='md:mb-8 text-2xl md:text-3xl font-bold font-asap text-white'>Specialized Department</h1>
          <span className='md:text-4xl text-white font-extrabold'>25+</span>
        </div>

        <div className="lg:w-1/4 text-center md:w-1/2 mb-1 w-full px-1">
          <h1 className='md:mb-8 text-2xl md:text-4xl font-bold font-asap text-white'>Emergency Care</h1>
          <span className='md:text-3xl text-white font-extrabold'>24X7</span>
        </div>

      </div>
    </>
  )
}

export default Stats;