"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import Image from "next/image";
import RequlinLogo from "../assets/logo.png";

const Header = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   console.log("Searching for:", searchQuery);
  // };

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen((prev) => !prev);
  // };

  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    console.log(sidebar);
    if (sidebar) {
      return setSidebar(false);
    }
    return setSidebar(true);
  };

  const navItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/#about" },
    { name: "Services", url: "/services" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <header className="w-full">
      <div className="bg-white py-2 md:py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-2 sm:px-2 md:px-0">
          <Link href="/" className="flex items-center">
            <Image
              src={RequlinLogo}
              alt="Logo"
              className="object-contain w-[40%]"
            />
          </Link>

          <button
            className="md:hidden text-white"
            onClick={toggleSidebar}
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
              <p className="text-gray-500 text-xs sm:text-lg">Email</p>
              <a
                href="mailto:requlinresearch@gmail.com"
                className="text-gray-700 text-xs sm:text-base font-semibold"
              >
                requlinresearch@gmail.com
              </a>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-xs sm:text-lg">Call Us</p>
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

      <nav className="bg-bl text-white  ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-2 md:px-0">
          <div className="flex space-x-4 md:space-x-6 hidden md:flex">
            <Link
              href="/"
              className="py-4 px-6 font-medium hover:bg-rd rounded"
            >
              HOME
            </Link>
            <a
              href="/#about"
              className="py-4 px-6 font-medium hover:bg-rd rounded"
            >
              ABOUT
            </a>
            <div className="relative group">
              <Link
                href="/services"
                className="py-4 px-6 font-medium hover:bg-rd flex items-center rounded"
              >
                SERVICES
              </Link>
            </div>

            <Link
              href="/contact"
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
      </nav>

      <div
        id="mobile-menu"
        className={`${
          sidebar ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-70 h-full bg-bl text-white z-40 transform  transition duration-300 ease-in-out md:hidden`}
      >
        <div className="p-4 h-full ">
          <div className="flex justify-end ">
            <button onClick={toggleSidebar} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          {/* <div className="mt-4 mb-8 text-center">
            <img src={RequlinLogo} alt="Logo" className=" w-40 mb-2" />
          </div>
          <div className="mt-5 border-t-1 pt-5"></div> */}
          <div className="flex flex-col space-y-5 mt-20">
            {navItems.map((item, index) =>
              item.url.startsWith("/#") ? (
                <a key={index} href={item.url} onClick={toggleSidebar}>
                  {item.name}
                </a>
              ) : (
                <Link key={index} href={item.url} onClick={toggleSidebar}>
                  {item.name}
                </Link>
              )
            )}
          </div>
          <div className="mt-5 border-t-1 pt-5">
            <h1 className="text-md font-bold text-yel">
              ReQuLin (OPC) Private Limited
            </h1>
            <p className="mt-3">
              Driving clinical research forward with reliable support and
              real-world expertise.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="tel:+917550240992"
              className="block bg-[#6383aa] hover:bg-blue-600 text-white text-center font-medium px-4 py-2 rounded"
            >
              +91 7550240992
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
