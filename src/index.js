import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './Components/ProductProvider';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Components/CartProvider';
import { SearchProvider } from './Components/Search/SearchProvider';
import LoginVisible from './Profile/LoginVisible';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginVisible>
  <SearchProvider>
  <BrowserRouter>
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
    <ProductProvider>
    <App />
    </ProductProvider>
    </ProductProvider>
    </CartProvider>
  </React.StrictMode>
  </BrowserRouter>
  </SearchProvider>
  </LoginVisible>
);

reportWebVitals();
