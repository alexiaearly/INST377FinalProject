import React from "react";
import "./Help.css"; // Ensure you create and link this CSS file

function Help() {
  return (
    <div className="help-page">
      <h1>Help Page</h1>
      <div className="card">
        <h2>How to use:</h2>
        <p>{/* Content here */}</p>
      </div>
      <div className="card">
        <h2>FAQs:</h2>
        <p>{/* Content here */}</p>
      </div>
      <div className="card">
        <h2>Contact Us:</h2>
        <p>{/* Content here */}</p>
      </div>
    </div>
  );
}

export default Help;
