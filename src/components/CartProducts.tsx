import React from 'react';
import { Link } from 'react-router-dom';
import { MyShopContext } from '../context/MyShopContext';
import { HiBars3, HiXMark } from "react-icons/hi2";



const CartProducts: React.FC = ({cartArr, onChangeUpdateCartQty, onChangeRemoveFromCart, onChangeEmptyCart}) => {

  return (
    <>
      <div className='my-[100px] mx-[170px]'>
        <div className='grid grid-cols-6 items-center gap-12 py-4   text-neutral-800 dark:text-neutral-200  text-xl font-semibold'>
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className='h-[3px]  bg-neutral-200 dark:bg-neutral-800'/>
        {cartArr.line_items.map((cart)=> {
        
          return (

               <div key={cart.product_name}>
                 <div className='grid grid-cols-6 items-center gap-12 py-4 text-neutral-500 dark:text-neutral-100 text-xl font-semibold text-xl font-semibold '>
                   <img className='h-[62px]' src={cart.image.url} alt={cart.product_name} />
                   <p>{cart.product_name}</p>
                    <p>{cart.price.raw}</p>
                   <div className='flex justify-center gap-4'>
                     <button className='outline-0 ' onClick={()=> onChangeUpdateCartQty(cart.id, cart.quantity - 1)}>-</button>
                     <span className='w-[40px] h-[50px] flex justify-center items-center border border-neutral-300 dark:border-neutral-800 bg-white'>{cart.quantity}</span>
                      <button onClick={()=> onChangeUpdateCartQty(cart.id, cart.quantity + 1)}>+</button>
                   </div>

                   <p>${cart.line_total.raw} </p>
                   <HiXMark className='w-[15px] mx-[40px] cursor-pointer text-black' size={45} onClick={()=> onChangeRemoveFromCart(cart.id)} />
                 </div>
                 <hr  className='h-[3px]  bg-neutral-200 dark:bg-neutral-800' />
               </div>
          ) 
        
        })}
        <div className='flex my-[100px]'>
          <div className='flex-1 flex flex-col mr-[200px] gap-4'>
            <h1>Cart Totals</h1>
            <div>
              <div className='flex justify-between py-[15px]'>
                <p>Subtotal</p>
                <p>${cartArr.subtotal.raw}</p>
              </div>
              <hr className='h-[3px]  bg-neutral-200 dark:bg-neutral-800'/>
              <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p> Free</p>
              </div>
              <hr className='h-[3px]  bg-neutral-200 dark:bg-neutral-800'/>
              <div className='flex justify-between py-[15px]'>
                <h3>Total</h3>
                <h3>${cartArr.subtotal.raw}</h3>
              </div>
            </div>
            <Link to='/checkout'>
              <button className='w-[262px] h-[58px] my-6 outline-0 border-0 bg-blue-500 hover:bg-blue-400 py-4 px-2 text-white rounded-xl'>PROCEED TO CHECKOUT</button>
            </Link>
          </div>
          <div className='flex-1 text-xl font-semibold justify-end items-end text-right'>
            <p className=''>if you have a promo code, Enter Here</p>
            <div className='w-[504px] h-[58px] mt-[15px] pl-[20px] bg-neutral-200'>
              <input className='border-0 outline-0 bg-transparent text-xl w-[300px] h-[50px]' type='text' placeholder='Enter Promo Code' />
              <button className='w-[170px] h-[58px] text-xl bg-black text-white cursor-pointer'>Submit</button>
              
            </div>
            <div>
              <button onClick={onChangeEmptyCart} className='mt-[100px] w-[262px] h-[58px] my-6 outline-0 border-0 bg-red-500 hover:bg-red-400 py-4 px-2 text-white rounded-xl'>EMPTY CART</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}


export default CartProducts;