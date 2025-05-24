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
    <section className="w-full pb-10 px-4">
      <ToastContainer position="top-center" />
      <div className="max-w-7xl relative z-10 rounded-lg shadow-[0_0_5px_#d4d9de] bg-white mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center gap-0 sm:gap-10 md:gap-14 py-8">
        <div className="w-full md:w-1/2 text-left md:text-left pt-6 pb-6">
          <p className="text-black text-xl mb-2">Join Us</p>
          <h2 className="text-xl md:text-3xl font-bold text-black mt-4">
            Looking to make your research more efficient, compliant, and
            people-focused?
          </h2>
          <p className="text-gray-500 mt-4">
            Reach out to us. We would be happy to schedule a meeting at your
            convenience to discuss further and will look forward to the
            possibility of working together.
          </p>

          <Link href="/contact">
            <button className="mt-6 bg-rd text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-md font-medium shadow-md hover:bg-bl transition-all cursor-pointer">
              Reach Out Today
            </button>
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:py-6">
          <Image
            src={JOINUS}
            alt="Business Innovation"
            priority
            className="rounded-xl object-contain w-[100%]  md:w-[80%]"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
