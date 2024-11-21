import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/RegisterPage";
import Book from "./components/Book";
import Packages from "./components/Packages";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import LoginPage from "./components/Loginpage";
import AdminLoginPage from "./components/AdminLoginPage";
import AdminDashboard from "./components/AdminDashboard";
import RegisteredUsers from "./components/RegisteredUsers";
import BookingDetails from "./components/BookingDetails";
import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/registered-users" element={<RegisteredUsers />} />
        <Route path="/admin/booking-details" element={<BookingDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
