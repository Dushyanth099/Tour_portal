import React from "react";
import "../index.css";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="main-txt">
          <h1>
            About <span>Us</span>
          </h1>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 py-3 py-md-0">
            <div className="card">
              <img
                src="./images/about-img.png"
                alt="About Us"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-md-6 py-3 py-md-0">
            <h2>How Travel Agency Works</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis dolorem, numquam earum at nam beatae voluptate natus
              consectetur facere, saepe cupiditate ut exercitationem deserunt,
              facilis quam perspiciatis autem iure illo harum minima. Quas,
              vitae aperiam laudantium alias asperiores nulla rerum, nihil
              eveniet perferendis sint illum accusamus officiis aliquam nam.
            </p>
            <button id="about-btn" className="btn btn-primary">
              Read More...
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
