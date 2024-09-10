
import { createContext, useContext, useState } from 'react';
import itemsArr from '../utils/Items';

 const getDefaultCart = () => {
   let cart = {};
   for (let i = 0; i < itemsArr.length + 1; i++) {
     cart[i] = 0
   }
   return cart;
 }


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  
  const [cartItems, setCartItems] = useState(getDefaultCart());
  

  const addToCart = (id: number) => {
    setCartItems((prev) => ({...prev, [id]: prev[id] + 1}));
    console.log(cartItems);
    console.log(cartItems.length);
  }

  const removeFromCart = (id: number) => {
    setCartItems((prev) => ({...prev, [id]: prev[id] - 1}));
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = itemsArr.find((product)=> product.id === Number(item));
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount

  }

  const getTotalCartItems = () => {
    let totalItems = 0;
    for(const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  }
  
  const clearCart = () => {
    setCartItems(getDefaultCart());
  }
  const contextValue = {itemsArr, cartItems, addToCart, removeFromCart,getTotalCartAmount, getTotalCartItems, clearCart}
  
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;