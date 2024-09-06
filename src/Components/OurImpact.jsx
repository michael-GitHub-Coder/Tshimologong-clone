import React from 'react'
import pic1 from '../assets/Skill-Development.jpg'

const OurImpact = () => {
  return (

    <div style={{ backgroundImage: `url(${pic1})`,backgroundSize: 'cover', backgroundPosition: 'center',}} className="object-cover h-[450px] md:h-[400px] mt-10">
            <div className="text-center py-40">
                <h1 className="flex justify-center text-white text-3xl font-bold mb-3">OUR IMPACT</h1>
                <p className="text-white text-xl font-semibold">We develop skilled youth and Digital Entrepreneurs that Excel in Global Markets</p>
               
            </div>
    </div>
  )
}

export default OurImpact