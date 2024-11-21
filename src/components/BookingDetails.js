import React, { useEffect, useState } from "react";

const BookingDetails = () => {
  const [booking, setBooking] = useState(null);

  // Fetch booking details from localStorage when the component mounts
  useEffect(() => {
    const storedBookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));
    setBooking(storedBookingDetails);
  }, []);

  if (!booking) {
    return <div>Booking Details Not Found</div>; // Show loading message until data is fetched
  }

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Booking Details</h3>

      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Booking ID</th>
            <th>Location</th>
            <th>Number of People</th>
            <th>Arrival Date</th>
            <th>Leaving Date</th>
            <th>Your Name</th>
            <th>Your Address</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{booking.bookingId}</td>
            <td>{booking.location}</td>
            <td>{booking.numberOfPeople}</td>
            <td>{booking.arrivalDate}</td>
            <td>{booking.leavingDate}</td>
            <td>{booking.name}</td>
            <td>{booking.address}</td>
            <td>{booking.contact}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookingDetails;
