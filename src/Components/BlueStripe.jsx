import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const BlueStripe = () => {
  return (
    <div className="hidden md:flex md:justify-end md:text-white md:gap-4 md:mr-5 md:py-2">
        <FaFacebook className="cursor-pointer"/> <FaTwitter className="cursor-pointer"/> <FaYoutube className="cursor-pointer"/> <FaLinkedin className="cursor-pointer"/>
    </div>
  )
}

export default BlueStripe