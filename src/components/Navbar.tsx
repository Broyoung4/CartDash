import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { IoLogoSlack } from "react-icons/io";
import  NavLinks  from '../utils/NavLinks';
import { IoCartOutline } from "react-icons/io5";
  import Search, { SearchSkeleton } from './Search'; 
//const NavbarLinks = React.lazy(() => import('./NavbarLinks'));
import { HiBars3 } from "react-icons/hi2";
import MobileMenu from './Mobile-menu';
import MenuComp from './Mobile';
import { MyShopContext } from '../context/MyShopContext';

const Navbar = () => {
const [loading, setLoading] = useState(true);
const {cart} = useContext(MyShopContext);
const location = useLocation();

  useEffect(()=> {
    setLoading(false);
  },[cart])

  console.log(cart?.total_items);
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        {/* <MenuComp /> */}
        {/* <Suspense fallback={null}>
          <MobileMenu menu={NavLinks} />
        </Suspense> */}
        {/* <HiBars3 size={30} className="h-6 w-6 text-neutral-500 dark:text-white" /> */}
      </div>
      <div className='flex items-start justify-start text-left'>
        <Link to='/' className='flex items-center justify-center'>
          <IoLogoSlack size={40}/>
          <p className='text-xl font-bold ml-2'>CartDash</p>
        </Link>
      </div>
      {/********** Navbar Links **********/}
      <div className='sm:flex hidden'>
        <ul className='flex items-center justify-center space-x-10'>
          {NavLinks.map((link)=> (
            <li key={link.title}>
              <Link to={link.path} className='text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-800 dark:hover:text-neutral-100'>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/********** Search **********/}
      <div className="hidden justify-center md:flex md:w-1/3">
        <Suspense fallback={<SearchSkeleton />}>
          <Search />
        </Suspense>
      </div>


      {/********** Cart Button **********/}
      {location.pathname === '/cart' ? null : (
        <div className='group flex items-end justify-end space-x-4'>
          <Link to='/cart' className='flex items-center shadow-2xl px-4 py-3  border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800 rounded-xl '>
            <IoCartOutline size={20} className='group-hover:scale-110' />
            {cart?.total_items > 0 && 
           ( <div className='flex items-center justify-center text-red-600 rounded-full'>{cart.total_items}</div>)}
          </Link>
        </div>

      ) }
      
    </nav>
  )
}

export default Navbar