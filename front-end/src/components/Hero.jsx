import React from "react";
import { TbFileTypePdf } from "react-icons/tb";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-white bg-gray-800 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-300 mb-4">
              PDFit
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              The Limitless PDF Editing
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6">
              Explore your favourite pdf editing tools and register now to get
              some free to use features.
            </p>
            <Link
              href="/edit"
              className="inline-block bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black font-semibold py-2 px-6 border border-yellow-300 hover:border-transparent rounded-lg transition duration-300"
            >
              Explore Now
            </Link>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-md p-8">
              <TbFileTypePdf className="text-yellow-300 text-[150px] sm:text-[200px] lg:text-[300px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
