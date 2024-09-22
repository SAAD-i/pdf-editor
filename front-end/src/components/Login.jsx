import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useUser } from "../context/UserContext";
import toast from "react-hot-toast"; // Add this import

const Login = ({ showSignup, closeModal }) => {
  const { login } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const loadingToast = toast.loading("Logging in..."); // Show loading toast

    try {
      await login(email, password);
      toast.success("Logged in successfully!"); // Show success toast
      closeModal();
    } catch (err) {
      toast.error(err.message || "Invalid credentials"); // Show error toast
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

        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-yellow-300 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-transparent rounded border border-yellow-300 focus:outline-none focus:border-yellow-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-yellow-300 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-transparent rounded border border-yellow-300 focus:outline-none focus:border-yellow-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-yellow-300 text-black py-2 px-4 rounded hover:bg-yellow-400 transition"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-gray-50">
          Don't have an account?{" "}
          <span
            onClick={showSignup}
            className="text-yellow-300 cursor-pointer hover:underline"
          >
            Sign up here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
