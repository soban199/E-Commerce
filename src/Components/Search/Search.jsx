import React, { useContext } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { SearchContext } from "./SearchProvider";

const Search = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCloseSearch = () => {
    setSearchQuery(""); // Clear search and close
  };

  return (
    <div className="w-full sm:w-auto relative flex items-center justify-between">
      {searchQuery ? (
        <div className="relative flex items-center w-full max-w-md sm:w-96">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            className="w-full px-4 py-2 text-sm placeholder-secondary-light border focus:ring-2 focus:ring-secondary-light focus:outline-none"
            placeholder="Search products..."
          />
          <FaSearch className="absolute right-4 text-gray-500" />
        </div>
      ) : (
        <button
          onClick={() => setSearchQuery(" ")} // Activate search view
          className="px-3 py-2 text-secondary-light focus:outline-none"
        >
          <FaSearch />
        </button>
      )}
      {searchQuery && (
        <button
          onClick={handleCloseSearch}
          className="ml-2 text-secondary-light focus:outline-none transition-transform duration-300 hover:rotate-90"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default Search;
