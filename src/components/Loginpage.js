import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./formStyles.css"; // Add your own styles here

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Find if the entered email and password match any user
    const user = users.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (user) {
      // Set login status to true
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful!");
      navigate("/UserDashboard"); // Redirect to home page after login
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter your email"
          className="form-input"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter your password"
          className="form-input"
        />
        <button type="submit" className="form-button">
          Login
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <p className="form-text">
        Don't have an account?{" "}
        <span className="link" onClick={() => navigate("/register")}>
          Register
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
