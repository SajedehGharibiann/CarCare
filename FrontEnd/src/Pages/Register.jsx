import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.value]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Enter your firstName" />
        <input type="text" placeholder="Enter your lastName" />
        <input type="email" placeholder="Enter your email" />
        <input type="number" placeholder="Enter your phoneNumber" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
