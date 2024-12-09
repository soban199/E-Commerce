import React, { useContext, useState } from 'react';
import { CartContext } from '../CartProvider';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    paymentMethod: 'COD',
  });

  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (
      !customerDetails.name ||
      !customerDetails.email ||
      !customerDetails.address ||
      !customerDetails.phone
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
      navigate('/order');
    } else {
      alert('You need to log in to place an order.');
      navigate('/login');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold">No Items to Checkout</h2>
        <p className="text-secondary-light mt-2">Please add items to your cart.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-6 border">
          <form onSubmit={handlePlaceOrder} className="space-y-4">
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={customerDetails.name}
                onChange={handleInputChange}
                className="w-full p-2 border"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={customerDetails.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="address">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={customerDetails.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your delivery address"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={customerDetails.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Payment Method</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="COD"
                    checked={customerDetails.paymentMethod === 'COD'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Cash on Delivery
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Payeer"
                    checked={customerDetails.paymentMethod === 'Payeer'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Payoneer
                </label>
              </div>
            </div>
            <button
              title="Place Order"
              type="submit"
              className="w-full py-2 bg-primary-dark text-primary font-semibold"
            >
              Place Order
            </button>
          </form>
        </div>
  {/* Right Side */}
        <div className="flex-1 p-6 border">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:items-start justify-between"
              >
                <div className="sm:flex sm:items-center sm:gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 sm:w-36 sm:h-36"
                  />
                  <div>
                    <h4 className="text-secondary-light font-semibold">{item.title}</h4>
                    <p className="text-secondary-light mt-1">
                      {item.quantity} x ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="text-primary-dark font-semibold md:mt-12 sm:mt-0">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>

          <div className="flex items-center mt-4">
            <input
              type="text"
              id="discountCode"
              className="flex-1 border-2 shadow-sm focus:ring-secondary-light focus:border-secondary-light p-2 rounded-l"
              placeholder="Discount Code"
            />
            <button className="bg-primary-light text-secondary-light p-2 rounded-r">
              Apply
            </button>
          </div>

          <div className="mt-4">
            <div className="flex justify-between text-xs sm:text-sm">
              <span>Total Items:</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="flex justify-between items-center mt-4 text-lg font-semibold">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
