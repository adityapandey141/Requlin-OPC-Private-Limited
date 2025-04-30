'use client';
import React from 'react';
import courcesbg from "../assets/courcesbg.jpg"; 
import courseimg1 from "../assets/courseimg1.jpg";
import courseimg2 from "../assets/courseimg2.jpg";
import courseimg3 from "../assets/courseimg3.jpg";
import courseimg4 from "../assets/courseimg4.jpg";

const WhoWeServe = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const programs = [
    {
      title: "Research Sponsors",
      duration: "2 YEAR",
      courses: "COURSES",
      image: courseimg1, 
    },
    {
      title: "Contract Research Organizations (CROs)",
      duration: "1 YEAR",
      courses: "COURSES",
      image: courseimg2, 
    },
    {
      title: "Research Sites",
      duration: "1 YEAR",
      courses: "COURSES",
      image: courseimg3, 
    },
    {
      title: "Research Participants",
      duration: "3 YEAR",
      courses: "COURSES",
      image: courseimg4, 
    }
  ];

  return (
    <>
      <div className="relative min-h-screen">
        <div className="relative py-24 px-4 bg-cover bg-center"
          style={{
            backgroundImage: `url(${courcesbg.src})`, 
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(0,0,0,0.3)"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50"></div>

          <div className="container mx-auto relative z-10 text-center">
            <h2 className="text-gray-300 text-xl mb-2">Who We Serve</h2>
            <h1 className="text-white text-3xl font-bold mb-16">Our Clients</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program, index) => (
                <div key={index} className="bg-blue-800/80 rounded-lg overflow-hidden shadow-lg">
                  <div className="relative h-64 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${program.image.src})`, 
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50"></div>

                    <div className="relative z-10 p-6 flex flex-col justify-center items-center h-full">
                      <h3 className="text-white text-2xl font-bold">{program.title}</h3>
                    </div>
                  </div>

                  <div className="bg-green-500 text-white p-4 flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold">{program.duration}</span>
                      <div className="text-sm">{program.courses}</div>
                    </div>
                    <div className="bg-green-600 rounded-full p-2 cursor-pointer hover:bg-green-700 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeServe;
