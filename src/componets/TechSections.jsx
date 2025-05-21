"use client";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import teacher1 from "../assets/PG Diploma Artificial Intelligence in Clinical Research.jpg";
import teacher2 from "../assets/Advanced PG Diploma in Clinical Research & Regulatory Affairs.jpg";
import teacher3 from "../assets/Advanced Diploma in Clinical Research & Pharmacovigilance.jpg";
import teacher4 from "../assets/Diploma in Pharmacovigilance.jpg";
import teacher5 from "../assets/M.Sc. in Clinical Research.jpg";
import teacher6 from "../assets/Diploma in Clinical SAS.jpg";

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4">
          {teachers.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      <div className="relative h-48 w-full">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-medium text-gray-700 mb-2">{post.title}</h2>

        <p className="text-gray-500 mb-4">{post.description}</p>
      </div>
    </div>
  );
};

export default TechSections;
