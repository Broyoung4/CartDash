import React from 'react';
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumbs = ({product}) => {
  return (
    <div className='flex justify-start items-center gap-2 text-gray-500 text-xl font-semibold capitalize'>
      <Link className='hover:text-black active:text-blue-500' to='/'>HOME</Link> <IoIosArrowForward /><Link to={-1}>{product.categories[0].slug}</Link><IoIosArrowForward />{product.title}
    </div>
  )
}

export default Breadcrumbs