import React, { createContext, useReducer } from 'react';
import proData from './ProData';



// Create Context
export const ProContext = createContext();

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
export const ProProvider = ({ children }) => {
  const initialState = {
    products: proData,
    category: 'All',
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProContext.Provider>
  );
};
