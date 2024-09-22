import React from "react";
import Hero from "@/components/Hero";
import Link from "next/link";
const page = () => {
  return (
    <div className="text-white bg-gray-900 mx-auto container max-w-5xl">
      <Hero />
      <main className="">
        <section className="py-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Master Your PDFs
          </h2>
          <p className="text-xl mb-8">
            Powerful PDF editing with advanced features at your fingertips
          </p>
          <Link
            href="/edit"
            className="inline-block bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black font-semibold py-2 px-6 border border-yellow-300 hover:border-transparent rounded-lg transition duration-300"
          >
            Edit Now
          </Link>
        </section>

        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Rich Text Editing
                </h3>
                <p>
                  Edit, add, or remove text with advanced formatting options.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Image Manipulation
                </h3>
                <p>
                  Insert, resize, and position images within your PDF documents.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Signatures & Drawings
                </h3>
                <p>
                  Add signatures and freehand drawings to personalize your PDFs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              How It Works
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
              <div className="text-center">
                <div className="bg-yellow-300 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload</h3>
                <p>Select and upload your PDF file</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-300 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Edit</h3>
                <p>Make your desired changes</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-300 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Download</h3>
                <p>Save and download your edited PDF</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Our PDF Editor?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-yellow-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Comprehensive</h3>
              <p>All-in-one solution for advanced PDF editing needs</p>
            </div>
            <div className="text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-yellow-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Powerful</h3>
              <p>Advanced features for professional-grade PDF editing</p>
            </div>
            <div className="text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-yellow-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
              <p>Intuitive interface for seamless PDF editing</p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16"></div>

      <section className="text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-yellow-300">
            Ready to Elevate Your PDF Editing Experience?
          </h2>
          <p className="text-lg mb-8">
            Join thousands of satisfied users and start creating
            professional-grade PDFs today.
          </p>
          <Link
            href="/edit"
            className="inline-block bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black font-semibold py-2 px-6 border border-yellow-300 hover:border-transparent rounded-lg transition duration-300"
          >
            Start Editing for Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;
