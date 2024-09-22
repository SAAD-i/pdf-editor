import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useUser } from "../context/UserContext";
import toast from "react-hot-toast"; // Add this import

const Signup = ({ showLogin, closeModal }) => {
  const { signup } = useUser();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (password.length < minLength) {
      return "Password must be at least 8 characters long";
    }
    if (!hasUpperCase) {
      return "Password must contain at least one uppercase letter";
    }
    if (!hasLowerCase) {
      return "Password must contain at least one lowercase letter";
    }
    if (!hasNumber) {
      return "Password must contain at least one number";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading("Signing up..."); // Show loading toast

    try {
      await signup(formData.email, formData.password);
      toast.success("Signed up and logged in successfully!");
      closeModal();
    } catch (err) {
      if (err.message.includes("email-already-in-use")) {
        toast.error("This email is already registered. Please log in instead.");
      } else {
        toast.error(err.message || "Registration failed");
      }
    } finally {
      setIsLoading(false);
      toast.dismiss(loadingToast); // Dismiss loading toast
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="relative bg-gray-800 p-8 rounded-md shadow-lg w-full max-w-md">
        {/* Cancel button */}
        <button
          className="absolute top-3 right-3 text-yellow-300 hover:text-yellow-500"
          onClick={closeModal}
        >
          <AiOutlineClose size={24} />
        </button>

        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-yellow-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-transparent rounded border border-yellow-300 focus:outline-none focus:border-yellow-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-yellow-300 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-transparent rounded border border-yellow-300 focus:outline-none focus:border-yellow-500"
              placeholder="Enter your password"
              required
            />
            <p className="text-xs text-yellow-300 mt-1">
              Password must be at least 8 characters long and contain at least
              one uppercase letter, one lowercase letter, and one number.
            </p>
          </div>
          <div className="mb-6">
            <label className="block text-yellow-300 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-transparent rounded border border-yellow-300 focus:outline-none focus:border-yellow-500"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-300 text-black py-2 px-4 rounded hover:bg-yellow-400 transition"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-gray-50">
          Already have an account?{" "}
          <span
            onClick={showLogin}
            className="text-yellow-300 cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
