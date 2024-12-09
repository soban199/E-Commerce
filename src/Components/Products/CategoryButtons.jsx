import React, { useContext, useState } from "react";
import { ProductContext } from "../ProductProvider";

const CategoryButtons = () => {
  const { products, dispatch } = useContext(ProductContext);
  const categories = ["All", "Shirts", "Pants & Jeans", "T-shirts", "Sale", "Winter"];
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [boxVisible, setBoxVisible] = useState(false);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
    setBoxVisible(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!document.querySelector(".category-box:hover")) {
        setBoxVisible(false);
      }
    }, 100);
  };

  const handleCategoryClick = (category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
    setHoveredCategory(null);
  };

  // const handleProductClick = (productId) => {
  //   dispatch({ type: "FILTER_PRODUCT", payload: productId });
  //   setHoveredCategory(null);
  // };

  const filteredProducts = hoveredCategory
    ? products.filter(
        (product) =>
          hoveredCategory === "All" || product.category.toLowerCase() === hoveredCategory.toLowerCase()
      )
    : [];

  return (
    <div className="relative">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
            className="px-2 py-2 rounded text-sm md:text-base bg-primary transition"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dialog Box */}
      {boxVisible && hoveredCategory && (
        <div
          className="category-box absolute left-0 w-screen bg-primary shadow-md z-10 p-4 grid grid-cols-2 gap-4"
          onMouseEnter={() => setHoveredCategory(hoveredCategory)}
          onMouseLeave={handleMouseLeave}
          style={{ top: "100%" }} // Ensures box is directly below the buttons
        >
          {/* Left Side: Product Titles */}
          <div className="flex flex-col gap-2">
            {filteredProducts.length > 0 ? (
              filteredProducts.slice(0, 10).map((product) => (
                <button
                  key={product.id}
                  // onClick={() => handleProductClick(product.id)}
                  className="text-sm text-primary-dark truncate mr-8"
                >
                  {product.title}
                </button>
              ))
            ) : (
              <p className="text-sm text-secondary-light">No products available</p>
            )}
          </div>

          {/* Right Side: Images */}
          <div className="flex justify-center items-center gap-4">
            {filteredProducts[0] ? (
              <img
                src={filteredProducts[0].image}
                alt={filteredProducts[0].title}
                className="w-40 h-52 object-cover "
              />
            ) : (
              <p className="text-sm text-primary-dark">No image available</p>
            )}
            {filteredProducts[1] ? (
              <img
                src={filteredProducts[1].image}
                alt={filteredProducts[1].title}
                className="w-40 h-52 object-cover"
              />
            ) : (
              <p className="text-sm text-primary-dark">No image available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryButtons;
