import './App.css'
import React, { useContext } from "react"

import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { Home, Cart, Product, ShopCategory, Checkout } from './pages'
import { MyShopContext } from './context/MyShopContext';


export default function App() {
  const { cart,  handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart } = useContext<any>(MyShopContext);
  return (
    <section className='bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mens' element={<ShopCategory category='men' />} />
        <Route path='/womens' element={<ShopCategory category='women' />} />
        <Route path='/all' element={<ShopCategory category='all' />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout/>} />

      </Routes>

      <Footer />

    </section>
  )
}
