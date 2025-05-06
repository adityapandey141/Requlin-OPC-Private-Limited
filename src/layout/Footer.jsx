import React from "react";
import Image from "next/image";
import Link from "next/link";
import RequlinLogo from "../assets/RequlinLogo.png";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" w-full bg-bl text-white pb-6 md:pb-10 pt-50 md:mt-[-150px]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <Image
                src={RequlinLogo}
                alt="Logo"
                width={250}
                height={100}
                className="object-cover"
              />
            </div>
            <p className="text-white text-lg font-semibold mb-4">
              From cups to bowls - practical packaging for real business needs.
              Let&apos;s talk about yours.
            </p>
            <div className="flex space-x-3">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className=" hover:bg-[#EAA10B] " size={35} />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className=" hover:bg-[#EAA10B]" size={35} />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube className="hover:bg-[#EAA10B]" size={35} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl font-medium mb-4">
              Contact Info
            </h3>
            <div className="space-y-2">
              <div className="flex items-center mb-3 md:mb-4">
                <FaPhoneAlt
                  className=" text-yellow-500 mr-2 flex-shrink-0"
                  size={28}
                />
                <a
                  href="+91 7550240992"
                  className="text-[#ffffff] hover:text-yellow-500  text-lg transition-colors"
                >
                  +91 7550240992
                </a>
              </div>

              <div className="flex items-center mb-3 md:mb-4">
                <MdEmail
                  className="text-yellow-500 mr-2 flex-shrink-0"
                  size={28}
                />
                <a
                  href="mailto:requlinresearch@gmail.com"
                  className="text-lg text-[#ffffff] hover:text-yellow-500 transition-colors break-all"
                >
                  requlinresearch@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl font-medium mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-yellow-500 transition duration-300 text-xl"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/about-us"
                  className="hover:text-yellow-500 transition duration-300 text-xl"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/course"
                  className="hover:text-yellow-500 transition duration-300 text-xl"
                >
                  Our Courses
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/contact-us"
                  className="hover:text-yellow-500 transition duration-300 text-xl"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-6 md:mt-8 pt-4 md:pt-6 flex flex-col md:flex-row md:justify-between items-center">
        <p className="text-lg text-center w-full">
          © {new Date().getFullYear()} ReQuLin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
