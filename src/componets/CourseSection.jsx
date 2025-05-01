'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import eventimg1 from '../assets/eventimg1.jpg';
import eventimg2 from '../assets/eventimg2.jpg';
import eventimg3 from '../assets/eventimg3.jpg';

const NewsCard = ({ image, title, link }) => {
  return (
    <Link
      href={link}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      </div>
    </Link>
  );
};

const CourseSection = () => {
  const newsItems = [
    {
      image: eventimg1,
      title: 'Diploma in Pharmacovigilance',
      link: '/news/new-features',
    },
    {
      image: eventimg2,
      title: 'Diploma in Clinical SAS',
      link: '/news/lorem-ipsum',
    },
    {
      image: eventimg3,
      title: 'Diploma in Medical Coding',
      link: '/news/online-mba',
    },
  ];

  return (
    <section className="p-4 sm:p-8 md:p-12 lg:p-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-gray-600 uppercase tracking-wider mb-2">Educational Courses</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-black">Building Expertise in Clinical Research</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <NewsCard
              key={index}
              image={item.image}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
