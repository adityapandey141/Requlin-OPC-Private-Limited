"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import Image from "next/image";
import RequlinLogo from "../assets/RequlinLogo.png";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full">
      <div className="bg-white py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-2 sm:px-2 md:px-0">
          <Link href="/" className="flex items-center">
            <Image src={RequlinLogo} alt="Logo" className="object-contain " />
          </Link>

          <button
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="#000"
              viewBox="0 0 24 24"
              stroke="#000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <div className="hidden md:flex space-x-16">
            <div className="text-center">
              <p className="text-gray-500 text-xs sm:text-lg">EMAIL</p>
              <a
                href="mailto:requlinresearch@gmail.com"
                className="text-gray-700 text-xs sm:text-base font-semibold"
              >
                requlinresearch@gmail.com
              </a>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-xs sm:text-lg">TOLL FREE</p>
              <p className="text-gray-700 text-xs sm:text-base font-semibold">
                +91 7550240992
              </p>
            </div>
            {/* <Link href="/login" className="bg-white border border-[#40A63D] text-grey-300 py-2 px-6 rounded flex items-center">
              Student Login
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link> */}
          </div>
        </div>
      </div>

      <nav className="bg-bl text-white ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-2 md:px-0">
          <div className="flex space-x-4 md:space-x-6 hidden md:flex">
            <Link
              href="/"
              className="py-4 px-6 font-medium hover:bg-rd rounded"
            >
              HOME
            </Link>
            <Link
              href="/about-us"
              className="py-4 px-6 font-medium hover:bg-rd rounded"
            >
              ABOUT
            </Link>
            <div className="relative group">
              <Link
                href="/course"
                className="py-4 px-6 font-medium hover:bg-rd flex items-center rounded"
              >
                OUR COURSES
              </Link>
            </div>

            <Link
              href="/contact-us"
              className="py-4 px-6 font-medium hover:bg-rd rounded"
            >
              CONTACT
            </Link>
          </div>

          {/* <div className="relative hidden md:flex">
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-green-700 py-2 px-4 rounded-lg"
            >
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
          </div> */}
        </div>

        <div
          className={`md:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } bg-green-600`}
        >
          <Link
            href="/"
            className="block py-4 px-6 text-white hover:bg-green-700"
          >
            HOME
          </Link>
          <Link
            href="/about-us"
            className="block py-4 px-6 text-white hover:bg-green-700"
          >
            ABOUT
          </Link>
          <Link
            href="/course"
            className="block py-4 px-6 text-white hover:bg-green-700"
          >
            OUR COURSES
          </Link>

          <Link
            href="/contact-us"
            className="block py-4 px-6 text-white hover:bg-green-700"
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
