import React, { useState } from "react";
import { showToast } from "../../Utils/toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Slices/authSlice";

export default function SignIn() {
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        showToast("Sign in successfully", "success");
        dispatch(
          login({
            user: data.user,
            token: data.data.token,
          }),
          
        );
        navigate("/dashboard");
      } else {
        showToast(data.message || "Sign in failed", "error");
      }
    } catch (error) {
      showToast("Something went wrong", "error");
    }
  };

  return (
    <div className="relative w-full h-screen">
      <img
        src="/Signin.png"
        alt="SignIn"
        className="w-full h-full object-cover"
      />

      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-[10px] flex flex-col justify-center items-center gap-10 bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
        <h3 className="text-2xl font-semibold mt-4">Sign In</h3>

        <form onSubmit={handleSignIn}>
          <div className="flex flex-col items-center gap-4">
            <div className="flex">
              <label
                htmlFor="email"
                className="font-medium text-sm text-gray-900 w-[120px]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                value={formData.email}
                required
                className="w-[200px] p-1 rounded-lg bg-white/50 border border-white/60 outline-none placeholder:text-[12px]"
              />
            </div>

            <div className="flex">
              <label
                htmlFor="password"
                className="font-medium text-sm text-gray-900 w-[120px]"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={formData.password}
                required
                className="w-[200px] p-1 rounded-lg bg-white/50 border border-white/60 outline-none placeholder:text-[12px]"
              />
            </div>

            <button
              type="submit"
              className="w-[300px] py-2 mb-4 mt-2 bg-blue-950 text-white font-semibold rounded-xl shadow-lg backdrop-blur-md cursor-pointer hover:-translate-y-0.5 transition-all duration-150"
            >
              Sign In
            </button>
            <div className="flex gap-6 translate-y-5">
              <span className="text-gray-950 font-medium">
                Do not you already have an account?
              </span>
              <button
                type="button"
                className="outline-none border-none font-medium text-indigo-950 cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
