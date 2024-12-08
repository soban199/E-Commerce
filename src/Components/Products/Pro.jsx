import React, { useContext, useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductProvider";
import { SearchContext } from "../Search/SearchProvider";

// Forward ref to allow the parent component to scroll to this component
const Products = forwardRef((props, ref) => {
  const { products, category } = useContext(ProductContext);
  const { searchQuery } = useContext(SearchContext);
  const [visible, setVisible] = useState(12);

  const filteredProducts = products.filter((product) => {
    const trimmedQuery = searchQuery.trim().toLowerCase();
    const matchesCategory =
      category === "All" || product.category.toLowerCase() === category.toLowerCase();
    const matchesSearch =
      !trimmedQuery || // If searchQuery is empty, match all
      product.title.toLowerCase().includes(trimmedQuery) ||
      product.category.toLowerCase().includes(trimmedQuery);

    return matchesCategory && matchesSearch;
  });

  // Trigger the scroll to this section when searchQuery changes
  useEffect(() => {
    if (searchQuery.trim() && props.onSearch) {
      props.onSearch();
    }
  }, [searchQuery, props]);

  return (
    <div ref={ref} className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.slice(0, visible).map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-md bg-other hover:shadow-lg transition duration-300"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <br />
            </Link>
            <h3 className="text-lg font-semibold text-dark">{product.title}</h3>
            <p className="text-sm text-primary-dark mb-2">Category: {product.category}</p>
            <p className="text-md text-secondary-light font-bold mb-4">${product.price}</p>
          </div>
        ))}
      </div>
      {visible < filteredProducts.length && (
        <div className="flex justify-center mt-6">
          <button
            title="Show More"
            onClick={() => setVisible((prev) => prev + 8)}
            className="bg-primary-dark text-primary py-3 px-20"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
});

export default Products;
