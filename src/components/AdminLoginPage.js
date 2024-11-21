import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  // Hardcoded admin credentials
  const adminUsername = "admin";
  const adminPassword = "admin";

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === adminUsername && formData.password === adminPassword) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("email", "admin@example.com"); // Optional: store email as part of login session
      alert("Admin login successful!");
      navigate("/admin/dashboard"); // Redirect to Admin Dashboard
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="form-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter admin username"
          className="form-input"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter admin password"
          className="form-input"
        />
        <button type="submit" className="form-button">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AdminLoginPage;
