import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import StudyImg from "../assets/Studyimg1.jpg";

const AboutUS = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 lg:px-8"  id="about">
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <div className="sm:w-1/2 relative">
          <div className="relative w-full h-64 sm:h-auto aspect-video">
            <Image
              src={StudyImg}
              alt="Students studying in library"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
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
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
