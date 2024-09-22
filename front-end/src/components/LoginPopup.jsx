import React, { useState, useEffect } from "react";
import Signup from "./Signup";
import Login from "./Login";

const LoginPopup = ({ onClose, isLoggedIn }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      onClose();
    }
  }, [isLoggedIn, onClose]);

  const handleSignUp = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleCloseForm = () => {
    setShowSignup(false);
    setShowLogin(false);
  };

  if (isLoggedIn) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {!showSignup && !showLogin ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Sign Up or Login Required
            </h2>
            <p className="text-gray-600 mb-6">
              Please sign up or login to use our service without interruptions.
            </p>
            <div className="flex justify-between">
              <button
                onClick={onClose}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Close
              </button>
              <button
                onClick={handleLogin}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Login
              </button>
              <button
                onClick={handleSignUp}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
              >
                Sign Up
              </button>
            </div>
          </>
        ) : showSignup ? (
          <Signup
            closeModal={handleCloseForm}
            showLogin={() => {
              setShowSignup(false);
              setShowLogin(true);
            }}
          />
        ) : (
          <Login
            closeModal={handleCloseForm}
            showSignup={() => {
              setShowLogin(false);
              setShowSignup(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
