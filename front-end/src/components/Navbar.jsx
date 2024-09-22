"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Login from "./Login";
import Signup from "./Signup";
import { useUser } from "../context/UserContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, checkAuthStatus } = useUser();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuthAndShowSignup = async () => {
      await checkAuthStatus();
      if (!user && pathname === "/edit") {
        setShowSignupModal(true);
        toast("Sign up to access the edit feature!", {
          icon: "🚀",
          duration: 4000,
          position: "top-center",
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLink = ({ href, children }) => (
    <Link
      href={href}
      className={`${
        pathname === href
          ? "text-yellow-300 border-b"
          : "hover:text-yellow-300 hover:border-b"
      } cursor-pointer border-yellow-300`}
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <div className="">
      {/* Navbar */}
      <div className="py-10 flex items-center justify-between mx-auto container max-w-5xl text-white px-4">
        <Link
          href={"/"}
          className="text-3xl font-bold cursor-pointer text-yellow-300"
        >
          PDFit
        </Link>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center justify-between gap-5">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/edit">Edit</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </ul>

        {/* Login/Logout button */}
        <div className="hidden md:block">
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
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4">
          <ul className="flex flex-col text-white items-center gap-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/edit">Edit</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
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
          </ul>
        </div>
      )}

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
