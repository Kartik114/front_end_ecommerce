import React from 'react'
import { products } from '../data/products';
import { useEffect } from 'react';
import { ProductComponent } from './ProductComponent';

export const AmazonContent = () => {
  // useEffect(() => {
  //   console.log('AmazonContent component mounted.');
  // }, []);

  return (
    <div className='main'>
        <div className='products-grid'>
          {products.map((product) =>(  
            <ProductComponent  product={product} key={product.id}/>)
          )
          }
           {/*implicit return */}
          </div>
    </div>
  );
}

