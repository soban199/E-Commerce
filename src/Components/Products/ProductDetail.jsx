import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../ProductProvider';
import { CartContext } from '../CartProvider';
import { FaExchangeAlt, FaTruck } from 'react-icons/fa';

const ProductDetail = () => {
  const { id } = useParams(); // Get product id from URL params
  const { products } = useContext(ProductContext);
  const { dispatch } = useContext(CartContext);

  const [selectedSize, setSelectedSize] = useState(null); // Track selected size

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart");
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: { ...product, size: selectedSize } });
  };

  const product = products.find((p) => p.id === parseInt(id)); // Find the product by id

  if (!product) return <p>Product not found</p>; // Show message if product is not found

  const sizes = ['S', 'M', 'L', 'XL']; // Define size options

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row items-start">
      {/* Left Side: Product Images */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
        {[...Array(4)].map((_, index) => (
          <img
            key={index}
            src={product.image}
            alt={`${product.title} view ${index + 1}`}
            className="w-full object-cover shadow-md"
          />
        ))}
      </div>

      {/* Right Side: Product Details */}
      <div className="w-full md:w-1/2 p-12">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-xl text-gray-600 mb-4">
          Price: <span className="font-semibold">${product.price}</span>
        </p>
        <p className="text-primary-dark mb-6">{product.description}</p>
        <p className="text-primary-dark mb-4">
          Category: <span className="font-medium">{product.category}</span>
        </p>

        {/* Size Selector */}
        <div className="mb-6">
          <p className="font-semibold text-lg mb-2">Select Size</p>
          <div className="flex flex-wrap gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-2 px-4 border transition ${
                  selectedSize === size
                    ? 'bg-primary-light text-primary-dark border-primary-dark'
                    : 'bg-primary-light text-primary-dark hover:bg-primary-light hover:text-primary-dark hover:border-primary-dark'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
  onClick={handleAddToCart}
  className="w-full md:w-1/2 py-3 px-4 md:px-16 bg-primary-dark text-primary font-semibold text-sm md:text-base hover:bg-primary hover:text-primary-dark border-2 transition"
>
  Add to Cart
</button>

        <div className="flex flex-col items-start mt-4">
        <div className="flex items-center space-x-3">
        <FaTruck className="text-primary-dark text-2xl" />
        <h6 className="text-lg text-primary-dark">Free Shipping</h6>
        </div>
        <p className="text-sm text-primary-dark mt-1">
        Free Shipping on Orders Above PKR 5,000/-
       </p>
      </div>

      <br />
      <div className="flex flex-col items-start mt-4">
        <div className="flex items-center space-x-3">
        <FaExchangeAlt  className="text-primary-dark text-2xl" />
        <h6 className="text-lg text-primary-dark">Return & Exchange</h6>
        </div>
        <p className="text-sm text-primary-dark mt-1">
        Easy 7 days hassle free return <Link to='/return' className='text-underline'><u>Returns Details</u></Link>
       </p>
      </div>

        
      </div>
    </div>
  );
};

export default ProductDetail;
