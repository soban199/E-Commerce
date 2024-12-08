import React, { useState, useEffect } from "react";

const TopBar = () => {
  // Define the messages to be displayed
  const messages = [
    "End of Season Sale! Up to 50% Off!",
    "Free Delivery for Orders Above $50!",
  ];

  // Define the colors to cycle through
  const colors = [
    'bg-cf-first',
    'bg-cf-second'
    // "bg-gradient-to-r from-primary via-secondary to-accent",
    // "bg-gradient-to-r from-accent-dark via-primary-dark to-secondary-dark",
  
  ];

  // State to track the current message and color index
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    // Change message and color every 3 seconds
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000); // 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  });

  return (
    <div
      className={`w-full ${colors[currentColorIndex]} text-primary text-center py-0 font-sm transition-colors duration-500`}
    >
      <p>{messages[currentMessageIndex]}</p>
    </div>
  );
};

export default TopBar;
