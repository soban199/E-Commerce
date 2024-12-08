import React, { useContext } from "react";
import { CartContext } from "../CartProvider";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, dispatch } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: productId });
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: productId });
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold">Your Cart is Empty</h2>
        <p className="text-gray-600 mt-2">Add some products to your cart.</p>
      </div>
    );
  }

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Cart Items Section */}
      <div className="col-span-2">
        <div className="overflow-x-auto w-full">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary-light text-primary-dark uppercase text-xs sm:text-sm">
                <th className="p-2 sm:p-4">Product</th>
                <th className="p-2 sm:p-4">Price</th>
                <th className="p-2 sm:p-4">Quantity</th>
                <th className="p-2 sm:p-4">Total</th>
                <th className="p-2 sm:p-4">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2 sm:p-4 flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover"
                    />
                    <span className="text-xs sm:text-sm">{item.title}</span>
                  </td>
                  <td className="p-2 sm:p-4 text-xs sm:text-sm">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="p-2 sm:p-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleDecreaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-300 rounded text-xs"
                      >
                        -
                      </button>
                      <span className="text-xs sm:text-sm">{item.quantity}</span>
                      <button
                        onClick={() => handleIncreaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-300 rounded text-xs"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-2 sm:p-4 text-xs sm:text-sm">
                  ${((item.price * item.quantity).toFixed(2)).toLocaleString()}
                   </td>
                  <td className="p-2 sm:p-4">
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-primary-dark hover:text-secondary-dark"
                    >
                      <FaTimes />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="bg-primary p-4 sm:p-6 rounded shadow-md">
        <h3 className="text-sm sm:text-lg font-bold border-b pb-2 sm:pb-3 mb-2 sm:mb-3">
          Order Summary
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between text-xs sm:text-sm">
            <span>Total Items:</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="flex justify-between text-xs sm:text-sm">
            <span>Total Price:</span>
            <span className="font-bold">
              $
              {totalPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
        <button
          title="Checkout"
          className="mt-4 sm:mt-6 w-full bg-secondary-light hover:bg-primary hover:text-primary-dark border-2 text-white py-2 text-xs sm:text-sm"
        >
          <Link to="/checkout">PROCEED TO CHECKOUT</Link>
        </button>

        <button
          title="Go Back"
          className="mt-4 sm:mt-6 w-full bg-primary-dark hover:bg-primary hover:text-primary-dark border-2 text-white py-2 text-xs sm:text-sm"
        >
          <Link to="/">GO BACK TO PREVIOUS PAGE</Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;
