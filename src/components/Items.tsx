import React from 'react';
import { Link } from 'react-router-dom';

interface ItemsProps {
  key: string;
  title: string;
  imgSrc: string;
  price: string;
  id: string;
}

const Items: React.FC<ItemsProps> = ({ id, imgSrc, title, price }) => {
  return (
    <div className='flex flex-col rounded-md cursor-pointer h-[250px]  mx-auto'>
      <Link to={`/product/${id}`} className='relative block aspect-square h-full w-full'>
      <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
        <img src={imgSrc} alt='first shoe' className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105' />
        <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label lg:px-20 lg:pb-[35%]">
          <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
            <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{title}</h3>
            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">${price}
              <span className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div></div>
      </div>
    </Link>
    </div>
  );
};

export default Items;