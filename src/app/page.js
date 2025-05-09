import React from "react";
import HeroSection from "../componets/HeroSection";
import AboutUS from "@/componets/AboutUS";
import ValueSection from "@/componets/ValueSection";
import SolutionsSection from "@/componets/SolutionsSection";
import WhoWeServe from "@/componets/WhoWeServe";
import CourseSection from "@/componets/CourseSection";
import TherapeuticAreas from "@/componets/TherapeuticAreas";
import CTASection from "@/componets/CTASection";
import AboutClinicalResearch from "@/componets/AboutClinicalResearch";

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutUS />
      {/* <ValueSection/> */}
      {/* <SolutionsSection /> */}
      <WhoWeServe />
      <CourseSection />
      <TherapeuticAreas />
      <AboutClinicalResearch />
      <CTASection />
    </div>
  );
};

export default page;
