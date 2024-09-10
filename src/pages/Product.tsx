import React, { useContext } from 'react';
import { MyShopContext } from '../context/MyShopContext';
import { useParams } from 'react-router-dom';
import {Breadcrumbs, ProductDisplay, DescriptionBox, RelatedProducts } from '../components';

const Product = () => {
  const {itemsArray} = useContext(MyShopContext);
  const {productId} = useParams();
  const product = itemsArray.find((e) => e.id === productId);
  return (
    <div className='mt-6 md:mt-8 sm:px-10 sm:py-8 px-4 py-6 min-h-screen overflow-hidden'>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product}/>
      {/* <DescriptionBox product={product}/> */}
      <RelatedProducts />
    </div>
  );
};

export default Product;