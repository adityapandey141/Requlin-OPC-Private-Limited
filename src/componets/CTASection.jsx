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
    <section className="w-full pt-10 pb-10 mb-[270px]">
      <ToastContainer position="top-center" />
      <div className="max-w-7xl relative z-10 rounded-lg shadow-md bg-white mx-auto px-4 sm:px-6 md:px-10 lg:px-16 -mb-[250px] flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-14">
        
        <div className="w-full md:w-1/2 text-center md:text-left pt-6 pb-6">
         
          <p className="text-black text-xl mb-2">Join Us</p>
          <h2 className="text-3xl font-bold text-black mt-4">
            Looking to make your research more efficient, compliant, and people-focused?
          </h2>
         
          <button
            onClick={handleCallClick}
            className="mt-6  text-black px-5 py-3 sm:px-6 sm:py-3 rounded-lg text-base sm:text-lg font-medium shadow-md bg-[#F0B100] hover:bg-[#D18700] transition-all"
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
