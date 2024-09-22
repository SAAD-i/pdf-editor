"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Login from "./Login";
import Signup from "./Signup";
import { useUser } from "../context/UserContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const { user, logout, checkAuthStatus } = useUser();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuthAndShowSignup = async () => {
      await checkAuthStatus();
      if (!user && pathname === "/edit") {
        setShowSignupModal(true);
        toast('Sign up to access the edit feature!', {
          icon: '🚀',
          duration: 4000,
          position: 'top-center',
        });
      }
    };

    checkAuthAndShowSignup();
  }, [checkAuthStatus, user, pathname]);

  const openLogin = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
  };

  const openSignup = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  const closeModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  const handleLogout = () => {
    logout();
    checkAuthStatus();
  };

  return (
    <div className="">
      {/* Navbar */}
      <div className="py-10 flex items-center justify-between mx-auto container max-w-5xl text-white">
        <Link
          href={"/"}
          className="text-3xl font-bold cursor-pointer text-yellow-300"
        >
          PDFit
        </Link>
        <ul className="flex items-center justify-between gap-5">
          <Link
            href={"/"}
            className={`${
              pathname === "/" ? "text-yellow-300 border-b" : "hover:text-yellow-300 hover:border-b"
            } cursor-pointer border-yellow-300`}
          >
            Home
          </Link>

          <Link
            href={"/edit"}
            className={`${
              pathname === "/edit" ? "text-yellow-300 border-b" : "hover:text-yellow-300 hover:border-b"
            } cursor-pointer border-yellow-300`}
          >
            Edit
          </Link>

          <Link
            href={"/about"}
            className={`${
              pathname === "/about" ? "text-yellow-300 border-b" : "hover:text-yellow-300 hover:border-b"
            } cursor-pointer border-yellow-300`}
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className={`${
              pathname === "/contact" ? "text-yellow-300 border-b" : "hover:text-yellow-300 hover:border-b"
            } cursor-pointer border-yellow-300`}
          >
            Contact
          </Link>
        </ul>
        {user ? (
          <div
            onClick={handleLogout}
            className="bg-transparent cursor-pointer hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
          >
            Logout
          </div>
        ) : (
          <div
            onClick={openLogin}
            className="bg-transparent cursor-pointer hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
          >
            Login
          </div>
        )}
      </div>

      {/* Signup Modal */}
      {showSignupModal && (
        <Signup showLogin={openLogin} closeModal={closeModal} />
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <Login showSignup={openSignup} closeModal={closeModal} />
      )}

      {/* Overlay close functionality */}
      {(showLoginModal || showSignupModal) && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeModal}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
