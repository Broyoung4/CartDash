import React, { useContext } from 'react';
import { MyShopContext } from '../context/MyShopContext';
import { IoMdArrowDropdown } from "react-icons/io";
import Items from '../components/Items';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const ShopCategory = ({category}) => {
  const {itemsArray} = useContext<any>(MyShopContext);
  return (
    <div className='flex flex-col md:flex-row gap-4 mx-auto mt-8 md:mt-12'>
      {/* <div className='fixed z-10  w-full px-2 py-3 rounded-md'>
        <Menu>
          <MenuButton className="w-full inline-flex items-center justify-between gap-2 rounded-md bg-gray-800 py-3 px-2 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            Options
            <IoMdArrowDropdown className='size-4 fill-white/60' />
          </MenuButton>
          <MenuItems
            transition
            anchor="bottom end"
            className="w-full origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                
                Edit
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                
                Duplicate
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
              </button>
            </MenuItem>
            <div className="my-1 h-px bg-white/5" />
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                
                Archive
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                
                Delete
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
          
        
      </div> */}
      <div className='grid md:grid-cols-3 grid-cols-1 w-full mt-10 justify-center mx-auto gap-6'>
        {itemsArray.map((item, i)=> {
         if (category === item.categories[0].slug) {
           return <Items key={`${item.name}_${i}`} id={item.id} title={item.name} imgSrc={item.image.url} price={item.price.formatted_with_code} />
         }else if (category === 'all') {
           return <Items key={`${item.name}_${i}`} id={item.id} title={item.name} imgSrc={item.image.url} price={item.price.formatted_with_code} />
         }
         else {
           return null;
         }
        } )}
      </div>
    </div>
  );
};

export default ShopCategory;