import React, { useEffect, useState, useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { HashLoader } from 'react-spinners';
import ThreeGridItems from '../components/ThreeGridItems.tsx';
import itemsArr from '../utils/Items';
import { commerce } from '../lib/commerce';
import { MyShopContext } from '../context/MyShopContext';



const Home: React.FC = () => {
  const { itemsArray, cart } = useContext(MyShopContext);
  console.log(`HomeitemsArray: ${itemsArray}`)

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (itemsArray.length > 0 && cart) {
      setIsLoading(false);
    }
  }, [itemsArray]);
//   const [items, setItems] = useState<any>([]);

//   const getItems = async () => {
//     const { data } = await commerce.products.list();
//     setItems(data);
//   }

//   useEffect(()=> {
//     getItems();
//   },[])

// console.log(items);
  
  return (
    <section className='flex flex-col sm:px-10 sm:py-8 px-4 py-6 min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-12'>
        <h1 className='text-3xl font-bold'>Welcome to CartDash</h1>
        <p className='text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nibh vitae dictum laoreet, dolor lectus porta quam, et lacinia odio justo ac enim. Aenean sed justo a ipsum volutpat lacinia. Nulla facilisi. Sed sit amet libero nec enim dictum dictum. Donec at elit quis odio tincidunt suscipit. Nulla facilisi. Sed et felis ac nisl bibendum egestas at nec lectus.
        </p>
      </div>
      {isLoading ? (
        <div className='flex flex-col items-center justify-center gap-4 h-[90vh] px-4 w-full'>
          <HashLoader 
            color="#2563EB" 
            height={80} 
            width={80} 
            timeout={3000} // Adjust timeout if needed
          />


        </div>
) : (
      <ThreeGridItems items ={itemsArray}/>

) }
    </section>
  );
};

export default Home;