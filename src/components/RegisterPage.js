import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./formStyles.css"; // Add your own styles here

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    contactNumber: "",
    address: "",
    district: "",
    pincode: "",
    state: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.contactNumber) newErrors.contactNumber = "Contact number is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.district) newErrors.district = "District is required";
    if (!formData.pincode) newErrors.pincode = "Pincode is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Check if the email is already registered
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const emailExists = existingUsers.some(user => user.email === formData.email);
      
      if (emailExists) {
        alert("Email already exists!");
      } else {
        // Add the new user to the users array
        existingUsers.push({
          username: formData.username,
          email: formData.email,
          contactNumber: formData.contactNumber,
          address: formData.address,
          district: formData.district,
          pincode: formData.pincode,
          state: formData.state,
          password: formData.password,
        });

        // Save updated users list in localStorage
        localStorage.setItem("users", JSON.stringify(existingUsers));

        setSuccessMessage("Registration successful!");
        setTimeout(() => {
          navigate("/"); // Redirect to login page after 2 seconds
        }, 2000);
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="Username"
          className="form-input"
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          className="form-input"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="text"
          name="contactNumber"
          onChange={handleChange}
          placeholder="Contact Number"
          className="form-input"
        />
        {errors.contactNumber && <p className="error">{errors.contactNumber}</p>}

        <input
          type="text"
          name="address"
          onChange={handleChange}
          placeholder="Address"
          className="form-input"
        />
        {errors.address && <p className="error">{errors.address}</p>}

        <input
          type="text"
          name="district"
          onChange={handleChange}
          placeholder="District"
          className="form-input"
        />
        {errors.district && <p className="error">{errors.district}</p>}

        <input
          type="text"
          name="pincode"
          onChange={handleChange}
          placeholder="Pincode"
          className="form-input"
        />
        {errors.pincode && <p className="error">{errors.pincode}</p>}

        <input
          type="text"
          name="state"
          onChange={handleChange}
          placeholder="State"
          className="form-input"
        />
        {errors.state && <p className="error">{errors.state}</p>}

        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          className="form-input"
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          placeholder="Confirm Password"
          className="form-input"
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <button type="submit" className="form-button">Register</button>
      </form>
      
      {successMessage && <p className="success">{successMessage}</p>}

      <p className="form-text">
        Already have an account?{" "}
        <span className="link" onClick={() => navigate("/login")}>Login</span>
      </p>
    </div>
  );
};

export default RegisterPage;
