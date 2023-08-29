import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Context
import { CartProvider } from './context/CartProvider';
import { ProductsProvider } from './context/ProductsProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ProductsProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </ProductsProvider>
    </React.StrictMode>
);
