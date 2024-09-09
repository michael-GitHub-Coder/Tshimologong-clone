import React from 'react'
import pic1 from '../assets/Skill-Development.jpg'
import { useState,useEffect } from 'react';

const OurImpact = () => {

    const CounterUp = ({ target }) => {
        const [count, setCount] = useState(0);
      
        useEffect(() => {
          const speed = 200;
          const increment = target / speed;
      
          const updateCount = () => {
            setCount(prevCount => {
              const newCount = prevCount + increment;
              if (newCount < target) {
                return Math.ceil(newCount);
              } else {
                clearInterval(interval);
                return target;
              }
            });
          };
      
          const interval = setInterval(updateCount, 1);
      
          return () => clearInterval(interval);
        }, [target]);
      
        return <div className="text-3xl font-bold mt-10">{count}</div>;
      };
  return (

    <>
        <div style={{ backgroundImage: `url(${pic1})`,backgroundSize: 'cover', backgroundPosition: 'center',}} className="object-cover h-[680px] md:h-[450px] md:h-[400px] mt-10">
                <div className="text-center py-20">
                    <h1 className="flex justify-center text-white text-3xl font-bold mb-3">OUR IMPACT</h1>
                    <p className="text-white text-xl font-semibold">We develop skilled youth and Digital Entrepreneurs that Excel in Global Markets</p>
                    <div className="md:flex justify-center gpa-2 md:gap-7 grid-cols-1">
                        <div className="grid-cols-1">
                            <div className="text-yellow-400 ">
                                <CounterUp target={105} className="text-yellow-600"/>
                            </div>
                            <h1 className="text-white text-xl">Start-Ups Incubated</h1>
                        </div>
                        <div className="grid-cols-1">
                            <div className="text-pink-700">
                                <CounterUp target={172} />
                            </div>
                            <h1 className="text-white text-xl">Entrepreneurs Impacted</h1>
                        </div>
                        <div className="grid-cols-1">
                            <div className="text-yellow-400">
                                <CounterUp target={423}  />
                            </div>
                            <h1 className="text-white text-xl">Community Alumni Entrepreneurs</h1>
                        </div>
                        <div className="grid-cols-1">
                            <div className="text-pink-700">
                                <CounterUp target={167} />
                            </div>
                            <h1 className="text-white text-xl">Community Alumna Startups</h1>
                        </div>
                    </div>
                </div>
        </div>
        <div className="relative container mx-auto md:-mt-28">
            <p className="md:absolute text-center bg-yellow-400 py-10 px-4 md:px-32 text-blue-950">
                The key pillars of Tshimologong’s ecosystem in achieving its purpose include the Digital Skills Academy with a range of programming to grow the talent for digital ventures to thrive, the Enterprise Development model accelerates the growth of digital ventures at every stage of their business, ensuring desirable and feasible technology, as well as viable business models with sound operations. Furthermore, the Digital Marketplace provides platforms of access to market for digital startups and interns.</p>
        </div>
    </>
  )
}

export default OurImpact