import { createContext, useContext, useState, useEffect } from 'react';
import { commerce } from '../lib/commerce';


export const MyShopContext = createContext({
  itemsArray: [], // Default empty array
cart: { line_items: [], total_items: 0 },
handleAddToCart: () => {},
handleUpdateCartQty: () => {},
handleRemoveFromCart: () => {},
handleEmptyCart: () => {}, 
                                           });

export default function MyShopContextProvider(props) {
  const [itemsArray, setItemsArray] = useState<any>([]);
  const [cart, setCart] = useState<any>({});
  const [order, setOrder] = useState<any>({});
  const [errorMessage, setErrorMessage] = useState<any>('');

  const getItems = async () => {
    try {
      const { data } = await commerce.products.list();
      setItemsArray(data);
    } catch (error) {
      console.log(error);
    }

  }

  const refreshCart = async() => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder); 
      setOrder(incomingOrder);
      refreshCart();
    } catch(error) {
      setErrorMessage(error.data.error.message);
    }
  }



  const handleAddToCart = async (productId, quantity) => {
    try {
      const item = await commerce.cart.add(productId, quantity);
      setCart(item);
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity });

    setCart(item);
  }

  const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId);

    setCart(item);
  }

  const handleEmptyCart = async() => {
    const item = await commerce.cart.empty();

    setCart(item);
  }

  useEffect(() => {
    const getCart = async () => {
      try {
        setCart(await commerce.cart.retrieve());
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
    getItems();
  }, [])

  console.log(cart);


  const contextValue = { itemsArray, handleAddToCart, handleUpdateCartQty, handleEmptyCart, handleRemoveFromCart, cart, order, handleCaptureCheckout, errorMessage }
  return (
    <MyShopContext.Provider value={contextValue}>
      {props.children}
    </MyShopContext.Provider>
  )
}