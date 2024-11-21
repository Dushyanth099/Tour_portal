import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Function to sync state with localStorage changes
  const syncLoginState = () => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    const userEmail = localStorage.getItem("email");

    setIsLoggedIn(userLoggedIn === "true");
    setIsAdmin(userEmail === "admin@example.com");
  };

  useEffect(() => {
    // Initial check on component mount
    syncLoginState();

    // Add event listener for localStorage changes
    window.addEventListener("storage", syncLoginState);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("storage", syncLoginState);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Tour Website
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span>
            <i className="fa-solid fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book">
                Book
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/packages">
                Packages
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
          </ul>

          {/* Conditional Rendering for Register/Login or Logout */}
          {!isLoggedIn ? (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/login">
                  Admin Login
                </Link>
              </li>{" "}
              {/* Admin Login link */}
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {isAdmin && (
                  <Link className="nav-link" to="/admin/dashboard">
                    Admin Dashboard
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <button className="btn btn-secondary" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
