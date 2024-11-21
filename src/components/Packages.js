import React from "react";
import "../index.css";

const Packages = () => {
  return (
    <section className="packages" id="packages">
      <div className="container">
        <div className="main-txt">
          <h1>
            <span>P</span>ackages
          </h1>
        </div>

        <div className="row mt-4">
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="./images/uk.png" alt="United Kingdom" />
              <div className="card-body">
                <h3>United Kingdom</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  doloribus!
                </p>
                <div className="star">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <h6>
                  Price: <strong>200000</strong>
                </h6>
                <a href="#book">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="./images/france.png" alt="France" />
              <div className="card-body">
                <h3>France</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  doloribus!
                </p>
                <div className="star">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <h6>
                  Price: <strong>200000</strong>
                </h6>
                <a href="#book">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="./images/pakistan.png" alt="Pakistan" />
              <div className="card-body">
                <h3>Pakistan</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  doloribus!
                </p>
                <div className="star">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <h6>
                  Price: <strong>30000</strong>
                </h6>
                <a href="#book">Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="./images/italy.png" alt="Italy" />
              <div className="card-body">
                <h3>Italy</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  doloribus!
                </p>
                <div className="star">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <h6>
                  Price: <strong>80000</strong>
                </h6>
                <a href="#book">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="./images/india.png" alt="India" />
              <div className="card-body">
                <h3>India</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  doloribus!
                </p>
                <div className="star">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <h6>
                  Price: <strong>100000</strong>
                </h6>
                <a href="#book">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="./images/us.png" alt="United States" />
              <div className="card-body">
                <h3>United States</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  doloribus!
                </p>
                <div className="star">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <h6>
                  Price: <strong>50000</strong>
                </h6>
                <a href="#book">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
