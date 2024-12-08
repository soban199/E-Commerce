import React, { createContext, useReducer, useEffect } from 'react';

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Add item if not present, otherwise increase quantity
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload);

    case 'INCREASE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case 'DECREASE_QUANTITY':
      return state
        .map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove items with zero quantity

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  // Load initial cart state from local storage
  const initialCart = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [cartItems, dispatch] = useReducer(cartReducer, initialCart);

  // Save cart state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
