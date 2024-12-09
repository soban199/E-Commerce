import React from "react";
import { NavLink } from "react-router-dom";

export default function AboutButton() {
  return (
   
    <nav className="flex flex-wrap gap-2 my-4 justify-center md:justify-center bg-primary text-secondary-light">
   
      <div className="flex space-x-4">
      
        <NavLink
          to="/about"
        >
          About Us
        </NavLink>
        <NavLink
          to="/store"
          >
          Stores
        </NavLink>
        <NavLink
          to="/sustainability"
          >
          Sustainability
          
        </NavLink>
        
      </div>
    </nav>
    
  );
}
