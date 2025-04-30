import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import eventimg1 from '../assets/eventimg1.jpg';  
import eventimg2 from '../assets/eventimg2.jpg';
import eventimg3 from '../assets/eventimg3.jpg';

const NewsCard = ({ image, title, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full">
        <Image 
          src={image} 
          alt={title}
          layout="responsive"  
          width={600}          
          height={300}       
          objectFit="cover"     
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
        <div className="flex justify-end mt-4">
          <Link href={link || "#"}>
            <div className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-gray-600 uppercase tracking-wider mb-2">Educational Courses</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-black">Building Expertise in Clinical Research</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
