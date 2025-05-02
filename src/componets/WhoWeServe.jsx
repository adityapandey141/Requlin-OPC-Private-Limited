'use client';
import React from 'react';
import courcesbg from "../assets/courcesbg.jpg"; 
import courseimg1 from "../assets/courseimg1.jpg";
import courseimg2 from "../assets/courseimg2.jpg";
import courseimg3 from "../assets/courseimg3.jpg";
import courseimg4 from "../assets/courseimg4.jpg";

const WhoWeServe = () => {
  const programs = [
    {
      title: "Research Sponsors",
      image: courseimg1, 
    },
    {
      title: "Contract Research Organizations (CROs)",
      image: courseimg2, 
    },
    {
      title: "Research Sites",
      image: courseimg3, 
    },
    {
      title: "Research Participants",
      image: courseimg4, 
    }
  ];

  return (
    <div className="relative w-full">
      <div
        className="relative py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{
          backgroundImage: `url(${courcesbg.src})`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0,0,0,0.6)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50"></div>

        <div className="max-w-7xl mx-auto relative text-center">
          <p className="text-white text-xl mb-2">Who We Serve</p>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-10">Our Clients</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-blue-800/80 rounded-lg overflow-hidden shadow-md transition transform hover:scale-105"
              >
                <div
                  className="relative bg-center bg-cover"
                  style={{ backgroundImage: `url(${program.image.src})`, height: '200px' }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative  flex flex-col justify-center items-center h-full">
                    <h3 className="text-white text-xl font-semibold text-center">
                      {program.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
