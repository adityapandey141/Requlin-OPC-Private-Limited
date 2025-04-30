"use client";
import Image from "next/image";
import CTAimage from "../assets/CTA.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CTASection = () => {
  const handleCallClick = () => {
    toast.success("Thanks for reaching out! 📞");
  
    window.location.href = "tel:+919998125428";
  };

  return (
    <section className="w-full pt-10 pb-10 bg-[#F5F5FF]">
      <ToastContainer position="top-center" />
      <div className="max-w-7xl relative z-10 rounded-lg shadow-md bg-white mx-auto px-4 sm:px-6 md:px-10 lg:px-16 -mb-[250px] flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-14">
        
        <div className="w-full md:w-1/2 text-center md:text-left pt-6 pb-6">
          <span className="text-[#F07E00] bg-[#F4F0FF] px-3 py-1 rounded-md text-xs sm:text-sm font-semibold">
            Join Us
          </span>
          <h2 className="text-3xl font-bold text-black mt-4">
            Looking to make your research more efficient, compliant, and people-focused?
          </h2>
         
          <button
            onClick={handleCallClick}
            className="mt-6 bg-slate-900 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-lg text-base sm:text-lg font-medium shadow-md hover:bg-[#F07E00] transition-all"
          >
            Reach Out Today
          </button>
        </div>

      
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={CTAimage}
            alt="Business Innovation"
            width={500}
            height={350}
            priority
            className="rounded-xl object-contain w-full max-w-[400px] sm:max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
