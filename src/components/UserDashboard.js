import React, { useEffect, useState } from "react";
import Home from "./Home";

const UserDashboard = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");
    setUserEmail(email || "Guest");
  }, []);

  return (
    <div>
      {/* Home Component */}
      <Home />

      {/* Dashboard Content */}
      <div className="dashboard text-center mt-4">
        <h2>Welcome to Your Dashboard, {userEmail}!</h2>
        <p>You are logged in. Explore your dashboard and enjoy our services!</p>
      </div>
    </div>
  );
};

export default UserDashboard;
