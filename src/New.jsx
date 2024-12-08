import React, { useState, useContext } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { SearchContext } from "./SearchProvider";


export const Search = () => {
  const { setSearchQuery } = useContext(SearchContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => setIsSearchOpen(true);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative">
      {isSearchOpen ? (
        <div className="relative">
        <input
          type="text"
          onChange={handleInputChange}
          className="px-4 py-2 w-96 rounded-md border focus:outline-none focus:ring focus:ring-sky-300"
          placeholder="Search products..."
          
        />
         <button
            onClick={()=>setIsSearchOpen(false)}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <FaTimes className="text-xm" />
          </button>
        </div>
      ) : (
        <button onClick={handleSearchToggle} className="text-black">
          <FaSearch className="text-xm" title="Search" />
        </button>
      )}
    </div>
  );
};