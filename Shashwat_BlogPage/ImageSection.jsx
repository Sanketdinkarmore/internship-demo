
import React from "react";
import "./ImageSection.css";
import "./global.css";
import heroImage from "/image1_Hero.png";

const ImageSection = () => {
  return (
    <div className="image-container">
      <img
        src={heroImage}
        alt="Hero Section"
        className="hero-image"
      />
    </div>
  );
};

export default ImageSection;
