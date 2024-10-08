import React, { useState,useEffect } from 'react';
import logo from '../assets/tshimologong-dark-logo.svg';
import BlueStripe from './BlueStripe';
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { CiMenuBurger } from 'react-icons/ci';
import { FaTimes } from 'react-icons/fa';


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false); 

    // Function to handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true); // Set sticky state to true when scrolled
            } else {
                setIsSticky(false); // Reset to false when at the top
            }
        };

        window.addEventListener('scroll', handleScroll); // Add scroll event listener
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup event listener on unmount
    }, []);


    return (
        <div>
            <div className="bg-blue-950">
                <BlueStripe />
            </div>
            {/* TODO: make the navbar move to top-0 on scroll and then apply the fixed attribute */}
            <nav className={`p-4 w-full bg-white z-50 transition-all duration-300 ${isSticky ? 'fixed top-0 shadow-lg' : 'relative'}`}>
                <div className="flex justify-between items-center">
                  
                    <div>
                        <img src={logo} alt="Tshimologong Logo" className="w-20 h-10" />
                    </div>

                  
                    <div className="hidden md:flex md:space-x-6 text-sm mt-2">
                        <a href="#" className="cursor-pointer text-blue-950 hover:text-gray-400 active:text-gray-400">Home</a>

                        <div className="relative group">
                            <h1 className="flex gap-1.5 cursor-pointer text-blue-950 hover:text-gray-400">
                                About Us <FaAngleDown className="md:mt-1" />
                            </h1>
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden group-hover:block transition-opacity duration-300">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Teams</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Partners</a>
                            </div>
                        </div>

                        <div className="relative group">
                            <h1 className="flex gap-1.5 cursor-pointer text-blue-950 hover:text-gray-400 transition-transform duration-500 transform hover:scale-105">
                                Skills Development <FaAngleDown className="md:mt-1" />
                            </h1>
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden group-hover:block transition-opacity duration-300">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mollo Animation Academy and Studio</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Digital Skills Academy</a>
                            </div>
                        </div>

                        <div className="relative group">
                            <h1 className="flex gap-1.5 cursor-pointer text-blue-950 hover:text-gray-400 transition-transform duration-500 transform hover:scale-105">Incubation & Acceleration<FaAngleDown className="md:mt-1" /></h1>
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden group-hover:block transition-opacity duration-300">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mollo Animation Academy and Studio</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Digital Skills Academy</a>
                            </div>
                        </div>
                        
                        <div className="relative group">
                            <h1 className="flex gap-1.5 cursor-pointer text-blue-950 hover:text-gray-400">Market Access<FaAngleDown className="md:mt-1" /></h1>
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden group-hover:block transition-opacity duration-300">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mollo Animation Academy and Studio</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Digital Skills Academy</a>
                            </div>
                        </div>
                        <h1 className="cursor-pointer text-blue-950 hover:text-gray-400">Community</h1>
                        <h1 className="cursor-pointer text-blue-950 hover:text-gray-400">Events</h1>
                        <h1 className="cursor-pointer text-blue-950 hover:text-gray-400">News</h1>
                        <div className="relative group">
                            <h1 className="flex gap-1.5 cursor-pointer text-blue-950 hover:text-gray-400">Opportunities<FaAngleDown className="md:mt-1" /></h1>
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden group-hover:block transition-opacity duration-300">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mollo Animation Academy and Studio</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Digital Skills Academy</a>
                            </div>
                        </div>
                        <h1 className="cursor-pointer text-blue-950 hover:text-gray-400">Contact Us</h1>
                    </div>

                    <button className="text-blue-950 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        <CiMenuBurger className="text-2xl" />
                    </button>
                </div>

              
                {menuOpen && (
                    <div className="fixed inset-0 flex flex-col space-y-4 bg-blue-950 p-4 z-50">
                       
                        <button className="text-white text-2xl md:hidden self-end" onClick={() => setMenuOpen(!menuOpen)}>
                            <FaTimes className="text-2xl top-10 right-10"/>
                        </button>
                        <h1 className="cursor-pointer text-white hover:text-gray-400">Home</h1>
                        <div className="relative group">
                            <h1 className="flex justify-between gap-1.5 cursor-pointer text-white hover:text-gray-400">
                                About Us <FaAngleRight className="mt-1" />
                            </h1>
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden group-hover:block transition-opacity duration-300">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Teams</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Partners</a>
                            </div>
                        </div>
                        <div className="relative group">
                            <h1 className="flex justify-between gap-1.5 cursor-pointer text-white hover:text-gray-400 transition-transform duration-500 transform hover:scale-105">
                                Skills Development <FaAngleRight className="mt-1" />
                            </h1>
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden group-hover:block transition-opacity duration-300">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mollo Animation Academy and Studio</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Digital Skills Academy</a>
                            </div>
                        </div>
                        <h1 className="flex justify-between gap-1.5 cursor-pointer text-white hover:text-gray-400">Incubation & Acceleration<FaAngleRight className="mt-1" /></h1>
                        <h1 className="flex justify-between gap-1.5 cursor-pointer text-white hover:text-gray-400">Market Access<FaAngleRight className="mt-1" /></h1>
                        <h1 className="cursor-pointer text-white hover:text-gray-400">Community</h1>
                        <h1 className="cursor-pointer text-white hover:text-gray-400">Events</h1>
                        <h1 className="cursor-pointer text-white hover:text-gray-400">News</h1>
                        <h1 className="flex justify-between gap-1.5 cursor-pointer text-white hover:text-gray-400">Opportunities<FaAngleRight className="mt-1" /></h1>
                        <h1 className="cursor-pointer text-white hover:text-gray-400">Contact Us</h1>

                    </div>
                    )}
                </nav>

        </div>
    );
};

export default NavBar;
