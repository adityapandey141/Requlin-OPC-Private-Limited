import React from 'react';
import Image from 'next/image';
import footerlogo from "../assets/footerlogo.png";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-6 md:py-10">
      <div className="container mx-auto px-4">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
     
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-4">
              <Image
                src={footerlogo}
                alt="Logo"
                width={200}
                height={200}
                className="object-contain "
                priority
              />
             
            </div>
           
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl  font-bold mb-4 md:mb-6">Useful Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-yellow-500 transition duration-300 text-xl">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/about-us" className="hover:text-yellow-500 transition duration-300 text-xl">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-yellow-500 transition duration-300 text-xl">
                Our Courses
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact-us" className="hover:text-yellow-500 transition duration-300 text-xl">
                Contact
                </a>
              </li>
             
            </ul>
          </div>

          <div className="mb-6 md:mb-0 flex flex-col">
            <h3 className="text-2xl font-bold mb-4 md:mb-6 ">Get In Touch</h3>
            <div className="flex items-center mb-3 md:mb-4">
              <FaPhoneAlt className=" text-yellow-500 mr-2 flex-shrink-0" size={28} /> 
              <a href="+91 1800 000 0000" className="text-[#ffffff] hover:text-yellow-500  text-lg transition-colors">
              +91 1800 000 0000             
              </a>
            </div>

            <div className="flex items-center mb-3 md:mb-4">
              <MdEmail className="text-yellow-500 mr-2 flex-shrink-0" size={28} /> 
              <a href="mailto:info@edumart.org" className="text-lg text-[#ffffff] hover:text-yellow-500 transition-colors break-all">
               info@edumart.org
              </a>
            </div>

           
        </div>
        <div className="mb-6 md:mb-0 flex flex-col">
            <h4 className="text-2xl font-bold mb-4 md:mb-6">Social</h4>
            <div className="flex items-center space-x-4 ">
              <a href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className=" hover:bg-[#EAA10B] " size={35} /> 
              </a>

              <a href="" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className=" hover:bg-[#EAA10B]" size={35} /> 
              </a>

              <a href="" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="hover:bg-[#EAA10B]" size={35} /> 
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-6 md:mt-8 pt-4 md:pt-6 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-lg text-center w-full">
          © {new Date().getFullYear()}Edumart. All rights reserved.
          </p>
        </div>
        </div>
     
    </footer>
  );
};

export default Footer;