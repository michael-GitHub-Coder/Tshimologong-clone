import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const FooterYeloowStripe = () => {
  return (
    <div className="bg-yellow-500 h-[120px] mt-40">
        <div className="container mx-auto flex justify-between py-5">
            <div >
                <h1 className="font-semibold text-2xl">SUBSCRIBE TO OUR NEWSLETTER</h1>
                <p>By signing up, you declare that you have read and understood the Tshimologong<br></br>
                <span className="text-pink-600"> Privacy Policy</span>, <span className="text-pink-600">PAIA</span> and the <span className="text-pink-600"> Terms and Conditions</span>.</p>
            </div>
            <div className="mt-5">
                <button className="border-2 border-blue-950 py-2 px-4 flex gap-3 ">JOIN OUR ECOSYSTEM <FaAngleRight className="mt-1"/></button>
            </div>
        </div>
    </div>
  )
}

export default FooterYeloowStripe