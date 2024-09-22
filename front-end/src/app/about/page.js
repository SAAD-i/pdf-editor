import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "@/components/Hero";
import Link from "next/link";
import {
  TbFileTypePdf,
  TbLock,
  TbCloudUpload,
  TbDeviceMobile,
} from "react-icons/tb";

const AboutPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white mx-auto container max-w-5xl">
      {/* Our Mission Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-yellow-300">
            Our Mission
          </h2>
          <p className="text-lg mb-4">
            At PDFit, we're dedicated to revolutionizing the way you interact
            with PDF documents. Our mission is to provide a comprehensive,
            user-friendly platform for advanced PDF editing.
          </p>
          <p className="text-lg mb-4">
            Whether you're a student, professional, or casual user, we're here
            to empower you with tools that transform static PDFs into dynamic,
            customizable documents.
          </p>
          <p className="text-lg">
            We believe that powerful PDF editing should be accessible to all,
            which is why we offer an intuitive interface coupled with advanced
            features to meet diverse editing needs.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-yellow-300">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <TbFileTypePdf className="text-yellow-300 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rich Text Editing</h3>
              <p>
                Easily add, modify, or delete text in your PDFs with our
                advanced text editing tools.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <TbFileTypePdf className="text-yellow-300 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Image Integration</h3>
              <p>
                Insert, resize, and position images within your PDF documents
                with precision.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <TbLock className="text-yellow-300 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Signatures</h3>
              <p>
                Add legally binding signatures to your documents for
                professional and personal use.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <TbCloudUpload className="text-yellow-300 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Drawing Tools</h3>
              <p>
                Annotate and illustrate your PDFs with our versatile drawing
                features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-yellow-300">
            Why Choose PDFit?
          </h2>
          <ul className="list-disc list-inside text-lg mb-8">
            <li className="mb-2">
              Comprehensive editing tools for all your PDF needs
            </li>
            <li className="mb-2">
              User-friendly interface for seamless editing
            </li>
            <li className="mb-2">
              Advanced features like signature addition and drawing tools
            </li>
            <li className="mb-2">Secure and private document handling</li>
            <li className="mb-2">Cross-platform compatibility</li>
            <li>Regular updates to enhance your editing experience</li>
          </ul>
          <p className="text-lg">
            With PDFit, you're not just editing PDFs – you're unleashing their
            full potential as dynamic, interactive documents.
          </p>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-yellow-300">
            Our Technology
          </h2>
          <p className="text-lg mb-6">
            At PDFit, we harness cutting-edge technology to provide you with the
            best PDF editing experience:
          </p>
          <ul className="list-disc list-inside text-lg mb-8">
            <li className="mb-2">
              Advanced text recognition for precise editing capabilities
            </li>
            <li className="mb-2">
              Vector-based drawing tools for crisp, scalable annotations
            </li>
            <li className="mb-2">Secure digital signature integration</li>
            <li>Real-time collaboration features for team projects</li>
          </ul>
          <div className="bg-gray-800 p-6 rounded-lg">
            <TbDeviceMobile className="text-yellow-300 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p>
              Edit your PDFs on any device with our responsive web interface,
              ensuring a seamless experience across desktop and mobile.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-white py-16 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-yellow-300">
            Ready to Elevate Your PDF Editing?
          </h2>
          <p className="text-lg mb-8">
            Join our community of PDF enthusiasts and start creating dynamic,
            professional documents today.
          </p>
          <Link
            href="/edit"
            className="inline-block bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black font-semibold py-2 px-6 border border-yellow-300 hover:border-transparent rounded-lg transition duration-300"
          >
            Start Editing Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
