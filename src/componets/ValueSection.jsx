"use client";
import Image from 'next/image';

import registrationico1 from "../assets/registrationico1.png";
import docico1 from "../assets/docico1.png";
import getstartico1 from "../assets/getstartico1.png";

const ValueSection = () => {
  const values = [
    {
      id: 1,
      title: "Integrity",
      icon: registrationico1,
      bgColor: "bg-orange-500",
      dotColor: "bg-blue-500",
    },
    {
      id: 2,
      title: "Innovation",
      icon: docico1,
      bgColor: "bg-green-500",
      dotColor: "bg-orange-400",
    },
    {
      id: 3,
      title: "Collaboration",
      icon: getstartico1,
      bgColor: "bg-orange-500",
      dotColor: "bg-blue-500",
    },
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-600 uppercase tracking-wide text-sm">What Drives Us?</p>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">Our Values</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center relative">
          {values.map((value, index) => (
            <div key={value.id} className="flex flex-col items-center">
              <div className="relative">
                <div className={`w-32 h-32 rounded-full ${value.bgColor} flex items-center justify-center`}>
                  <Image src={value.icon} alt={value.title} width={64} height={64} />
                </div>
                <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${value.dotColor} flex items-center justify-center text-white font-bold`}>
                  {value.id}
                </div>
              </div>
              <h3 className="text-xl font-bold mt-6">{value.title}</h3>
            </div>
          ))}
        </div>

      
        <div className="hidden md:block absolute left-1/6 top-60 w-4/6 h-0.5 border-t-2 border-dashed border-gray-300 z-0 mx-auto"></div>
      </div>
    </div>
  );
};

export default ValueSection;
