import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const FooterYeloowStripe = () => {
  return (
    <div className="bg-yellow-500 h-auto md:h-[120px] mt-20 md:mt-40">
        <div className="container mx-auto grid grid-cols-1 md:flex justify-between py-5">
            <div className="px-5">
                <h1 className="font-semibold text-2xl">SUBSCRIBE TO OUR NEWSLETTER</h1>
                <p>By signing up, you declare that you have read and understood the Tshimologong<br></br>
                <span className="text-pink-600"> Privacy Policy</span>, <span className="text-pink-600">PAIA</span> and the <span className="text-pink-600"> Terms and Conditions</span>.</p>
            </div>
            <div className="mt-5 px-5">
                <button className="w-full flex md:block border-2 border-blue-950 py-2 px-4 md:flex justify-center gap-3 ">JOIN OUR ECOSYSTEM <FaAngleRight className="mt-1"/></button>
            </div>
        </div>
    </div>
  )
}

export default FooterYeloowStripe