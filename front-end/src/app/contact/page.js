"use client";
import React, { useState } from "react";
import { TbMail, TbPhone, TbMapPin } from "react-icons/tb";
import Link from "next/link";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white mx-auto container max-w-5xl">
      <section className="text-white container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-4">
          Contact Us
        </h1>
        <p className="text-xl mb-8">
          We're here to help. Get in touch with PDFit support.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 rounded-lg"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-block bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black font-semibold py-2 px-6 border border-yellow-300 hover:border-transparent rounded-lg transition duration-300"
              >
                Send Message
              </button>
              {submitStatus === "success" && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500">
                  Error sending message. Please try again.
                </p>
              )}
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <TbMail className="text-yellow-300 text-2xl mr-3" />
                <span>support@pdfit.com</span>
              </div>
              <div className="flex items-center">
                <TbPhone className="text-yellow-300 text-2xl mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <TbMapPin className="text-yellow-300 text-2xl mr-3" />
                <span>123 PDF Street, Document City, 12345</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white py-16 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-yellow-300">
            Ready to Transform Your PDF Experience?
          </h2>
          <p className="text-lg mb-8">
            Join thousands of satisfied users and start optimizing your PDF
            workflow today.
          </p>
          <Link
            href="/"
            className="inline-block bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black font-semibold py-2 px-6 border border-yellow-300 hover:border-transparent rounded-lg transition duration-300"
          >
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
