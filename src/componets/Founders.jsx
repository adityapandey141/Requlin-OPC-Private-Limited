"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import WhatisClinicalResearch from "../assets/WhatisClinicalResearch.png";
import WeWalkClinicalResearch from "../assets/WeWalkClinicalResearch.png";
import ScopeofClinicalResearch from "../assets/ScopeofClinicalResearch.png";

const foundersdata = [
  {
    id: 1,
    title: " Dr Kanthi Shankar",
    subtitle: " MD & MS (Founder & Director)",
    excerpt:
      " With years of experience in clinical research and healthcare innovation, Dr Kanthi Shankar established ReQuLin to bridge the gap between regulatory compliance and real-world trial success. Their vision continues to shape how research teams operate efficiently and ethically.",
    image: WhatisClinicalResearch,
  },
  {
    id: 2,
    title: "K Kaliloor Rahman ",
    subtitle:
      "(Pharmacist, Clinical Researcher, Trainer & Marketing Professional)",
    excerpt:
      "His journey spans successful project management, training excellence, and export marketing, enabling him to guide teams toward meaningful outcomes. Known for his collaborative mindset and problem-solving skills, he has consistently driven innovation, operational efficiency, and international growth.",
    image: WeWalkClinicalResearch,
  },
];

const Founders = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-15">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Our Backbone</h1>
        {/* <p className="text-lg text-gray-600">
          The Foundation of Medical Advancements
        </p> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {foundersdata.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

const BlogCard = ({ post }) => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Image
        src={post.image}
        alt="Noteworthy technology acquisitions 2021"
        className="object-cover w-full h-full rounded-t-lg md:w-70 md:rounded-none md:rounded-s-lg"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h5>
        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-500 dark:text-white">
          {post.subtitle}
        </h5>
        <p className="mb-3 text-gray-500 mb-4">{post.excerpt}</p>
      </div>
    </div>
  );
};

export default Founders;
