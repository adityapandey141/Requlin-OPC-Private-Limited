"use client";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "../assets/Navigating.jpg";

const CTASection2 = () => {
  const handleCallClick = () => {
    toast.success("Thanks for reaching out! 📞");
    window.location.href = "tel:+917550240992";
  };


  return (

    <section className="w-full pt-10 pb-10 ">
    <ToastContainer position="top-center" />
    <div className="max-w-7xl relative z-10 rounded-lg shadow-md bg-white mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-14">
      <div className="w-full md:w-1/2 text-center md:text-left pt-6 pb-6">
      <p className="text-black text-xl mb-2"> Let’s Talk About Your Goals</p>
        <h2 className="text-3xl font-bold text-black mt-4">
        Whether you’re managing trials, running a research site, or building your clinical career.

        </h2>

        <Link href="/contact-us">
          <button className="mt-6 bg-[#F0B100] text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-[#D18700] transition-all">
            Now
          </button>
          </Link>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
       <Image
        src={Navigation}
        alt="Business Innovation"
        width={400}
        height={250}
         priority
        className="rounded-xl w-full max-w-[400px] h-auto"
       />
    </div>
    </div>
  </section>
  );
};
export default CTASection2;
