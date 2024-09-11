import React from 'react'
import logo from '../assets/White-Logo.png'
import logo2 from '../assets/wits-logo-mono-white-dd3b454b.png'

import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
const Footer2 = () => {
  return (
    <div className="bg-blue-950 ">
        <div className="container mx-auto grid-cols-1 md:flex gap-8 text-white">
            <div className="md:p-10 md:ml-20 flex justify-center">
                <img src={logo} alt="LOGO" className=" md:w-20 h-20" />
            </div>
            <div className="md:p-10">
                <h1 className="text-center">CONNECT WITH US</h1>
                <div className="flex justify-center gap-5 py-5 text-2xl">
                    <FaFacebook/>
                    <FaTwitter />
                    <FaYoutube />
                    <FaLinkedin />
                </div>
            </div>
            <div className="md:p-10">
                <h1 className="text-center">Contact Us</h1>
                <div className="text-[12px] py-3">
                    <p className="text-center">41 Juta Str, Braamfontein Johannesburg South Africa <br/>011 717 8156</p>
                    <p className="text-center">community@tshimologong.joburg</p>
                </div>
            </div>
            <div className="py-5 md:py-10 flex justify-center">
                <img src={logo2} alt="LOGO" className="w-50 h-20" />
            </div>
        </div>
    </div>
  )
}

export default Footer2