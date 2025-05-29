"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import WhatisClinicalResearch from "../assets/Expert Guidance.jpg";
import WeWalkClinicalResearch from "../assets/Cost Efficiency.jpg";
import ScopeofClinicalResearch from "../assets/Accelerated Timelines.jpg";
import Strategic from "../assets/Strategic Insights.jpg";

const benefits = [
  {
    id: 1,
    title: " Expert Guidance",
    excerpt: " Experienced professionals ensure compliance and best practices.",
    image: WhatisClinicalResearch,
  },
  {
    id: 2,
    title: " Cost Efficiency",
    excerpt: "Streamlined processes save money and maximise investment.",
    image: WeWalkClinicalResearch,
  },
  {
    id: 3,
    title: "Accelerated Timelines",
    excerpt: "Projects move faster, getting products to market ahead.",
    image: ScopeofClinicalResearch,
  },
  {
    id: 4,
    title: " Strategic Insights",
    excerpt: "Data analysis drives informed decision-making.",
    image: Strategic,
  },
];

const Benefits = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-15">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">
          Benefits We Deliver
        </h1>
        {/* <p className="text-lg text-gray-600">
          The Foundation of Medical Advancements
        </p> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
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

        <p className="text-gray-500 mb-4">{post.excerpt}</p>
      </div>
    </div>
  );
};

export default Benefits;
