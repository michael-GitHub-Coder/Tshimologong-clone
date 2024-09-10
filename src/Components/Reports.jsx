import React from 'react'
import pic1 from '../assets/Skill-Development.jpg'

const Reports = () => {
  return (
    <div className="container mx-auto gird-cols-1 mt-20 md:mt-64">
         <div style={{ backgroundImage: `url(${pic1})`,backgroundSize: 'cover', backgroundPosition: 'center',}} className="object-cover h-[200px] md:h-[200px]  mt-10">
            <h1 className="flex justify-center text-yellow-400 font-bold text-3xl pt-10 text-center">2022 Impact Report</h1>
            <div className="flex justify-center text-white">
                <button className="border-2 border-white px-5 py-1 text-md mt-5">DOWNLOAD REPORT</button>
            </div>
        </div>
        <div className="md:flex gap-8">
            <div style={{ backgroundImage: `url(${pic1})`,backgroundSize: 'cover', backgroundPosition: 'center',}} className="object-cover h-[200px] md:h-[200px] md:w-1/2  mt-10">
                <h1 className="flex justify-center text-yellow-400 font-bold text-3xl pt-10 text-center">INNOVATIVE CLASSROOM CAFE 2022 Report</h1>
                <div className="flex justify-center text-white">
                    <button className="border-2 border-pink-400 px-5 py-1 text-md mt-5">DOWNLOAD REPORT</button>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${pic1})`,backgroundSize: 'cover', backgroundPosition: 'center',}} className="object-cover md:w-1/2 h-[200px] md:h-[200px]  mt-10">
                <h1 className="flex justify-center text-orange-600 font-bold text-3xl pt-10 text-center">Fak'ugesi Festival 2022 Report</h1>
                <div className="flex justify-center text-white">
                    <button className="border-2 border-orange-600 px-5 py-1 text-md mt-1">DOWNLOAD REPORT</button>
                </div>
            </div>
        </div>
        <div style={{ backgroundImage: `url(${pic1})`,backgroundSize: 'cover', backgroundPosition: 'center',}} className="object-cover h-[240px] md:h-[200px]  mt-10">
            <h1 className="flex justify-center text-white font-bold text-3xl pt-10 text-center">EVALUATING THE AFRICAN DEEP TECH SPIN-OFF ECOSYSTEM</h1>
            <div className="flex justify-center text-white">
                <button className="border-2 border-white px-5 py-1 text-md mt-5">DOWNLOAD REPORT</button>
            </div>
        </div>
        <div className="md:flex gap-8">
            <div style={{ backgroundImage: `url(${pic1})`,backgroundSize: 'cover', backgroundPosition: 'center',}} className="object-cover h-[200px] md:h-[200px] md:w-1/2  mt-10">
                <h1 className="flex justify-center text-orange-600 font-bold text-3xl pt-10 text-center">DIGITAL CONTENT HUB</h1>
                <div className="flex justify-center text-white">
                    <button className="border-2 border-orange-600 px-5 py-1 text-md mt-5">DOWNLOAD REPORT</button>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${pic1})`,backgroundSize: 'cover', backgroundPosition: 'center',}} className="object-cover md:w-1/2 h-[200px] md:h-[200px]  mt-10">
                <h1 className="flex justify-center text-yellow-400 font-bold text-3xl pt-10 text-center">2021 Impact Report</h1>
                <div className="flex justify-center text-white">
                    <button className="border-2 border-pink-400 px-5 py-1 text-md mt-5">DOWNLOAD REPORT</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reports