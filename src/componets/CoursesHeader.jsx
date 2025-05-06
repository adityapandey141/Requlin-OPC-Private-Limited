import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe } from 'lucide-react';
import ContactBannerimg from "../assets/ContactBannerimg.jpg";

const CoursesHeader = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${ContactBannerimg.src})`,
      }}
    >
      <div className="bg-gradient-to-r from-green-50 via-yellow-50 to-purple-50 bg-opacity-70">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
         
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                OUR COURSES
              </h2>
              <p className="text-slate-600 max-w-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHeader;
