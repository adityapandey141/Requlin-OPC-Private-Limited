"use client";

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import WhatisClinicalResearch from "../assets/WhatisClinicalResearch.png";
import WeWalkBesideYouinEveryStepofClinicalResearch from "../assets/WeWalkBesideYouinEveryStepofClinicalResearch.png";
import ScopeofClinicalResearch from "../assets/ScopeofClinicalResearch.png";

const blogPosts = [
  {
    id: 1,
    title: 'What is Clinical Research?',
    excerpt: 'Clinical research involves systematic investigations to evaluate the safety and efficacy of medical interventions, contributing to evidence-based medicine.',
    image: WhatisClinicalResearch,
  },
  {
    id: 2,
    title: 'Players in Clinical Research',
    excerpt: 'Key stakeholders include sponsors, CROs, research sites, investigators, and participants, each playing a vital role in the research continuum.',
    image: WeWalkBesideYouinEveryStepofClinicalResearch,
  },
  {
    id: 3,
    title: 'Scope of Clinical Research',
    excerpt: 'The field covers various phases of trials, regulatory compliance, data management, and post-marketing surveillance, offering diverse career opportunities.',
    image: ScopeofClinicalResearch,
  },
];

const AboutClinicalResearch = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Head>
        <title>University Blog | Latest News</title>
        <meta name="description" content="Stay updated with the latest news and events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-black mb-2">
            Understanding Clinical Research
          </h1>
          <p className="text-lg text-gray-600">
            The Foundation of Medical Advancements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
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

        <p className="text-gray-500 mb-4">
          {post.excerpt}
        </p>
      </div>
    </div>
  );
};

export default AboutClinicalResearch;
