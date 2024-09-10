import React from 'react'
import pic1 from '../assets/Skill-Development.jpg'
import { FaAngleRight, FaArrowRight, FaRegPenToSquare } from 'react-icons/fa6'
import { FaTools } from 'react-icons/fa'
import { GoGear } from 'react-icons/go'


const KeyComponents = () => {
  return (
    <div className="bg-gray-100 h-auto pt-10">
        <div className="container mx-auto flex flex-col justify-center items-center ">
            <h1 className="text-blue-950 font-bold text-3xl mt-20">KEY PILLARS</h1>
            <p className="text-blue-950 font-bold text-xl mt-2">The key pillars of Tshimologong’s ecosystem in achieving its purpose are:</p>
            <div className="container mx-auto justify-center md:flex grid-cols-1 md:gap-8 mt-10">
                <div className=" bg-white flex flex-col w-96 h-auto mb-10">
                    <img src={pic1} className="px-5 pt-5 cursor-pointer transition-transform duration-300 transform hover:scale-90" />
                    <h1 className="flex justify-center font-bold pt-5 text-green-500">DIGITAL SKILL DEVELOPMENT</h1>
                    <p className="text-center px-5 text-gray-400 py-4">Programmes are focussed on increasing talent in digital ventures and growing tech teams.</p>
                </div>
                <div className=" bg-white flex flex-col w-96 h-auto mb-10">
                    <img src={pic1} className="px-5 pt-5 cursor-pointer transition-transform duration-300 transform hover:scale-90"/>
                    <h1 className="flex justify-center font-bold pt-5 text-cyan-400">INCUBATION & ACCELERATION</h1>
                    <p className="text-center px-5 text-gray-400 py-4">Initiatives are designed to increase Digital Startups, supporting their businesses at every stage of development.</p>
                </div>
                <div className=" bg-white flex flex-col w-96 h-auto mb-10">
                    <img src={pic1} className="px-5 pt-5 cursor-pointer transition-transform duration-300 transform hover:scale-90"/>
                    <h1 className="flex justify-center font-bold pt-5 text-orange-600 " >NETWORKS AND MARKET ACCESS</h1>
                    <p className="text-center text-gray-400 px-5 py-4">Through various programmes we enable entrepreneurs to build effective networks, providing access to funding and markets.</p>
                </div>
            </div>
        </div>

        {/* circles part */}

        <div>
            <h1 className="text-center text-gray-400  mb-7 md:mb-0 mx-4 md:py-4">Our Vision is that Tshimologong will become a catalyst for the development of world leading African digital entrepreneurs.</h1>
            <h1 className="text-center text-gray-400 mb-7 md:mb-0 mx-4 md:py-4">We cement this vision through our approach to digital innovation.</h1>
            <h1 className="text-center text-2xl font-bold text-gray-500 mb-7 md:mb-0 mx-4 md:py-4">We define digital innovation as the intersection between:</h1>
        </div>
        <div className="flex justify-center mt-10">
            <div className="flex flex-col">
                {/* both content and hardware */}
                <div className="flex">
                    {/* CONTENT */}
                    <div className="md:flex">
                        <h1 className="text-center text-blue-950">2D Animation <br></br> Gaming <br></br>AR/VR/XR </h1>
                        <div className="relative right-[-5%] bg-blue-950 text-white h-44 w-44 rounded-full mt-5 md:mt-0 opacity-90">
                            <FaRegPenToSquare className="absolute top-[25%] left-[42%] text-4xl"/>
                            <h1 className="absolute top-1/2 left-[30%] font-bold">CONTENT</h1>
                        </div>
                    </div>
                    {/* HARDWARE */}
                   <div className="md:flex ">
                        <div className="relative left-[-5%] bg-blue-950 text-white h-44 w-44 rounded-full opacity-95">
                            <FaTools className="absolute top-[25%] left-[42%] text-4xl"/>
                            <h1 className="absolute top-1/2 left-[30%] font-bold">HARDWARE</h1>
                        </div>
                        <h1 className="text-center text-blue-950">Internet of Things<br></br>Digital Fabrication<br></br>Robotics <br></br>Electronics</h1>
                   </div>
                </div>
                {/* SOFTWARE */}
                <div className="relative bg-blue-950 right-[-33%] top-[-14%] text-white h-44 w-44 rounded-full opacity-90">
                    <GoGear className="absolute top-[25%] left-[42%] text-4xl"/>
                    <h1 className="absolute top-1/2 left-[30%] font-bold">SOFTWARE</h1>
                </div>
                <h1 className="text-center text-blue-950 -mt-13 md:-mt-10">Mobile App Development <br></br> Web Development <br></br>Testing</h1>
            </div>
        </div>
        <div style={{ backgroundImage: `url(${pic1})`,backgroundSize: 'cover', backgroundPosition: 'center',}} className="object-cover h-[450px] md:h-[400px] mt-10">
            <h1 className="text-center text-white text-2xl font-bold container mx-auto pt-[10%]">We exist to fulfil our “Africa Rising” destiny by producing world class developers, entrepreneurs and innovators of digital technology</h1>
            <div className="grid-cols-1 md:flex justify-center mt-8 md:gap-4">
                <button className="bg-pink-500 px-7 mb-4 py-1.5 text-white flex gap-2 hover:bg-pink-700 w-full md:w-auto ">PARTNERS <FaAngleRight className="mt-1"/></button> 
                <button className="border-2 solid-2 mb-4 border-yellow-500 px-7 py-1.5 text-yellow-500  w-full md:w-auto flex gap-2 hover:bg-transparent ">EVENTS <FaAngleRight className="mt-1 text-yellow-500" /></button>
            </div>
        </div>
    </div>
  )
}

export default KeyComponents