// BackgroundInteractive.js
import React, { useState } from "react";
import "./Background.css"; // Import the existing CSS file

const BackgroundInteractive = () => {
  const [backgroundColor, setBackgroundColor] = useState("#1a1a1a");

  const handleBackgroundClick = () => {
    // Change the background color on click
    const newColor = getRandomColor();
    setBackgroundColor(newColor);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="background" onClick={handleBackgroundClick}>
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
    </div>
  );
};

export default BackgroundInteractive;
