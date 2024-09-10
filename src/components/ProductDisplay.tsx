import React, {useState, useContext } from 'react';
import { FaRegStar, FaStar } from "react-icons/fa6";
import { MyShopContext } from '../context/MyShopContext';

interface ProductDisplayProps {
  product: {
    title: string;
    description: string;
    price: number;
    imgSrc: string;
    category: string;
  };
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  const [select, setSelect] = useState(" ");
  const {handleAddToCart} = useContext(MyShopContext);
  return (
    <div className="mt-12 flex flex-col md:flex-row px-2 gap-4">
      <div className='flex flex-col-reverse md:flex-row flex-1 md:gap-4 gap-8'>
        <div className='flex flex-row md:flex-col gap-2 overflow-x-scroll '>
          <div className=' p-2 rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800'>
            <img className='md:h-[140px] h-[70px] relative inset-0 object-fill' src={product.image.url} alt='' />
          </div>
          
          <img className='md:h-[140px] h-[70px]' src={product.image.url} alt='' />
          <img className='md:h-[140px] h-[70px]' src={product.image.url} alt='' />
          <img className='md:h-[140px] h-[70px]' src={product.image.url} alt='' />
        </div>
        <div>
          <img className='w-[586px] h-auto' src={product.image.url} alt='' />
          
        </div>
      </div>
      <div className='flex flex-1 flex-col  gap-4'>
        <h1 className='text-5xl font-bold'>{product.name}</h1>
        <div className='flex justify-start items-center gap-4'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <p>{122}</p>
        </div>
        <div className='w-[20px] flex items-center rounded-full border bg-white/70 p-1 md:text-xl text-xl font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
          <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>${product.price.formatted_with_code} </p>
        </div>
        <div>
          <p className='text-gray-500 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nibh vitae dictum laoreet, dolor lectus porta quam, et lacinia odio justo ac enim. Aenean sed justo a ipsum volutpat lacinia. Nulla facilisi. Sed sit amet libero nec enim dictum dictum. Donec at elit quis odio tincidunt suscipit. Nulla facilisi. Sed et felis ac nisl bibendum egestas at nec lectus.</p>
          {product.description}
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='capitalize font-semibold'>Select Size</h1>
          <div className='flex space-x-8'>
            <button onClick={() => setSelect('S') } className={`rounded-lg px-4 py-2 dark:bg-black/70 bg-white/70 outline-500 hover:border hover:border-blue-500 ${select=== "S" ? "border border-blue-500" : ""}`}>S</button>
            <button onClick={() => setSelect('M') } className={`rounded-lg px-4 py-2 dark:bg-black/70 bg-white/70 outline-500 hover:border hover:border-blue-500${select=== "M" ? "border border-blue-500" : ""}`}>M</button>
            <button  onClick={() => setSelect('L') } className={`rounded-lg px-4 py-2 dark:bg-black/70 bg-white/70 outline-500 hover:border hover:border-blue-500 ${select=== "L" ? "border border-blue-500" : ""}`}>L</button>
            <button  onClick={() => setSelect('XL') } className={`rounded-lg px-4 py-2 dark:bg-black/70 bg-white/70 outline-500 hover:border hover:border-blue-500 ${select=== "XL" ? "border border-blue-500" : ""}`}>XL</button>
          </div>
        </div> 
        <button onClick={()=>handleAddToCart(product.id, 1)} className='my-6 outline-0 bg-blue-500 hover:bg-blue-400 focus:bg-blue-900 py-4 px-2 text-white rounded-xl'>ADD TO CART</button>
        <p className='capitalize'><span className='font-bold'>Category : {' '}</span>{product.categories[0].slug}, Shoes</p>
        <p className='capitalize'><span className='font-bold'>Tags :{' '}</span>Modern, Exotic</p>
      </div>
    </div>
  );
};

export default ProductDisplay;