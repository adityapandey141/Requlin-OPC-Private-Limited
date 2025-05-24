import React from "react";
import HeroSection from "../componets/HeroSection";
import AboutUS from "@/componets/AboutUS";

import WhoWeServe from "@/componets/WhoWeServe";
import CourseSection from "@/componets/CourseSection";
import TherapeuticAreas from "@/componets/TherapeuticAreas";
import CTASection from "@/componets/CTASection";
import AboutClinicalResearch from "@/componets/AboutClinicalResearch";
import Benefits from "@/componets/Benefits";
import Founders from "@/componets/Founders";

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutUS />

      <WhoWeServe />
      {/* <CourseSection /> */}
      <TherapeuticAreas />
      <Benefits />
      <AboutClinicalResearch />
      <Founders />
      <CTASection />
    </div>
  );
};

export default page;
