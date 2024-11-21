import React from "react";
import "../index.css";

const Gallery = () => {
  return (
    <section className="gallary" id="gallary">
      <div className="container">
        <div className="main-txt">
          <h1>
            <span>G</span>allary
          </h1>
        </div>

        <div className="row mt-4">
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img
                src="./images/g1.png"
                alt="Gallery Image 1"
                height="230px"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img
                src="./images/g2.png"
                alt="Gallery Image 2"
                height="230px"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img
                src="./images/g3.png"
                alt="Gallery Image 3"
                height="230px"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img
                src="./images/g4.png"
                alt="Gallery Image 4"
                height="230px"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img
                src="./images/g5.png"
                alt="Gallery Image 5"
                height="230px"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img
                src="./images/g6.png"
                alt="Gallery Image 6"
                height="230px"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
