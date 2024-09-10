import React,{useContext} from 'react';
import Items from '../components/Items';
import { MyShopContext } from '../context/MyShopContext';

interface RelatedProductsProps {
  itemsArr: any [];
}

const RelatedProducts:React.FC = () => {
  const {itemsArray} = useContext(MyShopContext)
  //const product = itemsArray.filter((e) => e.id === productId);
  const handleMotion = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    
    
    <div className='flex flex-col items-center justify-center gap-4 h-[90vh] px-4 w-full'>
      <h1 className='text-2xl font-bold text-left'>Related Products</h1>
      <hr className='w-[200px] h-[7px] rounded-md bg-gray-500' />
      <div onClick={handleMotion} className='mt-[50px] flex justify-center gap-10 overflow-x-scroll w-full'>
        {itemsArray.map((item, i) => {
      if(item.categories[0].slug === 'women') {
          return <Items key={`${item.name}_${i}`} id={item.id} title={item.name} imgSrc={item.image.url} price={item.price.formatted_with_code}/>
              
      } else if (item.categories[0].slug === 'men') {
        return <Items key={`${item.name}_${i}`} id={item.id} title={item.name} imgSrc={item.image.url} price={item.price.formatted_with_code}/>
      } else {
        return null
      }
        })}
      </div>
    </div>
  );
}

export default RelatedProducts