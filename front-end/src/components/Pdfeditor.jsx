"use client";
import React, { useEffect, useRef } from "react";

const Pdfeditor = ({ file }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadPdfProktScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "/pdfprokt/pdfprokt.js"; // Path to your pdfprokt.js file
        script.onload = () => {
          if (window.PDFPROKt) {
            resolve();
          } else {
            reject(new Error("PDFPROKt library not found"));
          }
        };
        script.onerror = () =>
          reject(new Error("Failed to load PDFPROKt script"));
        document.body.appendChild(script);
      });
    };

    const initializePdfEditor = () => {
      if (window.PDFPROKt && file) {
        const fileUrl = URL.createObjectURL(file); // Create a URL for the selected file
        PDFPROKt.load({
          container: containerRef.current,
          document: fileUrl, // Use the selected file
        })
          .then((instance) => {
            console.log("PDFPROKt loaded", instance);
          })
          .catch((error) => {
            console.error(error.message);
          });
      }
    };

    loadPdfProktScript()
      .then(initializePdfEditor)
      .catch((error) => {
        console.error(error.message);
      });

    // Cleanup the script when the component unmounts
    return () => {
      const script = document.querySelector(
        `script[src="/pdfprokt/pdfprokt.js"]`
      );
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [file]); // Run the effect whenever the file changes

  return <div ref={containerRef} style={{ height: "100vh" }}></div>;
};

export default Pdfeditor;
