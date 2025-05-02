"use client";
import { useState } from 'react';
import { ChevronUp } from 'lucide-react';

const SolutionItem = ({ heading, text, isOpen, onClick }) => {
  return (
    <div className="border-b pb-4 mb-4">
      <div 
        className="flex justify-between items-start cursor-pointer" 
        onClick={onClick}
      >
        <div className="flex items-start gap-3">
          <div className="bg-gray-100 rounded-full p-2 mt-1">
            <div className="w-6 h-6 flex items-center justify-center text-gray-400">
              ?
            </div>
          </div>
          <h3 className="text-lg font-medium text-gray-800">{heading}</h3>
        </div>
        <ChevronUp 
          className={`transform transition-transform ${isOpen ? '' : 'rotate-180'}`} 
          size={20} 
        />
      </div>
      {isOpen && (
        <div className="pl-12 pr-4 mt-2 text-gray-600">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

const SectionAccordion = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <SolutionItem
            key={index}
            heading={item.heading}
            text={item.text}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default function ResearchSolutions() {
  const studyPlanningItems = [
    {
      heading: "Site Feasibility",
      text: "We evaluate investigator interest, infrastructure, recruitment potential, and past performance to recommend the right sites."
    },
    {
      heading: "Trial Design & Protocol Planning",
      text: "Collaborate with our experts to create protocols that are scientifically valid, operationally feasible, and patient-friendly."
    },
    {
      heading: "Quality & Compliance",
      text: "Audits, SOPs, and continuous quality checks are built into our planning to ensure regulatory readiness at every step."
    },
    {
      heading: "Data Monitoring Committee (DMC)",
      text: "We support DMC operations, from member selection to meeting management and report preparation, upholding study integrity."
    },
    {
      heading: "Statistical Consulting",
      text: "From sample size calculation to analysis plan development, our statisticians help align data strategy with study goals."
    }
  ];
  
  const studyReviewItems = [
    {
      heading: "IRB Review",
      text: "We support submissions, manage responses, and facilitate smooth communication with ethics boards to keep your study moving."
    },
    {
      heading: "IBC Review",
      text: "For gene therapy, biologics, and other biohazard studies, we guide you through Institutional Biosafety Committee (IBC) processes."
    }
  ];
  
  const siteEnablementItems = [
    {
      heading: "Study Start-Up",
      text: "From initial contact to activation, we streamline start-up timelines with structured workflows and checklists."
    },
    {
      heading: "Coverage Analysis",
      text: "We identify standard-of-care procedures and determine billing responsibility to protect compliance and budgeting."
    },
    {
      heading: "Budget Development & Negotiation",
      text: "Our team works with sites to develop budgets that are fair, justified, and based on realistic timelines and resource use."
    },
    {
      heading: "Contract Review & Negotiation",
      text: "We ensure your contracts meet legal, ethical, and financial standards while avoiding unnecessary bottlenecks."
    },
    {
      heading: "Study Identification",
      text: "We proactively match sites to trials through sponsor networks, therapeutic area experience, and investigator availability."
    },
    {
      heading: "Financial Management",
      text: "Timely payments, reconciliations, and financial reporting are handled seamlessly, minimising site burden and improving transparency."
    }
  ];
  
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">Solutions</h1>
        <h2 className="text-xl text-gray-600">For Your Research Goals</h2>
      </div>
      
      <SectionAccordion title="Study Planning" items={studyPlanningItems} />
      <SectionAccordion title="Study Review" items={studyReviewItems} />
      <SectionAccordion title="Site Enablement" items={siteEnablementItems} />
      
      
    </div>
  );
}