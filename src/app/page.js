import React from "react";
import HeroSection from "../componets/HeroSection";
import AboutUS from "@/componets/AboutUS";

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

      <WhoWeServe />
      {/* <CourseSection /> */}
      <TherapeuticAreas />
      <AboutClinicalResearch />
      <CTASection />
    </div>
  );
};

export default page;
