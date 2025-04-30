"use client";

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Blogimg1 from "../assets/Blogimg1.jpg";
import Blogimg2 from "../assets/Blogimg2.jpg";
import Blogimg3 from "../assets/Blogimg3.jpg";

const blogPosts = [
  {
    id: 1,
    title: 'What is Clinical Research?',
    excerpt: ' Clinical research involves systematic investigations to evaluate the safety and efficacy of medical interventions, contributing to evidence-based medicine.',
    image: Blogimg1,
    date: '07,DEC 2022',
    comments: 1,
  },
  {
    id: 2,
    title: 'Players in Clinical Research',
    excerpt: ' Key stakeholders include sponsors, CROs, research sites, investigators, and participants, each playing a vital role in the research continuum.',
    image: Blogimg2,
    date: '07,DEC 2022',
    comments: 1,
  },
  {
    id: 3,
    title: ' Scope of Clinical Research',
    excerpt: 'The field covers various phases of trials, regulatory compliance, data management, and post-marketing surveillance, offering diverse career opportunities.',
    image: Blogimg3,
    date: '07,DEC 2022',
    comments: 1,
  },
];

const AboutClinicalResearch = () => {
  return (
    <div className="container mx-auto px-4 py-8">
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

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="flex items-center text-gray-400 text-sm mb-3">
          <div className="flex items-center mr-4">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
            </svg>
            <span>{post.comments} Comment</span>
          </div>
        </div>

        <h2 className="text-xl font-medium text-gray-700 mb-2">{post.title}</h2>

        <p className="text-gray-500 mb-4">
          {post.excerpt}
        </p>

        <Link href={`/blog/${post.id}`}>
          <span className="inline-flex items-center text-orange-500 hover:text-orange-600">
            <span className="mr-1">READ MORE</span>
            <div className="w-6 h-6 flex items-center justify-center bg-orange-500 rounded-full text-white">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
            </div>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default AboutClinicalResearch;
