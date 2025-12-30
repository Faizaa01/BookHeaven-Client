import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import ErrorAlert from "../components/ErrorAlert";
import useAuthContext from "../hooks/useAuthContext";
import bg from "../assets/images/i.jpg";

const Register = () => {
  const { registerUser, errorMsg } = useAuthContext();
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  delete data.confirm_password;

  try {
    const response = await registerUser(data);
    console.log(response);

    if (response.success) {
      setSuccessMsg("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 3000);
    }
  } catch (error) {
    console.log("Registration failed", error);
  }
};


  return (
    <div className="bg-white">
    <div className="min-h-screen flex items-center justify-center bg-amber-900/30 p-6 md:p-16">
      <div className="w-full max-w-4xl rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* left */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 bg-white/50 backdrop-blur-md border border-white/30">
          <div className="mb-4 text-center">
            <h1 className="font-logo text-3xl mb-2 text-black">Register</h1>
            <p className="text-lg text-gray-700">Welcome to BookHeaven</p>
          </div>
          {errorMsg && <ErrorAlert error={errorMsg} />}
          {successMsg && (
            <div
              role="alert"
              className="alert alert-success flex items-center mb-4 p-3 rounded text-lime-900 bg-lime-900/20 bg-opacity-60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 mt-2">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-gray-600 mb-1">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Your username"
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && (
                <span className="text-red-500 text-sm">{errors.username.message}</span>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                {...register("email", { required: "Email is Required" })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>
            
            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-gray-600 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "Password must be at least 8 characters" },
                })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
            </div>
            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                {...register("confirm_password", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Password do not match",
                })}
              />
              {errors.confirm_password && (
                <span className="text-red-500 text-sm">{errors.confirm_password.message}</span>
              )}
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-gray-600 mb-1">
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="7/A Dhanmondi, Dhaka"
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                {...register("address")}
              />
            </div>
            {/* Phone Number */}
            <div>
              <label htmlFor="phone_number" className="block text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                id="phone_number"
                type="text"
                placeholder="0123456789"
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                {...register("phone_number")}
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 mt-4 rounded-full bg-amber-900/60 hover:bg-stone-600 text-white font-semibold text-lg transition"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-stone-500 font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        
        {/* right */}
        <div className="hidden md:block md:w-1/2 overflow-hidden">
          <img
            src={bg}
            alt="Lovebirds Illustration"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;