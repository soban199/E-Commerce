import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-center">
        {/* Icon */}
        <div className="text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-6-8.485M21 12a9.003 9.003 0 01-3 6.708"
            />
          </svg>
        </div>
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Thank You for Your Order!
        </h2>
        {/* Message */}
        <p className="text-gray-600 mb-6">
          Your order has been placed successfully. We are processing your order
          and will notify you when it’s on the way.
        </p>
        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            to="/"
            className="bg-primary-dark text-other py-2 px-4 rounded hover:bg-primary transition duration-300"
          >
            Continue Shopping
          </Link>
          <Link
            to="/checkout"
            className="bg-secondary-dark text-other py-2 px-4 rounded hover:bg-secondary transition duration-300"
          >
            View My Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
