"use client";
import React, { useState } from "react";
import Image from "next/image";
import Studyimg1 from "../assets/Studyimg1.jpg";
import Studyimg2 from "../assets/Studyimg2.jpg";
import Studyimg3 from "../assets/Studyimg3.jpg";

const SolutionsSection = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const studyOptions = [
    {
      title: "Study Planning",
      description:
        "We assist in designing robust study protocols, ensuring clarity and compliance from the outset.",
      color: "#FF7F00",
      image: Studyimg1,
    },
    {
      title: "Study Review",
      description:
        " Our expert team conducts thorough reviews to identify potential challenges and streamline study processes.",
      color: "#32CD32",
      image: Studyimg2,
    },
    {
      title: " Site Enablement",
      description:
        " We provide support to research sites, enhancing their capabilities to conduct efficient and compliant trials.",
      color: "#1E90FF",
      image: Studyimg3,
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-black text-xl mb-2">Solutions</p>
        <h1 className="text-3xl font-bold text-black">
          Strategies for Clinical Success
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {studyOptions.map((option, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg bg-white"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="h-64 relative">
              <Image
                src={option.image}
                alt={option.title}
                layout="fill"
                objectFit="cover"
                className="brightness-75"
              />
              <div
                className="absolute bottom-0 left-0 h-2 w-16"
                style={{ backgroundColor: option.color }}
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600">{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsSection;
