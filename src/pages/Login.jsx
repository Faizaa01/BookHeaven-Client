import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../components/ErrorAlert";
import { useState } from "react";
import img from "../assets/images/b4.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { errorMsg, loginUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await loginUser(data);
      if (response.success) navigate("/");
    } catch (error) {
      console.log("Login Failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pink-900/20 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text- mb-4 drop-shadow-lg">
            WELCOME BACK
          </h1>
          <p className="text-lg">
            Sign in to continue your journey through our awesome bookstore collection
          </p>
        </div>

        {/* Bottom - Form and Image Side by Side */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-32">
        {/* Left - Form */}
        <div className="flex-1 max-w-md w-full p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">Login</h2>
          {errorMsg && <ErrorAlert error={errorMsg} />}
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block font-semibold mb-2 text-gray-700" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className={`w-full rounded-lg px-4 py-3 border ${
                  errors.username ? "border-red-300" : "border-gray-300"
                } bg-gray-100 focus:outline-none focus:ring-1 focus:ring-rose-200 transition`}
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && (
                <p className="text-red-400 text-sm mt-1">{errors.username.message}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold mb-2 text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className={`w-full rounded-lg px-4 py-3 border ${
                  errors.password ? "border-red-300" : "border-gray-300"
                } bg-gray-100 focus:outline-none focus:ring-1 focus:ring-rose-200 transition`}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-red-300 hover:bg-rose-400 text-white font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Login"}
            </button>
          </form>


          <p className="mt-6 text-sm text-gray-600 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-rose-300 font-semibold hover:text-rose-500 underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Right - Image */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <img src={img} alt="Bookstore" className="w-[400px] h-auto object-contain opacity-90" />
        </div>
      </div>

      </div>

      {/* Mobile illustration */}
      <div className="lg:hidden absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-20">
        <img 
          src={img} 
          alt="Bookstore" 
          className="w-32 h-32 object-contain"
        />
      </div>
    </div>
  );
};

export default Login;