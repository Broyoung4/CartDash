import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


interface ThreeGridItemsProps {
  items: any[];
  handleItemClick: (item: any) => void;
}

const ThreeGridItems: React.FC<ThreeGridItemsProps> = ({items}) => {
  console.log(items);
  
  
  //return <div>Test</div>
  return (
    
      <div className='mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]'>
        <div className='md:col-span-4 md:row-span-2 rounded-md cursor-pointer'>
          <Link to={`/product/${items[0].id}`} className='relative block aspect-square h-full w-full'>
          <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
            <img src={items[0].image.url} alt='first shoe' className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105' />
            <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label lg:px-20 lg:pb-[35%]">
              <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{items[0].name}</h3>
                <p className="flex-none rounded-full bg-blue-600 p-2 text-white">${items[0].price.formatted_with_code}
                  <span className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div></div>
          </div>
        </Link>
        </div>
        {items.slice(1,3).map((item)=> (
          <div key={item.id} className='md:col-span-2 md:row-span-1  rounded-md cursor-pointer'>
            <Link className="relative block aspect-square h-full w-full" to={`/product/${item.id}`}>
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
              <img alt="Acme Drawstring Bag" className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" src={item.image.url} />
                <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                  <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                    <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{item.name}</h3>
                    <p className="flex-none rounded-full bg-blue-600 p-2 text-white">${item.price.formatted_with_code}
                      <span className="ml-1 inline hidden @[275px]/label:inline">USD</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ) )}
  
  
  
  
        {/* 
        <div className='md:col-span-2 md:row-span-1 border border-neutral-500 rounded-md cursor-pointer'>
          <a className="relative block aspect-square h-full w-full" href=""><div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
            <img alt="Acme Drawstring Bag" className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" src={Shoe2} /><div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label"><div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white"><h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Acme Drawstring Bag</h3><p className="flex-none rounded-full bg-blue-600 p-2 text-white">$12.00<span className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div></div></div></a></div>
  
  
        <div className='md:col-span-4 md:row-span-2 rounded-md cursor-pointer'>
          <a href='' className='relative block aspect-square h-full w-full'>
          <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
            <img src={Shoe1} alt='first shoe' className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105' />
            <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label lg:px-20 lg:pb-[35%]">
              <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Acme Circles T-Shirt</h3>
                <p className="flex-none rounded-full bg-blue-600 p-2 text-white">$20.00
                  <span className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div></div>
          </div>
        </a>
        </div>
        <div className='md:col-span-2 md:row-span-1 border border-neutral-500 rounded-md cursor-pointer'>
          <a className="relative block aspect-square h-full w-full" href="/product/acme-cup"><div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800"><img alt="Acme Cup" loading="lazy" decoding="async" data-nimg="fill" className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" src={Shoe5}/><div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label"><div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white"><h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Acme Cup</h3><p className="flex-none rounded-full bg-blue-600 p-2 text-white">$15.00<span className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div></div></div></a>
  
        </div>
  */}
      </div>
     
  )
}

export default ThreeGridItems;