"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

import IndustryRelevantCourse from "../assets/IndustryRelevantCourse.jpg";
import CustomisedSolutions from "../assets/CustomisedSolutions.jpg";
import ClinicalTrials from "../assets/ClinicalTrials.jpg";

import FeasibilityAssessment1 from "../assets/FeasibilityAssessment1.png";
import PatientRecruitment1 from "../assets/PatientRecruitment1.png";
import linicalperation from "../assets/linicalperation.png";

const BannerContent = ({
  title,
  text,
  buttons,
  textColor = "text-white",
  centered = false,
}) => (
  <div
    className={`max-w-6xl ${
      title === "Clinical Trials"
        ? "px-6 sm:px-10 md:px-20 lg:px-[200px]"
        : "px-6 sm:px-10 lg:px-20"
    }`}
  >
    <div
      className={`${textColor} ${
        centered ? "mx-auto max-w-5xl text-center" : ""
      }`}
    >
      {/* <p className="text-base sm:text-lg md:text-3xl font-medium mb-4">EXPLORE THE WORLD OF</p> */}
      <h1 className="text-5xl  md:text-8xl font-bold mb-4">{title}</h1>
      <p className="text-xl md:text-2xl mb-6">{text}</p>
      <div
        className={`flex flex-wrap gap-4 ${
          centered ? "justify-center" : "justify-start"
        }`}
      >
        {/* {buttons.map((button, index) => (
          <Link key={index} href={button}>
            <span className="inline-block bg-[#F0B100] hover:bg-yellow-600 text-white py-2 sm:py-3 px-6 rounded-md font-medium transition-colors cursor-pointer">
              {button.label}
            </span>
          </Link>
        ))} */}
      </div>
    </div>
  </div>
);

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
      image: CustomisedSolutions,
      title: "Customised Solutions",
      text: "Practical Solutions that Move Clinical Research Forward",
      centered: true,
      alignment: "center",
      buttons: [{ label: "Explore" }, { label: "Connect" }],
    },
    {
      image: ClinicalTrials,
      title: "Clinical Trials",
      text: "Comprehensive services for clinical excellence",
      centered: true,
      alignment: "center",
      buttons: [{ label: "View All" }],
    },
    {
      image: IndustryRelevantCourse,
      title: "Industry-Relevant Courses",
      centered: true,
      text: "Advancing careers in clinical research with the skills needed in today's landscape",
      alignment: "center",
      buttons: [{ label: "Browse" }],
    },
  ];

  const features = [
    {
      title: "Feasibility Assessment",
      description:
        "In-depth analyses to determine the viability of clinical trials, ensuring optimal site selection and resource allocation.",
      bgColor: "bg-orange-500",
      icon: FeasibilityAssessment1,
      alt: "Apply icon",
    },
    {
      title: "Patient Recruitment",
      description:
        "Implement strategic patient recruitment plans to enhance enrollment rates, focusing on patient engagement.",
      bgColor: "bg-blue-500",
      icon: PatientRecruitment1,
      alt: "Prospects icon",
    },
    {
      title: "Clinical Operation",
      description:
        "Our team ensures seamless trial execution, maintaining compliance with regulatory standards and timelines.",
      bgColor: "bg-yellow-500",
      icon: linicalperation,
      alt: "Certification icon",
    },
  ];

  const currentBanner = banners[currentSlide];

  return (
    <div className="w-full">
      <main>
        <section
          className="relative w-full h-[60vh] md:h-[70vh]  overflow-hidden z-0"
          id="herosection"
        >
          <div className="relative h-full w-full ">
            <Image
              src={currentBanner.image}
              alt={currentBanner.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-opacity-10 bg-[#00000090] " />
          </div>

          <div
            className={`absolute inset-0 flex items-center z-20 px-4 ${
              currentBanner.centered
                ? "justify-center text-center"
                : currentBanner.alignment === "right"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <BannerContent
              title={currentBanner.title}
              text={currentBanner.text}
              buttons={currentBanner.buttons}
              textColor={
                currentBanner.title === "Industry-Relevant Courses"
                  ? "text-white"
                  : "text-white"
              }
              centered={currentBanner.centered}
            />
          </div>
        </section>

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-[50px] md:mt-[-100px] relative"
          id="herosection2"
        >
          <div className="grid grid-cols-1  md:grid-cols-3 gap-6 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} text-white p-6 sm:p-8 md:p-6 flex items-center rounded-md shadow-lg`}
              >
                <div className="mr-4 sm:mr-6 shrink-0">
                  <Image
                    src={feature.icon}
                    alt={feature.alt}
                    width={70}
                    height={70}
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">
                    {feature.title}
                  </h3>
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
