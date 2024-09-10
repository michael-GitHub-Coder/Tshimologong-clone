import React from 'react'
import pic1 from '../assets/Skill-Development.jpg'

const WhatWeDo = () => {
  return (
    <div>
        <div style={{ backgroundImage: `url(${pic1})`,backgroundSize: 'cover', backgroundPosition: 'center',}} className="object-cover md:h-[200px] mt-10 container mx-auto py-5">
            <h1 className="text-center text-white text-4xl font-bold container mx-auto pt-[50px]">TSHIMOLOGONG COMMUNITY & CO-WORKING SPACE</h1>
            <div className="grid grid-cols-1 md:flex justify-center mt-8 md:gap-4">
                <button className="border-2 border-pink-600 font-semibold text-white py-1 px-5 mb-2">APPLY FOR MEMBERSHIP</button>
                <button className="border-2 border-pink-600 font-semibold text-white py-1 px-5 ">READ MORE</button>
            </div>
        </div>
        <div className="container mx-auto mb-10 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center ">
                <div className="hidden md:block">
                    <img src="https://tshimologong.joburg/wp-content/uploads/2021/08/Home-What-We-Do.png" alt="What We Do pic" />
                </div>
                <div>
                    <h1 className="text-blue-950 font-bold text-3xl mt-5">WHAT WE DO</h1>
                    <p className="text-blue-950 px-4 font-bold text-xl mt-2">Working to boost Digital and Entrepreneurship Skills in South Africa</p>
                    <p className="text-gray-600 px-6 text-md mt-2">The Tshimologong Precinct is a digital innovation ecosystem in Braamfontein, Johannesburg, that propels entrepreneurship and grows the skills pipeline for the digital economy through collaboration with academia, corporates, government and entrepreneurs.</p>
                    <p className="text-gray-600 px-6 text-md mt-2">We provide skills and on-the-job training for unemployed youth while accelerating the growth of digital enterprises at every stage of their business and create a pathway for students and entrepreneurs to showcase their work publicly and access commercial opportunities.</p>
                    <div className="flex justify-center items-center mt-4">
                        <img src="https://tshimologong.joburg/wp-content/uploads/2021/09/arrow-element-turq.svg" alt="Under" className="h-10 "/>
                    </div>
                </div>
                <div className="md:hidden">
                    <img src="https://tshimologong.joburg/wp-content/uploads/2021/08/Home-What-We-Do.png" alt="What We Do pic" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo