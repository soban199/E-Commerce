import React, { useContext } from "react";
import { CartContext } from "./CartProvider";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaTimes } from "react-icons/fa";
import Search from "./Search/Search";
import Login from "../Profile/Login";
import Logo from "../Header/Logo";
import Navbar from "../Header/Navbar";
import { VisibleContext } from "../Profile/LoginVisible";
import { SearchContext } from "./Search/SearchProvider";


const Header = () => {
  const { cartItems } = useContext(CartContext);
  const { isLoginVisible, setLoginVisible } = useContext(VisibleContext);
  const { searchQuery } = useContext(SearchContext);

  return (
    <header className="bg-primary text-primary-dark border-b sticky top-0 z-50">
      {/* Conditionally render full-width search or regular header */}
      {searchQuery ? (
        <div className="flex items-center justify-center h-16 w-full bg-primary">
          <Search />
        </div>
      ) : (
        <div className="container mx-auto px-4 flex items-center justify-between h-16 relative">
          {/* Navbar */}
          <Navbar />

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 flex items-center h-16 z-10">
            <Logo />
          </div>

          {/* Search Bar and Cart */}
          <div className="flex items-center space-x-4">
            <Search/>
            {/* Profile */}
            <div className="relative">
              <FaUser
                onClick={() => setLoginVisible(true)}
                className="text-sm text-black cursor-pointer hover:text-gray-800"
              />
            </div>
            {/* Cart */}
            <div className="relative">
              <Link to="/cart">
                <FaShoppingCart className="text-sm" />
              </Link>
              {cartItems.length > 0 && (
                <span className="absolute -top-3 -right-3 bg-secondary-dark text-primary rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sliding Login Form */}
      {isLoginVisible && (
        <div className="fixed top-0 right-0 w-full sm:w-80 h-full bg-primary shadow-lg z-50 transition-transform transform translate-x-0">
          <button
            onClick={() => setLoginVisible(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            <FaTimes title="Close"/>
          </button>
          <Login />
        </div>
      )}
    </header>
  );
};

export default Header;
