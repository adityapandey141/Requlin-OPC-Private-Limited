"use client";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import teacher1 from "../assets/teacher1.jpg";
import teacher2 from "../assets/teacher2.jpg";
import teacher3 from "../assets/teacher3.jpg";
import teacher4 from "../assets/teacher4.jpg";
import teacher5 from "../assets/teacher5.jpg";
import teacher6 from "../assets/teacher6.jpg";
import teacher7 from "../assets/teacher7.jpg";

const teachers = [
  {
    id: 1,
    name: "BRUNO ACSELRAD",
    title: "PG Diploma Artificial Intelligence in Clinical Research",
    image: teacher1,
    description:
      "Discover how AI reshapes data analysis, patient targeting, and trial efficiency. This course combines clinical trial operations with the latest in predictive modelling and data science.",
  },
  {
    id: 2,
    name: "BRUNO ACSELRAD",
    title: "Advanced PG Diploma in Clinical Research & Regulatory Affairs",
    image: teacher2,
    description:
      "Build deep knowledge in global regulatory frameworks, ethics committees, documentation, submission processes, and the drug development pipeline from preclinical to post-market stages.",
  },
  {
    id: 3,
    name: "BRUNO ACSELRAD",
    title: "Advanced Diploma in Clinical Research & Pharmacovigilance",
    image: teacher3,
    description:
      "Understand trial operations alongside adverse event reporting, case assessment, and global safety databases. Get hands-on exposure to Argus Safety and MedDRA coding.",
  },
  {
    id: 4,
    name: "BRUNO ACSELRAD",
    title: "Diploma in Pharmacovigilance",
    image: teacher4,
    description:
      "Learn post-market surveillance, risk management, signal detection, and regulatory reporting essentials. Ideal for roles in drug safety monitoring and case processing.",
  },
  {
    id: 5,
    name: "BRUNO ACSELRAD",
    title: "M.Sc. in Clinical Research",
    image: teacher5,
    description:
      "A research-focused postgraduate degree integrating clinical science, project management, regulatory know-how, and ethical considerations to prepare you for leadership roles.",
  },
  {
    id: 6,
    name: "BRUNO ACSELRAD",
    title: "Diploma in Clinical SAS",
    image: teacher6,
    description:
      "Get hands-on experience with SAS programming, CDISC standards, statistical reporting, and clinical data analysis for regulatory submissions.",
  },
  {
    id: 7,
    name: "BRUNO ACSELRAD",
    title: "Diploma in Medical Coding",
    image: teacher7,
    description:
      "Become fluent in ICD, CPT, and HCPCS coding systems used in trials, insurance claims, and medical documentation. Ideal for medical coders and healthcare professionals.",
  },
];

const TechSections = () => {
  const [hoveredId, setHoveredId] = useState(null);

  console.log("Rendering TechSections component");

  return (
    <div className=" py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-black text-xl mb-2">Courses</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-black">
            That Prepares You for Real Clinical Roles
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredId(teacher.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative">
                <div className="overflow-hidden h-48 w-48 rounded-full mx-auto mt-6 mb-4 flex items-center justify-center">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    width={192}
                    height={192}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-3 text-center">
                <h3 className="font-bold text-lg text-gray-800">
                  {teacher.title}
                </h3>
                {/* <p className="text-gray-500 mb-2">{teacher.title}</p> */}

                <p className="text-gray-600 text-sm mb-6">
                  {teacher.description}
                </p>

                {/* <div className="flex justify-center space-x-3 pt-2">
                  <a
                    href="#"
                    className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSections;
