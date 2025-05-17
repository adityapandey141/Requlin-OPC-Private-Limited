'use client';
import React from 'react';
import Image from 'next/image';
import FeasibilityAssessment from "../assets/FeasibilityAssessment.png";
import PatientRecruitment from "../assets/PatientRecruitment.png";
import MonitoringinClinicalTrials from "../assets/MonitoringinClinicalTrials.png";
import Training from "../assets/Training.png";
import SupportAndStaffingServices from "../assets/SupportAndStaffingServices.png";
import Pharmacovigilance from "../assets/Pharmacovigilance.png";
import MedicalWriting from "../assets/MedicalWriting.png";
import ClinicalDataManagement from "../assets/ClinicalDataManagement.png";
import ClinicalOperation from "../assets/ClinicalOperation.png";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-5 sm:p-6 text-center border border-gray-200 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300">
      <div className={`w-25 h-25 mb-4 flex items-center justify-center rounded-md overflow-hidden ${icon.bgColor}`}>
        {icon.img ? (
          <Image src={icon.img} alt={title} width={64} height={64} className="object-cover" />
        ) : (
          <div className="text-white font-bold text-xl">{title[0]}</div>
        )}
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const ServiceSection = () => {
  const features = [
    {
      icon: { bgColor: "bg-blue-500", img: FeasibilityAssessment },
      title: "Feasibility Assessment",
      description: "Before a single participant is enrolled, we assess your study protocol’s real-world applicability. Our feasibility evaluations consider site capabilities, investigator interest, regional regulations, and patient population availability.",
    },
    {
      icon: { bgColor: "bg-green-500", img: PatientRecruitment },
      title: "Patient Recruitment",
      description: "Timely enrollment is key. We use demographic insights, digital outreach, and site-level coordination to connect studies with eligible participants. Our focus is on speed, diversity, and ethical engagement.",
    },
    {
      icon: { bgColor: "bg-yellow-500", img: MonitoringinClinicalTrials },
      title: "Monitoring in Clinical Trials",
      description: "Our trained CRAs provide on-site and remote monitoring to ensure GCP compliance, patient safety, and reliable data collection. We tailor monitoring plans to each protocol and site’s needs.",
    },
    {
      icon: { bgColor: "bg-yellow-500", img: Training },
      title: "Training",
      description: "Regulatory changes and new technologies require ongoing learning. We offer targeted training for investigators, coordinators, and sponsors, covering GCP, protocol-specific procedures, and industry updates.",
    },
    {
      icon: { bgColor: "bg-blue-500", img: SupportAndStaffingServices },
      title: "Support And Staffing Services",
      description: "Finding qualified staff shouldn't slow you down. Whether you need CRAs, study coordinators, data managers, or regulatory support, our network of trained professionals is ready to step in.",
    },
    {
      icon: { bgColor: "bg-green-500", img: ClinicalOperation },
      title: "Clinical Operation",
      description: "We take care of the details, site management, vendor coordination, and study supplies so your research team can stay focused. Our end-to-end support keeps operations efficient and audit-ready.",
    },
    {
      icon: { bgColor: "bg-purple-500", img: ClinicalDataManagement },
      title: "Clinical Data Management",
      description: "Our CDM services include CRF design, data entry, query management, and database lock. We prioritise data integrity, security, and alignment with regulatory standards from start to finish.",
    },
    {
      icon: { bgColor: "bg-pink-500", img: MedicalWriting },
      title: "Medical Writing",
      description: "From clinical study protocols and investigator brochures to CSR and manuscripts, our medical writers bring scientific clarity and compliance-driven accuracy to every document.",
    },
    {
      icon: { bgColor: "bg-red-500", img: Pharmacovigilance },
      title: "Pharmacovigilance",
      description: "Our PV services span case intake, medical review, signal detection, and global reporting. We help sponsors manage product safety across pre- and post-marketing phases.",
    },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* <div className="text-center mb-10 sm:mb-14">
          <h4 className="text-black text-sm sm:text-base font-medium mb-2 tracking-wide uppercase">Services</h4>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            That Support Every Stage of Clinical Research
          </h2>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
