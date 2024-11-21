import React from "react";
import "../index.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="main-txt">
          <h1>
            <span>S</span>ervices
          </h1>
        </div>

        <div className="row mt-4">
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className="fas fa-hotel fa-3x"></i>
              <div className="card-body">
                <h3>Affordable Hotel</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  eaque.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className="fas fa-utensils fa-3x"></i>
              <div className="card-body">
                <h3>Food & Drinks</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  eaque.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className="fas fa-bullhorn fa-3x"></i>
              <div className="card-body">
                <h3>Safety Guide</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  eaque.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className="fas fa-globe-asia fa-3x"></i>
              <div className="card-body">
                <h3>Around The World</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  eaque.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className="fas fa-plane fa-3x"></i>
              <div className="card-body">
                <h3>Fastest Travel</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  eaque.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className="fas fa-hiking fa-3x"></i>
              <div className="card-body">
                <h3>Adventures</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  eaque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
