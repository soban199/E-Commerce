import React, { useEffect, useState } from "react";

const Slideshow = () => {
  // List of images
  const images = [
    "https://focusclothing.pk/cdn/shop/files/3_cf77495d-c149-4d6f-891d-1c9bb2e036cf.png?v=1731928010&width=1370",
    "https://focusclothing.pk/cdn/shop/files/1780_x_700.jpg?v=1706609689&width=1370",
  
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Change image every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-screen h-96 overflow-hidden bg-gray-100">
    {images.map((image, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          index === currentImageIndex ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={image}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </section>
  
  );
};

export default Slideshow;
