"use client";
import Image from "next/image";
import Link from "next/link";
import JOINUS from "../assets/JOINUS.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CTASection = () => {
  const handleCallClick = () => {
    toast.success("Thanks for reaching out! 📞");

    window.location.href = "tel:+917550240992";
  };

  return (
    <section className="w-full pt-10 pb-10 ">
      <ToastContainer position="top-center" />
      <div className="max-w-7xl relative z-10 rounded-lg shadow-md bg-white mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-14">
        <div className="w-full md:w-1/2 text-center md:text-left pt-6 pb-6">
          <p className="text-black text-xl mb-2">Join Us</p>
          <h2 className="text-3xl font-bold text-black mt-4">
            Looking to make your research more efficient, compliant, and
            people-focused?
          </h2>

          <Link href="/contact">
            <button className="mt-6 bg-rd text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-[#D18700] transition-all">
            Reach Out Today
            </button>
            </Link>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={JOINUS}
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
