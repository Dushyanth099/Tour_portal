import React from 'react'

const File = () => {

  return (
      <div>
        <nav className="navbar navbar-expand-lg" id="navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html" id="logo"
          ><span>T</span>our Website</a
        >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span><i className="fa-solid fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#book">Book</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#packages">Packages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallary">Gallary</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="text" placeholder="Search" />
            <button className="btn btn-primary" type="button">Search</button>
          </form>
        </div>
      </div>
    </nav>
    {/* <!-- Navbar End --> */}

    {/* <!-- Home Section Start --> */}
   
    {/* <!-- Home Section End --> */}

    {/* <!-- Section Book Start --> */}
{/* <!-- Section Book End --> */}

    {/* <!-- Section Packages Start --> */}
    {/* <!-- Section Packages End --> */}

    {/* <!-- Section Services Start --> */}
    
    {/* <!-- Section Services End --> */}

export default File