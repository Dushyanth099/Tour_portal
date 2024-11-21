import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleViewRegisteredUsers = () => {
    navigate("/admin/registered-users");
  };

  const handleViewBookingDetails = () => {
    navigate("/admin/booking-details");
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2>Admin Dashboard</h2>
        <p>Manage users and view booking details.</p>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Registered Users</h5>
              <p className="card-text">View the list of all registered users</p>
              <button
                onClick={handleViewRegisteredUsers}
                className="btn btn-primary"
              >
                View Users
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Booking Details</h5>
              <p className="card-text">Access and manage the booking details</p>
              <button
                onClick={handleViewBookingDetails}
                className="btn btn-primary"
              >
                View Bookings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
