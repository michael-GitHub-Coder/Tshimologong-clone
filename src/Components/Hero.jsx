import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://via.placeholder.com/1200x600?text=Slide+1',
    'https://via.placeholder.com/1200x600?text=Slide+2',
    'https://via.placeholder.com/1200x600?text=Slide+3',

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="relative w-full h-[250px] md:h-[410px] overflow-hidden">
          <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
              &lt;
          </button>
          <div className="relative w-full h-full">
              <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex}`}
                  className="w-full h-full object-cover transition-transform duration-500"
              />
          </div>
          <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
              &gt;
          </button>
      </div>

      <div className="md:hidden justify-center">
          <h1>TSHIMOLOGONG</h1>
          <p>DIGITAL INNOVATION PRECINCT</p>
      </div>
      <div className="md:hidden inset-x-2 flex flex-col mt-2 gap-4">
          <button className="bg-green-500 p-5 font-bold text-md  md:p-10 hover:bg-green-600">FIND OUT MORE </button>
          <button className="bg-cyan-400 p-5 font-bold text-md  md:p-10 hover:bg-cyan-500">2022 IMPACT REPORT</button>
          <button className="bg-white border border-blue-950 p-5 font-bold text-md  md:p-10 hover:bg-orange-700">GET IN TOUCH</button>
      </div>

      <div className="mt-5 md:absolute inset-x-2 md:inset-x-0 flex flex-col md:flex-row justify-center md:gap-8 gap-2 md:-mt-14">
          <button className="bg-green-500 p-5 font-bold text-md md:text-2xl md:p-10 hover:bg-green-600">SKILLS DEVELOPMENT</button>
          <button className="bg-cyan-400 p-5 font-bold text-md md:text-2xl md:p-10 hover:bg-cyan-500">ENTERPRISE DEVELOPMENT</button>
          <button className="bg-orange-600 p-5 font-bold text-md md:text-2xl md:p-10 hover:bg-orange-700">MARKET ACCESS</button>
      </div>

      {/* <div className="grid grid-cols-2">

      </div> */}
    </div>
  );
};

export default Hero;
