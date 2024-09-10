import React, { useState, useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Hero = () => {
  
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
    }
  const slideImages = [
      {
          url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0015_3d-modeling-4.jpg"
      },
      {
          url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0016__DSC1272.jpg"
      },
      {
          url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
      },
      {
          url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
      },
      {
          url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
      },
      {
          url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
      },
      {
          url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
      },
      {
          url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
      },
      {
          url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
      },
      {
          url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
      },
      {
          url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
      },
      {
          url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
      },
      {
          url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
      }
  ]
 
  return (
    <div>
      <div className="slide-container mb-10">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              {/* <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url}), 'height':'20px'` }}> */}
              <div style={{ backgroundImage: `url(${slideImage.url})`, height: '400px',backgroundPosition: 'center',backgroundSize: 'cover'}}  className="object-cover">
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      <div className="md:hidden text-center">
          <h1 className="text-blue-950 font-semibold text-2xl">TSHIMOLOGONG</h1>
          <p className="text-blue-950 font-bold text-4xl">DIGITAL INNOVATION PRECINCT</p>
      </div>
      <div className="md:hidden inset-x-2 flex flex-col mt-2 gap-4">
          <button className="border-2 bg-blue-950 text-white p-4  mt-5 flex justify-center gap-3 font-semibold">FIND OUT MORE <FaAngleRight size={18} className="mt-1" /> </button>
          <button className="border-2 border-blue-950 p-4 mt-5 flex justify-center gap-3">2022 IMPACT REPORT <FaAngleRight size={18} className="mt-1" /></button>
          <button className="border-2 border-blue-950 p-4 mb-10 mt-5 flex justify-center gap-3">GET IN TOUCH <FaAngleRight size={18} className="mt-1" /></button>
      </div>

      <div className="mt-5 md:absolute inset-x-2 md:inset-x-0 flex flex-col md:flex-row justify-center md:gap-8 gap-2 md:-mt-14">
          <button className="bg-green-500 p-5 font-bold text-md md:text-2xl md:p-10 hover:bg-green-600">SKILLS DEVELOPMENT</button>
          <button className="bg-cyan-400 p-5 font-bold text-md md:text-2xl md:p-10 hover:bg-cyan-500">ENTERPRISE DEVELOPMENT</button>
          <button className="bg-orange-600 p-5 font-bold text-md md:text-2xl md:p-10 hover:bg-orange-700">MARKET ACCESS</button>
      </div>
    </div>
  );
};

export default Hero;
