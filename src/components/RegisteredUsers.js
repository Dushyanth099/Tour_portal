import React, { useState, useEffect } from "react";

const RegisteredUsers = () => {
  const [users, setUsers] = useState([]);

  // Fetch user details from localStorage when the component mounts
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Registered Users</h3>

      {users.length === 0 ? (
        <div className="alert alert-warning text-center" role="alert">
          No registered users found.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Address</th>
                <th>District</th>
                <th>Pincode</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.contactNumber}</td>
                  <td>{user.address}</td>
                  <td>{user.district}</td>
                  <td>{user.pincode}</td>
                  <td>{user.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RegisteredUsers;
