"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

import ApplyOnline from '../assets/ApplyOnline.png';
import ProspectsIco from '../assets/ProspectsIco.png';
import CertificationIco from '../assets/CertificationIco.png';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const banners = [
    {
      image: banner2,
      title: 'Customised Solutions',
      text: 'Practical Solutions that Move Clinical Research Forward',
      centered: true,
      buttons: [
        { label: 'Explore', link: '/explore' },
        { label: 'Connect', link: '/connect' },
      ],
    },
    {
      image: banner3,
      title: 'Clinical Trials',
      text: 'Comprehensive services for clinical excellence',
      link: '/mba-program',
      buttons: [
        { label: 'View All', link: '/view-all' },
      ],
    },
    {
      image: banner1,
      title: 'Industry-Relevant Courses',
      text: 'Advancing careers in clinical research with the skills needed in today\'s landscape',
      buttons: [
        { label: 'Browse', link: '/browse' },
      ],
    },
  ];

  const features = [
    {
      title: 'Feasibility Assessment',
      description: 'In-depth analyses to determine the viability of clinical trials, ensuring optimal site selection and resource allocation.',
      bgColor: 'bg-orange-500',
      icon: ApplyOnline,
      alt: 'Apply icon',
    },
    {
      title: 'Patient Recruitment',
      description: 'Implement strategic patient recruitment plans to enhance enrollment rates, focusing on patient engagement.',
      bgColor: 'bg-blue-500',
      icon: ProspectsIco,
      alt: 'Prospects icon',
    },
    {
      title: 'Clinical Operation',
      description: 'Our team ensures seamless trial execution, maintaining compliance with regulatory standards and timelines.',
      bgColor: 'bg-yellow-500',
      icon: CertificationIco,
      alt: 'Certification icon',
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      <main>
  
        <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen max-h-[600px] overflow-hidden">
          <div className="relative h-full w-full">
            <Image
              src={banners[currentSlide].image}
              alt={banners[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-opacity-30" />
          </div>

          <div className={`absolute inset-0 flex items-center z-20 ${banners[currentSlide].centered ? 'justify-center text-center' : 'justify-start'}`}>
            <div className="container px-4 sm:px-6 md:px-8 lg:px-12">
              <div className={`text-white ${banners[currentSlide].centered ? 'mx-auto max-w-xl' : 'max-w-lg'}`}>
                <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-2">EXPLORE THE WORLD OF</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{banners[currentSlide].title}</h1>
                <p className="text-sm sm:text-base md:text-lg mb-6">{banners[currentSlide].text}</p>

                {banners[currentSlide].buttons.map((button, index) => (
                  <Link key={index} href={button.link}>
                    <span className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white py-2 sm:py-3 px-6 rounded-md font-medium transition-colors mr-4 mb-2 sm:mb-0">
                      {button.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-[-5px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} text-white p-6 sm:p-8 md:p-10 flex items-center rounded-md shadow-lg`}
              >
                <div className="mr-4 sm:mr-6">
                  <Image src={feature.icon} alt={feature.alt} width={100} height={100} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold whitespace-pre-line mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
