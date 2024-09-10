import React from 'react'

const Footer = () => {
  return (
    <div className="grid-cols-1 md:flex bg-blue-800 opacity-100">
        <div className="container mx-auto md:flex md:gap-40">
            <div className="px-10 md:py-10 text-center">
                <h1 className="text-green-500 py-5">SKILLS DEVELOPMENT</h1>
                <ul className="text-white text-sm">
                    <li>Mollo Animation Academy and Studio</li>
                    <li>Software Development Internship</li>
                    <li>Software Testing Internship</li>
                    <li>Cybersecurity</li>
                    <li>Internet of Things</li>
                </ul>
            </div>
            <div className="px-10 md:py-10 text-center">
                <h1 className="text-cyan-400 py-5">INCUBATION & ACCELERATION</h1>
                <ul className="text-white text-sm">
                    <li>Design Thinking Workshop</li>
                    <li>Pre-Incubation Programme</li>
                    <li>Start-Up Programme</li>
                    <li>Scale-Up Programme</li>
                    <li>Digital Lab Africa</li>
                    <li>Makerspace</li>
                </ul>
            </div>
            <div className="px-10 md:py-10 text-center">
                <h1 className="text-orange-600 py-5">MARKET ACCESS</h1>
                <ul className="text-white text-sm pb-10">
                    <li>Fak'ugesi Festival</li>
                    <li>Studios Collective</li>
                    <li>Digital Lab Africa</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer