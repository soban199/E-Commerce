import React, { createContext, useReducer } from 'react';
import productsData from './Products/ProductsData';


// Create Context
export const ProductContext = createContext();

// Reducer for managing state
const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

// Provider Component
export const ProductProvider = ({ children }) => {
  const initialState = {
    products: productsData,
    category: 'All',
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
