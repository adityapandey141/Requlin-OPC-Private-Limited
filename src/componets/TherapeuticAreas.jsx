'use client';
import React from 'react';
import Image from 'next/image';
import ChooseUs from "../assets/ChooseUs.jpg";

const StatItem = ({ icon, number, description }) => (
  <div className="flex flex-col items-center justify-center text-center px-4">
    <div className="text-white mb-2">{icon}</div>
    <h3 className="text-5xl font-bold text-white mb-1">{number}</h3>
    <p className="text-white uppercase text-sm">{description}</p>
  </div>
);

const subheadings = [
  { title: "Oncology", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <path d="M8 12h8" strokeWidth="2" />
    </svg>
  )},
  { title: "Central Nervous System", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 2C7.03 2 3 6.03 3 11c0 3.87 2.69 7.13 6.39 7.84.35.06.61.37.61.74v.67c0 .41.34.75.75.75h2.5a.75.75 0 00.75-.75v-.67c0-.37.26-.68.61-.74A8.999 8.999 0 0021 11c0-4.97-4.03-9-9-9z" strokeWidth="2"/>
    </svg>
  )},
  { title: "Cardiovascular", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 21C12 21 4 13.954 4 8.5C4 5.462 6.462 3 9.5 3C11.014 3 12.417 3.755 13 5C13.583 3.755 14.986 3 16.5 3C19.538 3 22 5.462 22 8.5C22 13.954 12 21 12 21Z" strokeWidth="2"/>
    </svg>
  )},
  { title: "Metabolic", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M4 6h16M4 12h8m-8 6h16" strokeWidth="2"/>
    </svg>
  )},
  { title: "Infectious Disease", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M9 2l2 4-3 1 1 3-3 1 2 4-3 1 2 4M15 2l2 4-3 1 1 3-3 1 2 4-3 1 2 4" strokeWidth="2"/>
    </svg>
  )},
  { title: "Dermatology", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10" strokeWidth="2"/>
      <circle cx="12" cy="12" r="2" strokeWidth="2"/>
    </svg>
  )},
  { title: "Immunology", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 2l4 4h-3v6h-2V6H8l4-4zM4 14h16v2H4z" strokeWidth="2"/>
    </svg>
  )},
  { title: "Gastroenterology", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 6a6 6 0 00-6 6v4a4 4 0 004 4h4a4 4 0 004-4v-4a6 6 0 00-6-6z" strokeWidth="2"/>
    </svg>
  )}
];

const TherapeuticAreas = () => (
  <section className="bg-green-500 py-16 relative">
    <div className="absolute inset-0 z-0">
      <Image
        src={ChooseUs}
        alt="Why Choose Us"
        layout="fill"
        objectFit="cover"
        className="opacity-10"
      />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-12">
        <h4 className="text-white text-lg mb-2">Areas of Expertise</h4>
        <h1 className="text-white text-3xl font-bold">Diverse Therapeutic Specialisations</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        {subheadings.map(({ title, icon }, index) => (
          <div key={index} className="bg-white/10 text-white p-6 rounded-lg shadow flex flex-col items-center">
            {icon}
            <h4 className="text-lg font-semibold">{title}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TherapeuticAreas;
