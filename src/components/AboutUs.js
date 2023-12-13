import React from "react";
import "./AboutUs.css"; // Ensure this CSS file is created and linked

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="card">
        <h2>Introduction / Background</h2>
        <p>{/* Content here */}</p>
      </div>
      <div className="card">
        <h2>Problem at hand</h2>
        <p>{/* Content here */}</p>
      </div>
      <div className="card">
        <h2>Our goal / Mission</h2>
        <p>{/* Content here */}</p>
      </div>
    </div>
  );
}

export default AboutUs;
