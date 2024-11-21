import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark text-white text-center py-4">
      <div className="container">
        <h1 className="mb-3">
          <span className="text-primary">T</span>ravel
        </h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          fugiat, ipsa quos nulla qui alias.
        </p>
        <div className="social-links d-flex justify-content-center mb-3">
          <a href="#" className="text-white mx-3">
            <i className="fa-brands fa-twitter fa-2x"></i>
          </a>
          <a href="#" className="text-white mx-3">
            <i className="fa-brands fa-facebook fa-2x"></i>
          </a>
          <a href="#" className="text-white mx-3">
            <i className="fa-brands fa-instagram fa-2x"></i>
          </a>
          <a href="#" className="text-white mx-3">
            <i className="fa-brands fa-youtube fa-2x"></i>
          </a>
          <a href="#" className="text-white mx-3">
            <i className="fa-brands fa-pinterest-p fa-2x"></i>
          </a>
        </div>
        <div className="credit mb-2">
          <p>
            Designed By{" "}
            <a href="#" className="text-primary">
              Developer
            </a>
          </p>
        </div>
        <div className="copyright">
          <p>&copy; Copyright @Dush</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

