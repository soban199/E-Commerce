import React, { useState } from "react";
import storeData from "./storeData";
import { FaTimes } from "react-icons/fa";

const Store = () => {
  const [selectedStore, setSelectedStore] = useState(null);

  const handleImageClick = (store) => {
    setSelectedStore(store);
  };

  const handleCloseDetail = () => {
    setSelectedStore(null);
  };

  return (
    <div className="p-6 bg-primary min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Our Stores</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {storeData.map((store) => (
          <div
            key={store.id}
            className="overflow-hidden bg-primary"
          >
            <img
              src={store.image}
              alt={store.title}
              className="w-full h-60 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
              onClick={() => handleImageClick(store)}
            />
            <div className="p-4">
            <p className="text-secondary-light">{store.location}</p>
              <h2 className="text-lg font-semibold">{store.title}</h2>
             </div>
          </div>
        ))}
      </div>

      {/* Detail Section */}
      {selectedStore && (
        <div className="mt-6 p-6 bg-primary border-t border-primary-dark flex relative">
          {/* Close Icon */}
          <button
            className="absolute top-2 right-2 text-secondary-light hover:text-primary-dark"
            onClick={handleCloseDetail}
          >
            <FaTimes/>
          </button>
          {/* Store Image */}
          <img
            src={selectedStore.image}
            alt={selectedStore.title}
            className="w-1/2 h-72"
          />
          {/* Store Details */}
          <div className="ml-6 mt-12">
            <h3 className="text-2xl font-bold">{selectedStore.title}</h3>
            <p className="text-secondary-light mt-2">
              <strong>Location:</strong> {selectedStore.location}
            </p>
            <p className="text-secondary-light mt-2">
              <strong>Address:</strong> {selectedStore.address}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Store;
