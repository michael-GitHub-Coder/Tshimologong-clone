import React from 'react'
import { FaAngleRight, FaGraduationCap, FaUsers, FaUsersGear } from 'react-icons/fa6'
import { FaBuilding, FaCalendarAlt, FaPenAlt } from "react-icons/fa";

const WorkInAction = () => {
  return (
    <div className="container mx-auto mt-10">
        <h1 className="flex justify-center text-blue-950 font-bold text-2xl mb-5">OUR WORK IN ACTION</h1>
        <p className="flex justify-center px-4 text-blue-950 font-semibold text-xl">We produce world class developers, enterpreneurs and innovators of digital technology</p>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-y-4 md:px-9 pb-2">
            {/* graduation */}
            <div className="w-96 h-auto bg-gray-200 text-center">
                <div className="flex justify-center py-3">
                    <FaGraduationCap className="text-4xl text-blue-950"/>
                </div>
                <h1 className="font-bold text-blue-950 text-lg">DIGITAL SKILL ACADEMY</h1>
                <p className="mt-3 text-gray-500 mb-5 ">An accelerator bridging the gap between academia and industry, offering quality skills programmes and experiential learning.</p>
                <div className="relative flex justify-center py-5 mt-10">
                    <button className="absolute bottom-1 flex items-center border-2 border-blue-950 px-7 py-2 gap-2">EXPLORE <FaAngleRight className="mt-1"/></button>
                </div>
            </div>
            {/* edfeded */}
            <div className="w-96 h-auto bg-gray-200 text-center pb-2">
                <div className="flex justify-center py-3">
                    <FaBuilding  className="text-4xl text-blue-950"/>
                </div>
                <h1 className="font-bold text-blue-950 text-lg">Enterprise Development</h1>
                <p className="mt-3 mb-5 text-gray-500">We provide Technology and Digital entrepreneurs with the right tools and support in developing their businesses.</p>
                <div className="relative flex justify-center py-5 mt-10">
                    <button className="absolute bottom-1 flex items-center border-2 border-blue-950 px-7 py-2 gap-2">EXPLORE <FaAngleRight className="mt-1"/></button>
                </div>
            </div>
            {/* edfefde */}
            <div className="w-96 h-auto bg-gray-200 text-center pb-2">
                <div className="flex justify-center py-3">
                    <FaPenAlt className="text-4xl text-blue-950"/>
                </div>
                <h1 className="font-bold text-blue-950 text-lg">DIGITAL CONTENT HUB</h1>
                <p className="mt-3 mb-5 text-gray-500">An audio-visual and innovative content platform, created for content creators.</p>
                <div className="relative flex justify-center py-5 mt-10">
                    <button className="absolute bottom-0 md:bottom-[-2] flex items-center border-2 border-blue-950 px-7 py-2 gap-2">EXPLORE <FaAngleRight className="mt-1"/></button>
                </div>
            </div>
            {/* edfefde */}
            <div className="w-96 h-auto bg-gray-200 text-center pb-2">
                <div className="flex justify-center py-3">
                    <FaUsersGear className="text-4xl text-blue-950"/>
                </div>
                <h1 className="font-bold text-blue-950 text-lg">Makerspace</h1>
                <p className="mt-3 text-gray-500">We empower young, innovative people to become employable, self-employed or start their own enterprises.</p>
                <div className="relative flex justify-center py-5 mt-10">
                    <button className="absolute bottom-1 flex items-center border-2 border-blue-950 px-7 py-2 gap-2">EXPLORE <FaAngleRight className="mt-1"/></button>
                </div>
            </div>
            {/* edfefde */}
            <div className="w-96 h-auto bg-gray-200 text-center pb-2">
                <div className="flex justify-center py-3">
                    <FaUsers className="text-4xl text-blue-950"/>
                </div>
                <h1 className="font-bold text-blue-950 text-lg">Coworking & Community</h1>
                <p className="mt-3 text-gray-500">We provide Technology and Digital entrepreneurs with the right tools and support in developing their businesses.</p>
                <div className="relative flex justify-center py-5 mt-10">
                    <button className="absolute bottom-1 flex items-center border-2 border-blue-950 px-7 py-2 gap-2">EXPLORE <FaAngleRight className="mt-1"/></button>
                </div>
            </div>
            {/* edfefde */}
            <div className="w-96 h-auto bg-gray-200 text-center px-4 pb-2">
                <div className="flex justify-center py-3">
                    <FaCalendarAlt className="text-4xl text-blue-950"/>
                </div>
                <h1 className="font-bold text-blue-950 text-lg">Events & Experience</h1>
                <p className="mt-3 text-gray-500">We love sharing in the wisdom of others or just hang out within our community.</p>
                <div className="relative flex justify-center py-5 mt-10">
                    <button className="absolute bottom-0 md:bottom-[-2] flex items-center border-2 border-blue-950 px-7 py-2 gap-2">EXPLORE <FaAngleRight className="mt-1"/></button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default WorkInAction