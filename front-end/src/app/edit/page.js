"use client";
import React, { useState, useEffect } from "react";
import Pdfeditor from "@/components/Pdfeditor";
import LoginPopup from "@/components/LoginPopup"; // New component we'll create

const PdfEditor = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status
  const [showPopup, setShowPopup] = useState(false); // New state for popup visibility

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleCancel = () => {
    setFile(null);
    setFileName("");
  };

  useEffect(() => {
    // Check login status here (replace with your actual auth check)
    const checkLoginStatus = () => {
      // Simulating an auth check, replace with your actual logic
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
      if (!loggedIn) {
        setShowPopup(true);
      }
    };

    checkLoginStatus();

    // Set up interval to show popup every 20 seconds if not logged in
    const popupInterval = setInterval(() => {
      if (!isLoggedIn) {
        setShowPopup(true);
      }
    }, 20000);

    // Clean up interval on component unmount
    return () => clearInterval(popupInterval);
  }, [isLoggedIn]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="text-white mx-auto container max-w-5xl">
      {!file ? (
        // File upload section, visible when no file is selected
        <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between my-4 md:my-6">
          <div className="flex flex-col w-full justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
              PDF Editor
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading mb-2">
              Edit Your PDFs with Ease
            </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Upload your PDF file.
            </p>
            <label
              htmlFor="upload"
              className="bg-transparent cursor-pointer hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Choose and Upload
              <input
                id="upload"
                type="file"
                className="hidden"
                accept="application/pdf"
                onChange={handleFileChange}
              />
            </label>
            {fileName && (
              <div className="mt-2 text-gray-50">
                Selected File: <span className="font-semibold">{fileName}</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        // Show the PDF editor and the cancel button if a file is selected
        <div className="fixed inset-0 z-50">
          {/* Fullscreen PDF editor */}
          <Pdfeditor file={file} className="absolute z-40 w-full h-full" />

          {/* Floating cancel button */}
          <button
            onClick={handleCancel}
            className="absolute bottom-4 left-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded z-50"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Login Popup */}
      {/* {!isLoggedIn && showPopup && <LoginPopup onClose={handleClosePopup} />} */}
    </div>
  );
};

export default PdfEditor;
