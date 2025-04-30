import React from 'react'
import HeroSection from "../componets/HeroSection";
import AboutUS from '@/componets/AboutUS';
import ValueSection from '@/componets/ValueSection';
import SolutionsSection from '@/componets/SolutionsSection';
import WhoWeServe from '@/componets/WhoWeServe';
import CourseSection from '@/componets/CourseSection';
import TherapeuticAreas from '@/componets/TherapeuticAreas';
import CTASection from '@/componets/CTASection';
import ServiceSection from '@/componets/ServiceSection';
import AboutClinicalResearch from '@/componets/AboutClinicalResearch';
import FAQ from '@/componets/FAQ';
import TechSections from '@/componets/TechSections';
import CTASection2 from '@/componets/CTASection2';












const page = () => {
  return (
    <div>
    <HeroSection/>
    <AboutUS/>
    <ValueSection/>
    <SolutionsSection/>
    <WhoWeServe/>
    <CourseSection/>
    <TherapeuticAreas/>
    <CTASection/>
    <ServiceSection/>
    <AboutClinicalResearch/>
    <FAQ/>
    <TechSections/>
    <CTASection2/>
   
   
    </div>
  )
}

export default page
