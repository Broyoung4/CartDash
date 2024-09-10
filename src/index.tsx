import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext'
import MyShopContextProvider from './context/MyShopContext'

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

root.render(
  <MyShopContextProvider>
    <BrowserRouter>
      <StrictMode>
          <App />
      </StrictMode>
    </BrowserRouter>
  </MyShopContextProvider>
  
);
