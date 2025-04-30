"use client";
import { useState } from 'react';
import Image from 'next/image';


import registrationico1 from "../assets/registrationico1.png";
import docico1 from "../assets/docico1.png";
import getstartico1 from "../assets/getstartico1.png";
const ValueSection = () => {
    return (
        <div className="w-full py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-gray-600 uppercase tracking-wide text-sm"> What Drives Us?</p>
              <h1 className="text-3xl font-bold text-gray-800 mt-2"> Our Values</h1>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center relative">
            
              <div className="w-full md:w-1/3 flex flex-col items-center mb-10 md:mb-0">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-orange-500 flex items-center justify-center">
                    <div className="w-16 h-16">
                  
                      <Image src={registrationico1} alt="Registration Icon" width={64} height={64} />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold mt-6 mb-3"> Integrity</h3>
               
              </div>
          
              <div className="hidden md:block absolute left-1/3 top-16 w-1/6 border-t-2 border-dashed border-gray-300"></div>
              
          
              <div className="w-full md:w-1/3 flex flex-col items-center mb-10 md:mb-0">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-green-500 flex items-center justify-center">
                    <div className="w-16 h-16">
                    
                      <Image src={docico1} alt="Documentation Icon" width={64} height={64} />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold mt-6 mb-3">Innovation</h3>
              
              </div>
              
            
              <div className="hidden md:block absolute right-1/3 top-16 w-1/6 border-t-2 border-dashed border-gray-300"></div>
              
            
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-orange-500 flex items-center justify-center">
                    <div className="w-16 h-16">
                    
                      <Image src={getstartico1} alt="Get Started Icon" width={64} height={64} />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold mt-6 mb-3">Collaboration</h3>
                
              </div>
            </div>
          </div>
        </div>
    );
};

export default ValueSection;
