import React from "react";
// import "../Styles/AboutContainer.css";

function AboutContainer() {
  return (
    <div className="container mt-4" id="about">
      {/* Main content container */}
      <h1 className="text-center">
        Welcome <span style={{ color: "orange" }}>Comfort Path</span>
      </h1>
      <p>
        Explore our wide range of products and enjoy a comfortable shopping
        experience.
      </p>
    </div>
  );
}

export default AboutContainer;
