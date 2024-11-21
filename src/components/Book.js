import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./formStyles.css"; // Add your own styles here

const Book = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: "",
    numberOfPeople: "",
    arrivalDate: "",
    leavingDate: "",
    name: "",
    address: "",
    contact: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // To handle error messages

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (booking)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      setErrorMessage("Please log in to make a booking!"); // Display error if not logged in
      navigate("/login"); // Redirect to login page
      return;
    }

    // Save booking details to localStorage
    const bookingId = `B-${new Date().getTime()}`;
    const bookingDate = new Date().toLocaleDateString();
    const service = "Booking Service"; // Customize as needed

    const bookingDetails = {
      bookingId,
      bookingDate,
      service,
      location: formData.location,
      numberOfPeople: formData.numberOfPeople,
      arrivalDate: formData.arrivalDate,
      leavingDate: formData.leavingDate,
      name: formData.name,
      address: formData.address,
      contact: formData.contact,
    };

    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));

    alert("Booking confirmed!");
    navigate("/"); // Redirect to booking details page
  };

  return (
    <section className="book" id="book">
      <div className="container">
        <div className="main-text">
          <h1>
            <span>B</span>ook
          </h1>
        </div>

        <div className="row">
          <div className="col-md-6 py-3 py-md-0">
            <div className="card">
              <img src="./images/bookimage.jpg" alt="Booking Image" />
            </div>
          </div>

          <div className="col-md-6 py-3 py-md-0">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="Where To"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
              <br />
              <input
                type="number"
                className="form-control"
                placeholder="How Many"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
                required
              />
              <br />
              <input
                type="date"
                className="form-control"
                placeholder="Arrivals"
                name="arrivalDate"
                value={formData.arrivalDate}
                onChange={handleChange}
                required
              />
              <br />
              <input
                type="date"
                className="form-control"
                placeholder="Leaving"
                name="leavingDate"
                value={formData.leavingDate}
                onChange={handleChange}
                required
              />
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="Your Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <br />
              <input
                type="tel"
                className="form-control"
                placeholder="Your Contact Number"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
              <br />
              <input
                type="submit"
                value="Book Now"
                className="submit btn btn-primary"
              />
            </form>

            {errorMessage && (
              <div className="error-message">
                <p>{errorMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
