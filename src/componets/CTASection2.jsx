"use client";
import Link from "next/link";
import Image from "next/image";
import Navigation  from "../assets/Navigating.jpg";

const CTASection2 = () => {
  return (
    <section className="bg-[#FFFFFF] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2 flex justify-center">
          <Image
            src={Navigation}
            alt="Navigating Education"
            width={500}
            height={350}
            className="rounded-xl object-contain"
          />
        </div>
        <div className="md:w-1/2">
        <span className="text-[#000000]  px-3 py-1 rounded-md text-xs sm:text-xl font-semibold">
        Let’s Talk About Your Goals
          </span>
          <h2 className="text-3xl font-bold text-black mt-4">
          Whether you’re managing trials, running a research site, or building your clinical career.

          </h2>
          
          <Link href="/contact-us">
            <button className="mt-6 bg-[#F0B100] text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-[#D18700] transition-all">
               NOW
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection2;