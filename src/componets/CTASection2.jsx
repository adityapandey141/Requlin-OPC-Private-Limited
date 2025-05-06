"use client";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navigation  from "../assets/Navigating.jpg";

const CTASection2 = () => {
  const handleCallClick = () => {
    toast.success("Thanks for reaching out! 📞");

    window.location.href = "tel:+919998125428";
  };

  return (
    <section className="w-full pt-10 pb-10 ">
      <ToastContainer position="top-center" />
      <div className="max-w-7xl relative z-10 rounded-lg shadow-md bg-white mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-14">
        <div className="w-full md:w-1/2 text-center md:text-left pt-6 pb-6">
       
       
          <Image
            src={Navigation}
            alt="Navigating Education"
            width={500}
            height={350}
            className="rounded-xl object-contain"
          />
        </div>

      
        <div className="w-full md:w-1/2 text-center md:text-left p-4">
          <span className="text-[#000000] block text-xl font-semibold mb-2">
            Let’s Talk About Your Goals
          </span>
          <h2 className="text-3xl font-bold text-black">
            Whether you’re managing trials, running a research site, or building your clinical career.
          </h2>
          
          <Link href="/contact-us">
            <button className="mt-6 bg-[#F0B100] text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-[#D18700] transition-all">
              Contact Us Now
            </button>
          </Link>
        </div>
        </div>
    
    </section>
  );
};

export default CTASection2;
