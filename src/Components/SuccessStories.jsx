import React from 'react'
import pic1 from '../assets/ed.svg'
import pic2 from '../assets/sd.svg'
import pic3 from '../assets/popay.svg'
import { FaAngleRight } from 'react-icons/fa'
const SuccessStories = () => {
  return (
    <div className="mt-10 md:mt-20 bg-gray-200">
        <div className="container mx-auto pt-10 md:pt-20">
            <h1 className="text-blue-950 text-center font-bold text-2xl">OUR SUCCESS STORIES</h1>
            <p className="text-blue-950 text-center font-bold text-xl">We develop skilled youth and digital entrepreneurs that excel in global markets</p>
            {/* cards */}
            <div className="grid-cols-1 md:flex justify-center py-5 gap-10 md:gap-5">
                <div className="relative w-[400px] h-[470px] bg-white">
                    <img src={pic1} className="p-4"/>
                    <h1 className="text-center text-blue-950 font-bold">Enterprise Development</h1>
                    <p className="text-center text-gray-400 text-sm p-4">In 2019 Lesego was a beneficiary of the Africa Rising programme. In 2018 Lesego and his team were struggling to move their business from idea stage to proof of concept and sought business coaching to develop a market-ready product. PAISA had no clients and an incomplete prototype and his team had grown despondent.</p>
                    <div className="absolute bottom-2 left-[35%] flex justify-center py-3">
                        <button className="text-blue-950  text-[12px] flex gap-2 border-2 border-blue-950 py-2 px-4">READ MORE <FaAngleRight className="mt-1"/> </button>
                    </div>
                </div>
                <div className="relative w-[400px] h-[470px] bg-white">
                    <img src={pic2} className="p-4"/>
                    <h1 className="text-center text-blue-950 font-bold">Skills Development</h1>
                    <p className="text-center text-gray-400 text-sm p-4">Lebohang Mofokeng enrolled in the Accenture/KLM Programme in October 2018. Lebohang lives with a congenital deformity of the hips and says that she felt discouraged before she joined the Skills Development Academy.</p>
                    <div className="absolute bottom-2 left-[35%] flex justify-center py-3 mt-10">
                        <button className="text-blue-950 text-[12px] md:w-auto  flex gap-2 border-2 border-blue-950 py-2 px-4">READ MORE <FaAngleRight className="mt-1"/> </button>
                    </div>
                </div>
                <div className="relative w-[400px] h-[470px] bg-white">
                    <img src={pic3} className="p-4"/>
                    <h1 className="text-center text-blue-950 font-bold">Mollo Animation Academy and Studio</h1>
                    <p className="text-center text-gray-400 text-sm p-4">From the Cave’s mouth, an animation short, produced by the Animation Academy has been selected to show at the Los Angeles Rocks International Film Festival (Lariff).</p>
                    <div className="absolute bottom-2  grid-cols-1 md:flex md:justify-center gap-2 px-14 py-3">
                        <button className="text-blue-950 text-[12px] flex gap-2 border-2 border-blue-950 py-2 px-4">VIEW ANIMATION <FaAngleRight className="mt-1"/> </button>
                        <button className="text-blue-950 text-[12px] flex gap-2 border-2 border-blue-950 py-2 px-4 mt-2 md:mt-0">READ MORE <FaAngleRight className="mt-1"/> </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-10">
                <button className="flex px-4 py-1 bg-yellow-500 text-sm text-blue-950 gap-2">VIEW MORE SUCCESS STORIES <FaAngleRight className="mt-1" /></button>
            </div>
        </div>
    </div>
  )
}

export default SuccessStories