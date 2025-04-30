"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import Image from 'next/image';
import logo from "../assets/logo.png";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="w-full">
      <div className="bg-white py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Logo" width={200} height={200} className="object-contain" />
          </Link>

          <button className="md:hidden text-white" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#000" viewBox="0 0 24 24" stroke="#000">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <div className="hidden md:flex space-x-16">
            <div className="text-center">
              <p className="text-gray-500 text-xs sm:text-sm">EMAIL</p>
              <a href="mailto:info@edumart.org" className="text-gray-700 text-xs sm:text-sm font-semibold">info@edumart.org</a>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-xs sm:text-sm">TOLL FREE</p>
              <p className="text-gray-700 text-xs sm:text-sm font-semibold">1800 000 0000</p>
            </div>
            <Link href="/login" className="bg-white border border-blue-500 text-blue-500 py-2 px-6 rounded flex items-center">
              Student Login
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <nav className="bg-green-600 text-white ">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8">
          <div className="flex space-x-4 md:space-x-6 hidden md:flex">
            <Link href="/" className="py-4 px-6 font-medium hover:bg-green-700 rounded">HOME</Link>
            <Link href="/about" className="py-4 px-6 font-medium hover:bg-green-700 rounded">ABOUT</Link>
            <div className="relative group">
              <Link href="/courses" className="py-4 px-6 font-medium hover:bg-green-700 flex items-center rounded">
                OUR COURSES
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              <div className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg z-10 w-48">
                <Link href="/courses/web-development" className="block px-4 py-2 hover:bg-gray-100 rounded">Web Development</Link>
                <Link href="/courses/app-development" className="block px-4 py-2 hover:bg-gray-100 rounded">App Development</Link>
                <Link href="/courses/digital-marketing" className="block px-4 py-2 hover:bg-gray-100 rounded">Digital Marketing</Link>
              </div>
            </div>
            <Link href="/gallery" className="py-4 px-6 font-medium hover:bg-green-700 rounded">GALLERY</Link>
            <Link href="/contact-us" className="py-4 px-6 font-medium hover:bg-green-700 rounded">CONTACT</Link>
          </div>

          
         

        
          <div className="relative hidden md:flex">
            <form onSubmit={handleSearch} className="flex items-center bg-green-700 py-2 px-4 rounded-lg">
              <input
                type="text"
                placeholder="SEARCH NOW"
                className="bg-transparent text-white placeholder-gray-300 w-40 border-none outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="text-white">
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-green-600`}>
          <Link href="/" className="block py-4 px-6 text-white hover:bg-green-700">HOME</Link>
          <Link href="/about" className="block py-4 px-6 text-white hover:bg-green-700">ABOUT</Link>
          <Link href="/courses" className="block py-4 px-6 text-white hover:bg-green-700">OUR COURSES</Link>
          <Link href="/gallery" className="block py-4 px-6 text-white hover:bg-green-700">GALLERY</Link>
          <Link href="/contact-us" className="block py-4 px-6 text-white hover:bg-green-700">CONTACT</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
