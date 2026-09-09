import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showToast } from "../../Utils/toast";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        showToast("Registration successful!", "success");
        navigate("/signin");
      } else {
        showToast(data.message || "Registration failed!", "error");
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

      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-[10px] flex flex-col justify-center items-center gap-10 bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
        <h3 className="text-2xl font-semibold mt-4">Register</h3>

        <form onSubmit={handleRegister}>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <label
                htmlFor="firstName"
                className="font-medium text-sm text-gray-900 w-[120px]"
              >
                First name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your firstName"
                onChange={handleChange}
                value={formData.firstName}
                required
                className="w-[150px] p-1 rounded-lg bg-white/50 border border-white/60 outline-none placeholder:text-[12px]"
              />
            </div>

            <div className="flex gap-4">
              <label
                htmlFor="lastName"
                className="font-medium text-sm text-gray-900 w-[120px]"
              >
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your lastName"
                onChange={handleChange}
                value={formData.lastName}
                required
                className="w-[150px] p-1 rounded-lg bg-white/50 border border-white/60 outline-none placeholder:text-[14px]"
              />
            </div>

            <div className="flex gap-4">
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
                className="w-[150px] p-1 rounded-lg bg-white/50 border border-white/60 outline-none placeholder:text-[12px]"
              />
            </div>

            <div className="flex gap-4">
              <label
                htmlFor="phoneNumber"
                className="font-medium text-sm text-gray-900 w-[120px]"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone Number"
                onChange={handleChange}
                value={formData.phoneNumber}
                required
                className="w-[150px] p-1 rounded-lg bg-white/50 border border-white/60 outline-none placeholder:text-[12px]"
              />
            </div>

            <div className="flex gap-4">
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
                className="w-[150px] p-1 rounded-lg bg-white/50 border border-white/60 outline-none placeholder:text-[12px]"
              />
            </div>

            <button
              type="submit"
              className="w-[300px] py-2 mb-4 mt-2 bg-blue-950 text-white font-semibold rounded-xl shadow-lg backdrop-blur-md cursor-pointer hover:-translate-y-0.5 transition-all duration-150"
            >
              Register
            </button>
            <div className="flex gap-6">
              <span className="text-gray-950 font-medium">
                Do you already have an account?
              </span>
              <button
                type="button"
                className="outline-none border-none font-medium text-indigo-950 cursor-pointer"
                onClick={()=>navigate("/signin")}
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
