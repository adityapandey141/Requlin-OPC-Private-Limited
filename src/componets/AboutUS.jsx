import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import WeWalkClinicalResearch from "../assets/WeWalkClinicalResearch.png";

const AboutUS = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 lg:px-8 " id="about">
      <div className="flex flex-col sm:flex-row  gap-8 items-center ">
        <div className="sm:w-1/2 relative">
          <div className="relative md:w-full h-50 md:h-full  aspect-video">
            <Image
              src={WeWalkClinicalResearch}
              alt="Students studying in library"
              className="rounded-md "
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Play video"
              >
                <Play size={24} className="text-gray-800 ml-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="sm:w-1/2 text-center sm:text-left">
          <p className="text-black text-xl mb-2">About ReQuLin </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-black mt-4 sm:mt-2 mb-4">
            We Walk Beside You in Every Step of Clinical Research
          </h1>
          <p className="text-gray-600 mb-6 text-base sm:text-lg">
            ReQuLin (OPC) Private Limited is dedicated to supporting the
            clinical research industry through innovative solutions,
            comprehensive services, and professional training programs. Our
            mission is to enhance the quality and efficiency of clinical trials
            globally.
          </p>
          <h2 className="text-xl font-medium text-gray-700 mb-2">
            ReQuLin is exceptional in empowering tomorrow's healthcare through:
          </h2>

          <div className=" grid grid-cols-2 gap-2">
            <p className="text-gray-600  text-base sm:text-lg bullets pl-8 ">
              <span className="">Innovation</span>
            </p>
            <p className="text-gray-600  text-base sm:text-lg bullets pl-8 ">
              <span className="">Integrity</span>
            </p>
            <p className="text-gray-600  text-base sm:text-lg bullets pl-8 ">
              <span className="">Knowledge</span>
            </p>
            <p className="text-gray-600  text-base sm:text-lg bullets pl-8 ">
              <span className="">Wisdom </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
