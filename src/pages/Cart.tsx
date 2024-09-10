import React,{ useContext, useState, useEffect } from 'react';
import CartProducts from '../components/CartProducts';
import { Link } from 'react-router-dom';
import { MyShopContext } from '../context/MyShopContext';
import { HashLoader } from 'react-spinners';



const Cart = ({ }) => {
  const { cart,  handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart } = useContext<any>(MyShopContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (cart && cart.line_items) {
      setIsLoading(false);
    }
  }, [cart]);

  
  /* console.log(cart);
  if (!cart) {
      return (<div className='flex flex-col items-center justify-center gap-4 h-[90vh] px-4 w-full'>
                                      <HashLoader 
                                        color="#2563EB" 
                                        height={80} 
                                        width={80} 
                                        timeout={3000} // Adjust timeout if needed
                                      />
  
  
                                    </div>)
  }
 */
  return (
    <div>
      {/* <CartItems /> */}
      {isLoading ?  (<div className='flex flex-col items-center justify-center gap-4 h-[90vh] px-4 w-full'>
        <HashLoader 
          color="#2563EB" 
          height={80} 
          width={80} 
          timeout={3000} // Adjust timeout if needed
        />


      </div>) : (<div>
        {!cart.line_items.length ? <p>Your cart is empty, <Link to='/'>start Shopping</Link></p> : <CartProducts cartArr={cart} onChangeUpdateCartQty={handleUpdateCartQty} onChangeRemoveFromCart={handleRemoveFromCart} onChangeEmptyCart={handleEmptyCart} />}
      </div>) }
      
    </div>
  );
};

export default Cart;