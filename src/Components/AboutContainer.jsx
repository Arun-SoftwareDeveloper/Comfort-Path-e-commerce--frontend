import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import "../Styles/AboutContainer.css";

function AboutContainer() {
  const navigateLogin = () => {
    toast.success("User Logged Out", {
      position: "top-right",
      style: {
        background: "#28a745", // Background color
        color: "#fff", // Text color
        borderRadius: "8px", // Border radius
        border: "1px solid #218838", // Border color
      },
    });
  };
  return (
    <div className="container mt-4" id="about">
      {/* Main content container */}
      <Link to="/">
        <span
          className="text-right"
          onClick={navigateLogin}
          style={{ textAlign: "right" }}
        >
          <i className="fa-solid fa-power-off"></i> Logout
        </span>
      </Link>
      <h1 className="text-center">
        Welcome <span style={{ color: "orange" }}>Comfort Path</span>
      </h1>
      <p className="text-center">
        Explore our wide range of products and enjoy a comfortable shopping
        experience.
      </p>
    </div>
  );
}

export default AboutContainer;
