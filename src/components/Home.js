import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <div className="home">
      <div className="content text-center py-5">
        <h5 className="mb-3">Plan Your Tour</h5>
        <h1>
          Visit <span className="changecontent">Amazing Places</span>
        </h1>
        <p className="mb-4">Travel Anywhere of your choice</p>
        {/* Use Link for navigation */}
        <Link to="/book" className="btn btn-primary">
          Book Place
        </Link>
      </div>
    </div>
  );
};

export default Home;
