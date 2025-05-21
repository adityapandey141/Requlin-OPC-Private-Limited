"use client";
import React from "react";
import Image from "next/image";
import DiverseTherapeuticSpecialisations from "../assets/DiverseTherapeuticSpecialisations.png";

import Oncology from "../assets/Oncology.png";
import CentralNervousSystem from "../assets/CentralNervousSystem.png";
import Cardscular from "../assets/Cardscular.png";
import Metabolic from "../assets/Metabolic.png";
import InfectiousDisease from "../assets/InfectiousDisease.png";
import Dermatology from "../assets/Dermatology.png";
import Immunology from "../assets/Immunology.png";
import Gastroenterology from "../assets/Gastroenterology.png";

const subheadings = [
  { title: "Oncology", icon: Oncology },
  { title: "Central Nervous System", icon: CentralNervousSystem },
  { title: "Cardiovascular", icon: Cardscular },
  { title: "Metabolic", icon: Metabolic },
  { title: "Infectious Disease", icon: InfectiousDisease },
  { title: "Dermatology", icon: Dermatology },
  { title: "Immunology", icon: Immunology },
  { title: "Gastroenterology", icon: Gastroenterology },
];

const TherapeuticAreas = () => (
  <section className="bg-[#c3d4ffba] py-16 relative mb-[50px]">
    <div className="absolute inset-0 z-0">
      <Image
        src={DiverseTherapeuticSpecialisations}
        alt="Why Choose Us"
        layout="fill"
        objectFit="cover"
        className="opacity-5"
      />
    </div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="text-center mb-12">
        <h4 className="text-black text-xl mb-2">Areas of Expertise</h4>
        <h1 className="text-black text-3xl font-bold">
          Diverse Therapeutic Specialisations
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        {subheadings.map(({ title, icon }, index) => (
          <div
            key={index}
            className="bg-bl text-white p-6 rounded-lg shadow flex flex-col items-center"
          >
            <Image
              src={icon}
              alt={title}
              width={40}
              height={40}
              className="mb-2"
            />
            <h4 className="text-lg font-semibold">{title}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TherapeuticAreas;
